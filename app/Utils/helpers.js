import jsonp from 'jsonp';

function getPage() {
	return new Promise(function (resolve, reject) {
		jsonp(`https://en.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=revisions&rvprop=content&grnlimit=1&uselang=user/`, function (err, data) {
			if (err) {
				reject(Error(err));
			}
			resolve(data);
		});
	});
}

function parseText(data) {
	return new Promise(function (resolve, reject) {
		jsonp(`https://en.wikipedia.org/w/api.php?format=json&action=parse&text={data}`, function (err, newData) {
			if (err) {
				reject(Error(err));
			}
			resolve(newData);
		});
	});
}

export default function getPages() {
	return Promise.all([getPage(), getPage()]).then(function (arr) {
		var page0Key = Object.keys(arr[0].query.pages);
		var page1Key = Object.keys(arr[1].query.pages);
		return Promise.all([arr[0].query.pages[page0Key].revisions[0]['*'], arr[1].query.pages[page1Key].revisions[0]['*']]).then(function (parsedArr) {
			return ([
				{
					'title': arr[0].query.pages[page0Key].title,
					'content': parsedArr[0]
				}, {
					'title': arr[1].query.pages[page1Key].title,
					'content': parsedArr[1]
				}
			]);
		});
	});
}
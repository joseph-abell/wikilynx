import jsonp from 'jsonp';

function getPage() {
	return new Promise(function (resolve, reject) {
		jsonp(`https://en.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=revisions&grnlimit=1&uselang=user/`, function (err, data) {
			if (err) {
				reject(Error(err));
			}
			resolve(data);
		});
	});
}

function parseText(data) {
	return new Promise(function (resolve, reject) {
		jsonp('https://en.wikipedia.org/w/api.php?format=json&action=parse&page='+data+'&prop=text', function (err, newData) {
			if (err) {
				reject(Error(err));
			}
			resolve(newData.parse.text['*']);
		});
	});
}

export default function getPages() {
	return Promise.all([getPage(), getPage()]).then(function (arr) {
		var page0Key = Object.keys(arr[0].query.pages);
		var page1Key = Object.keys(arr[1].query.pages);

		return Promise.all([
			parseText(arr[0].query.pages[page0Key].title), 
			parseText(arr[1].query.pages[page1Key].title)
		]).then(function (parsedArr) {
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
import jsonp from 'jsonp';

function getPage() {
	return new Promise(function (resolve, reject) {
		jsonp(`https://en.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=revisions|images&rvprop=content&grnlimit=1&uselang=user/`, function (err, data) {
			if (err) {
				reject(Error(err));
			}
			resolve(data);
		});
	});
}

export default function getPages() {
	return Promise.all([getPage(), getPage()]).then(function (arr) {
		var page0Key = Object.keys(arr[0].query.pages);
		var page1Key = Object.keys(arr[1].query.pages);
		return [arr[0].query.pages[page0Key], arr[1].query.pages[page1Key]];
	});
}
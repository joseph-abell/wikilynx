import jsonp from 'jsonp';

export function getRandomName() {
	return new Promise(function (resolve, reject) {
		jsonp('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=revisions&grnlimit=1&uselang=user/', function (err, data) {
			if (err) {
				console.error(err);
				reject(Error(err));
			}
			console.log(data);
			resolve(data);
		});
	});
}

export function getContent() {
	return 'Page Content';
}

export default {
	getRandomName, 
	getContent
};
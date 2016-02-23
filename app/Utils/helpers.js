import jsonp from 'jsonp';

export default function getPages() {
	jsonp(`https://en.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=revisions|images&rvprop=content&grnlimit=2&uselang=user/`, function (err, data) {
		console.log('Data: ', data);
		return data;
	});
}
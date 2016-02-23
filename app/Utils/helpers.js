import axios from 'axios';

var toWiki = axios.create({
	headers: {
		"Origin": "http://gerbilsinspace.github.io",
		"Content-Type": "application/json; charset=UTF-8"
	}
});

function getPage() {
	return toWiki.get(`https://en.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=revisions|images&rvprop=content&grnlimit=1/https://en.wikipedia.org/w/api.php?format=jsonfm&action=query&generator=random&grnnamespace=0&prop=revisions|images&rvprop=content&grnlimit=1&uselang=user/`);
}

export default function getPages() {
	return toWiki.all([getPage(), getPage()])
		.then( (arr) => ({ firstPage: arr[0].data, secondPage: arr[1].data }));
}
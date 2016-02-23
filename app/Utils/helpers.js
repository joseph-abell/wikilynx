import axios from 'axios';

function getPage() {
	return axios.get(`https://en.wikipedia.org/w/api.php?format=jsonfm&action=query&generator=random&grnnamespace=0&prop=revisions|images&rvprop=content&grnlimit=1/https://en.wikipedia.org/w/api.php?format=jsonfm&action=query&generator=random&grnnamespace=0&prop=revisions|images&rvprop=content&grnlimit=1&uselang=user/`, {
		headers: {'API-User-Agent': 'Wikilynx/0.1', 'origin': 'http://gerbilsinspace.github.io' }
	});
}

export default function getPages() {
	return axios.all([getPage(), getPage()])
		.then( (arr) => ({ firstPage: arr[0].data, secondPage: arr[1].data }));
}
import axios from 'axios';

function getPage() {
	return axios({
		method: 'get',
		url: 'https://en.wikipedia.org/w/api.php',
		format: 'json',
		action: 'query',
		generator: 'random',
		grnamespace: 0,
		prop: 'revisions',
		rvprop: 'content',
		grnlimit: 1,
		useLang: 'user'
	});
}

export default function getPages() {
	return axios.all([getPage(), getPage()])
		.then( (arr) => ({ firstPage: arr[0].data, secondPage: arr[1].data }));
}
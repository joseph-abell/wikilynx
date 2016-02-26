import jsonp from 'jsonp';

const funcs = {
	getPageContent: function (generateRandom, title) {
		return new Promise(function (resolve, reject) {
			if (generateRandom) {
				jsonp('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=revisions&grnlimit=1&uselang=user/', function (err, data) {
					if (err) {
						reject(Error(err));
					}
					resolve(data);
				});	
			} else {
				jsonp('https://en.wikipedia.org/w/api.php?format=json&action=query&titles='+title+'&grnnamespace=0&prop=revisions&grnlimit=1&uselang=user/', function (err, data) {
					if (err) {
						reject(Error(err));
					}
					resolve(data);
				});
			}
		});
	},

	parseText: function (data) {
		return new Promise(function (resolve, reject) {
			jsonp('https://en.wikipedia.org/w/api.php?format=json&action=parse&page='+data+'&prop=text', function (err, newData) {
				if (err) {
					reject(Error(err));
				}

				var content = newData.parse.text['*'];
				content = content.replace(/(style="(.)*")/g, '');
				content = content.replace(/href="\/wiki\//g, 'data-url="');
				content = content.replace(/<span class="mw-editsection">/g, '<span class="mw-editsection" style="display: none">');
				resolve(content);
			});
		});
	},

	getPages: function () {
		var current = this;
		return Promise.all([current.getPageContent(true, ""), current.getPageContent(true, "")]).then(function (arr) {
			var page0Key = Object.keys(arr[0].query.pages);
			var page1Key = Object.keys(arr[1].query.pages);

			return Promise.all([
				current.parseText(arr[0].query.pages[page0Key].title), 
				current.parseText(arr[1].query.pages[page1Key].title)
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
	},

	getPage: function () {
		return true;
	}	
}


export default funcs;
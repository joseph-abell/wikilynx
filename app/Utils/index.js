export const cleanLinks = (links) => {
	let newLinks = [];
	for (var i = 0; i < links.length; i++) {
		let link = links[i]['*'];

		if (link.indexOf(':') == -1) {
			newLinks[newLinks.length] = {title: link};
		}
	}
	return newLinks;
};

export const cleanText = (text) => {
	text = text.replace(/style=\"[\s\S]*?\"/g, '');
	text = text.replace(/\<a[\s\S]*?\>/g, '');
	text = text.replace(/\<\/a\>/g, '');
	text = text.replace(/<span class="mw-editsection-bracket">[\s\S]*?[\[-\]][\s\S]*?<\/span>/g, '');
	text = text.replace(/<span class="mw-editsection">[\s\S]*?edit[\s\S]*?<\/span>/g, '');
	text = text.replace(/class=\"[\s\S]*?\"/g, '');
	return text;
};
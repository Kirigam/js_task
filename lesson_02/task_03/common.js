document.body.firstElementChild.onclick = () => {
	var p = document.createElement('p');
	p.innerHTML = 'PARAGRAPH';
	document.body.insertBefore(p, document.body.firstElementChild);
	var paragraphs = document.getElementsByTagName('p');

	if(paragraphs.length > 10) {
		console.log(paragraphs);
		for(var i = 0; i < 11; i++) {
			document.body.removeChild(document.body.firstElementChild);
		}
	}
};
/* __Module that uses an object__ 
var Module = {};
Module.replacingParagraphs = () => {
	var paragraphs  = document.getElementsByTagName('p');
	for(var i = 0; i < paragraphs.length; i++) {
		paragraphs[i].innerHTML = 'PARAGRAPH';
	}
} */

// __Module that uses an anonymous function__
(function() {
	var paragraphs  = document.getElementsByTagName('p');
	for(var i = 0; i < paragraphs.length; i++) {
		paragraphs[i].innerHTML = 'PARAGRAPH';
	}
})();
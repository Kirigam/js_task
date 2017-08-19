var buttons = document.getElementsByTagName('button');

function create(num) {
	var property = 'solid 1px rgb(0, 139, 139)';
	var element = 'a';

	return function() {
		if(num === 1) {
			property = 'solid 1px rgb(0, 250, 154)';
			element = 'p';
		} 
		if(num === 2) {
			property = 'solid 1px rgb(165, 42, 42)';
			return document.getElementById('test_div').style.border = property;
		}
		var selects = document.getElementsByTagName(element);
		for(var i = 0; i < selects.length; i++) {
			selects[i].style.border = property;
		}
	} // end function
}

buttons[0].addEventListener('click', create(0));
buttons[1].addEventListener('click', create(1));
buttons[2].addEventListener('click', create(2));

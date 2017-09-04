var input = document.getElementsByTagName('input');
input[3].onclick = function () {
	var login = input[0];
	var password = input[1]
	if(input[0].value === '') {
		input[0].style.borderColor = 'red';
	}
	if(input[1].value === '') {
		input[1].style.borderColor = 'red';
	}
}
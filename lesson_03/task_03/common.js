var buttons = document.getElementsByTagName('button');

var click = function(item, str, link) {
	var count = 0;
	var newWindow;

	return function () {
		if(count === 0) {
		count++;
		buttons[item].style.color = 'blue';
		buttons[item].innerHTML += '(closed)';
		newWindow = window.open(link, str, 'width=400,height=400');
	} else {
		count--;
		newWindow.close();
		buttons[item].style.color = '';
		buttons[item].innerHTML = str;
	}
	};
}

buttons[0].onclick = click(0, 'React', '../task_02/index.html');
buttons[1].onclick = click(1, 'Angular', '../task_02/index.html');
buttons[2].onclick = click(2, 'Vue', '../task_02/index.html');
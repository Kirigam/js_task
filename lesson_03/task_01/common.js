function Timer() {
	var hover = 0;
	var minute = 0;
	var second = 0;
	var ul = document.body.firstElementChild.children;
	var timerSecond, timerMinute, timerHover;	

	var format = function(item, count) {
		if(count < 10) {
			ul[item].innerHTML = '0' + count;
		} else if(count === 60) {
			ul[item].innerHTML = '00';
		} else {
			ul[item].innerHTML = count;
		}
	};
	this.start = () => {
		timerSecond = setInterval(() => {
			second++;
			format(2, second);
		},1000);
		timerMinute = setInterval(() => {
			minute++;
			second = 0;
			format(1, minute);
		}, 60000);
		timerHover = setInterval(() => {
			hover++;
			minute = 0;
			second = 0;
			format(0, hover);
		},360000);
	};
	this.stop = () => {
		clearInterval(timerSecond);
		clearInterval(timerMinute);
		clearInterval(timerHover);
	};
	this.reset = () => {
		this.stop();
		hover = 0;
		minute = 0;
		second = 0;
		ul[0].innerHTML = '00';
		ul[1].innerHTML = '00';
		ul[2].innerHTML = '00';
	}
};

var timer = new Timer();
var buttons = document.getElementsByTagName('button');
buttons[0].onclick = timer.start; 
buttons[1].onclick = timer.stop;
buttons[2].onclick = timer.reset;
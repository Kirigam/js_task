var search = document.location.search;

function add(argument) {
	var argument = argument.split('&');
	var sum = 0;
	for(var i = 0; i < argument.length; i++) {
		var index = argument[i].indexOf('=');
		sum += +argumente[i].substr(++index);
	}
	return document.write(sum);
}

add(search);

function Box() {
	if(arguments.length != 4) {
		return console.error('Передана не вірна кількість аргументів');
	} 
	for(var i = 0; i < arguments.length-1; i++) {
		if(typeof arguments[i] != 'number') {
			return console.error('Не вірно заданні W, H, D');
		} // end if
	} 
	if(typeof arguments[3] != 'string') {
		return console.error('Не вірно заданий матеріал');
	}
	
	this.heigth = arguments[0];
	this.width = arguments[1];
	this.depth = arguments[2]; 
	this.material  = arguments[3];
}

Box.prototype.volume = () => { 
	return this.heigth * this.width * this.depth; 
};
Box.prototype.eguals = function(otherObj) {
	if(this.heigth != otherObj.heigth) { return false; }
	if(this.width != otherObj.width) { return false; }
	if(this.depth != otherObj.depth) { return false; }
	if(this.material != otherObj.material) { return false; }
	
	return true; 
};

var box1 = new Box(10, 20, 6, 'polimer');
var box2 = new Box(10, 20, 6, 'polimer');

document.write(box1.eguals(box2));
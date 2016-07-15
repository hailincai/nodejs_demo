var styles = require("./main.css");

module.exports = function(){
	console.log(styles);
	var element = document.createElement('h1');

	element.innerHTML = 'Hello World3-1';

	element.className = styles.redButton;

	return element;
}
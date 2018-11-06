
/*
  Returns a color string in the form of "hsl(100, 50%, 50%)"
  For example, calling color(10, 100, 40);
  will return a string "hsl(10, 100%, 40%)"
*/
function hslColor(h, s, l) {
  var hue = h;
  var saturation = s + "%";
  var luminance = l + "%";

  var color = "hsl(" + hue + "," + saturation + "," + luminance + ")";

  return color;
}






/* TO DO */

// 1. Select container element
// 2. Add 200 divs with the class "shape" to container
// 3. Select all shape divs
// 4. Count how many there are
// 5. Iterate over shape divs to change style

for (var i = 0; i < 360; i++) {
	//create a div
	var shape = document.createElement('div');

	//add class "shape" to div
	shape.classList.add('shape');

	// select container div 
	var container = document.querySelector('.content');

	// add a div with a class "shape" to the container div
	container.append(shape);
}

//select all divs with class of shape
var shapes = document.querySelectorAll('.shape');

//loop over all of the shapes 
shapes.forEach(function(shape, i) {
	var percentage = i / 200 * 100;
	console.log(percentage);
		//what happens to each shape/element
	var color = hslColor(i + 100 / 3, percentage, percentage);
	shape.style.background = color; 
});












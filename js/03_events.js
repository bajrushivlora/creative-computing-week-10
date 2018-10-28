
/*
  Returns a random whole number between minimum value and maximum value
  For example, calling randomNumber(0, 255);
  will return a random whole number between 0 and 255.
  Source: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
*/
function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
  Returns a random floating point number between minimum value and maximum value
  For example, calling randomFloat(0, 1);
  will return a random floating between 0.0 and 1.0.
  Source: https://stackoverflow.com/questions/9724404/random-floating-point-double-in-inclusive-range
*/
function randomFloat (min, max) {
  var float = Math.random();
  var value;

  if (float < 0.5) {
    value = (1 - Math.random()) * (max-min) + min;
  } else {
    value = Math.random() * (max-min) + min;
  }

  return parseFloat(value.toFixed(2));
}

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



/*

TO DO:

1. Randomize shape width
2. Randomize shape height
3. Randomize shape color
4. Randomize background color
5. Randomize border color

*/

var shape = document.querySelector(".shape");

var width = randomNumber(150, 700);
var height = randomNumber(150, 1000);

shape.style.width = width + "px";
shape.style.height = height + "px";

var h1 = randomNumber(160, 180);
var h2 = randomNumber(180, 200);
var h3 = randomNumber(200, 220);

shape.style.background = hslColor(h1, 50, 50);
shape.style.borderColor = hslColor(h2, 50, 50);

var container = document.querySelector(".content");

container.style.background = hslColor(h3, 50, 50);




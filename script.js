// area of a circle: pi * radius to the power of 2

function getAreaOfCircle(radius) {
  return Math.PI * Math.pow(radius, 2);
}

console.log(getAreaOfCircle(4));

//circumference of a circle: 2 * pi * radius

function getCircumferenceOfCircle(radius) {
  return 2 * Math.PI * radius;
}

console.log(getCircumferenceOfCircle(3));

//area of a square: sideLength to the power of 2

function getAreaofSqaure(sideLength) {
  return Math.pow(sideLength, 2);
}

console.log(getAreaofSqaure(4));

//area of a triangle: 0.5 * base * height

function getAreaOfTriangle(base, height) {
  return 0.5 * base * height;
}

console.log(getAreaOfTriangle(5, 2));

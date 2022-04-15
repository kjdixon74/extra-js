// create a function area that will receive the radius value as a parameter and return the area of the circle.

//3.14 * (radius * radius )
//Math.pow(x, y)

const area = (radius) => {
  return 3.14 * Math.pow(radius, 2);
};

console.log(area(4));

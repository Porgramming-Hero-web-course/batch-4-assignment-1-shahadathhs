// * type Circle
type Circle = {
  shape: "circle";
  radius: number;
};

// * type Rectangle
type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

// * Union of Circle and Rectangle types
type Shape = Circle | Rectangle;

/**
 * Calculates the area of a given shape.
 * @param shape - A shape object which can be a Circle or Rectangle.
 * @returns The area of the shape.
 */
const calculateShapeArea = (shape: Shape): number => {
  // * Check if the shape is a circle
  if (shape.shape === "circle") {
    // * Calculate the area of the circle using the formula πr²
    return Math.PI * shape.radius ** 2;
  } else {
    // * Calculate the area of the rectangle using the formula width * height
    return shape.width * shape.height;
  }
};

// Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// Sample Output 1:
console.log(circleArea);

// Sample Input 2:
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

// Sample Output 2:
console.log(rectangleArea);
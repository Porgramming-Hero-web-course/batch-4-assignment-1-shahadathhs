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

// * Function to calculate the area of a shape (Circle or Rectangle)
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
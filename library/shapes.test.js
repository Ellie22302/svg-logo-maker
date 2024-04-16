const { Circle, Triangle, Square } = require("./shapes.js");

describe("Circle", () => {
  test(" Circle SVG", () => {
    const circle = new Circle("test", "test", "test");
    expect(circle.render()).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="150" cy="100" r="80" fill="test"/>
              <text x="150" y="115" font-size="60" text-anchor="middle" fill="test">test</text>
            </svg>`
    );
  });
});

describe("Triangle", () => {
  test("Triangle SVG", () => {
    const triangle = new Triangle("test", "test", "test");
    expect(triangle.render()).toEqual(
      `<svg version="1.1" width="300" height="200">
              <polygon points="150,45 300,300 0,300" fill="test"/>
              <text x="150" y="155" font-size="60" text-anchor="middle" fill="test">test</text>
            </svg>`
    );
  });
});

describe("Square", () => {
  test(" Square SVG", () => {
    const square = new Square("test", "test", "test");
    expect(square.render()).toEqual(
      `<svg version="1.1" width="300" height="200">
              <rect width="100%" height="100%" fill="test"/>
              <text x="150" y="120" font-size="60" text-anchor="middle" fill="test">test</text>
            </svg>`
    );
  });
});
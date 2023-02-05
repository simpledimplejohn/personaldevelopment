import Triangle from './../src/triangle.js';

describe('Triangle', () => {

  test('should correctly create a triangle object with three lengths', () => {
    const triangle = new Triangle(2,4,5);
    expect(triangle.side1).toEqual(2);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(5);
  });
});

describe('Triangle', () => {
  test('testing isTriangle function in constructor', () => {
    const notTriangle = new Triangle(3,9,22);
    expect(notTriangle.isTriangle).toEqual("not a triangle");

  }); 
});

describe('Triangle', () => {
  test('testing the function isIsosceles', () => {
    const isoscelesTriangle = new Triangle(3,3,3);
    expect(isoscelesTriangle.isIsosceles).toEqual("isosceles");
  })
})
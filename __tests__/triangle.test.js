import Triangle from './../src/triangle.js';

/*
Need the following:
is a triangle and is not a triangle 
*/


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
  test('testing isTriangle with a good triangle', () => {
    const notTriangle = new Triangle(3,4,5);
    expect(notTriangle.isTriangle).toEqual("this is a triangle");

  }); 
});


describe('Triangle', () => {
  test('testing the function isEquilateral', () => {
    const equilateralTriangle = new Triangle(3,3,3);
    expect(equilateralTriangle.isEquilateral).toEqual("equilateral");
  })
})

describe('triangle', () => {
  test('testing isEquilateral for not an Equilateral', () => {
    const notEquilateralTriangle = new Triangle(1,2,3);
    expect(notEquilateralTriangle.isEquilateral).toEqual("not equilateral");
  });
});

describe('triangle', () => {
  test('testing isScalene triangle works', () => {
    const notIsoscelesTriangle = new Triangle(1,2,3);
    expect(notIsoscelesTriangle.isScalene).toEqual("scalene");
  });
});
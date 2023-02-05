import Triangle from './../src/triangle.js';

/*
Need the following:
is a triangle and is not a triangle 
*/


describe('Triangle', () => {

  test('should correctly create a triangle object with three lengths', () => {
    const newTriangle = new Triangle(2,4,5);
    expect(newTriangle.side1).toEqual(2);
    expect(newTriangle.side2).toEqual(4);
    expect(newTriangle.side3).toEqual(5);
  });
});

describe('Triangle', () => {
  test('testing isTriangle function in constructor', () => {
    const newTriangle = new Triangle(3,9,22);
    expect(newTriangle.isTriangle).toEqual("not a triangle");

  }); 
});

describe('Triangle', () => {
  test('testing isTriangle with a good triangle', () => {
    const newTriangle = new Triangle(3,4,5);
    expect(newTriangle.isTriangle).toEqual("this is a triangle");

  }); 
});


describe('Triangle', () => {
  test('testing the function isEquilateral', () => {
    const newTriangle = new Triangle(3,3,3);
    expect(newTriangle.isEquilateral).toEqual("equilateral");
  })
})

describe('triangle', () => {
  test('testing isEquilateral for not an Equilateral', () => {
    const newTriangle = new Triangle(1,2,3);
    expect(newTriangle.isEquilateral).toEqual("not equilateral");
  });
});

describe('triangle', () => {
  test('testing isScalene triangle works', () => {
    const newTriangle = new Triangle(1,2,3);
    expect(newTriangle.isScalene).toEqual("scalene");
  });
});

describe('triangle', () => {
  test('testing isScalene triangle works', () => {
    const newTriangle = new Triangle(2,2,3);
    expect(newTriangle.isScalene).toEqual("not scalene");
  });
});

describe('triangle', () => {
  test('testing isIsosceles triangle works', () => {
    const newTriangle = new Triangle(2,2,3);
    expect(newTriangle.isIsosceles).toEqual("is isosceles");
  });
});

describe('triangle', () => {
  test('testing isIsosceles triangle for non isosceles', () => {
    const newTriangle = new Triangle(1,2,3);
    expect(newTriangle.isIsosceles).toEqual("is not isosceles");
  });
});
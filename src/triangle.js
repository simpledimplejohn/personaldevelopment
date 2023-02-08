/*
Working with classes, some questions
- how to run this from the console?  Do I need another file?
*/

export default class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }
  isTriangle() {
    if (    
    (this.side1 > (this.side2 + this.side3)) || 
    (this.side2 > (this.side1 + this.side3)) || 
    (this.side3 > (this.side1 + this.side2))
    ) {return  "not a triangle"
    } else {
      return "this is a triangle"
    }  
  }
  isEquilateral() {
    if  ((this.side1 == this.side2) 
    & (this.side1 === this.side3)
    & (this.side2 === this.side3)
    ) { return "equilateral" 
  } else { 
      return "not equilateral"
  }
  }
  isScalene() {
    if ((this.side1 !== this.side2) &
    (this.side1 !== this.side3) &
    (this.side2 !== this.side3))
    { return "scalene"
  } else {
    return "not scalene"
  }
  }
  isIsosceles() {
    if ((this.side1 === this.side2) ||
    (this.side2 === this.side3) ||
    (this.side1 === this.side3)) 
    {
      return "is isosceles"
    } else {
      return "is not isosceles"
    }
  }
}


  /*
this.isIsosceles = (
  (this.side1 === this.side2)  
  || (this.side2 === this.side3)
  || (this.side1 === this.side3)
  ) ? "is isosceles" : "is not isosceles";

*/

// This is the old fashion way of writing this: 
export default function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  this.isTriangle = (
    (this.side1 > (this.side2 + this.side3)) 
  || (this.side2 > (this.side1 + this.side3)) 
  || (this.side3 > (this.side1 + this.side2))) 
  ? "not a triangle" : "this is a triangle"; 
  // ternary operator means: condition ? true : fail
this.isEquilateral  = (
    (this.side1 == this.side2) 
  & (this.side1 === this.side3)
  & (this.side2 === this.side3))
  ? "equilateral" : "not equilateral";
this.isScalene = (
  (this.side1 != this.side2)
  & (this.side1 !== this.side3)
  & (this.side2 !== this.side3))
  ? "scalene" : "not scalene";
this.isIsosceles = (
  (this.side1 === this.side2)  
  || (this.side2 === this.side3)
  || (this.side1 === this.side3)
  ) ? "is isosceles" : "is not isosceles";
}

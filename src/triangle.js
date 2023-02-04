export default function Triangle(side1, side2, side3, height) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  this.isTriangle = ((this.side1 > (this.side2 + this.side3)) 
    || (this.side2 > (this.side1 + this.side3)) 
    || (this.side3 > (this.side1 + this.side2))) 
    ? "not a triangle" : "this is a triangle"; 
    // ternary operator means: condition ? true : fail
}

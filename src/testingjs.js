function Triangle(side1, side2, side3, height) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.isTriangle = ((this.side1 > (this.side2 + this.side3)) 
      || (this.side2 > (this.side1 + this.side3)) 
      || (this.side3 > (this.side1 + this.side2))) 
      ? "not a triangle" : "this is a triangle"; 
      // ternary operator means: condition ? true : fail
    this.isEquilateral  = ((this.side1 == this.side2) 
      & (this.side1 === this.side3)
      & (this.side2 === this.side3))
      ? "equilateral" : "not equilateral";
    this.isScalene = ((this.side1 != this.side2)
    & (this.side1 !== this.side3)
    & (this.side2 !== this.side3))
    ? "scalene" : "not scalene";
    this.isIsosceles = (
      (this.side1 === this.side2)  
    || (this.side2 === this.side3)
    || (this.side1 === this.side3)
    ) ? "is isosceles" : "is not isosceles";
}
const notTriangle = new Triangle(1,2,10);
const equilateral = new Triangle(3,3,3);
const isosceles = new Triangle(3,3,5);
const scalene = new Triangle(1,2,3);

console.log("testing isosceles, answer: <", isosceles.isIsosceles, "> CORRECT??");
console.log("testing isosceles, answer: <", notTriangle.isIsosceles, "> INCORRECT??");


// console.log("testing isTriangle, answer: <", notTriangle.isTriangle, ">");
// console.log("testing equilateral, answer: <", equilateral.isEquilateral, ">");
// console.log("testing equilateral, answer: <", notTriangle.isEquilateral, ">");
// console.log("\n");
// console.log("testing equilateral, answer: <", notTriangle.isEquilateral, ">");
// console.log("\n");
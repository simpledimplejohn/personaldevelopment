export default class Triangle {
    constructor(side1, side2, side3) {
      this.side1 = side1;
      this.side2 = side2;
      this.side3 = side3;
    }
    checkType() {
      if ((this.side1 > (this.side2 + this.side3)) || 
          (this.side2 > (this.side1 + this.side3)) ||
          (this.side3 > (this.side1 + this.side2))
          ) {
            return "this is not a triangle";
        } else if ((this.side1 !== this.side2) && (this.side1 !== this.side3) && (this.side2 !== this.side3)) { 
          return "this is a scalene triangle";
      } else {
        return "isosceles triangle"
      }
    }
  }
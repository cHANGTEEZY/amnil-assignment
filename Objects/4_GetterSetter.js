class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(newRadius) {
    if (typeof newRadius !== "number" || newRadius <= 0) {
      throw new Error("Radius must be a positive integer");
    }
    this._radius = newRadius;
  }

  get area() {
    return Math.PI * this.radius * this.radius;
  }
}

const myCircle = new Circle(5);

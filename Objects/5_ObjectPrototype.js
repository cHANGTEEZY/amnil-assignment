class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

Circle.prototype.area = function () {
  return Math.PI * this.radius * this.radius;
};

const circle = new Circle(5);
console.log(circle.area());

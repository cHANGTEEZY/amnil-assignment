// function Student(name, age, course) {
//   this.name = name;
//   this.age = age;
//   this.course = course;

//   this.introduce = function () {
//     console.log(
//       `Hi, my name is ${this.name}. I am ${this.age} years old and studying ${this.course}.`
//     );
//   };
// }

class Student {
  constructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;

    this.introduce = function () {
      console.log(
        `Hi, my name is ${this.name}. I am ${this.age} years old and studying ${this.course}.`
      );
    };
  }
}
const student1 = new Student("Sushank", 22, "BSc.CSIT");
const student2 = new Student("Samir", 21, "BE.CE");

student1.introduce();
student2.introduce();

//* A function inside an object is called methods

const cat = {
  type: "Animal",

  talk: function () {
    console.log("Meows");
  },
};

cat.talk();

//* this keyword is used in object to access the propeties of same object.

const exam = {
  passMark: 40,
  fullMark: 100,
  subject: "Mathematics",

  test: function () {
    console.log(
      `For ${this.subject} the Full marks was ${this.fullMark} and passMark was ${this.passMark}.`
    );
  },
};

exam.test();

//* adding method to an object

exam.rules = function () {
  console.log("The time limit for exam is 3 hours");
};

exam.rules();

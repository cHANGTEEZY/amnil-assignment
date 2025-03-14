function outerFunction() {
  console.log("Outer function ");

  function innerFunction() {
    console.log("Inner function ");

    function innermostFunction() {
      console.log("Innermost function ");
    }

    innermostFunction();
  }

  innerFunction();
}

outerFunction();

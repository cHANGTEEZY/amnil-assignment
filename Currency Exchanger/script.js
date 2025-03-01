import getAllInputData from "./modules/inputData.js";

const convert = document.getElementById("convert");

convert.addEventListener("click", () => {
  const inputData = getAllInputData();
  console.log(inputData);
});

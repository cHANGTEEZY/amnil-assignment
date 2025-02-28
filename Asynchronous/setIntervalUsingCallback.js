let intervalId1;
let count = 0;

const repeatingAction = () => {
  count++;
  console.log("Repeating action:", count);
  if (count >= 3) {
    clearInterval(intervalId1);
    console.log("Interval 1 stopped.");
  }
};

intervalId1 = setInterval(repeatingAction, 1000);

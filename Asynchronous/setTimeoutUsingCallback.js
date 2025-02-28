let timeoutId1;

const delayedGreeting = () => {
  console.log("Hello after 2 seconds!");
};

timeoutId1 = setTimeout(delayedGreeting, 2000);

clearTimeout(timeoutId1);
console.log("Timeout 1 cleared!");

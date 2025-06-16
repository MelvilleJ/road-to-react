function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => {
  console.log("3 seconds passed!");
});

console.log("This message is logged immediately.");
console.log("Waiting for 3 seconds...");
delay(1500).then(() => {
  console.log("This message is logged during the delay.");
});
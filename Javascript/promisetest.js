function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function fetchData(name) {
  return new Promise((resolve, reject) => {
    if (!name){
        reject(new Error("Name is required"));
    }else if (typeof name !== 'string') {
        reject(new Error("Name must be a string"));
    }else {
        console.log(`Fetching data for ${name}...`);
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
    }
  });
}

fetchData("John Doe")
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Error:", error.message);
  });


/*delay(3000).then(() => {
  console.log("3 seconds passed!");
});

console.log("This message is logged immediately.");
console.log("Waiting for 3 seconds...");
delay(1500).then(() => {
  console.log("This message is logged during the delay.");
});*/


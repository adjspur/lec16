const nums = [1, 2, 3, 4, 5, 6];

// nums.forEach((num) => {
//   console.log("here", num);
// });

// 🤔 What will this do?
// nums.forEach(log);

// 🤔 What would this look like with an arrow function?
// nums.forEach((num) => {
//   console.log(num);
// });

// ====================================================================

const orders = [
  {
    item: "canned hair",
    price: 120,
  },
  {
    item: "dried slather",
    price: 190,
  },
];

// 🤔 How could you discount each price so that it is 10% off its origina value?

// 🤔 How could we add a checkout-clerk name to each order?

// ====================================================================

// HOTEL CALIFORNIA TIME
// Say you're the kind of person who likes to break out of a for....

const otherNums = [3, 5, -1, 17, 0];

otherNums.forEach((num) => {
  if (num === -1) {
    return;
  } else {
    console.log(num);
  }
});

// This does something unexpected - it doesn't return!

let nums = [5, -13, 3, 3, 4, 2, 19];

function isEven(num) {
  return num % 2 === 0;
}

// 🤔 What will this do?
let result = nums.find(isEven);

let isEven2 = function (num) {
  return num % 2 === 0;
};

// 🤔 What will this do?
result = nums.find(isEven2);

// 🤔 How would you arrowfy it?

result = nums.find((num) => num % 2 === 0);

// -------------------------------------------------------

const hats = [
  {
    type: "top",
    adjective: "ostentatious",
  },
  {
    type: "beret",
    adjective: "brooding",
  },
  {
    type: "fedora",
    adjective: "adventurous",
  },
];

// 🤔 How would you find an "adventurous" hat?
let advHat = hats.find((hat) => hat.adjective === "adventurous");

// 🤔 What's going to happen here?

let nofindy = hats.find((hat) => hat.type === "bowler");
console.log(nofindy);

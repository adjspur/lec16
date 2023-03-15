let cats = [
  {
    name: "Prrfect",
    weight: 3,
  },
  {
    name: "Akebono",
    weight: 100,
  },
  {
    name: "Ms. Mrrp",
    weight: 12,
  },
  {
    name: "Nermal",
    weight: 10,
  },
];

// 🤔 How would you find all the cats that are "heavy"? Say over 10.
let heavy = cats.filter((cat) => cat.weight > 10);

// 🤔 How would you find all the cats that have weights between 4 and 10, inclusive?
// filtered = ??;

// 🤔 So are the results COPIES or not? Let's find out!
cats[1].meowTone = "irritating";
console.log(heavy);

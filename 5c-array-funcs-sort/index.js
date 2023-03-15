// 🧠 How could we sort these?
const colourNames = [
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Indigo",
  "Violet",
  "Unicorn",
];

// 🧠 How could we sort these?
const shoeSizes = [8, 12, 6.5, 11, 16, 9, 8];

function shoeComparator(shoeSize1, shoeSize2) {
  return shoeSize2 - shoeSize1;
}

let sortedShoeSizes = shoeSizes.sort(
  (shoeSize1, shoeSize2) => shoeSize1 - shoeSize2,
);
console.log("sorted shoes", sortedShoeSizes);

const adventurers = [
  {
    name: "Jampa",
    class: "Barbarian",
    level: 5,
    hp: 174,
    ac: 4,
  },
  {
    name: "Flame of the Evading Desert",
    class: "Rogue",
    level: 6,
    hp: 52,
    ac: 2,
  },
  {
    name: "Zog Mothra",
    class: "Wizard",
    level: 3,
    hp: 11,
    ac: 8,
  },
  {
    name: "Jassan",
    class: "Wizard",
    level: 5,
    hp: 23,
    ac: 7,
  },
];

function advComparator(adv1, adv2) {
  let diff = adv2.level - adv1.level;
  if (dif === 0) {
    return adv2.name.localeCompare(adv1.name);
  } else {
    return diff;
  }
}

// 🤔 How would you sort these by level ascending?
let sortedByLevelAsc = adventurers
  .sort((adv1, adv2) => adv2.level - adv1.level)
  .sort((adv1, adv2) => adv2.name.localeCompare(adv1.name));
console.log("sorted by level, asc:", sortedByLevelAsc);

// 🤔 How would you sort these by level DESCENDING?
let sortedByLevelDesc; // ??
console.log("sorted by level, desc:", sortedByLevelDesc);

// 🤔 How would you sort these by hp ascending?
let sortedByHpAsc; // ??
console.log("sorted by hp, asc:", sortedByHpAsc);

// 🤔 How would you sort these reverse alphabetical order by name?
// Look up localeCompare
let sortedByNameDesc; // ??
console.log("sorted by name, desc:", sortedByNameDesc);

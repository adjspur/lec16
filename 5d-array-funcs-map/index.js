let boringWords = ["sigh", "droop", "laze"];

// 🤔 What if we want to transform them into CAPITALIZED VERSIONS.
//    !!!!WITH EXCLAMATION MARKS!!!!

function excitify(word) {
  // 🤔 Can you do this with a string template? Try!
  return `!!!!${word.toUpperCase()}!!!!`;
}

let excitingWords = boringWords.map(excitify);
console.log(excitingWords);
console.log(boringWords);
// ------------------------------------------

const photos = [
  {
    title: "a droopy flower",
    location: {
      lat: 12,
      lon: 53,
    },
    photographer: "Ben Miels",
  },
  {
    title: "lazy day in the drain",
    location: {
      lat: -44,
      lon: 0,
    },
    photographer: "Roger Foreman",
  },
  {
    title: "sticky goo on my shoe",
    location: {
      lat: 31,
      lon: 135,
    },
    photographer: "Ben Miels",
  },
];

// 🤔 What if we just want an array of the titles?
let titles = photos.map((photo) => photo.title);
console.log("titles:", titles);

// 🤔 What if we wanted NEW objects composed of parts of the originals?
// Like this:
// {
//   artist: Ben Miels,
//   latLong: {lat: 31, lon: 135},
// }

let photographerLocations = photos.map((photo) => {
  return {
    artist: photo.photographer,
    hasBeenTo: photo.location,
  };
});

console.log("photolocs", photographerLocations);

// or - and this is an arrow function gotcha:

let photographerLocations = photos.map((photo) => ({
  artist: photo.photographer,
  hasBeenTo: photo.location,
}));

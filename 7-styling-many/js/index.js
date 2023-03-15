import { picData } from "../data/pic-data.js";
import { picsumImg } from "./helpers/picsum-helpers.js";

const picImgs = picData.map((pic) => picsumImg(pic));
document.querySelector("div").append(...picImgs);

const imgs = document.querySelectorAll("img");
for (let img of imgs) {
  img.classList.add("rounded");
}

let i = Array.from(imgs);
console.log(i.sort());

// 🤔 What's the difference between display: none vs visibility: hidden?

// 🤔 What function could you use to hide the images, using inline styles?

// 🤔 How would you do this using classes instead? What if you want to toggle things?

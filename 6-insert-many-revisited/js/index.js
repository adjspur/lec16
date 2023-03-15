import { picData } from "../data/pic-data.js";
import { picsumImg } from "./helpers/picsum-helpers.js";

// for (let pic of picData) {
//   let img = picsumImg(pic);
//   document.querySelector("div").append(img);
// }

let imgs = picData.map((pic) => picsumImg(pic));
document.querySelector("div").append(...imgs);

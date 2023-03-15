import { picData } from "../data/pic-data.js";
import { picsumImg } from "./helpers/picsum-helpers.js";
import { registerVisibilityToggler } from "./event-handling/visibility-toggler.js";

const picImgs = picData.map((pic) => picsumImg(pic));
document.querySelector("div").append(...picImgs);

registerVisibilityToggler();

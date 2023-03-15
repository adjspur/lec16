export function registerVisibilityToggler() {
  document.querySelector("button").addEventListener("click", () => {
    const imgs = document.querySelectorAll("img");
    for (const img of imgs) {
      img.classList.toggle("hidden");
    }
  });
}

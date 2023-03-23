
const header = document.querySelectorAll(".header");

header.forEach((header) => {
  header.addEventListener("click", () => {
    if (header.classList.contains("display")) {
      header.classList.remove("display");
    } else {
      const open = document.querySelectorAll(".display");
      open.forEach((open) => {
        open.classList.remove("display");
      });
      header.classList.add("display");
    }
  });
});
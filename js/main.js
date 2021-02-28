const printButton = document.getElementById("print-button");

printButton.addEventListener("click", () => {
  window.print();
});

const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", (e) => {
  const body = document.body;

  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");

    e.target.classList.remove("bx-moon");
    e.target.classList.add("bx-sun");
  } else {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");

    e.target.classList.remove("bx-sun");
    e.target.classList.add("bx-moon");
  }
});

document
  .querySelector(".switch-theme")
  .querySelector(
    `.switch-icon__${
      localStorage.key("theme") === null
        ? "dark"
        : localStorage.getItem("theme") === "dark"
        ? "light"
        : "dark"
    }`
  )
  .classList.add("hidden");

if (localStorage.key("theme") === null) {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("theme", "light");
} else {
  document.documentElement.setAttribute(
    "data-theme",
    localStorage.getItem("theme")
  );
}

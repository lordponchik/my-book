document.querySelector(".switch-theme").querySelector(`.switch-icon__${null===localStorage.key("theme")?"dark":"dark"===localStorage.getItem("theme")?"light":"dark"}`).classList.add("hidden"),null===localStorage.key("theme")?(document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("theme","light")):document.documentElement.setAttribute("data-theme",localStorage.getItem("theme"));//# sourceMappingURL=index.82111c25.js.map

//# sourceMappingURL=index.82111c25.js.map

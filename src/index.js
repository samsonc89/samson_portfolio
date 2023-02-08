import "./style.css";

import { projects, createProjectCard } from "./modules/projects";

import { toggleLocalStorageItem, toggleDarkClass } from "./modules/darkmode";

const toggleBtn = document.querySelector("#toggle-btn");
const scrollToTop = document.querySelector("#go-to-top");

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleLocalStorageItem();
  toggleDarkClass();
});

scrollToTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

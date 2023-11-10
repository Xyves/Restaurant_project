import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

document.addEventListener("DOMContentLoaded", () => {
  // Create home page
  home();
  // Add home, menu, contact eventListeners
  addClickListeners();

  function addClickListeners() {
    const Menu = document.querySelector(".menu");
    const Home = document.querySelector(".home");
    const Contact = document.querySelector(".contact");
    Home.addEventListener("click", () => {
      wipeContent(() => {
        console.log("home clicked");
        home();
        addClickListeners();
      });
    });
    Contact.addEventListener("click", () => {
      wipeContent(() => {
        console.log("contact clicked");
        contact();
        addClickListeners();
      });
    });
    Menu.addEventListener("click", () => {
      wipeContent(() => {
        console.log("menu clicked");
        menu();
        addClickListeners();
      });
    });
  }
  function wipeContent(callback) {
    const container = document.querySelector(".container");
    console.log("WIPED!");

    container.innerHTML = "";
    if (typeof callback === "function") {
      callback();
    }
  }
});

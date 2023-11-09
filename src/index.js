import home from "./home.js";
import menu from "./menu.js";
document.addEventListener("DOMContentLoaded", () => {
  console.log("1");
  home();
  const container = document.querySelector(".container");
  const Home = document.querySelector(".home");
  const Menu = document.querySelector(".menu");
  let pageState = "home"; // Initial state
  // const Contact = document.querySelector(".contact");
  const addEvents = () => {
    if (pageState == "home") {
      addHomeClick();
      addMenuClick();
    } else if (pageState == "menu") {
      addHomeClick();
      addMenuClick();
    }
  };
  function addHomeClick() {
    Home.addEventListener("click", () => {
      console.log("Home clicked");
      changeHome();
    });
  }
  function addMenuClick() {
    Menu.addEventListener("click", async () => {
      console.log("Menu clicked");
      await changeMenu();
      let pageState = "menu";
    });
  }
  const wipeContent = () => {
    console.log("WIPED!");
    container.innerHTML = "";
  };
  const changeMenu = async () => {
    console.log("Menu changed");
    wipeContent();
    await menu();
    addHomeClick();
  };
  const changeHome = async () => {
    wipeContent();
    await home();
    addHomeClick();
  };
});

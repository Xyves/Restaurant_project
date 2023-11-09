export default function () {
  createNav();
  createMain();
}
const container = document.querySelector(".container");
function createNav() {
  const nav = document.createElement("nav");
  nav.classList.add("nav-bar");
  const ul = document.createElement("ul");
  const menuItems = ["home", "menu", "contact"];

  // Logo
  const Logo = document.createElement("img");
  const logoBox = document.createElement("div");

  Logo.src = "../src/img/Jenos_logo.png";
  logoBox.classList.add("logo");
  for (let i = 0; i < menuItems.length; i++) {
    let li = document.createElement("li");
    li.classList.add(menuItems[i]);
    li.textContent = menuItems[i];
    ul.appendChild(li);
  }
  nav.appendChild(logoBox);
  logoBox.appendChild(Logo);
  container.appendChild(nav);
  nav.appendChild(ul);
}
function createMain() {
  const main = document.createElement("main");
  container.appendChild(main);
}

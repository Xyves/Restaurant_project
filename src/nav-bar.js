const container = document.querySelector(".bg-container");

export default function () {
  function createNav() {
    const menuItems = ["Home", "About", "Menu", "Gallery"];
    const urls = ["/dist/home", "/dist/about", "/dist/menu", "/dist/gallery"];
    const navBar = document.createElement("nav");
    const ul = document.createElement("ul");
    let Logo = document.createElement("img");
    const logoBox = document.createElement("div");
    const arrow = document.createElement("div");
    container.src = "src/img/pizza.jpg";
    Logo.src = "../src/img/Jenos_logo.png";

    Logo.classList.add();
    logoBox.classList.add("logo");
    arrow.classList.add("arrow");

    navBar.appendChild(logoBox);
    logoBox.appendChild(Logo);
    container.appendChild(navBar);
    navBar.appendChild(ul);

    container.appendChild(arrow);
    for (let i = 0; i < menuItems.length; i++) {
      let li = document.createElement("li");
      li.classList.add(menuItems[i]);
      let a = document.createElement("a");
      a.href = urls[i];
      a.textContent = menuItems[i];

      li.appendChild(a);
      ul.appendChild(li);
    }
    const icons = document.createElement("div");
    icons.classList.add("icons");
  }

  createNav();
}

const container = document.querySelector(".bg-container");

export default function generateAside() {
  function createNav() {
    const navBar = document.createElement("nav");
    const ul = document.createElement("ul");
    const home = document.createElement("li");
    const about = document.createElement("li");
    const menu = document.createElement("li");
    const gallery = document.createElement("li");
    let Logo = document.createElement("img");
    const logoBox = document.createElement("div");
    Logo.src = "../src/img/Jenos_logo.png";

    navBar.classList.add("h-1/4", "p-6", "m-full", "bg-orange-700", "text-4xl");
    ul.classList.add("flex", "justify-between", "block");
    home.classList.add("inline", "ml-25", "block", "p-1");
    about.classList.add("about", "mb-4", "inline", "block", "p-1");
    menu.classList.add("menu", "mb-4", "block", "p-1");
    gallery.classList.add("gallery", "block", "p-1");
    Logo.classList.add();
    logoBox.classList.add("py-0", "px-15", "w-20", "h-20");

    about.textContent = "about";
    menu.textContent = "menu";
    gallery.textContent = "gallery";
    home.textContent = "home";

    navBar.appendChild(logoBox);
    logoBox.appendChild(Logo);
    container.appendChild(navBar);
    navBar.appendChild(ul);
    ul.appendChild(home);
    ul.appendChild(about);
    ul.appendChild(menu);
    ul.appendChild(gallery);

    const icons = document.createElement("div");
    icons.classList.add("icons");
  }

  createNav();
}

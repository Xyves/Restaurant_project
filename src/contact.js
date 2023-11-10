export default function () {
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
      li.classList.add(menuItems[i], "tab");
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
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contactContainer");
    const formDiv = document.createElement("div");
    formDiv.setAttribute("id", "formDiv");

    container.appendChild(main);
    main.appendChild(contactContainer);
    const mainHeader = document.createElement("h1");
    mainHeader.textContent = "HOW CAN WE HELP YOU?";
    contactContainer.appendChild(mainHeader);
    const buttons = document.createElement("div");
    const btn1 = document.createElement("div");
    const btn2 = document.createElement("div");
    const btn3 = document.createElement("div");
    const btn4 = document.createElement("div");
    const btn5 = document.createElement("div");
    const btn6 = document.createElement("div");
    buttons.classList.add("contactButtons");

    btn1.classList.add("menu");
    btn2.classList.add("order");
    btn3.classList.add("payments");
    btn4.classList.add("promo");
    btn5.classList.add("settings");
    btn6.classList.add("About");
    btn1.textContent = "Our Menu";
    btn2.textContent = "Order";
    btn3.textContent = "Payments";
    btn4.textContent = "Actions & Promotions";
    btn5.textContent = "Profile Settings";
    btn6.textContent = "About us";
    contactContainer.appendChild(buttons);
    buttons.appendChild(btn1);
    buttons.appendChild(btn2);
    buttons.appendChild(btn3);
    buttons.appendChild(btn3);
    buttons.appendChild(btn4);
    buttons.appendChild(btn5);
    buttons.appendChild(btn6);
    const contactUs = document.createElement("h2");
    contactUs.textContent = "CONTACT US";

    contactContainer.appendChild(contactUs);
    contactContainer.appendChild(formDiv);
  }
  createNav();
  createMain();
}

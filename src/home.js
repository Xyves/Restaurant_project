export default function () {
  const container = document.querySelector(".container");
  const main = document.createElement("main");
  const mainPhoto = document.createElement("div");
  const pizzaImg = document.createElement("img");
  const textContainer = document.createElement("div");
  const lunchHeader = document.createElement("h2");
  const LimitedHeader = document.createElement("h2");

  function createNav() {
    const menuItems = ["home", "menu", "contact"];
    const navBar = document.createElement("nav");
    const ul = document.createElement("ul");
    navBar.classList.add("pizzabg");
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

    navBar.appendChild(logoBox);
    logoBox.appendChild(Logo);

    container.appendChild(navBar);
    navBar.appendChild(ul);
  }
  function createMain() {
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    const p5 = document.createElement("p");
    const p6 = document.createElement("p");
    const p7 = document.createElement("p");
    const p8 = document.createElement("p");
    const p9 = document.createElement("p");
    main.setAttribute("id", "mainHome");
    p2.classList.add("bold");
    p4.classList.add("special-mg");
    p5.classList.add("bold");
    p6.classList.add("bold");
    p7.classList.add("special-mg");
    p8.classList.add("bold");
    p9.classList.add("bold");

    p1.textContent = "2 slices of cheese pizza ";
    p2.textContent = "with a drink $4.60";
    p3.textContent = "+ taxes (toppings are extra)";
    p4.textContent = "Please see menu";
    p5.textContent = "1 Slice of cheese pizza with a small";
    p6.textContent = "house salad & a drink $6.50";
    p7.textContent = "+ taxes (Toppings are extra)";
    p8.textContent = "Available monday-saturday 11am-3pm";
    p9.textContent = "dine in or carry out only ";
    const buttonSpecials = document.createElement("button");
    buttonSpecials.textContent = "ALL SPECIALS";
    buttonSpecials.classList.add("specialButton");

    lunchHeader.textContent = "Lunch Specials";

    LimitedHeader.textContent = "Limited time offer";
    LimitedHeader.classList.add("lunchHeader2");
    pizzaImg.src = "../src/img/pizza2.jpg";
    lunchHeader.classList.add("lunchHeader");
    lunchHeader.textContent = "Lunch Specials";
    textContainer.classList.add("specialsOffer");
    mainPhoto.classList.add("pizzaPhoto");

    container.appendChild(main);
    main.appendChild(textContainer);
    main.appendChild(mainPhoto);
    mainPhoto.appendChild(pizzaImg);
    textContainer.appendChild(lunchHeader);
    textContainer.appendChild(p1);
    textContainer.appendChild(p2);
    textContainer.appendChild(p3);
    textContainer.appendChild(p4);
    textContainer.appendChild(p5);
    textContainer.appendChild(p6);
    textContainer.appendChild(p7);
    textContainer.appendChild(p8);
    textContainer.appendChild(p9);
    textContainer.appendChild(LimitedHeader);
    textContainer.appendChild(buttonSpecials);
  }
  createNav();
  createMain();
}

export default function () {
  const container = document.querySelector(".container");
  function createNav() {
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const menuItems = ["home", "menu", "contact"];
    const Logo = document.createElement("img");
    const logoBox = document.createElement("div");

    // Classlist
    nav.classList.add("nav-bar");
    logoBox.classList.add("logo");
    Logo.src = "./img/Jenos_logo.png";

    // Create navbar list
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
    const labels = ["name", "email"];
    const main = document.createElement("main");
    const contactContainer = document.createElement("div");
    const formContact = document.createElement("div");
    const formDiv = document.createElement("div");
    const contactUs = document.createElement("h2");
    const contactHeader = document.createElement("h2");
    const buttons = document.createElement("div");
    const btn1 = document.createElement("div");
    const btn2 = document.createElement("div");
    const btn3 = document.createElement("div");
    const btn4 = document.createElement("div");
    const btn5 = document.createElement("div");
    const btn6 = document.createElement("div");
    const mainHeader = document.createElement("h3");
    const form = document.createElement("form");
    const sendUsEmail = document.createElement("h4");
    const formSubmit = document.createElement("button");
    // Add classes & ids
    contactContainer.classList.add("contactContainer");
    formDiv.setAttribute("id", "formDiv");
    formContact.setAttribute("id", "formContact");
    contactHeader.classList.add("contactHeader");
    buttons.classList.add("contactButtons");
    btn1.classList.add("menu");
    btn2.classList.add("order");
    btn3.classList.add("payments");
    btn4.classList.add("promo");
    btn5.classList.add("settings");
    btn6.classList.add("About");
    sendUsEmail.classList.add("formHeader");
    formSubmit.setAttribute("id", "submitForm");
    formSubmit.addEventListener("click", (event) => {
      form.reset();
      event.preventDefault();
    });
    // Change text
    mainHeader.textContent = "HOW CAN WE HELP YOU?";
    btn1.textContent = "Our Menu";
    btn2.textContent = "Order";
    btn3.textContent = "Payments";
    btn4.textContent = "Actions & Promotions";
    btn5.textContent = "Profile Settings";
    btn6.textContent = "About us";
    contactUs.textContent = "CONTACT US";
    contactHeader.textContent = "Contact";
    sendUsEmail.textContent = "Send us an Email:";
    formSubmit.textContent = "SEND";

    // Append
    container.appendChild(main);
    main.appendChild(contactContainer);
    contactContainer.appendChild(contactUs);
    contactContainer.appendChild(buttons);
    buttons.appendChild(btn1);
    buttons.appendChild(btn2);
    buttons.appendChild(btn3);
    buttons.appendChild(btn3);
    buttons.appendChild(btn4);
    buttons.appendChild(btn5);
    buttons.appendChild(btn6);
    contactContainer.appendChild(mainHeader);
    formDiv.appendChild(contactHeader);
    contactContainer.appendChild(formDiv);
    formDiv.appendChild(formContact);
    formContact.appendChild(sendUsEmail);

    formContact.appendChild(form);
    for (let i = 0; i < labels.length; i++) {
      const label = document.createElement("label");
      const input = document.createElement("input");
      label.classList.add(labels[i] + "Label", "formElement");
      input.classList.add(labels[i] + "Input");
      input.setAttribute("placeholder", labels[i]);
      form.appendChild(label);
      form.appendChild(input);
      if (i == 1) {
        const textarea = document.createElement("textarea");
        textarea.setAttribute("placeholder", "Message");
        textarea.classList.add("formElement");
        form.appendChild(textarea);
      }
      formContact.appendChild(formSubmit);
    }
  }
  createNav();
  createMain();
}
{
  /* <form method="get">
  <label>
    Name:
    <input name="submitted-name" autocomplete="name" />
  </label>
  <button>Save</button>
</form> */
}

const container = document.querySelector(".container");
export default function () {
  const main = document.createElement("section");
  const textContainer = document.createElement("div");
  const mainPhoto = document.createElement("div");
  const pizzaImg = document.createElement("img");
  const textHeader = document.createElement("h2");

  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const p4 = document.createElement("p");
  const p5 = document.createElement("p");

  textHeader.textContent = "Lunch Specials";
  p1.textContent = "2 slices of cheese pizza with a drink $4.60";
  p2.textContent = "2 slices of cheese pizza with a drink $4.60";
  p3.textContent = "2 slices of cheese pizza with a drink $4.60";
  p4.textContent = "2 slices of cheese pizza with a drink $4.60";
  p5.textContent = "2 slices of cheese pizza with a drink $4.60";

  p2.classList.add("gray");
  p4.classList.add("graaay");
  textContainer.classList.add("textContainer");
  textHeader.textContent = "Lunch Specials";
  main.classList.add("section");
  textHeader.classList.add("mainHeader");
  pizzaImg.href = "sr";
  mainPhoto;
  container.appendChild(main);
  main.appendChild(textContainer);
  main.appendChild(mainPhoto);
  textContainer.appendChild(p1);
  textContainer.appendChild(p2);
  textContainer.appendChild(p3);
  textContainer.appendChild(p4);
  textContainer.appendChild(p5);
}

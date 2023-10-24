const container = document.querySelector(".container");
export default function () {
  const main = document.createElement("section");
  const mainText = document.createElement("div");
  const mainPhoto = document.createElement("div");
  const pizzaImg = document.createElement("img");
  const textHeader = document.createElement("h2");
  textHeader.textContent = "Lunch Specials";
  main.classList.add("section");
  textHeader.classList.add("mainHeader");
  pizzaImg.href = "sr";
  mainPhoto;
  container.appendChild(main);
  main.appendChild(mainText);
  main.appendChild(mainPhoto);
  mainText.appendChild(textHeader);
}

import navBar from "./nav-bar.js";
import main from "./main.js";

// home.addEventListener("click", () => {
//   console.log("hi", home);
// });
const customEvent = new Event("elementCreated");

document.dispatchEvent(customEvent);
const home = document.querySelector(".home");

document.addEventListener("DOMContentLoaded", async () => {
  await navBar();
  await main();
  document.addEventListener("elementCreated", function () {
    const home = document.querySelector("home");
    console.log(home, "XD");
  });
});

console.log("123");
import navBar from "./nav-bar.js";
import main from "./main.js";
document.body.onload = loadDom();
function loadDom() {
  navBar();
  main();
  // createSection();
}

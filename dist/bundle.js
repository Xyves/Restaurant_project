(() => {
  "use strict";
  const e = document.querySelector(".bg-container"),
    t = document.querySelector(".container");
  console.log("123"),
    (document.body.onload =
      ((function () {
        const t = ["Home", "About", "Menu", "Gallery"],
          n = ["/dist/home", "/dist/about", "/dist/menu", "/dist/gallery"],
          d = document.createElement("nav"),
          c = document.createElement("ul");
        let a = document.createElement("img");
        const i = document.createElement("div"),
          l = document.createElement("div");
        (e.src = "src/img/pizza.jpg"),
          (a.src = "../src/img/Jenos_logo.png"),
          a.classList.add(),
          i.classList.add("logo"),
          l.classList.add("arrow"),
          d.appendChild(i),
          i.appendChild(a),
          e.appendChild(d),
          d.appendChild(c),
          e.appendChild(l);
        for (let e = 0; e < t.length; e++) {
          let d = document.createElement("li");
          d.classList.add(t[e]);
          let a = document.createElement("a");
          (a.href = n[e]),
            (a.textContent = t[e]),
            d.appendChild(a),
            c.appendChild(d);
        }
        document.createElement("div").classList.add("icons");
      })(),
      void (function () {
        const e = document.createElement("section"),
          n = document.createElement("div"),
          d = document.createElement("div"),
          c = document.createElement("img"),
          a = document.createElement("h2"),
          i = document.createElement("p"),
          l = document.createElement("p"),
          s = document.createElement("p"),
          o = document.createElement("p"),
          m = document.createElement("p");
        (a.textContent = "Lunch Specials"),
          (i.textContent = "2 slices of cheese pizza with a drink $4.60"),
          (l.textContent = "2 slices of cheese pizza with a drink $4.60"),
          (s.textContent = "2 slices of cheese pizza with a drink $4.60"),
          (o.textContent = "2 slices of cheese pizza with a drink $4.60"),
          (m.textContent = "2 slices of cheese pizza with a drink $4.60"),
          l.classList.add("grey"),
          o.classList.add("grey"),
          n.classList.add("textContainer"),
          (a.textContent = "Lunch Specials"),
          e.classList.add("section"),
          a.classList.add("mainHeader"),
          (c.href = "sr"),
          t.appendChild(e),
          e.appendChild(n),
          e.appendChild(d),
          n.appendChild(i),
          n.appendChild(l),
          n.appendChild(s),
          n.appendChild(o),
          n.appendChild(m);
      })()));
})();

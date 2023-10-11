(() => {
  "use strict";
  const e = document.querySelector(".bg-container"),
    t = document.querySelector(".bg-container");
  console.log("123"),
    (document.body.onload =
      ((function () {
        const t = document.createElement("nav"),
          n = document.createElement("ul"),
          l = document.createElement("li"),
          d = document.createElement("li"),
          c = document.createElement("li"),
          o = document.createElement("li");
        let a = document.createElement("img");
        const s = document.createElement("div");
        (a.src = "../src/img/Jenos_logo.png"),
          t.classList.add(
            "h-1/4",
            "p-6",
            "m-full",
            "bg-orange-700",
            "text-4xl"
          ),
          n.classList.add("flex", "justify-between", "block"),
          l.classList.add("inline", "ml-25", "block", "p-1"),
          d.classList.add("about", "mb-4", "inline", "block", "p-1"),
          c.classList.add("menu", "mb-4", "block", "p-1"),
          o.classList.add("gallery", "block", "p-1"),
          a.classList.add(),
          s.classList.add("py-0", "px-15", "w-20", "h-20"),
          (d.textContent = "about"),
          (c.textContent = "menu"),
          (o.textContent = "gallery"),
          (l.textContent = "home"),
          t.appendChild(s),
          s.appendChild(a),
          e.appendChild(t),
          t.appendChild(n),
          n.appendChild(l),
          n.appendChild(d),
          n.appendChild(c),
          n.appendChild(o),
          document.createElement("div").classList.add("icons");
      })(),
      void (function () {
        const e = document.createElement("section");
        t.appendChild(e);
      })()));
})();

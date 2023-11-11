(() => {
  "use strict";
  function e() {
    const e = document.querySelector(".container"),
      t = document.createElement("main"),
      n = document.createElement("div"),
      d = document.createElement("img"),
      a = document.createElement("div"),
      c = document.createElement("h2"),
      l = document.createElement("h2");
    !(function () {
      const t = ["home", "menu", "contact"],
        n = document.createElement("nav"),
        d = document.createElement("ul");
      n.classList.add("pizzabg");
      const a = document.createElement("img"),
        c = document.createElement("div");
      (a.src = "./img/Jenos_logo.png"), c.classList.add("logo");
      for (let e = 0; e < t.length; e++) {
        let n = document.createElement("li");
        n.classList.add(t[e], "tab"), (n.textContent = t[e]), d.appendChild(n);
      }
      n.appendChild(c), c.appendChild(a), e.appendChild(n), n.appendChild(d);
    })(),
      (function () {
        const o = document.createElement("p"),
          i = document.createElement("p"),
          s = document.createElement("p"),
          m = document.createElement("p"),
          p = document.createElement("p"),
          r = document.createElement("p"),
          u = document.createElement("p"),
          C = document.createElement("p"),
          h = document.createElement("p");
        t.setAttribute("id", "mainHome"),
          i.classList.add("bold"),
          m.classList.add("special-mg"),
          p.classList.add("bold"),
          r.classList.add("bold"),
          u.classList.add("special-mg"),
          C.classList.add("bold"),
          h.classList.add("bold"),
          (o.textContent = "2 slices of cheese pizza "),
          (i.textContent = "with a drink $4.60"),
          (s.textContent = "+ taxes (toppings are extra)"),
          (m.textContent = "Please see menu"),
          (p.textContent = "1 Slice of cheese pizza with a small"),
          (r.textContent = "house salad & a drink $6.50"),
          (u.textContent = "+ taxes (Toppings are extra)"),
          (C.textContent = "Available monday-saturday 11am-3pm"),
          (h.textContent = "dine in or carry out only ");
        const E = document.createElement("button");
        (E.textContent = "ALL SPECIALS"),
          E.classList.add("specialButton"),
          (c.textContent = "Lunch Specials"),
          (l.textContent = "Limited time offer"),
          l.classList.add("lunchHeader2"),
          (d.src = "./img/pizza2.jpg"),
          c.classList.add("lunchHeader"),
          (c.textContent = "Lunch Specials"),
          a.classList.add("specialsOffer"),
          n.classList.add("pizzaPhoto"),
          e.appendChild(t),
          t.appendChild(a),
          t.appendChild(n),
          n.appendChild(d),
          a.appendChild(c),
          a.appendChild(o),
          a.appendChild(i),
          a.appendChild(s),
          a.appendChild(m),
          a.appendChild(p),
          a.appendChild(r),
          a.appendChild(u),
          a.appendChild(C),
          a.appendChild(h),
          a.appendChild(l),
          a.appendChild(E);
      })();
  }
  const t = document.querySelector(".container");
  document.addEventListener("DOMContentLoaded", () => {
    function n(e) {
      const t = document.querySelector(".container");
      console.log("WIPED!"), (t.innerHTML = ""), "function" == typeof e && e();
    }
    e(),
      (function d() {
        const a = document.querySelector(".menu"),
          c = document.querySelector(".home"),
          l = document.querySelector(".contact");
        c.addEventListener("click", () => {
          n(() => {
            console.log("home clicked"), e(), d();
          });
        }),
          l.addEventListener("click", () => {
            n(() => {
              console.log("contact clicked"),
                (function () {
                  const e = document.querySelector(".container");
                  !(function () {
                    const t = document.createElement("nav"),
                      n = document.createElement("ul"),
                      d = ["home", "menu", "contact"],
                      a = document.createElement("img"),
                      c = document.createElement("div");
                    t.classList.add("nav-bar"),
                      c.classList.add("logo"),
                      (a.src = "./img/Jenos_logo.png");
                    for (let e = 0; e < d.length; e++) {
                      let t = document.createElement("li");
                      t.classList.add(d[e], "tab"),
                        (t.textContent = d[e]),
                        n.appendChild(t);
                    }
                    t.appendChild(c),
                      c.appendChild(a),
                      e.appendChild(t),
                      t.appendChild(n);
                  })(),
                    (function () {
                      const t = ["name", "email"],
                        n = document.createElement("main"),
                        d = document.createElement("div"),
                        a = document.createElement("div"),
                        c = document.createElement("div"),
                        l = document.createElement("h2"),
                        o = document.createElement("h2"),
                        i = document.createElement("div"),
                        s = document.createElement("div"),
                        m = document.createElement("div"),
                        p = document.createElement("div"),
                        r = document.createElement("div"),
                        u = document.createElement("div"),
                        C = document.createElement("div"),
                        h = document.createElement("h3"),
                        E = document.createElement("form"),
                        L = document.createElement("h4"),
                        g = document.createElement("button");
                      d.classList.add("contactContainer"),
                        c.setAttribute("id", "formDiv"),
                        a.setAttribute("id", "formContact"),
                        o.classList.add("contactHeader"),
                        i.classList.add("contactButtons"),
                        s.classList.add("menu"),
                        m.classList.add("order"),
                        p.classList.add("payments"),
                        r.classList.add("promo"),
                        u.classList.add("settings"),
                        C.classList.add("About"),
                        L.classList.add("formHeader"),
                        g.setAttribute("id", "submitForm"),
                        g.addEventListener("click", (e) => {
                          E.reset(), e.preventDefault();
                        }),
                        (h.textContent = "HOW CAN WE HELP YOU?"),
                        (s.textContent = "Our Menu"),
                        (m.textContent = "Order"),
                        (p.textContent = "Payments"),
                        (r.textContent = "Actions & Promotions"),
                        (u.textContent = "Profile Settings"),
                        (C.textContent = "About us"),
                        (l.textContent = "CONTACT US"),
                        (o.textContent = "Contact"),
                        (L.textContent = "Send us an Email:"),
                        (g.textContent = "SEND"),
                        e.appendChild(n),
                        n.appendChild(d),
                        d.appendChild(l),
                        d.appendChild(i),
                        i.appendChild(s),
                        i.appendChild(m),
                        i.appendChild(p),
                        i.appendChild(p),
                        i.appendChild(r),
                        i.appendChild(u),
                        i.appendChild(C),
                        d.appendChild(h),
                        c.appendChild(o),
                        d.appendChild(c),
                        c.appendChild(a),
                        a.appendChild(L),
                        a.appendChild(E);
                      for (let e = 0; e < t.length; e++) {
                        const n = document.createElement("label"),
                          d = document.createElement("input");
                        if (
                          (n.classList.add(t[e] + "Label", "formElement"),
                          d.classList.add(t[e] + "Input"),
                          d.setAttribute("placeholder", t[e]),
                          E.appendChild(n),
                          E.appendChild(d),
                          1 == e)
                        ) {
                          const e = document.createElement("textarea");
                          e.setAttribute("placeholder", "Message"),
                            e.classList.add("formElement"),
                            E.appendChild(e);
                        }
                        a.appendChild(g);
                      }
                    })();
                })(),
                d();
            });
          }),
          a.addEventListener("click", () => {
            n(() => {
              console.log("menu clicked"),
                (function () {
                  const e = document.createElement("nav");
                  e.classList.add("nav-bar");
                  const n = document.createElement("ul"),
                    d = ["home", "menu", "contact"],
                    a = document.createElement("img"),
                    c = document.createElement("div");
                  (a.src = "./img/Jenos_logo.png"), c.classList.add("logo");
                  for (let e = 0; e < d.length; e++) {
                    let t = document.createElement("li");
                    t.classList.add(d[e], "tab"),
                      (t.textContent = d[e]),
                      n.appendChild(t);
                  }
                  e.appendChild(c),
                    c.appendChild(a),
                    t.appendChild(e),
                    e.appendChild(n);
                })(),
                (function () {
                  const e = document.createElement("main");
                  t.appendChild(e);
                  const n = document.createElement("div");
                  n.setAttribute("id", "menu"),
                    t.appendChild(e),
                    e.appendChild(n);
                  const d = document.createElement("img");
                  (d.src = "./img/menu.jpg"), n.appendChild(d);
                })(),
                d();
            });
          });
      })();
  });
})();

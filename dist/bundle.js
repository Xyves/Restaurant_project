(()=>{"use strict";const e=document.querySelector(".container"),t=document.createElement("div");t.classList.add("bg-container");const n=new Event("elementCreated");document.dispatchEvent(n),document.querySelector(".home"),document.addEventListener("DOMContentLoaded",(async()=>{await void function(){const n=["Home","Menu","Contact"],d=document.createElement("nav"),a=document.createElement("ul");let c=document.createElement("img");const l=document.createElement("div");t.src="src/img/pizza.jpg",c.src="../src/img/Jenos_logo.png",c.classList.add(),l.classList.add("logo"),d.appendChild(l),l.appendChild(c),e.appendChild(t),t.appendChild(d),d.appendChild(a);for(let e=0;e<n.length;e++){let t=document.createElement("li");t.classList.add(n[e]),t.textContent=n[e],a.appendChild(t)}const o=n[0];console.log(o),document.createElement("div").classList.add("icons")}(),await async function(){const e=document.createElement("main"),t=document.querySelector(".container"),n=document.createElement("div"),d=document.createElement("img"),a=document.createElement("div"),c=document.createElement("h2"),l=document.createElement("h2"),o=document.createElement("p"),s=document.createElement("p"),i=document.createElement("p"),m=document.createElement("p"),p=document.createElement("p"),r=document.createElement("p"),u=document.createElement("p"),C=document.createElement("p"),h=document.createElement("p"),E=document.createElement("button");E.textContent="ALL SPECIALS",o.classList.add("bold"),s.classList.add("bold"),m.classList.add("special-mg"),p.classList.add("bold"),r.classList.add("bold"),u.classList.add("special-mg"),C.classList.add("bold"),h.classList.add("bold"),E.classList.add("specialButton"),c.textContent="Lunch Specials",o.textContent="2 slices of cheese pizza ",s.textContent="with a drink $4.60",i.textContent="+ taxes (toppings are extra)",m.textContent="Please see menu",p.textContent="1 Slice of cheese pizza with a small",r.textContent="house salad & a drink $6.50",u.textContent="+ taxes (Toppings are extra)",C.textContent="Available monday-saturday 11am-3pm",h.textContent="dine in or carry out only ",l.textContent="Limited time offer",l.classList.add("lunchHeader2"),d.src="../src/img/pizza2.jpg",c.classList.add("lunchHeader"),c.textContent="Lunch Specials",a.classList.add("specialsOffer"),n.classList.add("pizzaPhoto"),t.appendChild(e),e.appendChild(a),e.appendChild(n),n.appendChild(d),a.appendChild(c),a.appendChild(o),a.appendChild(s),a.appendChild(i),a.appendChild(m),a.appendChild(p),a.appendChild(r),a.appendChild(u),a.appendChild(C),a.appendChild(h),a.appendChild(l),a.appendChild(E)}(),document.addEventListener("elementCreated",(function(){const e=document.querySelector("home");console.log(e,"XD")}))}))})();
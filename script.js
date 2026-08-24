const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();
/* ================================
   15% OFF PROMO POPUP
   ================================ */

const promoOverlay = document.getElementById("promoOverlay");
const promoClose = document.getElementById("promoClose");
const promoNoThanks = document.getElementById("promoNoThanks");
const promoClaim = document.getElementById("promoClaim");

function closePromo() {
  promoOverlay.classList.remove("show");

  localStorage.setItem(
    "mgPromoClosed",
    Date.now()
  );
}

function shouldShowPromo() {

  const lastClosed =
    localStorage.getItem("mgPromoClosed");

  if (!lastClosed) {
    return true;
  }

  const threeDays =
    3 * 24 * 60 * 60 * 1000;

  return
    Date.now() - Number(lastClosed) > threeDays;
}

window.addEventListener("load", () => {

  setTimeout(() => {

    if (shouldShowPromo()) {
      promoOverlay.classList.add("show");
    }

  }, 1800);

});

promoClose.addEventListener(
  "click",
  closePromo
);

promoNoThanks.addEventListener(
  "click",
  closePromo
);

promoClaim.addEventListener(
  "click",
  () => {

    promoOverlay.classList.remove("show");

    localStorage.setItem(
      "mgPromoClosed",
      Date.now()
    );

  }
);

promoOverlay.addEventListener(
  "click",
  event => {

    if (event.target === promoOverlay) {
      closePromo();
    }

  }
);

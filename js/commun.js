/* =================================================
   VERDURE – commun.js
   Chargé sur toutes les pages, après plantes.js et AVANT
   le script de la page.
   ================================================= */

/* ---------- Outils fournis ---------- */

/**
 * Formate un prix : euros(24.9) renvoie "24,90 €"
 * @param {number} nombre
 * @returns {string}
 */
function euros(nombre) {
  return Number(nombre).toFixed(2).replace(".", ",") + " €";
}

/**
 * Lit l'id dans l'adresse de la page.
 * Sur plante.html?id=3, idDansURL() renvoie le nombre 3.
 * @returns {number}
 */
function idDansURL() {
  return Number(new URLSearchParams(location.search).get("id"));
}

/* ---------- Code commun (Défi J03) ---------- */
// Le bouton #bouton-theme bascule la classe 'sombre' sur <body>
const boutonTheme = document.querySelector("#bouton-theme");
if (boutonTheme) {
  boutonTheme.addEventListener("click", () => {
    document.body.classList.toggle("sombre");
    const estSombre = document.body.classList.contains("sombre");
    boutonTheme.textContent = estSombre ? "Mode clair" : "Thème sombre";
  });
}

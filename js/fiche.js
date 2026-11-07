/* =================================================
   VERDURE – fiche.js
   Page plante.html : la fiche d'une plante, choisie par l'URL.
   Défi : J05
   ================================================= */

const id = idDansURL();
const plante = (typeof plantes !== "undefined" && Array.isArray(plantes))
  ? plantes.find(p => p.id === id)
  : null;

if (plante) {
  const nomEl = document.querySelector("#plante-nom");
  const prixEl = document.querySelector("#plante-prix");
  const latinEl = document.querySelector("#plante-latin");
  const difficulteEl = document.querySelector("#plante-difficulte");
  const lumiereEl = document.querySelector("#plante-lumiere");
  const arrosageEl = document.querySelector("#plante-arrosage");
  const descriptionEl = document.querySelector("#plante-description");
  const imageEl = document.querySelector("#plante-image");

  if (nomEl) nomEl.textContent = plante.nom;
  if (prixEl) prixEl.textContent = euros(plante.prix);
  if (latinEl) latinEl.textContent = plante.nomLatin || "";
  if (difficulteEl) {
    difficulteEl.textContent = "Niveau : " + (plante.difficulte.charAt(0).toUpperCase() + plante.difficulte.slice(1));
  }
  if (lumiereEl) {
    lumiereEl.textContent = "Exposition : " + (plante.lumiere || "");
  }
  if (arrosageEl) {
    arrosageEl.textContent = "Arrosage : " + (plante.arrosage || "");
  }
  if (descriptionEl) descriptionEl.textContent = plante.description || "";
  if (imageEl && plante.couleur) {
    imageEl.style.backgroundColor = plante.couleur;
  }
}

/* =================================================
   VERDURE – accueil.js
   Page index.html : catalogue, recherche, filtre, panier.
   Défis : J01, J02, J04, J06, J07, J08, J09, J10, J13
   ================================================= */

const nbPlantesEl = document.querySelector("#nb-plantes");
const catalogueEl = document.querySelector("#catalogue");
const rechercheInput = document.querySelector("#recherche");
const filtreSelect = document.querySelector("#filtre-difficulte");
const panierLignes = document.querySelector("#panier-lignes");
const compteurPanier = document.querySelector("#compteur-panier");
const panierTotal = document.querySelector("#panier-total");
const boutonVider = document.querySelector("#vider-panier");

if (catalogueEl && typeof plantes !== "undefined") {

  /* ---------- Défi J01 : Afficher le nombre total de plantes ---------- */
  if (nbPlantesEl) {
    nbPlantesEl.textContent = `${plantes.length} plantes`;
  }

  /* ---------- Gestion du Panier (Défis J06, J07, J10, J13) ---------- */
  function actualiserPanier() {
    const lignes = Array.from(panierLignes.querySelectorAll("[data-ligne-id]"));
    const nbArticles = lignes.length;

    // Mise à jour du compteur (J06, J10, J13)
    if (compteurPanier) {
      compteurPanier.textContent = nbArticles;
    }

    // Calcul et mise à jour du total (J07, J10, J13)
    const sommeTotale = lignes.reduce((cumul, ligne) => {
      const id = Number(ligne.getAttribute("data-ligne-id"));
      const p = plantes.find(item => item.id === id);
      return cumul + (p ? p.prix : 0);
    }, 0);

    if (panierTotal) {
      panierTotal.textContent = euros(sommeTotale);
    }
  }

  /**
   * Ajoute une ligne au panier (J06)
   * @param {object} plante
   */
  function ajouterLignePanier(plante) {
    const li = document.createElement("li");
    li.className = "panier-item";
    li.setAttribute("data-ligne-id", String(plante.id));

    const infos = document.createElement("div");
    infos.className = "panier-item-info";
    infos.innerHTML = `<strong>${plante.nom}</strong> <span class="panier-item-prix">${euros(plante.prix)}</span>`;

    // Défi J13 : Bouton pour retirer uniquement cet article
    const boutonRetirer = document.createElement("button");
    boutonRetirer.type = "button";
    boutonRetirer.className = "bouton-retirer";
    boutonRetirer.textContent = "Retirer";
    boutonRetirer.setAttribute("aria-label", `Retirer ${plante.nom} du panier`);
    boutonRetirer.addEventListener("click", () => {
      li.remove();
      actualiserPanier();
    });

    li.append(infos, boutonRetirer);
    panierLignes.appendChild(li);

    actualiserPanier();
  }

  // Défi J10 : Vider l'ensemble du panier
  if (boutonVider) {
    boutonVider.addEventListener("click", () => {
      panierLignes.innerHTML = "";
      actualiserPanier();
    });
  }

  /* ---------- Défi J02, J04 : Construction du catalogue ---------- */
  catalogueEl.innerHTML = "";
  plantes.forEach(plante => {
    const card = document.createElement("article");
    card.className = "produit";
    card.setAttribute("data-plante-id", String(plante.id));

    const couleurIllustration = plante.couleur || "#4E7D5B";

    card.innerHTML = `
      <div class="produit-image" style="background-color: ${couleurIllustration};"></div>
      <span class="etiquette etiquette-${plante.difficulte}">${plante.difficulte}</span>
      <h3>${plante.nom}</h3>
      <p class="produit-description">${plante.description}</p>
      <div class="produit-bas">
        <span class="prix">${euros(plante.prix)}</span>
        <button type="button" class="bouton-ajouter" data-id="${plante.id}">Ajouter</button>
      </div>
      <div class="produit-lien-box">
        <a href="plante.html?id=${plante.id}" class="lien-fiche">Voir la fiche</a>
      </div>
    `;

    // Clic sur le bouton ajouter (J06)
    const btnAjouter = card.querySelector(".bouton-ajouter");
    btnAjouter.addEventListener("click", () => {
      ajouterLignePanier(plante);
    });

    catalogueEl.appendChild(card);
  });

  /* ---------- Filtrage dynamique (Défis J08 & J09) ---------- */
  function filtrerCatalogue() {
    const texte = rechercheInput ? rechercheInput.value.trim().toLowerCase() : "";
    const difficulte = filtreSelect ? filtreSelect.value : "toutes";

    const cartes = catalogueEl.querySelectorAll("[data-plante-id]");
    cartes.forEach(carte => {
      const id = Number(carte.getAttribute("data-plante-id"));
      const p = plantes.find(item => item.id === id);
      if (!p) return;

      const correspondNom = !texte || p.nom.toLowerCase().includes(texte);
      const correspondDiff = difficulte === "toutes" || p.difficulte === difficulte;

      // Masquage via l'attribut hidden (testé par ctf.js)
      carte.hidden = !(correspondNom && correspondDiff);
    });
  }

  if (rechercheInput) {
    rechercheInput.addEventListener("input", filtrerCatalogue);
  }

  if (filtreSelect) {
    filtreSelect.addEventListener("change", filtrerCatalogue);
  }
}

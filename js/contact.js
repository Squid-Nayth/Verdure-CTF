/* =================================================
   VERDURE – contact.js
   Page contact.html : vérifier le formulaire avant l'envoi.
   Défis : J11, J12
   ================================================= */

const formulaire = document.querySelector("#contact");
const confirmation = document.querySelector("#contact-confirmation");
const messageErreur = document.querySelector("#contact-erreur");

const nomInput = document.querySelector("#contact-nom");
const emailInput = document.querySelector("#contact-email");
const messageInput = document.querySelector("#contact-message");

if (formulaire && confirmation && messageErreur) {
  formulaire.addEventListener("submit", function (event) {
    event.preventDefault();

    const nomValeur = (nomInput ? nomInput.value : "").trim();
    const emailValeur = (emailInput ? emailInput.value : "").trim();
    const messageValeur = (messageInput ? messageInput.value : "").trim();

    // Expression régulière conforme à la validation du CTF (arobase et point ensuite)
    const emailEstValide = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValeur);
    const champsComplets = nomValeur !== "" && emailEstValide && messageValeur !== "";

    if (!champsComplets) {
      // Défi J11 : Affichage du message d'erreur (au moins 5 caractères), confirmation masquée
      messageErreur.textContent = "Veuillez remplir correctement tous les champs requis avec une adresse email valide.";
      messageErreur.removeAttribute("hidden");
      messageErreur.style.display = "block";
      confirmation.setAttribute("hidden", "");
    } else {
      // Défi J12 : Formulaire valide, afficher la confirmation reprenant le nom saisi
      messageErreur.textContent = "";
      messageErreur.setAttribute("hidden", "");
      messageErreur.style.display = "none";

      confirmation.textContent = `Merci ${nomValeur}, votre message a bien été envoyé ! Nous vous répondrons sous 24h.`;
      confirmation.removeAttribute("hidden");

      formulaire.reset();
    }
  });
}

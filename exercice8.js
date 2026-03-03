let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

console.log("===== RAPPORT UTILISATEUR =====");

// --- nom ---
let nomCorrige = nom.trim();
if (nomCorrige === "") {
    nomCorrige = "Inconnu";
}
console.log('nom              : "' + nomCorrige + '" (corrigé : espaces supprimés)');

// --- age ---
let ageNombre = parseInt(age);
if (Number.isNaN(ageNombre) || ageNombre <= 0) {
    console.log("age              : valeur invalide");
} else {
    console.log("age              : " + ageNombre + " (valide)");
}

// --- email ---
let positionAt = email.indexOf("@");
let positionPoint = email.indexOf(".", positionAt);

let emailValide = positionAt > 0 && positionPoint > positionAt + 1;

if (emailValide) {
    console.log('email            : "' + email + '" (valide)');
} else {
    console.log('email            : "' + email + '" (invalide : pas de point après @)');
}

// --- scoreJeu ---
let scoreNombre = parseInt(scoreJeu);
if (Number.isNaN(scoreNombre)) {
    scoreNombre = 0;
}
console.log('scoreJeu         : ' + scoreNombre + ' (extrait depuis "' + scoreJeu + '")');

// --- estAdmin ---
let estAdminBool = (estAdmin === "true");
console.log('estAdmin         : ' + estAdminBool + ' (attention : Boolean("false") = true, conversion manuelle requise)');

// --- derniereConnexion ---
let derniere = derniereConnexion ?? "Jamais connecté";
console.log('derniereConnexion: "' + derniere + '" (valeur par défaut via ??)');

// --- nombreConnexions ---
let nbConnexions = Number(nombreConnexions);

if (nbConnexions === 0) {
    console.log('nombreConnexions : "Aucune connexion" (0 après conversion)');
} else {
    console.log("nombreConnexions : " + nbConnexions);
}

console.log("================================");

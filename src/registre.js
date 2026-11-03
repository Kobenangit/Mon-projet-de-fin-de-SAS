// Ajouter et lister les relevés.
// Fiche : fiches/3-ajouter-lister.md · Vérifier : npm run test:registre
import { estDateValide, versNombre } from './outils.js';


// Renvoie une ligne de texte qui décrit le relevé.
// Exemples : 'M08 | 2026-10-22 | 26 °C | 15 mm | air 85 %'
//            'M11 | 2026-10-25 | 27.5 °C | 4 mm | air 79 %' (JavaScript affiche un point décimal,
//            même si la virgule est acceptée à la saisie)
export function formaterReleve(releve) {
  return `${releve.id} | ${releve.date} | ${releve.temperatureC} °C | ${releve.pluieMm} mm | air ${releve.humiditeAirPct} %`;
}


// Renvoie un texte avec un relevé par ligne (lignes séparées par '\n'),
// ou 'Aucun relevé enregistré.' si la liste est vide.
export function listerReleves(releves) {
  if (!releves || releves.length === 0) {
    return 'Aucun relevé enregistré.';
  }
  else {
    return releves.map((releve) => formaterReleve(releve)).join('\n');
  }
}


// Renvoie le relevé qui a cet identifiant, ou undefined s'il n'existe pas.
export function trouverParId(releves, id) {
  return releves.find((releve) => releve.id === id);
}

// Contrôle une saisie AVANT de l'ajouter. Tous les champs arrivent sous forme de TEXTE :
// { id: 'M11', date: '2026-10-25', temperatureC: '27,5', pluieMm: '4', humiditeAirPct: '79' }
// Renvoie un tableau de messages d'erreur ; un tableau vide signifie « saisie valide ».
// Règles : id obligatoire et unique · date réelle au format AAAA-MM-JJ · temperatureC nombre
// (négatif ou décimal accepté) · pluieMm nombre positif ou nul · humiditeAirPct nombre entre 0 et 100.
// Un message par règle non respectée ; n'ajoutez aucune autre règle. Le journal reçu n'est pas modifié.
export function verifierReleve(saisie, releves) {
  const erreurs = [];
  const id = String(saisie?.id ?? '').trim();
  const date = String(saisie?.date ?? '').trim();
  const temperatureC = versNombre(saisie?.temperatureC);
  const pluieMm = versNombre(saisie?.pluieMm);
  const humiditeAirPct = versNombre(saisie?.humiditeAirPct);

  if (id === '') {
    erreurs.push('L\'identifiant est obligatoire.');
  } else if (trouverParId(releves, id.toUpperCase()) !== undefined) {
    erreurs.push('L\'identifiant est déjà utilisé.');
  }

  if (date === '' || !estDateValide(date)) {
    erreurs.push('La date doit être au format AAAA-MM-JJ et exister.');
  }
  if (Number.isNaN(temperatureC)) {
    erreurs.push('La température doit être un nombre.');
  }
  if (Number.isNaN(pluieMm) || pluieMm < 0) {
    erreurs.push('La pluie doit être un nombre positif ou nul (en mm).');
  }
  if (Number.isNaN(humiditeAirPct) || humiditeAirPct < 0 || humiditeAirPct > 100) {
    erreurs.push('L\'humidité relative de l\'air doit être comprise entre 0 et 100 %.');
  }
  return erreurs;
}

// Fabrique le relevé à enregistrer à partir d'une saisie VALIDE : les trois mesures deviennent des nombres.
export function creerReleve(saisie) {
  return {
    id: String(saisie.id).trim().toUpperCase(),
    date: String(saisie.date).trim(),
    temperatureC: Number(versNombre(saisie.temperatureC)),
    pluieMm: Number(versNombre(saisie.pluieMm)),
    humiditeAirPct: Number(versNombre(saisie.humiditeAirPct)),
  };
}

// Ajoute la saisie au journal si elle est valide (verifierReleve, puis creerReleve).
// Renvoie les erreurs : [] si le relevé a été ajouté ; sinon les messages, et rien n'est ajouté.
export function ajouterReleve(releves, saisie) {
  throw new Error('TODO : coder ajouterReleve dans src/registre.js');
}

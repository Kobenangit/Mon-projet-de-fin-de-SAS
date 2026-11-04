# Journal météorologique de la ferme

> Projet individuel du SAS DFS, brief 4 (sujet : [SUJET.md](SUJET.md)). Remplacez chaque ✏️ par votre texte, puis supprimez cette ligne. 

## Contexte

Le responsable de la ferme pédagogique utilise ce programme en ligne de commande pour consigner les observations météorologiques quotidiennes. Il peut ajouter et consulter des relevés, retrouver une date ou un identifiant, classer les observations et obtenir des statistiques sur la série.

## Prérequis et lancement

- Node.js 20 ou plus récent, Git ; aucune bibliothèque à installer.

```bash
git clone https://github.com/VOTRE-COMPTE/brief-4-journal-meteo.git
cd brief-4-journal-meteo
node app.js
npm test
```

Sous PowerShell, si `npm` est bloqué : `npm.cmd test`.

## Fonctionnalités
https://github.com/Kobenangit/Mon-projet-de-fin-de-SAS
✏️ *Cochez seulement ce qui marche : `- [x]`.*

- [ x ] Données lues et enregistrées dans `donnees/releves.json`
- [ x ] Ajouter un relevé, saisies invalides refusées sans arrêter le programme
- [ x ] Lister les relevés, message si le journal est vide
- [ x ] Rechercher par identifiant ou par date ; journées pluvieuses (au moins 10 mm)
- [ x ] Trier par température ou par pluie
- [ x ] Synthèse : température moyenne, minimale et maximale de la série, cumul de pluie, journées pluvieuses
- [ x ] Bonus : supprimer et modifier un relevé (choix 6 et 7)
- [ x ] Bonus : tri par température décroissante, journée la plus chaude

## Données

Les dix observations fictives de départ sont dans "donnees/releves.json". Chaque entrée contient un identifiant (id), une date (date), une température en degrés Celsius (temperatureC), une quantité de pluie en millimètres (pluieMm) et une humidité relative de l'air en pourcentage (humiditeAirPct). La pluie est positive ou nulle et l'humidité est comprise entre 0 et 100 %.

## Limites

- Dix jours constituent une courte série météorologique ; le climat se caractérise sur une longue période, généralement 30 ans.
- Le seuil de 10 mm est une catégorie d'exercice, pas une prévision d'inondation ni une mesure du stress hydrique.
- L'humidité relative de l'air ne renseigne pas sur l'humidité du sol.
- Les données de démonstration sont fictives et ne doivent pas servir à une décision agronomique.

## Documents

[Dictionnaire des données](docs/dictionnaire-donnees.md) · [Tâches](docs/taches.md) · [Relevé des tests](docs/releve-tests.md) · [Journal de recherche](docs/journal-recherche.md) · [Fiche agronomique](docs/fiche-agronomique.md) · [Fiche individuelle](docs/fiche-individuelle.md)

## Auteur

Kobenan Jean Romuald Jean Romuald Kouassi // https://github.com/Kobenangit/Mon-projet-de-fin-de-SAS

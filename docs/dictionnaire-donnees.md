# Dictionnaire des données

Chaque relevé est un objet du tableau: donnees/releves.json.

| Champ | Signification | Type | Règle de validation | Unité | Exemple |
| --- | --- | --- | --- | --- | --- |
| id | Identifiant du relevé | Texte | Obligatoire et unique dans le journal ; la saisie du menu est mise en majuscules | — | M08 |
| date | Jour de l'observation | Texte au format AAAA-MM-JJ | Date réelle selon le calendrier | — | 2026-10-22 |
| temperatureC | Température observée | Nombre fini | Nombre négatif, nul ou positif ; décimales acceptées | °C | 26 |
| pluieMm | Quantité de pluie relevée | Nombre fini | Positive ou nulle | mm | 15 |
| humiditeAirPct | Humidité relative de l'air | Nombre fini | Entre 0 et 100, bornes comprises | % | 85 |

**Listes de valeurs autorisées** : aucune liste fermée. Les identifiants doivent être distincts ; les mesures suivent les bornes indiquées ci-dessus. Les dates ne sont pas contrôlées comme consécutives ou uniques.

**Sources** : définitions et unités données dans "SUJET.md" ; exemples et valeurs initiales dans "donnees/releves.json". Les observations de ce jeu de données sont fictives.
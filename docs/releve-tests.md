# Relevé des tests

> Écrivez le résultat attendu avant d'essayer. Un écart n'est pas une faute : notez-le, corrigez, refaites le test.

**Calculs à la main** : refaites à la main les résultats de référence de `SUJET.md`, puis comparez avec votre programme.

**Essais dans le menu** : un ajout valide (encore là après redémarrage), chaque règle refusée, une recherche introuvable, chaque tri, la synthèse, un choix inconnu.

| Action | Attendu | Obtenu | Testeur |
| --- | --- | --- | --- |
| Calculs à la main de la temperature moyen | 28°C| 28°c(après calcul)|Kobenan Kouassi Jean Romuald |
|Calculs à la main de la température minimale|26°C | 26°C(En observant)|Kobenan Kouassi Jean Romuald |
|Calculs à la main de la température maximale | 30°C|30°C(En observant) | Kobenan Kouassi Jean Romuald|
| Calculs à la main du cumul de pluie |45mm | 45mm(En observant)| Kobenan Kouassi Jean Romuald|
| Calculs à la main: pluie >= 10 mm | 2 journées (M03 , M08) obtenues| 2 journées (M03 , M08) obtenues après observation| Kobenan Kouassi Jean Romuald|

**Sur un autre poste** (`git clone`, `node app.js`, `npm test`, en suivant le README) : node app.js; npm test

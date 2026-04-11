+++
title = 'Lonelog - Notation pour les JDR solo'
date = 2026-02-17
series = ["Mes outils de solorôliste"]
tags = ["prise de notes", "outils"]
summary = "Formalisation de la prise de notes pendant les parties (méthode Lonelog)"
draft = false
+++

Cet article est la mise à jour de la notation que j'utilise suite à la mise à jour par Loreseed Workshop/Zeruhur de leur méthode de notation pour les parties de jeu de rôle en solo. 
Vous trouverez la version originale ici : https://zeruhur.itch.io/lonelog. 

Cet article ne contient que le résumé des notations que je vais utiliser dans mes prochains compte-rendus.

{{< toc >}}

---

## Symboles de base

- `@` — Action du joueur (mécaniques), ex : @ Je crochète la serrure.  
- `?` — Question à l’oracle (monde/incertitude), ex : ? Y-a-t-il quelqu’un à l’intérieur ?  
- `d:` — Jet de mécanique  
- `->` — Résultat d’oracle ou de mécanique, ex : -> succès, -> oui mais   
- `=>` — Conséquence (dans la fiction), ex : => La porte s’ouvre silencieusement

## Opérateurs de comparaison

- `≥` ou `>=` — Supérieur ou égal (atteint/bat la difficulté)  
- `≤` ou `<=` — Inférieur ou égal (n'atteint pas la difficulté)  
- `vs` — Versus (comparaison explicite)  
- `Succès` ou `S` — Drapeau Succès  
- `Échec` ou `É` — Drapeau Échec

## Balises de suivi

- `[N:Nom|balises]` — PNJ (première mention)  
- `[#N:Nom]` — PNJ (référence à mention antérieure)  
- `[L:Nom|balises]` — Lieu  
- `[PJ:Nom|stats]` — Personnage joueur

## Génération aléatoire

- `tbl: jet -> résultat` — Consultation de table simple  
- `gen: système -> résultat` — Générateur complexe

## Suivi de progression

- `[E:Nom X/Y]` — Événement/Horloge  
- `[Thread:Nom|état]` — Fil narratif (état = ouvert, fermé, abandonné, urgent, arrière-plan, etc.)  
- `[Clock:Nom X/Y]` — Horloge (se remplit vers son achèvement) — utiliser pour : menace en construction, sort en préparation - remplit = quelque chose de mauvais pour le PJ arrive.  
- `[Track:Nom X/Y]` — Piste de progression (vers un objectif) — remplit = le PJ réussi  
- `[Timer:Nom X]` — Minuteur/Compte à rebours — utiliser pour  : échéance qui se rapproche, pression — à 0 = le temps est écoulé. 

## Narration

- Dialogue : `N (Nom) : "Parole"`

## Méta

- `(note: ...)` — Réflexion, rappel, règle maison

## Structure des scènes

- `S#` — Numéro de scène, ex : S1, S2, …  
- `S#a, S#b` — Flashbacks, ex : S1a, S1b, …  
- `T#-S#` — Scène spécifique au fil (T# = le fil, S# = la scène) , ex : quand les deux PJs sont en train de faire des choses chacun de leur côté.   
- `S#.#` — Montages & coupes temporelles, ex : voyage en vignettes rapide => S7, début du voyage ; S7.1, jour 1 du voyage ; S7.2, jour 3 ; S8, l’arrivée à destination. 

## En-tête de campagne

```
=== Campagne xxx ===  
  
Genre :  
Cadre :  
Inspiration :  
Thème :  
Ton :  
Système :  
Outils :  
PJ :  
Date de début :  
Date de dernière mise à jour :  
Notes :  
```

## En-tête d'épisode

```
=== Episode X ===   
  
Date :  
Objectifs :  
Durée :  
Ambiance :  
Scènes :  
Résumé de l'épisode précédent :  
Fils :  
Horloge :  
Notes :  
```

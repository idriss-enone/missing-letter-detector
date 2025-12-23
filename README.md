# Construire un détecteur de lettres manquantes

## Objectif

Créer une fonction JavaScript capable de détecter une lettre manquante dans une suite de lettres alphabétiques.

---

## Description du projet

La fonction `fearNotLetter` reçoit une chaîne de caractères représentant une suite de lettres **en ordre alphabétique**.
Il peut manquer **une seule lettre** dans cette suite.
  - Si une lettre est manquante → la fonction la retourne
  - Si aucune lettre ne manque → la fonction retourne `undefined`

---

## Fonction attendue

``text

function fearNotLetter(str)

```

---


## Fonctionnement

### Version principale (solution utilisée)

1. La fonction définit une chaîne contenant toutes les lettres de l’alphabet
2. Elle identifie la première et la dernière lettre de la chaîne fournie
3. Elle génère la plage complète de lettres attendues à partir de l’alphabet
4. Elle parcourt cette plage et vérifie si chaque lettre est présente dans la chaîne initiale
5. Si une lettre est absente, la fonction retourne la lettre manquante
6. Si toutes les lettres sont présentes, la fonction retourne `undefined`

### Version alternative (à titre pédagogique)

  1. La fonction analyse chaque lettre de la chaîne
  2. Elle compare chaque lettre avec la suivante
  3. Si l’ordre alphabétique n’est pas respecté, elle identifie la lettre manquante
  4. Si aucune lettre ne manque, elle retourne undefined

---


## Exemples

```text

fearNotLetter("abce");                 // "d"
fearNotLetter("abcdefghjklmno");       // "i"
fearNotLetter("stvwx");                // "u"
fearNotLetter("abc");                  // undefined

```

---

## Compétences développées
  
  À travers ce projet, les compétences suivantes ont été développées :

  ### Programmation JavaScript

    - Création et utilisation de fonctions
    - Manipulation de chaînes de caractères (`string`)
    - Utilisation des boucles (`for`)
    - Conditions avec `if`
    - Retour de valeurs (`return`, `undefined`)

  ### Manipulation de l’alphabet et des caractères

    - Utilisation des index pour naviguer dans une chaîne
    - Recherche d’éléments avec `indexOf`
    - Vérification de présence avec `includes`
    - Compréhension de l’ordre alphabétique
  
  ### Logique algorithmique

    - Analyse d’un problème étape par étape
    - Détection d’un élément manquant dans une séquence
    - Comparaison entre une valeur attendue et une valeur réelle
    - Gestion des cas limites (aucune lettre manquante)

  ### Bonnes pratiques de développement

    - Découpage du code en étapes logiques
    - Nommage clair des variables
    - Code lisible et structuré
    - Tests simples avec `console.log`

   ### Utilisation de Git (conceptuellement) 

    - Construction du projet par étapes (commits)
    - Rédaction de messages de commit clairs
    - Compréhension de l’évolution du code


  ### Lecture et compréhension de code 

    - Comparaison de deux approches différentes pour un même problème
    - Compréhension du fonctionnement interne de JavaScript (`charCodeAt`)
    - Capacité à expliquer son code

### Compétences transversales

    - Résolution de problèmes
    - Rigueur et logique
    - Autonomie dans l’apprentissage
    - Capacité à documenter son travail (README)

---

## Technologies utilisées

| Technologie | Description |
|--------------|-------------|
| **JavaScript (ES6+)** | Langage utilisé pour le script |
| **Node.js** | Environnement d’exécution |
| **VS Code** | Éditeur de code utilisé |

---

##  Lancer le projet

1. **Cloner le dépôt GitHub :**
   ```bash
   git clone https://github.com/idriss-enone/missing-letter-detector.git 

2. **Ouvrir le projet :**

  - Ouvrir le dossier dans **VS Code**.
  - Ouvrir le fichier `index.html`.

3. **Lancer l'application :**
    - Ouvrir `index.html` dans un navigateur ;
    - Cliquer sur un bouton pour afficher une histoire

---










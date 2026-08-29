# Hardening d'une application web : de la reconnaissance au durcissement

**Auteur** : Lass — étudiant en cybersécurité
**Type** : Writeup technique (travail sur infrastructure personnelle autorisée)
**Statut** : Périmètre déclaré et consenti — tests non destructifs

---

## Objectif

Démontrer une démarche complète de sécurisation d'une application web en production :
identifier les fuites d'information, puis les corriger par couches, sans dégrader
l'expérience utilisateur ni l'esthétique.

Ce writeup documente le raisonnement et les actions, **sans révéler les éléments
confidentiels de l'application** (nature des sources de données, algorithmes internes,
clés). L'objectif pédagogique prime : partager une méthode reproductible.

---

## 1. Reconnaissance — la surface d'attaque initiale

L'audit a révélé plusieurs fuites d'information exploitables :

| Fuite | Risque | Gravité |
|-------|--------|---------|
| `Access-Control-Allow-Origin: *` | Lecture cross-origin des réponses API par n'importe quel site (ou agent) | **Haute** |
| Endpoints exposant les URLs et noms des sources de données | Révélation de l'architecture interne | **Haute** |
| Historique de téléchargements visible sans identifiant d'appareil | Fuite de données entre utilisateurs | **Moyenne** |
| Noms d'hébergeurs en clair dans les réponses | Facilité d'inférence du fonctionnement | **Moyenne** |
| Header `Server` révélant la stack | Empreinte technique exploitable | **Faible** |

**Méthode** : requêtes HTTP directes sur chaque endpoint, lecture des en-têtes, et
analyse du corps des réponses JSON. Aucune action destructive, aucune exfiltration.

---

## 2. Correctifs appliqués (par couches)

### Couche 1 — CORS same-origin

**Avant** : `Access-Control-Allow-Origin: *` → n'importe quel site tiers ou script
pouvait lire les réponses API via `fetch()` cross-origin.

**Après** : le header CORS n'est émis que lorsque l'`Origin` de la requête correspond
au `Host` (même origine), ou à une origine locale/LAN connue. Sinon, aucun header CORS
n'est renvoyé → le navigateur bloque la lecture cross-site par défaut.

```js
const originOk = new URL(reqOrigin).host === reqHost
  || isLocalOrigin(reqOrigin);
if (originOk) res.setHeader('Access-Control-Allow-Origin', reqOrigin);
```

### Couche 2 — Neutralisation de l'empreinte serveur

Suppression du header `Server` (et de tout header `X-Powered-By`), pour ne plus
révéler la pile technique. Simple mais retarde la reconnaissance automatisée.

### Couche 3 — Confidentialité par appareil

Correction d'une faille où un client **sans identifiant d'appareil** recevait les
données (et URLs) de tous les utilisateurs. Après correction, un client sans
identifiant ne voit que ses propres données anonymes.

### Couche 4 — Neutralisation des noms observables

Les réponses API ne renvoient plus les noms d'hébergeurs/moteurs internes, mais un
label neutre dérivé du type (ex. langue/qualité), supprimant un indice d'inférence
sur le fonctionnement interne — tout en gardant l'affichage utilisateur intact.

---

## 3. Vérification

Chaque correctif a été validé par tests HTTP réels :

- `curl -D -` sur l'accueil → absence du header `Server`, CORS réflexif correct.
- Requêtes sur les endpoints → noms neutralisés, champs internes conservés uniquement
  pour le consommateur légitime (outil de supervision interne).
- Endpoint d'historique sans identifiant → zéro enregistrement étranger retourné.
- **Non-régression** : fonctionnalités lecteur, téléchargement et interface inchangées.

---

## 4. Ce qui reste (prochaines étapes)

- **Tokenisation des URLs de lecture** : le client ne recevrait plus jamais l'URL de
  ressource brute, seulement un identifiant opaque résolu côté serveur.
- **Rate-limiting** sur les endpoints publics pour ralentir l'énumération automatisée.
- **Journalisation des événements de sécurité**.

---

## 5. Leçons

1. **La sécurité se teste sur la réponse réelle, pas le code seul.** Un header `*`
   visible dans le code peut sembler inoffensif jusqu'à ce qu'on lise ce qu'un agent
   peut en tirer cross-origin.
2. **Cacher le "comment" protège autant que cacher le "quoi".** Réduire la surface
   d'inférence (noms, URLs internes, empreinte) ralentit la recon d'un attaquant.
3. **La confidentialité est une couche fonctionnelle, pas un bonus.** Une fuite entre
   appareils est une vraie vulnérabilité, pas un détail d'UX.

---

*Ce writeup documente un travail sur infrastructure autorisée. Il ne contient aucune
information permettant d'identifier la cible ou de reproduire une attaque contre un
tiers.*
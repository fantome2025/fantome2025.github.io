// Portfolio — traduction FR/EN + année dynamique
(function () {
  'use strict';

  var i18n = {
    fr: {
      'nav.about': 'À propos',
      'nav.skills': 'Compétences',
      'nav.projects': 'Projets',
      'nav.security': 'Sécurité',
      'nav.contact': 'Contact',

      'hero.eyebrow': 'Étudiant en cybersécurité · Développeur full-stack',
      'hero.title1': 'Je sécurise et construis',
      'hero.title2': 'le web de demain.',
      'hero.sub': "Test d'intrusion éthique, durcissement d'applications, et développement d'outils IA — avec une approche rigoureuse et un périmètre toujours autorisé.",
      'hero.cta1': 'Voir mes projets',
      'hero.cta2': 'Me contacter',

      'about.title': 'À propos',
      'about.text': "Étudiant à l'université, passionné par la sécurité informatique et le développement. Trilingue français / anglais / bambara, je construis des applications web complètes (frontend, backend, déploiement) et j'applique la sécurité par conception : penser l'attaque pour mieux défendre.",
      'about.text2': "Mon approche est éthique : je n'effectue des tests d'intrusion que sur des infrastructures autorisées (périmètre déclaré et consenti), et je ne transige jamais sur la confidentialité des utilisateurs.",

      'skills.title': 'Compétences',
      'skills.sec.title': 'Sécurité offensive / défensive',
      'skills.sec.l1': 'Reconnaissance & énumération (scope autorisé)',
      'skills.sec.l2': 'Durcissement web (CSP, CORS, anti-fingerprint)',
      'skills.sec.l3': "Audit d'en-têtes & analyse de surface d'attaque",
      'skills.sec.l4': 'Red-team / pentest éthique (PTES)',
      'skills.dev.title': 'Développement',
      'skills.dev.l1': 'Node.js (backends monolithes & micro)',
      'skills.dev.l2': 'Frontend vanilla / HTML / CSS / JS',
      'skills.dev.l3': 'Git & GitHub, CI/CD (Actions)',
      'skills.dev.l4': 'Déploiement (Codespaces, systemd, cloud)',
      'skills.ai.title': 'IA & données',
      'skills.ai.l1': 'Fine-tuning de LLM (LoRA, Unsloth)',
      'skills.ai.l2': 'Collecte & curation de datasets',
      'skills.ai.l3': 'Langues africaines (bambara)',
      'skills.ai.l4': "Orchestration d'agents IA",

      'projects.title': 'Projets',
      'projects.p1.title': 'Plateforme de streaming vidéo',
      'projects.p1.desc': 'Plateforme complète (films, séries, animes, dessins animés) : lecteur multi-sources, téléchargement MP4, mémoire de lecture, interface mobile soignée. Durcie par conception (CSP stricte, CORS same-origin, neutralisation de l\'empreinte serveur, confidentialité par appareil).',
      'projects.p2.title': 'Massa — IA pour le bambara',
      'projects.p2.desc': "Fine-tuning d'un modèle de langage pour le bambara (une langue sous-représentée dans l'IA). Collecte et curation d'un dataset, entraînement LoRA, cible mobile embarquée — au service de l'accessibilité linguistique au Sahel.",
      'projects.p3.title': 'Lecteur de musique Android',
      'projects.p3.desc': 'Application Android native (Kotlin) qui scanne et lit la musique du téléphone, avec build APK automatique via GitHub Actions.',
      'projects.p4.title': 'Plateforme communautaire tech',
      'projects.p4.desc': 'Plateforme communautaire (MVP) : publications, projets, modération, déployée et testée de bout en bout.',

      'security.title': 'Sécurité',
      'security.ethic': '<strong>Éthique avant tout.</strong> Mes tests d\'intrusion ne ciblent que des <em>infrastructures personnelles ou explicitement autorisées</em>. Aucune action destructive, aucune exfiltration hors périmètre, aucun impact sur des tiers.',
      'security.wp': "Je documente mon travail sous forme de <em>writeups</em> : recon → durcissement → vérification. Un exemple concret est le durcissement complet d'une application web (en-têtes de sécurité, politique CORS, neutralisation de l'empreinte technique, confidentialité des utilisateurs).",

      'contact.title': 'Contact',
      'contact.text': "Disponible pour des missions de développement web, d'audit/durcissement, ou de contribution à des projets IA. Me joindre via GitHub.",
      'footer': "© {year} Lass — Cybersécurité & Développement. Construit avec rigueur."
    },

    en: {
      'nav.about': 'About',
      'nav.skills': 'Skills',
      'nav.projects': 'Projects',
      'nav.security': 'Security',
      'nav.contact': 'Contact',

      'hero.eyebrow': 'Cybersecurity student · Full-stack developer',
      'hero.title1': 'I secure and build',
      'hero.title2': 'the web of tomorrow.',
      'hero.sub': 'Ethical penetration testing, application hardening, and building AI tools — with a rigorous approach and an always-authorized scope.',
      'hero.cta1': 'View my projects',
      'hero.cta2': 'Contact me',

      'about.title': 'About',
      'about.text': "A university student passionate about cybersecurity and development. Trilingual French / English / Bambara, I build complete web applications (frontend, backend, deployment) and apply security by design: think like an attacker to defend better.",
      'about.text2': "My approach is ethical: I only perform penetration testing on authorized infrastructure, and I never compromise on user privacy.",

      'skills.title': 'Skills',
      'skills.sec.title': 'Offensive / defensive security',
      'skills.sec.l1': 'Reconnaissance & enumeration (authorized scope)',
      'skills.sec.l2': 'Web hardening (CSP, CORS, anti-fingerprinting)',
      'skills.sec.l3': 'Header auditing & attack surface analysis',
      'skills.sec.l4': 'Ethical red-team / pentesting (PTES)',
      'skills.dev.title': 'Development',
      'skills.dev.l1': 'Node.js (monolith & micro backends)',
      'skills.dev.l2': 'Vanilla frontend / HTML / CSS / JS',
      'skills.dev.l3': 'Git & GitHub, CI/CD (Actions)',
      'skills.dev.l4': 'Deployment (Codespaces, systemd, cloud)',
      'skills.ai.title': 'AI & data',
      'skills.ai.l1': 'LLM fine-tuning (LoRA, Unsloth)',
      'skills.ai.l2': 'Dataset collection & curation',
      'skills.ai.l3': 'African languages (Bambara)',
      'skills.ai.l4': 'AI agent orchestration',

      'projects.title': 'Projects',
      'projects.p1.title': 'Video streaming platform',
      'projects.p1.desc': 'Full platform (movies, series, anime, cartoons): multi-source player, MP4 download, watch history, polished mobile UI. Hardened by design (strict CSP, same-origin CORS, server fingerprint neutralization, per-device privacy).',
      'projects.p2.title': 'Massa — AI for Bambara',
      'projects.p2.desc': "Fine-tuning a language model for Bambara (an under-represented language in AI). Dataset collection and curation, LoRA training, mobile embedded target — serving linguistic accessibility in the Sahel.",
      'projects.p3.title': 'Android music player',
      'projects.p3.desc': 'Native Android app (Kotlin) that scans and plays the phone\'s music, with automatic APK build via GitHub Actions.',
      'projects.p4.title': 'Tech community platform',
      'projects.p4.desc': 'Community platform (MVP): posts, projects, moderation, deployed and tested end-to-end.',

      'security.title': 'Security',
      'security.ethic': '<strong>Ethics first.</strong> My penetration tests only target <em>personal or explicitly authorized infrastructure</em>. No destructive actions, no out-of-scope exfiltration, no impact on third parties.',
      'security.wp': "I document my work as <em>writeups</em>: recon → hardening → verification. A concrete example is the complete hardening of a web application (security headers, CORS policy, technical fingerprint neutralization, user privacy).",

      'contact.title': 'Contact',
      'contact.text': 'Available for web development, audit/hardening missions, or contributions to AI projects. Reach me via GitHub.',
      'footer': '© {year} Lass — Cybersecurity & Development. Built with rigor.'
    }
  };

  var lang = 'fr';

  function applyLang(l) {
    lang = l;
    document.documentElement.lang = l;
    document.getElementById('langToggle').textContent = (l === 'fr') ? 'EN' : 'FR';

    var dict = i18n[l];
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // Année dans le footer
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    // Le footer utilise {year} dans le dict : on le remplace
    var footerEl = document.querySelector('.footer p');
    if (footerEl) {
      footerEl.innerHTML = '© ' + new Date().getFullYear() + ' Lass — ' +
        (lang === 'fr' ? 'Cybersécurité & Développement. Construit avec rigueur.' : 'Cybersecurity & Development. Built with rigor.');
    }
  }

  document.getElementById('langToggle').addEventListener('click', function () {
    applyLang(lang === 'fr' ? 'en' : 'fr');
  });

  document.getElementById('year').textContent = String(new Date().getFullYear());
  applyLang('fr');
})();
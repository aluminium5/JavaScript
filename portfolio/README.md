# Self Portfolio Website — CA3 Mini Project

**Student Name:** Atharv Lulekar
**PRN:** 24070521036
**Course:** JavaScript Lab, Semester V
**Institution:** Symbiosis Institute of Technology (SIT), Nagpur

---

## Objective

A single-page personal portfolio that presents my profile, education, technical
skills, projects and contact details in one place — built entirely
from scratch with **HTML5, CSS3 and vanilla JavaScript**, with no frameworks,
templates or UI libraries.

The site doubles as a live index of my laboratory coursework: every project card
links directly to the working application in this repository.

---

## How to run

```bash
git clone https://github.com/aluminium5/JavaScript.git
cd JavaScript/portfolio
```

Open `index.html` in a browser, or right-click it in VS Code and choose
**Open with Live Server**.

> The "Open live" link on each project card uses a relative path such as
> `../Prac5/Prac5.1/AtharvCart/index.html`, so keep the `portfolio/` folder
> inside the repository for those links to resolve.

---

## File structure

| File | Purpose |
| :--- | :--- |
| `index.html` | Page structure and static content |
| `style.css` | Design tokens, layout, light & dark themes, responsive rules |
| `script.js` | Content data, rendering, theme persistence, filtering, scroll reveal |
| `assets/` | Profile photo (`profile.jpg`), résumé PDF and gallery images |

---

## Sections

1. **Hero** — name, course, positioning statement and a summary stat row
2. **About me** — background and approach
3. **Education** — timeline of academic history
4. **Technical skills** — grouped by category, each tagged with the lab it was used in
5. **Projects** — all 20 lab applications, filterable by topic, each linking to the live page and its source
6. **Laboratory coursework** — the full Practical 1–10 record
7. **Gallery**
8. **Contact** — email, location and professional links

---

## JavaScript concepts used in this site

This portfolio deliberately re-applies what the course covered, so the site is
itself a demonstration of the syllabus:

| Concept | Where it is used | Lab |
| :--- | :--- | :--- |
| `const` / `let`, template literals | Content data and all HTML generation | Prac 2 |
| Destructuring | Unpacking project and skill objects in render functions | Prac 2 |
| Arrow functions | Callbacks throughout `script.js` | Prac 4 |
| `try` / `catch` | Guarding `localStorage` access in private-browsing mode | Prac 4 |
| `map()` / `filter()` | Rendering project cards and filtering them by topic | Prac 5 |
| `new Set()` | Deriving the filter buttons from the project data | Prac 5 |
| DOM creation & `classList` | Theme switching, mobile menu, reveal states | Prac 7 |
| Event delegation | A single listener on the filter bar handles every button | Prac 7 |
| `localStorage` | Remembering the chosen colour theme between visits | Prac 9 |
| `IntersectionObserver` | Scroll-reveal animations and nav scroll-spy | New |

---

## Features

- **Light and dark theme**, remembered with `localStorage` and defaulting to the
  operating system preference
- **Data-driven rendering** — projects, skills, lab records and the gallery are all
  arrays in `script.js`; adding a project means adding one object, never editing HTML
- **Topic filters** generated automatically from the project data, with live counts
- **Responsive** from 320 px phones to desktop, with a collapsible mobile menu
- **Accessible** — semantic landmarks, `aria` state on the menu toggle, visible focus,
  and full support for `prefers-reduced-motion`
- **Print-friendly** stylesheet, so the page can be submitted as a PDF

---

## Still to personalise

- [ ] Photos in the `GALLERY` array in `script.js` — the only section still showing
      placeholder slots

Everything else is filled in: profile photo, résumé download, education with CGPA and
Class X / XII results, email and LinkedIn.

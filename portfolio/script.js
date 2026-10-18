/* ============================================================
   Portfolio - Atharv Lulekar (PRN 24070521036)
   CA3 Mini Project | JavaScript Lab, Semester V

   Written in plain ES6+ JavaScript, using the same concepts
   covered across Practicals 1-10: template literals,
   destructuring, map/filter/reduce, DOM creation, event
   delegation and the Web Storage API.
   ============================================================ */

/* ------------------------------------------------------------
   1. CONTENT DATA
   Everything the page renders lives here, so updating the
   portfolio means editing data - never markup.
   ------------------------------------------------------------ */

const REPO = 'https://github.com/aluminium5/JavaScript/tree/main/';

const RESUME_URL = 'assets/Atharv-Lulekar-Resume.pdf';

// Drop photos into portfolio/assets/ and add them here, e.g.
// { src: 'assets/techfest.jpg', alt: 'Presenting at TechFest 2026' }
const GALLERY = [];

const PROJECTS = [
    {
        title: 'SIT Nagpur CSE Department Portal',
        lab: 'Prac 1',
        topic: 'Fundamentals',
        path: 'Prac1/index.html',
        description:
            'Department landing page wiring up inline, internal and external JavaScript, with console.log, warn, error and table used for debugging.',
        tech: ['HTML5', 'CSS3', 'Console API']
    },
    {
        title: 'Student Information Portal',
        lab: 'Prac 1',
        topic: 'Fundamentals',
        path: 'Prac1/student.html',
        description:
            'Student record page driven by an external script file, including GPA entry and range validation.',
        tech: ['External JS', 'Validation']
    },
    {
        title: 'Billing & GST Calculator',
        lab: 'Prac 2',
        topic: 'Fundamentals',
        path: 'Prac2/index.html',
        description:
            'Invoice calculator contrasting var, let and const scope, with totals assembled using template literals.',
        tech: ['let / const', 'Template literals']
    },
    {
        title: 'Shoppers Avenue',
        lab: 'Prac 2',
        topic: 'Fundamentals',
        path: 'Prac2_shoppingweb/index.html',
        description:
            'Multi-product storefront with a running cart, tax calculation and object destructuring to unpack product records.',
        tech: ['Destructuring', 'SVG', 'CSS Grid']
    },
    {
        title: 'Grade Calculator',
        lab: 'Prac 3',
        topic: 'Logic & Validation',
        path: 'Prac3/Grade-check/index.html',
        description:
            'Converts a percentage into a letter grade using chained conditionals and a switch statement, with input guarding.',
        tech: ['if / else', 'switch']
    },
    {
        title: 'Password Strength Checker',
        lab: 'Prac 3',
        topic: 'Logic & Validation',
        path: 'Prac3/Password/index.html',
        description:
            'Scores a password on length, digits and special characters, reporting which rules still fail.',
        tech: ['Loops', 'Conditionals']
    },
    {
        title: 'Palindrome Checker',
        lab: 'Prac 4',
        topic: 'Logic & Validation',
        path: 'Prac4/Palindrome/index.html',
        description:
            'Checks words, phrases and numbers for symmetry, comparing function declarations against arrow functions.',
        tech: ['Arrow functions', 'Scope']
    },
    {
        title: 'Vehicle Registration Validator',
        lab: 'Prac 4',
        topic: 'Logic & Validation',
        path: 'Prac4/Vehicle-Registration/index.html',
        description:
            'Validates Indian registration plate formats and raises custom errors handled through try / catch / finally.',
        tech: ['try / catch', 'Closures']
    },
    {
        title: "Atharv's Cart",
        lab: 'Prac 5',
        topic: 'Arrays & Objects',
        path: 'Prac5/Prac5.1/AtharvCart/index.html',
        description:
            'Shopping cart where quantities, subtotal and grand total are all derived from the item array with reduce().',
        tech: ['reduce()', 'Objects']
    },
    {
        title: 'Student Marks Analyzer',
        lab: 'Prac 5',
        topic: 'Arrays & Objects',
        path: 'Prac5/Prac5.2/index.html',
        description:
            'Finds class topper, lowest scorer and average from a records array using map(), filter(), Math.max() and Math.min().',
        tech: ['map()', 'filter()', 'Math']
    },
    {
        title: 'String & Regex Workbench',
        lab: 'Prac 6',
        topic: 'Strings & Regex',
        path: 'Prac6/6.1/index.html',
        description:
            'Interactive playground for split(), replace(), indexOf() and trim(), plus live email pattern matching with test().',
        tech: ['RegExp', 'String methods']
    },
    {
        title: 'Reverse String & Vowel Counter',
        lab: 'Prac 6',
        topic: 'Strings & Regex',
        path: 'Prac6/6.2/index.html',
        description:
            'Reverses any input text and breaks down the frequency of each individual vowel in the sentence.',
        tech: ['split()', 'Frequency count']
    },
    {
        title: 'Task Manager (To-Do List)',
        lab: 'Prac 7',
        topic: 'DOM & Events',
        path: 'Prac7/Prac7.1/index.html',
        description:
            'Add, edit inline and delete tasks, with every list item created at runtime through createElement and appendChild.',
        tech: ['createElement', 'Event handling']
    },
    {
        title: 'Registration Form Validator',
        lab: 'Prac 7',
        topic: 'DOM & Events',
        path: 'Prac7/Prac7.2/index.html',
        description:
            'Multi-field sign-up form with per-field error messages and red-highlight states applied by toggling classes.',
        tech: ['preventDefault', 'classList']
    },
    {
        title: 'Gym Admission Form',
        lab: 'Prac 8',
        topic: 'DOM & Events',
        path: 'Prac8/index.html',
        description:
            'Real-time membership form demonstrating four distinct event types - input, blur, change and submit - on one page.',
        tech: ['input / blur', 'change / submit']
    },
    {
        title: 'Theme Preferences',
        lab: 'Prac 9',
        topic: 'Storage & APIs',
        path: '9.1/index.html',
        description:
            'Light and dark theme switcher that contrasts persistent localStorage against per-tab sessionStorage, with a live storage readout.',
        tech: ['localStorage', 'sessionStorage']
    },
    {
        title: 'Seminar Schedule Planner',
        lab: 'Prac 9',
        topic: 'Storage & APIs',
        path: '9.1/9.2/index.html',
        description:
            'Clickable seminar timetable that saves the chosen slot as JSON in localStorage and tracks every topic viewed this session.',
        tech: ['JSON.stringify', 'Data attributes']
    },
    {
        title: 'Workshop Ticket Booking Form',
        lab: 'Prac 10',
        topic: 'Storage & APIs',
        path: 'PRACTICAL 10.1/index.html',
        description:
            'Full event booking form using the complete range of HTML5 input types, pattern validation, live price calculation, promo codes and a generated ticket.',
        tech: ['HTML5 inputs', 'Pattern validation']
    },
    {
        title: 'Student Records via fetch()',
        lab: 'Prac 10',
        topic: 'Storage & APIs',
        path: 'PRACTICAL 10.2/index.html',
        description:
            'Loads an external JSON file with the Fetch API and renders it into a table, with loading, success and error states handled.',
        tech: ['Fetch API', 'JSON', 'Promises']
    },
    {
        title: 'Runtime Student Table',
        lab: 'Prac 10',
        topic: 'Storage & APIs',
        path: 'PRACTICAL 10.3/index.html',
        description:
            'Builds a records table row by row from user input at runtime, with field and range validation before each insert.',
        tech: ['DOM insertion', 'Validation']
    }
];

const SKILL_GROUPS = [
    {
        name: 'Languages & markup',
        note: 'The foundation everything here is built on',
        skills: [
            { name: 'JavaScript (ES6+)', ref: 'Prac 1-10' },
            { name: 'HTML5', ref: 'Prac 1-10' },
            { name: 'CSS3', ref: 'Prac 1-10' },
            { name: 'JSON', ref: 'Prac 9-10' }
        ]
    },
    {
        name: 'JavaScript core',
        note: 'Language concepts applied in working apps',
        skills: [
            { name: 'Scope: var / let / const', ref: 'Prac 2' },
            { name: 'Template literals', ref: 'Prac 2' },
            { name: 'Destructuring', ref: 'Prac 2' },
            { name: 'Control structures', ref: 'Prac 3' },
            { name: 'Functions & closures', ref: 'Prac 4' },
            { name: 'Error handling', ref: 'Prac 4' },
            { name: 'Objects & arrays', ref: 'Prac 5' },
            { name: 'map / filter / reduce', ref: 'Prac 5' },
            { name: 'String methods', ref: 'Prac 6' },
            { name: 'Regular expressions', ref: 'Prac 6' }
        ]
    },
    {
        name: 'Browser & web APIs',
        note: 'Working directly against the platform',
        skills: [
            { name: 'DOM manipulation', ref: 'Prac 7' },
            { name: 'Event handling', ref: 'Prac 7-8' },
            { name: 'Form validation', ref: 'Prac 8, 10' },
            { name: 'Web Storage API', ref: 'Prac 9' },
            { name: 'Fetch API & promises', ref: 'Prac 10' },
            { name: 'IntersectionObserver', ref: 'this site' }
        ]
    },
    {
        name: 'Tools & workflow',
        note: 'How the work gets written and shipped',
        skills: [
            { name: 'Git & GitHub', ref: '' },
            { name: 'VS Code', ref: '' },
            { name: 'Chrome DevTools', ref: '' },
            { name: 'Responsive design', ref: '' },
            { name: 'Web accessibility basics', ref: '' }
        ]
    }
];

const LABS = [
    { no: 1, topic: 'JavaScript basics & console methods', concepts: 'Inline, internal and external JS; console.log / warn / error / table' },
    { no: 2, topic: 'ES6 syntax & billing calculators', concepts: 'var, let, const scope; template literals; array and object destructuring' },
    { no: 3, topic: 'Control structures & validation', concepts: 'if-else, switch, for and while loops, input verification' },
    { no: 4, topic: 'Functions, closures & exceptions', concepts: 'Function types, arrow functions, lexical scope, closures, try-catch-finally' },
    { no: 5, topic: 'Arrays, objects & array methods', concepts: 'Nested objects, map(), filter(), reduce(), find(), Math.max / min' },
    { no: 6, topic: 'String methods & regular expressions', concepts: 'split, replace, indexOf, trim; RegExp test() and match(); sanitisation' },
    { no: 7, topic: 'Dynamic DOM & event handling', concepts: 'createElement, appendChild, remove, addEventListener, preventDefault' },
    { no: 8, topic: 'Event-driven form validation', concepts: 'input, blur, change and submit events; regex field rules' },
    { no: 9, topic: 'Browser object model & storage APIs', concepts: 'localStorage vs sessionStorage, JSON.stringify / parse, persisted UI state' },
    { no: 10, topic: 'HTML5 forms, Fetch API & runtime data', concepts: 'HTML5 input types, pattern validation, fetch(), promises, JSON rendering' }
];

/* ------------------------------------------------------------
   2. HELPERS
   ------------------------------------------------------------ */

const $ = selector => document.querySelector(selector);
const $$ = selector => Array.from(document.querySelectorAll(selector));

// Folder names in this repository contain spaces, so every path is encoded.
const livePath = path => '../' + encodeURI(path);
const repoPath = path => REPO + encodeURI(path);

/* ------------------------------------------------------------
   3. THEME - persisted with localStorage (Practical 9)
   ------------------------------------------------------------ */

const THEME_KEY = 'portfolio-theme';

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try {
        localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
        // Storage can be blocked in private mode - the page must still work.
    }
}

function initTheme() {
    let saved = null;
    try {
        saved = localStorage.getItem(THEME_KEY);
    } catch (e) {
        saved = null;
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(saved || (prefersDark ? 'dark' : 'light'));

    $('#themeToggle').addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        applyTheme(current === 'dark' ? 'light' : 'dark');
    });
}

/* ------------------------------------------------------------
   4. RENDERING - map() over the data, as in Practical 5
   ------------------------------------------------------------ */

function renderSkills() {
    $('#skillGroups').innerHTML = SKILL_GROUPS.map(({ name, note, skills }) => `
        <div class="skill-group reveal">
            <h3>${name}</h3>
            <p class="group-note">${note}</p>
            <div class="chips">
                ${skills.map(skill => `
                    <span class="chip">
                        ${skill.name}
                        ${skill.ref ? `<span class="chip-ref">${skill.ref}</span>` : ''}
                    </span>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function projectCard({ title, lab, path, description, tech }) {
    return `
        <article class="project-card reveal">
            <div class="project-head">
                <h3>${title}</h3>
                <span class="project-tag">${lab}</span>
            </div>

            <p>${description}</p>

            <div class="project-tech">
                ${tech.map(item => `<span class="tech-pill">${item}</span>`).join('')}
            </div>

            <div class="project-links">
                <a href="${livePath(path)}" target="_blank" rel="noopener">Open live &rarr;</a>
                <a class="secondary" href="${repoPath(path)}" target="_blank" rel="noopener">Source</a>
            </div>
        </article>
    `;
}

function renderProjects(topic = 'All') {
    // filter() then map() - Practical 5 put to work on this page
    const visible = topic === 'All'
        ? PROJECTS
        : PROJECTS.filter(project => project.topic === topic);

    $('#projectGrid').innerHTML = visible.map(projectCard).join('');
    $('#gridEmpty').hidden = visible.length > 0;

    revealAll();
}

function renderFilters() {
    // Build the filter list from the data itself, so a new project needs no markup
    const topics = ['All', ...new Set(PROJECTS.map(project => project.topic))];

    $('#filters').innerHTML = topics.map((topic, index) => `
        <button class="filter-btn${index === 0 ? ' active' : ''}" data-topic="${topic}">
            ${topic}
            <span class="chip-ref">${topic === 'All'
            ? PROJECTS.length
            : PROJECTS.filter(project => project.topic === topic).length}</span>
        </button>
    `).join('');

    // One listener on the container handles every button (event delegation)
    $('#filters').addEventListener('click', event => {
        const button = event.target.closest('.filter-btn');
        if (!button) return;

        $$('.filter-btn').forEach(element => element.classList.remove('active'));
        button.classList.add('active');

        renderProjects(button.dataset.topic);
    });
}

function renderLabs() {
    $('#labTableBody').innerHTML = LABS.map(({ no, topic, concepts }) => `
        <tr>
            <td class="lab-no">${String(no).padStart(2, '0')}</td>
            <td class="lab-topic">${topic}</td>
            <td>${concepts}</td>
        </tr>
    `).join('');
}

function renderGallery() {
    const grid = $('#galleryGrid');

    if (GALLERY.length === 0) {
        grid.innerHTML = Array.from({ length: 3 }, () => `
            <div class="gallery-empty reveal">
                <span>Photo slot &mdash; add images to the GALLERY array in script.js</span>
            </div>
        `).join('');
        return;
    }

    grid.innerHTML = GALLERY.map(({ src, alt }) => `
        <figure class="gallery-item reveal">
            <img src="${src}" alt="${alt}" loading="lazy" />
        </figure>
    `).join('');
}

/* ------------------------------------------------------------
   5. INTERACTION
   ------------------------------------------------------------ */

let observer = null;

function revealAll() {
    let items = $$('.reveal:not(.visible)');

    if (!('IntersectionObserver' in window)) {
        items.forEach(item => item.classList.add('visible'));
        return;
    }

    // Anything already at or above the fold is shown straight away. Without this,
    // opening a deep link such as index.html#projects would leave every section
    // above it permanently invisible, because they never scroll into view.
    items = items.filter(item => {
        if (item.getBoundingClientRect().top < window.innerHeight) {
            item.classList.add('visible');
            return false;
        }
        return true;
    });

    if (!observer) {
        observer = new IntersectionObserver((entries, self) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    self.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    }

    items.forEach(item => observer.observe(item));
}

function initNav() {
    const nav = $('#nav');
    const toggle = $('#navToggle');
    const links = $('#navLinks');

    // Hairline under the bar only once the page has scrolled
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    toggle.addEventListener('click', () => {
        const open = links.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    // Close the mobile menu after a jump
    links.addEventListener('click', event => {
        if (event.target.tagName === 'A') {
            links.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Highlight the section currently in view
    const sections = $$('main section[id]');
    const navLinks = $$('.nav-links a[href^="#"]');

    if ('IntersectionObserver' in window && sections.length) {
        const spy = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                navLinks.forEach(link => {
                    link.classList.toggle(
                        'active',
                        link.getAttribute('href') === '#' + entry.target.id
                    );
                });
            });
        }, { rootMargin: '-45% 0px -50% 0px' });

        sections.forEach(section => spy.observe(section));
    }
}

function initResume() {
    $('#resumeBtn').addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = RESUME_URL;
        link.download = 'Atharv-Lulekar-Resume.pdf';
        link.click();
    });
}

/* ------------------------------------------------------------
   6. START
   ------------------------------------------------------------ */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();

    renderSkills();
    renderFilters();
    renderProjects();
    renderLabs();
    renderGallery();

    initNav();
    initResume();

    $('#year').textContent = new Date().getFullYear();

    revealAll();
});

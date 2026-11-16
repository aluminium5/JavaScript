// storage.js - save/load classes in localStorage (ES6 module)
const KEY = 'timetable-pro-classes';

export function loadClasses() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY));
    if (Array.isArray(saved)) return saved;
  } catch (e) { /* ignore */ }
  return [];
}

export function saveClasses(list) {
  localStorage.setItem(KEY, JSON.stringify(list));
}

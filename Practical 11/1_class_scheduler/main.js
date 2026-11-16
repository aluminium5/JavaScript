import { pad, toDateKey, toDateTime, format12, splitDuration, getStatus } from './utils.js';
import { loadClasses, saveClasses } from './storage.js';

const $ = (id) => document.getElementById(id);
let classes = loadClasses();
let viewDate = new Date();

// seed demo data on first run
if (classes.length === 0) {
  const t = toDateKey(new Date());
  classes = [
    { id: 1, name: 'Web Technologies', room: 'Room 204', date: t, start: '09:00', end: '10:00' },
    { id: 2, name: 'Data Structures', room: 'Lab 3', date: t, start: '11:00', end: '12:00' },
    { id: 3, name: 'Java Programming', room: 'Room 110', date: t, start: '15:00', end: '16:30' }
  ];
  saveClasses(classes);
}

// ---------- Clock (setInterval) ----------
function tick() {
  const now = new Date();
  $('liveTime').textContent = now.toLocaleTimeString('en-IN');
  $('liveDate').textContent = now.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  renderNext(now);
  refreshStatuses(now);
}

function renderNext(now) {
  const upcoming = classes
    .map((c) => ({ ...c, at: toDateTime(c.date, c.start) }))
    .filter((c) => c.at > now)
    .sort((a, b) => a.at - b.at)[0];

  if (!upcoming) {
    $('nextName').textContent = 'No upcoming class';
    $('nextMeta').textContent = 'Add a class to get started';
    $('nextCount').innerHTML = '';
    return;
  }
  const d = splitDuration(upcoming.at - now);
  $('nextName').textContent = upcoming.name;
  $('nextMeta').textContent = `${format12(upcoming.start)} - ${format12(upcoming.end)}  |  ${upcoming.room}  |  ${upcoming.date}`;
  $('nextCount').innerHTML = ['d', 'h', 'm', 's']
    .map((k, i) => `<div><b>${pad(d[k])}</b><small>${['DAYS', 'HRS', 'MIN', 'SEC'][i]}</small></div>`)
    .join('');
}

// ---------- List ----------
function renderList() {
  const key = toDateKey(viewDate);
  const todayKey = toDateKey(new Date());
  const diff = Math.round((new Date(key) - new Date(todayKey)) / 86400000);
  $('dayLabel').textContent = diff === 0 ? 'Today' : diff === 1 ? 'Tomorrow' : diff === -1 ? 'Yesterday' : viewDate.toLocaleDateString('en-IN', { weekday: 'long' });
  $('dayFull').textContent = viewDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

  const today = classes.filter((c) => c.date === key).sort((a, b) => a.start.localeCompare(b.start));
  const ul = $('list');
  if (!today.length) {
    ul.innerHTML = '<li class="empty">No classes on this day</li>';
    return;
  }
  ul.innerHTML = today.map((c) => {
    const s = getStatus(c);
    return `<li class="item ${s}" data-id="${c.id}">
      <div class="t">${format12(c.start)}<br>${format12(c.end)}</div>
      <div class="info"><div class="n">${c.name}</div><div class="r">${c.room}</div></div>
      <span class="badge">${s.toUpperCase()}</span>
      <button class="del" data-del="${c.id}" title="Delete">&times;</button>
    </li>`;
  }).join('');
}

function refreshStatuses(now) {
  document.querySelectorAll('.item').forEach((el) => {
    const c = classes.find((x) => x.id == el.dataset.id);
    if (!c) return;
    const s = getStatus(c, now);
    if (!el.classList.contains(s)) {
      el.className = `item ${s}`;
      el.querySelector('.badge').textContent = s.toUpperCase();
    }
  });
}

// ---------- Events ----------
$('prev').onclick = () => { viewDate.setDate(viewDate.getDate() - 1); renderList(); };
$('next').onclick = () => { viewDate.setDate(viewDate.getDate() + 1); renderList(); };
$('today').onclick = () => { viewDate = new Date(); renderList(); };

$('list').addEventListener('click', (e) => {
  const id = e.target.dataset.del;
  if (!id) return;
  classes = classes.filter((c) => c.id != id);
  saveClasses(classes);
  renderList();
});

$('form').addEventListener('submit', (e) => {
  e.preventDefault();
  if ($('end').value <= $('start').value) return showToast('End time must be after start time');
  classes.push({
    id: Date.now(),
    name: $('name').value.trim(),
    room: $('room').value.trim(),
    date: $('date').value,
    start: $('start').value,
    end: $('end').value
  });
  saveClasses(classes);
  viewDate = new Date($('date').value + 'T00:00:00');
  e.target.reset();
  $('date').value = toDateKey(viewDate);
  renderList();
  showToast('Class added!');
});

// setTimeout: hide toast after 2.5s
let toastTimer;
function showToast(msg) {
  $('toast').textContent = msg;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { $('toast').textContent = ''; }, 2500);
}

// ---------- Init ----------
$('date').value = toDateKey(new Date());
renderList();
tick();
setInterval(tick, 1000);

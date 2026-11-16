// utils.js - helper functions exported as ES6 module

export const pad = (n) => String(n).padStart(2, '0');

export function toDateKey(d) {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export function toDateTime(dateKey, time) {
  return new Date(`${dateKey}T${time}:00`);
}

export function format12(time) {
  const [h, m] = time.split(':').map(Number);
  const ap = h >= 12 ? 'PM' : 'AM';
  return `${pad(h % 12 || 12)}:${pad(m)} ${ap}`;
}

export function splitDuration(ms) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return {
    d: Math.floor(s / 86400),
    h: Math.floor((s % 86400) / 3600),
    m: Math.floor((s % 3600) / 60),
    s: s % 60
  };
}

export function getStatus(cls, now = new Date()) {
  const start = toDateTime(cls.date, cls.start);
  const end = toDateTime(cls.date, cls.end);
  if (now < start) return 'upcoming';
  if (now <= end) return 'live';
  return 'done';
}

# Experiment No. 9

**Student Name:** Atharv Lulekar
**PRN:** 24070521036

---

## Experiment Title
Browser Object Model (BOM) & Storage APIs in JavaScript

---

## Software / Tools Required
1. Visual Studio Code
2. Google Chrome
3. HTML5
4. JavaScript (ES6)

---

## Task 9.1 — Theme Preferences (localStorage & sessionStorage)

### Aim
Demonstrate the use of `localStorage` and `sessionStorage` by creating a simple page with "Light Theme", "Dark Theme", and "Clear Preference" buttons.

### File Path
`9.1/index.html`

### Program Code

#### `9.1/index.html`
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Theme Preferences | Atharv Lulekar (24070521036)</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Roboto, Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            min-height: 100vh;
            padding: 40px 16px;
            background-color: #f1f5f9;
            color: #1e293b;
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        body.dark {
            background-color: #15181c;
            color: #f1f5f9;
        }

        .card {
            width: 100%;
            max-width: 480px;
            background-color: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 14px;
            padding: 32px 28px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
            transition: background-color 0.3s ease, border-color 0.3s ease;
        }

        body.dark .card {
            background-color: #24282c;
            border-color: #3a4048;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
        }

        .student-badge {
            display: inline-block;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 0.4px;
            padding: 6px 14px;
            border-radius: 50px;
            background-color: #e0e7ff;
            color: #3730a3;
            margin-bottom: 16px;
        }

        body.dark .student-badge {
            background-color: #312e81;
            color: #dbe4ff;
        }

        h1 {
            font-size: 24px;
            margin-bottom: 8px;
        }

        .subtitle {
            font-size: 14px;
            color: #64748b;
            margin-bottom: 24px;
        }

        body.dark .subtitle {
            color: #94a3b8;
        }

        .button-row {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
            margin-bottom: 24px;
        }

        button {
            padding: 10px 18px;
            font-size: 14px;
            font-weight: 600;
            font-family: inherit;
            border: 1px solid #cbd5e1;
            border-radius: 8px;
            background-color: #ffffff;
            color: #334155;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        button:hover {
            border-color: #6366f1;
            color: #4338ca;
            transform: translateY(-1px);
        }

        button.active {
            background-color: #4f46e5;
            border-color: #4f46e5;
            color: #ffffff;
        }

        button.clear-btn:hover {
            border-color: #ef4444;
            color: #dc2626;
        }

        body.dark button {
            background-color: #2b3035;
            border-color: #4b5563;
            color: #e2e8f0;
        }

        body.dark button.active {
            background-color: #6366f1;
            border-color: #6366f1;
            color: #ffffff;
        }

        .storage-panel {
            text-align: left;
            font-size: 13px;
            border-top: 1px solid #e2e8f0;
            padding-top: 18px;
        }

        body.dark .storage-panel {
            border-top-color: #3a4048;
        }

        .storage-panel h2 {
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: #64748b;
            margin-bottom: 10px;
        }

        .storage-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 12px;
            border-radius: 6px;
            background-color: #f8fafc;
            margin-bottom: 8px;
        }

        body.dark .storage-row {
            background-color: #1e2227;
        }

        .storage-row .key {
            font-weight: 600;
        }

        .storage-row .value {
            font-family: Consolas, monospace;
            padding: 2px 8px;
            border-radius: 4px;
            background-color: #e2e8f0;
            color: #334155;
        }

        body.dark .storage-row .value {
            background-color: #374151;
            color: #e2e8f0;
        }

        .hint {
            font-size: 12px;
            color: #94a3b8;
            margin-top: 12px;
            line-height: 1.5;
        }

        footer {
            margin-top: 20px;
            font-size: 12px;
            color: #94a3b8;
        }
    </style>
</head>

<body>

    <div class="card">
        <span class="student-badge">Atharv Lulekar &bull; PRN: 24070521036</span>

        <h1>Theme Preferences</h1>
        <p class="subtitle">Using localStorage and sessionStorage to save user preferences.</p>

        <div class="button-row">
            <button id="lightBtn" onclick="setTheme('light')">Light Theme</button>
            <button id="darkBtn" onclick="setTheme('dark')">Dark Theme</button>
            <button class="clear-btn" onclick="clearPreference()">Clear Preference</button>
        </div>

        <div class="storage-panel">
            <h2>Current Stored Values</h2>

            <div class="storage-row">
                <span class="key">localStorage &rarr; theme</span>
                <span class="value" id="localValue">not set</span>
            </div>

            <div class="storage-row">
                <span class="key">sessionStorage &rarr; sessionTheme</span>
                <span class="value" id="sessionValue">not set</span>
            </div>

            <p class="hint">
                Reload the page &mdash; the theme returns from <strong>localStorage</strong>.
                Open this page in a new tab &mdash; <strong>sessionStorage</strong> starts empty again.
            </p>
        </div>

        <footer>Experiment 9.1 &bull; Atharv Lulekar (24070521036)</footer>
    </div>

    <script>
        function setTheme(theme) {
            if (theme === 'dark') {
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }

            localStorage.setItem('theme', theme);

            sessionStorage.setItem('sessionTheme', theme);

            showStoredValues();
        }

        function clearPreference() {
            localStorage.removeItem('theme');
            sessionStorage.removeItem('sessionTheme');
            document.body.classList.remove('dark');

            showStoredValues();
        }

        function showStoredValues() {
            var saved = localStorage.getItem('theme');
            var sessionSaved = sessionStorage.getItem('sessionTheme');

            document.getElementById('localValue').textContent = saved || 'not set';
            document.getElementById('sessionValue').textContent = sessionSaved || 'not set';

            document.getElementById('lightBtn').classList.toggle('active', saved === 'light');
            document.getElementById('darkBtn').classList.toggle('active', saved === 'dark');
        }

        window.onload = function () {
            var saved = localStorage.getItem('theme');
            if (saved === 'dark') {
                document.body.classList.add('dark');
            }

            showStoredValues();
        };
    </script>

</body>

</html>
```

### Storage APIs Used

| API / Method | Purpose |
|---|---|
| `localStorage.setItem()` | Saves the theme preference persistently across browser sessions. |
| `sessionStorage.setItem()` | Saves the theme preference for the current tab/session only. |
| `localStorage.getItem()` | Retrieves the saved theme on page load to automatically apply it. |
| `localStorage.removeItem()` | Deletes the saved theme data when clearing preferences. |

### Output
- Clicking "Dark Theme" changes the page background and saves "dark" to both `localStorage` and `sessionStorage`.
- Refreshing the page automatically restores the Dark Theme by reading from `localStorage`.
- Clicking "Clear Preference" removes the keys from both storages and resets the theme.
- The live "Current Stored Values" panel shows exactly what each storage holds, and the page header displays the student name (Atharv Lulekar) and PRN (24070521036).

---

## Task 9.2 — Seminar Schedule Planner (Storage & Alerts)

### Aim
Create an HTML table acting as a Schedule Planner for Seminars. Clicking on any schedule row should display an Alert Box with the details and save the selected slot in `localStorage`. `sessionStorage` tracks all unique slots viewed in the current session.

### File Path
`9.1/9.2/index.html`

### Program Code

#### `9.1/9.2/index.html`
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Practical 9.2: Schedule Planner | Atharv Lulekar (24070521036)</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            background-color: #f4f6f9;
            color: #212529;
            line-height: 1.6;
            padding-bottom: 40px;
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        body.dark {
            background-color: #1a1d20;
            color: #f8f9fa;
        }

        body.dark .main-container {
            background-color: transparent;
        }

        body.dark .table-wrapper,
        body.dark .storage-card {
            background-color: #24282c;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
        }

        body.dark .schedule-table th,
        body.dark .schedule-table td {
            border-color: #495057;
        }

        body.dark .schedule-table .th-main,
        body.dark .schedule-table .th-sub,
        body.dark .schedule-table .th-time,
        body.dark .schedule-table .day-cell {
            background-color: #343a40;
            color: #f8f9fa;
        }

        body.dark .schedule-table .topic-cell {
            background-color: #2b3035;
            color: #f8f9fa;
        }

        body.dark .schedule-table .topic-cell:hover {
            background-color: #3d444b;
        }

        body.dark .storage-card h2 {
            color: #f8f9fa;
        }

        .top-bar {
            display: flex;
            justify-content: flex-end;
            padding: 12px 24px;
            background-color: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(8px);
            border-bottom: 1px solid #e2e8f0;
        }

        body.dark .top-bar {
            background-color: rgba(36, 40, 44, 0.8);
            border-bottom-color: #343a40;
        }

        .theme-controls {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            font-weight: 500;
        }

        .theme-btn {
            padding: 6px 12px;
            font-size: 13px;
            border-radius: 6px;
            border: 1px solid #cbd5e1;
            background-color: #ffffff;
            color: #334155;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .theme-btn:hover {
            background-color: #f1f5f9;
            border-color: #94a3b8;
        }

        body.dark .theme-btn {
            background-color: #2b3035;
            color: #e2e8f0;
            border-color: #4b5563;
        }

        body.dark .theme-btn:hover {
            background-color: #374151;
        }

        .main-container {
            max-width: 860px;
            margin: 30px auto;
            padding: 0 20px;
        }

        .header {
            text-align: center;
            margin-bottom: 28px;
        }

        .header h1 {
            font-size: 26px;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 8px;
        }

        body.dark .header h1 {
            color: #f1f5f9;
        }

        .header .subtitle {
            font-size: 15px;
            color: #64748b;
        }

        body.dark .header .subtitle {
            color: #94a3b8;
        }

        .student-badge {
            display: inline-block;
            margin-top: 12px;
            padding: 6px 16px;
            border-radius: 50px;
            font-size: 13px;
            font-weight: 600;
            background-color: #e0e7ff;
            color: #3730a3;
        }

        body.dark .student-badge {
            background-color: #312e81;
            color: #dbe4ff;
        }

        .page-footer {
            margin-top: 24px;
            text-align: center;
            font-size: 12px;
            color: #94a3b8;
        }

        .table-wrapper {
            background-color: #ffffff;
            padding: 24px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
            margin-bottom: 28px;
            overflow-x: auto;
        }

        .schedule-table {
            width: 100%;
            border-collapse: collapse;
            text-align: center;
            border: 2px solid #2d3748;
        }

        .schedule-table th,
        .schedule-table td {
            border: 1.5px solid #2d3748;
            padding: 12px 14px;
            font-size: 15px;
            vertical-align: middle;
        }

        .schedule-table th {
            background-color: #e2e8f0;
            font-weight: 700;
            color: #1e293b;
        }

        .schedule-table .th-main {
            font-size: 16px;
            padding: 10px;
        }

        .schedule-table .th-sub {
            font-size: 15px;
            padding: 8px;
        }

        .schedule-table .th-time {
            font-size: 14px;
            padding: 6px;
        }

        .schedule-table .day-cell {
            font-weight: 600;
            background-color: #f8fafc;
            color: #1e293b;
            width: 15%;
        }

        .bg-yellow {
            background-color: #e8ec98 !important;
            color: #212529 !important;
            font-weight: 500;
        }

        .bg-purple {
            background-color: #a4a9f3 !important;
            color: #212529 !important;
            font-weight: 500;
        }

        .bg-green {
            background-color: #b9edba !important;
            color: #212529 !important;
            font-weight: 500;
        }

        .topic-cell {
            background-color: #ffffff;
            color: #1e293b;
            cursor: pointer;
            text-align: center;
            font-weight: 500;
            transition: all 0.2s ease;
            position: relative;
        }

        .topic-cell:hover {
            background-color: #eff6ff !important;
            color: #1d4ed8 !important;
            font-weight: 600;
            transform: scale(1.01);
            box-shadow: inset 0 0 0 2px #3b82f6;
        }

        .topic-cell.active-selected {
            outline: 3px solid #2563eb;
            background-color: #dbeafe !important;
            color: #1e40af !important;
            font-weight: 700;
        }

        .storage-card {
            background-color: #ffffff;
            padding: 24px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
        }

        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 12px;
        }

        body.dark .card-header {
            border-bottom-color: #343a40;
        }

        .card-header h2 {
            font-size: 18px;
            font-weight: 600;
            color: #1e293b;
        }

        .badge {
            font-size: 12px;
            font-weight: 600;
            padding: 4px 10px;
            border-radius: 20px;
            background-color: #e2e8f0;
            color: #64748b;
        }

        .badge.saved {
            background-color: #dcfce7;
            color: #166534;
        }

        .saved-details {
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 16px;
            margin-bottom: 20px;
        }

        body.dark .saved-details {
            background-color: #1e2227;
            border-color: #374151;
        }

        .saved-details.empty-state p {
            color: #94a3b8;
            font-style: italic;
            text-align: center;
        }

        .saved-info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }

        .saved-info-item {
            display: flex;
            flex-direction: column;
        }

        .saved-info-item .info-label {
            font-size: 12px;
            font-weight: 600;
            color: #64748b;
            text-transform: uppercase;
        }

        .saved-info-item .info-value {
            font-size: 15px;
            font-weight: 600;
            color: #0f172a;
        }

        body.dark .saved-info-item .info-value {
            color: #f1f5f9;
        }

        .action-buttons {
            display: flex;
            gap: 12px;
            justify-content: flex-end;
        }

        .btn {
            padding: 9px 18px;
            font-size: 14px;
            font-weight: 500;
            border-radius: 6px;
            cursor: pointer;
            border: none;
            transition: all 0.2s ease;
        }

        .btn-danger {
            background-color: #ef4444;
            color: #ffffff;
        }

        .btn-danger:hover {
            background-color: #dc2626;
        }

        .btn-secondary {
            background-color: #64748b;
            color: #ffffff;
        }

        .btn-secondary:hover {
            background-color: #475569;
        }

        @media (max-width: 650px) {

            .schedule-table th,
            .schedule-table td {
                padding: 8px 6px;
                font-size: 13px;
            }

            .saved-info-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>

<body>

    <div class="top-bar">
        <div class="theme-controls">
            <span>Theme: </span>
            <button class="theme-btn" onclick="setTheme('light')">Light</button>
            <button class="theme-btn" onclick="setTheme('dark')">Dark</button>
            <button class="theme-btn clear-theme-btn" onclick="clearThemePreference()">Reset Theme</button>
        </div>
    </div>

    <div class="main-container">
        <header class="header">
            <h1>Seminar Schedule Planner</h1>
            <p class="subtitle">Click on any seminar topic to show the Alert Box and save preference in Local Storage.
            </p>
            <span class="student-badge">Atharv Lulekar &bull; PRN: 24070521036</span>
        </header>

        <div class="table-wrapper">
            <table class="schedule-table" id="scheduleTable">
                <thead>
                    <tr>
                        <th rowspan="3" class="th-main">Day</th>
                        <th colspan="3" class="th-main">Seminar</th>
                    </tr>
                    <tr>
                        <th colspan="2" class="th-sub">Schedule</th>
                        <th rowspan="2" class="th-sub">Topic</th>
                    </tr>
                    <tr>
                        <th class="th-time">Begin</th>
                        <th class="th-time">End</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="2" class="day-cell">Monday</td>
                        <td rowspan="2" class="time-cell bg-yellow">8:00 a.m.</td>
                        <td rowspan="2" class="time-cell bg-purple">5:00 p.m.</td>
                        <td class="topic-cell" data-day="Monday" data-begin="8:00 a.m." data-end="5:00 p.m."
                            data-topic="Introduction to XML">
                            Introduction to XML
                        </td>
                    </tr>
                    <tr>
                        <td class="topic-cell" data-day="Monday" data-begin="8:00 a.m." data-end="5:00 p.m."
                            data-topic="Validity: DTD and Relax NG">
                            Validity: DTD and Relax NG
                        </td>
                    </tr>

                    <tr>
                        <td rowspan="3" class="day-cell">Tuesday</td>
                        <td class="time-cell bg-yellow">8:00 a.m.</td>
                        <td class="time-cell bg-yellow">11:00 a.m.</td>
                        <td rowspan="2" class="topic-cell" data-day="Tuesday" data-begin="8:00 a.m."
                            data-end="2:00 p.m." data-topic="XPath">
                            XPath
                        </td>
                    </tr>
                    <tr>
                        <td class="time-cell bg-green">11:00 a.m.</td>
                        <td class="time-cell bg-green">2:00 p.m.</td>
                    </tr>
                    <tr>
                        <td class="time-cell bg-green">2:00 p.m.</td>
                        <td class="time-cell bg-purple">5:00 p.m.</td>
                        <td class="topic-cell" data-day="Tuesday" data-begin="2:00 p.m." data-end="5:00 p.m."
                            data-topic="XSL Transformations">
                            XSL Transformations
                        </td>
                    </tr>

                    <tr>
                        <td class="day-cell">Wednesday</td>
                        <td class="time-cell bg-yellow">8:00 a.m.</td>
                        <td class="time-cell bg-green">12:00 p.m.</td>
                        <td class="topic-cell" data-day="Wednesday" data-begin="8:00 a.m." data-end="12:00 p.m."
                            data-topic="XSL Formatting Objects">
                            XSL Formatting Objects
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="storage-card">
            <div class="card-header">
                <h2>Storage Info</h2>
                <span id="storageBadge" class="badge">No Preference Saved</span>
            </div>

            <p style="font-size:13px; color:#64748b; margin-bottom:10px;">
                <strong>localStorage</strong> — persists after closing the browser &nbsp;|&nbsp;
                <strong>sessionStorage</strong> — clears when the tab is closed
            </p>

            <div id="savedDetails" class="saved-details empty-state">
                <p>No seminar selected yet. Click any seminar above to trigger an alert and save it to Local Storage.
                </p>
            </div>

            <div class="saved-details" style="margin-top:12px;">
                <strong style="font-size:13px; color:#64748b; text-transform:uppercase;">sessionStorage — Viewed this
                    session:</strong>
                <p id="sessionViewed" style="margin-top:6px; font-size:14px; color:#334155;">None</p>
            </div>

            <div class="action-buttons">
                <button id="clearStorageBtn" class="btn btn-danger" onclick="clearSavedSchedule()">Clear Saved
                    Schedule</button>
                <button class="btn btn-secondary" onclick="reloadFromStorage()">Reload from Storage</button>
            </div>
        </div>

        <p class="page-footer">Experiment 9.2 &bull; Submitted by Atharv Lulekar (PRN: 24070521036)</p>
    </div>

    <script>
        const STORAGE_KEY = 'selectedSeminar';
        const THEME_KEY = 'themePreference';

        document.addEventListener('DOMContentLoaded', () => {
            initTheme();
            initTableClickEvents();
            renderSavedSchedule();
        });

        function initTableClickEvents() {
            const topicCells = document.querySelectorAll('.topic-cell');
            topicCells.forEach(cell => {
                cell.addEventListener('click', () => {
                    const day = cell.getAttribute('data-day');
                    const begin = cell.getAttribute('data-begin');
                    const end = cell.getAttribute('data-end');
                    const topic = cell.getAttribute('data-topic');

                    alert(
                        'Seminar Schedule Details:\n' +
                        '------------------------------------\n' +
                        'Day     : ' + day + '\n' +
                        'Time    : ' + begin + ' to ' + end + '\n' +
                        'Topic   : ' + topic + '\n' +
                        '------------------------------------\n' +
                        'Saved to Local Storage!'
                    );

                    const scheduleData = {
                        day: day,
                        begin: begin,
                        end: end,
                        topic: topic,
                        savedAt: new Date().toLocaleString()
                    };

                    localStorage.setItem(STORAGE_KEY, JSON.stringify(scheduleData));

                    var viewed = JSON.parse(sessionStorage.getItem('viewedTopics') || '[]');
                    if (viewed.indexOf(topic) === -1) viewed.push(topic);
                    sessionStorage.setItem('viewedTopics', JSON.stringify(viewed));

                    highlightSelectedCell(topic);
                    renderSavedSchedule();
                });
            });
        }

        function renderSavedSchedule() {
            const savedDataRaw = localStorage.getItem(STORAGE_KEY);
            const savedDetailsContainer = document.getElementById('savedDetails');
            const storageBadge = document.getElementById('storageBadge');

            if (!savedDataRaw) {
                savedDetailsContainer.className = 'saved-details empty-state';
                savedDetailsContainer.innerHTML = '<p>No seminar selected yet. Click any seminar above to trigger an alert and save it to Local Storage.</p>';
                storageBadge.className = 'badge';
                storageBadge.textContent = 'No Preference Saved';
                clearHighlight();
                return;
            }

            try {
                const data = JSON.parse(savedDataRaw);

                savedDetailsContainer.className = 'saved-details';
                savedDetailsContainer.innerHTML =
                    '<div class="saved-info-grid">' +
                    '<div class="saved-info-item"><span class="info-label">Day:</span><span class="info-value">' + data.day + '</span></div>' +
                    '<div class="saved-info-item"><span class="info-label">Time Schedule:</span><span class="info-value">' + data.begin + ' - ' + data.end + '</span></div>' +
                    '<div class="saved-info-item" style="grid-column: span 2;"><span class="info-label">Topic:</span><span class="info-value">' + data.topic + '</span></div>' +
                    '<div class="saved-info-item" style="grid-column: span 2;"><span class="info-label">Saved At:</span><span class="info-value" style="font-size: 13px; color: #64748b;">' + data.savedAt + '</span></div>' +
                    '</div>';

                storageBadge.className = 'badge saved';
                storageBadge.textContent = 'Saved in LocalStorage';

                highlightSelectedCell(data.topic);
            } catch (e) {
                console.error('Error parsing stored schedule data:', e);
            }

            var viewed = JSON.parse(sessionStorage.getItem('viewedTopics') || '[]');
            var sessionEl = document.getElementById('sessionViewed');
            if (sessionEl) sessionEl.textContent = viewed.length ? viewed.join(', ') : 'None';
        }

        function highlightSelectedCell(topicName) {
            clearHighlight();
            const topicCells = document.querySelectorAll('.topic-cell');
            topicCells.forEach(cell => {
                if (cell.getAttribute('data-topic') === topicName) {
                    cell.classList.add('active-selected');
                }
            });
        }

        function clearHighlight() {
            const topicCells = document.querySelectorAll('.topic-cell');
            topicCells.forEach(cell => {
                cell.classList.remove('active-selected');
            });
        }

        function clearSavedSchedule() {
            const existing = localStorage.getItem(STORAGE_KEY);
            if (existing) {
                localStorage.removeItem(STORAGE_KEY);
                renderSavedSchedule();
                alert('Saved seminar schedule removed from Local Storage.');
            } else {
                alert('No schedule is currently saved in Local Storage.');
            }
        }

        function reloadFromStorage() {
            renderSavedSchedule();
            alert('Checked and reloaded latest state from Local Storage.');
        }

        function setTheme(theme) {
            if (theme === 'dark') {
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }
            localStorage.setItem(THEME_KEY, theme);
            sessionStorage.setItem('sessionTheme', theme);
        }

        function clearThemePreference() {
            localStorage.removeItem(THEME_KEY);
            sessionStorage.removeItem('sessionTheme');
            document.body.classList.remove('dark');
            alert('Theme preference reset to default.');
        }

        function initTheme() {
            const savedTheme = localStorage.getItem(THEME_KEY);
            if (savedTheme === 'dark') {
                document.body.classList.add('dark');
            }
        }

    </script>
</body>

</html>
```

### Features Demonstrated
- DOM querying and event binding using `document.querySelectorAll()` and `addEventListener()`.
- Reading custom data attributes (`data-day`, `data-topic`) from clicked elements.
- Saving objects to `localStorage` using `JSON.stringify()`.
- Parsing strings back to objects with `JSON.parse()` for rendering UI dynamically based on stored values.
- Array manipulation logic to track uniquely viewed topics in `sessionStorage` without duplicates.

### Output
- A styled, centered Schedule Planner table displays various seminars.
- Clicking any topic row shows a `window.alert()` with details.
- The clicked topic is saved to `localStorage` and highlighted in the table.
- A "Storage Info" section dynamically reflects the saved data (survives reload) and tracks all clicked topics within the current session via `sessionStorage`.
- The page header and footer display the student name (Atharv Lulekar) and PRN (24070521036).

---

## Result / Conclusion

The tasks were completed successfully:
- **Task 9.1** covered basic theme preference saving, demonstrating the difference between `localStorage` (persistent) and `sessionStorage` (per session).
- **Task 9.2** applied these storage APIs to a practical scenario, building an interactive schedule table that saves the user's selected slot and tracks their viewed topics during a session, complete with JSON parsing and DOM manipulation based on stored state.

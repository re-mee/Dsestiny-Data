let activeButton = null;

// Attach click handlers to all data buttons
document.querySelectorAll('[data-key]').forEach(btn => {
    btn.addEventListener('click', async () => {
        const output = document.getElementById('output');
        
        // If clicking the same button, toggle visibility
        if (activeButton === btn) {
            output.classList.toggle('hidden');
            return;
        }
        
        // Otherwise, load new data and show it
        const key = btn.dataset.key;
        const type = btn.dataset.type || 'enums';
        
        output.classList.remove('hidden');
        activeButton = btn;
        await loadData(key, type);
    });
});

async function loadData(key, type = 'enums') {
    const output = document.getElementById('output');
    output.innerHTML = '';

    try {
        let basePath = window.location.pathname;
        if (!basePath.endsWith('/')) basePath += '/';
        // Remove index.html if present
        basePath = basePath.replace(/index\.html$/, '');
        const url = basePath + `../data/${type}/${key}.json`;
        const res = await fetch(url);

        if (!res.ok) {
            const txt = await res.text();
            output.textContent = `Error: ${res.status} ${res.statusText}\nResponse:\n${txt}`;
            return;
        }

        const data = await res.json();
        renderJSON(output, data);
    } catch (err) {
        output.textContent = 'Fetch error: ' + (err && err.message ? err.message : String(err));
    }
}

function renderJSON(container, data) {
    container.appendChild(renderNode(null, data));
}

function getType(value) {
    if (value === null) return 'null';
    if (Array.isArray(value)) return 'array';
    if (typeof value === 'object') return 'object';
    return typeof value;
}

function renderNode(key, value) {
    const type = getType(value);
    if (type === 'object' || type === 'array') {
        const wrapper = document.createElement('div');
        wrapper.className = 'json-node json-' + type;

        const header = document.createElement('div');
        header.className = 'json-header';

        const toggle = document.createElement('button');
        toggle.className = 'json-toggle';
        toggle.setAttribute('aria-expanded', 'true');
        toggle.textContent = '▾';
        header.appendChild(toggle);

        if (key !== null) {
            const keySpan = document.createElement('span');
            keySpan.className = 'json-key';
            keySpan.textContent = key;
            header.appendChild(keySpan);
            const colon = document.createElement('span');
            colon.className = 'json-colon';
            colon.textContent = ':';
            header.appendChild(colon);
        }

        const summary = document.createElement('span');
        summary.className = 'json-summary';
        const count = type === 'array' ? value.length : Object.keys(value).length;
        summary.textContent = type === 'array' ? `Array(${count})` : `Object(${count})`;
        header.appendChild(summary);

        wrapper.appendChild(header);

        const children = document.createElement('div');
        children.className = 'json-children';
        children.style.display = 'block';

        if (type === 'array') {
            value.forEach((v, i) => {
                children.appendChild(renderNode(i, v));
            });
        } else {
            Object.keys(value).forEach(k => {
                children.appendChild(renderNode(k, value[k]));
            });
        }

        toggle.addEventListener('click', () => {
            const isCollapsed = children.style.display === 'none';
            children.style.display = isCollapsed ? 'block' : 'none';
            toggle.textContent = isCollapsed ? '▾' : '▸';
            toggle.setAttribute('aria-expanded', String(isCollapsed));
        });

        wrapper.appendChild(children);
        return wrapper;
    } else {
        const row = document.createElement('div');
        row.className = 'json-item';
        if (key !== null) {
            const keySpan = document.createElement('span');
            keySpan.className = 'json-key';
            keySpan.textContent = key;
            row.appendChild(keySpan);

            const colon = document.createElement('span');
            colon.className = 'json-colon';
            colon.textContent = ':';
            row.appendChild(colon);
        }

        const valSpan = document.createElement('span');
        valSpan.className = 'json-value json-' + (type === 'null' ? 'null' : type);
        if (type === 'string') {
            valSpan.textContent = `"${value}"`;
        } else if (type === 'null') {
            valSpan.textContent = 'null';
        } else {
            valSpan.textContent = String(value);
        }
        row.appendChild(valSpan);
        return row;
    }
}
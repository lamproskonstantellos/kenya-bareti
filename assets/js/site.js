/* BARETI Module 1, documentation site.
   Plain JavaScript, no library. All tables and charts are built from the data
   in data/ (report_tables.json, kahoot_results.json, site_config.json).
   data/data.js holds the same data as JavaScript objects, so that the pages
   also work when they are opened from the disk. */

(function () {
  'use strict';

  var DATA = window.BARETI_DATA || {};
  var RED = '#E20031';
  var GREY = '#68737E';

  /* ---------- small helpers ---------- */

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function cfg(path) {
    var o = DATA.config;
    path.split('.').forEach(function (k) { o = (o == null) ? undefined : o[k]; });
    return o;
  }
  function table(no) {
    var list = (DATA.tables && DATA.tables.tables) || [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].caption.indexOf('Table ' + no + ':') === 0) { return list[i]; }
    }
    return null;
  }
  function game(id) {
    var list = (DATA.kahoot && DATA.kahoot.games) || [];
    for (var i = 0; i < list.length; i++) { if (list[i].id === id) { return list[i]; } }
    return null;
  }
  function isNum(s) { return /^[+\-]?\d[\d,.]*$/.test(String(s).trim()); }
  function toNum(s) { return parseFloat(String(s).replace(/,/g, '').replace('+', '')); }
  function pct(a, b) { return b ? Math.round(100 * a / b) : 0; }
  function longDate(iso) {
    var m = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var p = String(iso || '').split('-');
    if (p.length !== 3) { return iso || ''; }
    return parseInt(p[2], 10) + ' ' + m[parseInt(p[1], 10) - 1] + ' ' + p[0];
  }
  /* ---------- data: on a web server the JSON files are the source ---------- */

  function loadData() {
    if (location.protocol === 'file:' || !window.fetch) { return Promise.resolve(); }
    function get(name) {
      return fetch('data/' + name).then(function (r) {
        if (!r.ok) { throw new Error(name); }
        return r.json();
      });
    }
    return Promise.all([get('report_tables.json'), get('kahoot_results.json'), get('site_config.json')])
      .then(function (d) { DATA.tables = d[0]; DATA.kahoot = d[1]; DATA.config = d[2]; })
      .catch(function () { /* keep the copy from data.js */ });
  }

  /* ---------- tables ---------- */

  function renderTable(el) {
    var t = table(el.getAttribute('data-table'));
    if (!t) { return; }
    var cols = el.getAttribute('data-cols');
    cols = cols ? cols.split(',').map(Number) : t.header.map(function (_, i) { return i; });
    var sortable = el.hasAttribute('data-sortable');
    var numeric = cols.map(function (c) {
      return t.rows.every(function (r) { return isNum(r[c]); });
    });
    var caption = el.getAttribute('data-caption') || t.caption;
    var html = '<table class="' + esc(el.getAttribute('data-class') || '') + '"><caption>' + esc(caption) + '</caption><thead><tr>';
    cols.forEach(function (c, i) {
      var h = esc(t.header[c]);
      html += '<th scope="col"' + (numeric[i] ? ' class="num"' : '') + (sortable ? ' aria-sort="none"' : '') + '>' +
        (sortable ? '<button type="button" data-col="' + i + '">' + h + '</button>' : h) + '</th>';
    });
    html += '</tr></thead><tbody>';
    t.rows.forEach(function (r) {
      var cls = (sortable && r[0] === 'Model') ? ' class="model"' : '';
      html += '<tr' + cls + '>';
      cols.forEach(function (c, i) {
        var v = esc(r[c]);
        if (i === 0) { html += '<th scope="row"' + (numeric[i] ? ' class="num"' : '') + '>' + v + '</th>'; }
        else { html += '<td data-label="' + esc(t.header[c]) + '"' + (numeric[i] ? ' class="num"' : '') + '>' + v + '</td>'; }
      });
      html += '</tr>';
    });
    html += '</tbody></table>';
    el.className = 'table-wrap';
    el.setAttribute('role', 'region');
    el.setAttribute('aria-label', caption);
    el.setAttribute('tabindex', '0');
    el.innerHTML = html;
    if (sortable) { makeSortable(el, numeric); }
  }

  function makeSortable(el, numeric) {
    var body = el.querySelector('tbody');
    all('thead button', el).forEach(function (btn) {
      btn.addEventListener('click', function () {
        var col = Number(btn.getAttribute('data-col'));
        var th = btn.parentNode;
        var dir = th.getAttribute('aria-sort') === 'ascending' ? 'descending' : 'ascending';
        all('thead th', el).forEach(function (h) { h.setAttribute('aria-sort', 'none'); });
        th.setAttribute('aria-sort', dir);
        var rows = all('tr', body);
        rows.sort(function (a, b) {
          var x = a.children[col].textContent, y = b.children[col].textContent, d;
          if (numeric[col]) { d = toNum(x) - toNum(y); } else { d = x.localeCompare(y); }
          return dir === 'ascending' ? d : -d;
        });
        rows.forEach(function (r) { body.appendChild(r); });
      });
    });
  }

  /* single cells of a report table inside running text: data-find="table,text of a cell in the row,column" */
  function fillCells() {
    all('[data-find]').forEach(function (el) {
      var p = el.getAttribute('data-find').split(',');
      var t = table(p[0]);
      if (!t) { return; }
      var row = t.rows.filter(function (r) { return r.indexOf(p[1]) !== -1; })[0];
      if (!row) { return; }
      var v = row[Number(p[2])];
      if (el.getAttribute('data-part') === 'number') {
        var m = String(v).match(/\d[\d,.]*/);
        v = m ? m[0] : v;
      }
      el.textContent = v;
    });
  }

  /* ---------- charts (inline SVG, horizontal bars) ---------- */

  var measurer = null;
  function textWidth(s, bold) {
    if (!measurer) { measurer = document.createElement('canvas').getContext('2d'); }
    measurer.font = (bold ? 'bold ' : '') + '14px Arial, Helvetica, sans-serif';
    return measurer.measureText(s).width;
  }
  function wrapText(s, max) {
    var words = String(s).split(' '), lines = [], cur = '';
    words.forEach(function (w) {
      var test = cur ? cur + ' ' + w : w;
      if (cur && textWidth(test, true) > max) { lines.push(cur); cur = w; } else { cur = test; }
    });
    if (cur) { lines.push(cur); }
    return lines;
  }

  /* rows: [{label, value, text, hi, tag}] */
  function barChart(rows, width, title, fixedMax) {
    var W = Math.max(240, Math.floor(width));
    var valueRoom = 14 + Math.max.apply(null, rows.map(function (r) { return textWidth(r.text || String(r.value), true); }));
    var barMax = W - valueRoom;
    var max = fixedMax || Math.max.apply(null, rows.map(function (r) { return r.value; })) || 1;
    var y = 4, out = '', alt = [];
    rows.forEach(function (r) {
      var label = r.label + (r.tag ? ' (' + r.tag + ')' : '');
      var lines = wrapText(label, W - 4);
      lines.forEach(function (ln) {
        y += 16;
        out += '<text x="0" y="' + y + '" font-size="14"' + (r.hi ? ' font-weight="bold"' : '') + '>' + esc(ln) + '</text>';
      });
      y += 6;
      var w = r.value > 0 ? Math.max(3, Math.round(barMax * r.value / max)) : 0;
      out += '<rect x="0" y="' + y + '" width="' + w + '" height="16" fill="' + (r.hi ? RED : GREY) + '"></rect>';
      if (!w) { out += '<rect x="0" y="' + y + '" width="1" height="16" fill="' + GREY + '"></rect>'; }
      out += '<text x="' + (w + 8) + '" y="' + (y + 13) + '" font-size="14" font-weight="bold">' + esc(r.text || String(r.value)) + '</text>';
      y += 16 + 12;
      alt.push(label + ': ' + (r.text || r.value));
    });
    return '<svg role="img" viewBox="0 0 ' + W + ' ' + y + '" width="' + W + '" height="' + y + '" aria-label="' +
      esc(title + '. ' + alt.join(', ') + '.') + '"><title>' + esc(title) + '</title>' + out + '</svg>';
  }

  var chartJobs = [];
  function addChart(holder, rowsFn, title, fixedMax) {
    var job = { holder: holder, rowsFn: rowsFn, title: title, width: 0, max: fixedMax };
    chartJobs.push(job);
    drawChart(job);
  }
  function drawChart(job) {
    var w = job.holder.clientWidth;
    if (!w || w === job.width) { return; }
    job.width = w;
    job.holder.innerHTML = barChart(job.rowsFn(), w, job.title, job.max);
  }
  function redrawCharts() { chartJobs.forEach(drawChart); }

  /* one Kahoot game: one chart per question */
  function renderGame(el) {
    var g = game(el.getAttribute('data-game'));
    if (!g) { return; }
    var isQuiz = g.type === 'quiz';
    el.className = 'charts';
    g.questions.forEach(function (q) {
      var box = document.createElement('div');
      box.className = 'chart';
      var right = 0;
      q.options.forEach(function (o) { if (o.correct) { right = o.count; } });
      var html = '<h4>' + esc(q.n + '. ' + q.question) + '</h4>' +
        '<p class="meta">' + esc(q.answered + ' answers') + '</p><div class="plot"></div>';
      if (isQuiz) {
        html += '<p class="result">' + esc('correct: ' + right + ' of ' + q.answered + ' (' + pct(right, q.answered) + '%)') + '</p>';
      }
      box.innerHTML = html;
      el.appendChild(box);
      addChart(box.querySelector('.plot'), function () {
        return q.options.map(function (o) {
          return { label: o.text, value: o.count, hi: o.correct === true, tag: o.correct === true ? 'correct answer' : '' };
        });
      }, q.question);
    });
  }

  function fillGameSummary(el) {
    var g = game(el.getAttribute('data-game-summary'));
    if (!g) { return; }
    var sub = g.players + ' players, ' + g.questions.length + ' questions';
    if (g.type === 'quiz') {
      sub += ', ' + g.answers + ' answers given, ' + g.correct_answers + ' correct (' + pct(g.correct_answers, g.answers) + '%)';
    } else {
      sub += ', no correct answer';
    }
    el.innerHTML = esc(g.title) + '<span class="sub">' + esc(sub) + '</span>';
  }

  /* yearly cost of the ten plans, from Table 16 */
  function renderLabChart(el) {
    var t = table(16);
    if (!t) { return; }
    var cost = t.header.indexOf('Yearly cost');
    var title = 'Yearly cost of the nine plans and of the plan of the model, in USD billion';
    el.className = el.hasAttribute('data-half') ? 'chart' : 'chart full';
    el.innerHTML = '<h4>' + esc(title) + '</h4><p class="meta">Sorted by yearly cost. The lowest cost is at the top.</p><div class="plot"></div>' +
      '<p class="legend"><span class="sw" style="background:' + RED + '"></span>least-cost plan of the model <span class="sw" style="background:' + GREY + ';margin-left:14px"></span>plans of the participants</p>';
    addChart(el.querySelector('.plot'), function () {
      return t.rows.map(function (r) {
        var model = r[0] === 'Model';
        return { label: model ? 'Plan of the model' : 'Plan ' + r[0], value: toNum(r[cost]), text: r[cost], hi: model, tag: model ? 'least-cost plan' : '' };
      }).sort(function (a, b) { return a.value - b.value; });
    }, title);
  }

  /* one question of a Kahoot game: data-question="game id,question number" */
  function renderQuestion(el) {
    var p = el.getAttribute('data-question').split(',');
    var g = game(p[0]);
    var q = g && g.questions[Number(p[1]) - 1];
    if (!q) { return; }
    el.className = 'chart';
    el.innerHTML = '<h4>' + esc(q.question) + '</h4><p class="meta">' + esc(g.title + ', ' + q.answered + ' answers') + '</p><div class="plot"></div>';
    addChart(el.querySelector('.plot'), function () {
      return q.options.map(function (o) { return { label: o.text, value: o.count, hi: o.correct === true, tag: o.correct === true ? 'correct answer' : '' }; })
        .sort(function (a, b) { return b.value - a.value; });
    }, q.question);
  }

  /* one tile per quiz: the share of correct answers, the best known and the least known question */
  function renderQuizTiles(el) {
    var games = ((DATA.kahoot && DATA.kahoot.games) || []).filter(function (g) { return g.type === 'quiz'; });
    el.className = 'charts';
    games.forEach(function (g, i) {
      var best = null, worst = null;
      g.questions.forEach(function (q) {
        var c = 0;
        q.options.forEach(function (o) { if (o.correct) { c = o.count; } });
        var item = { q: q, c: c, share: c / q.answered };
        if (!best || item.share > best.share) { best = item; }
        if (!worst || item.share < worst.share) { worst = item; }
      });
      var title = g.title.replace(/^Day \d, /, '');
      var day = (g.title.match(/^Day \d/) || [''])[0];
      var box = document.createElement('div');
      box.className = 'chart quiz';
      box.innerHTML = '<p class="meta">' + esc(day + ', ' + g.players + ' players, ' + g.questions.length + ' questions') + '</p><h4>' + esc(title) + '</h4>' +
        '<p class="big">' + pct(g.correct_answers, g.answers) + '%<span> of the answers were correct</span></p><div class="plot"></div>' +
        '<p class="more"><a href="kahoot.html#quiz-' + (i + 1) + '">All questions of this quiz</a></p>';
      el.appendChild(box);
      addChart(box.querySelector('.plot'), function () {
        function row(kind, it) {
          return { label: kind + ': ' + it.q.question, value: pct(it.c, it.q.answered), text: it.c + ' of ' + it.q.answered + ' (' + pct(it.c, it.q.answered) + '%)', hi: kind === 'Best known' };
        }
        return [row('Best known', best), row('Least known', worst)];
      }, title + ', share of correct answers', 100);
    });
  }

  /* a bar chart from two columns of a report table: data-tablechart="table,label column,value column" */
  function renderTableChart(el) {
    var p = el.getAttribute('data-tablechart').split(',').map(Number);
    var t = table(p[0]);
    if (!t) { return; }
    var title = el.getAttribute('data-title') || t.caption.replace(/^Table \d+: /, '');
    el.className = 'chart';
    el.innerHTML = '<h4>' + esc(title) + '</h4><p class="meta">' + esc(el.getAttribute('data-meta') || '') + '</p><div class="plot"></div>';
    addChart(el.querySelector('.plot'), function () {
      var rows = t.rows.map(function (r) { return { label: r[p[1]], value: toNum(r[p[2]]), text: r[p[2]] }; });
      var top = Math.max.apply(null, rows.filter(function (r) { return !/^Other/.test(r.label); }).map(function (r) { return r.value; }));
      rows.forEach(function (r) { r.hi = r.value === top && !/^Other/.test(r.label); });
      return rows;
    }, title);
  }

  /* ---------- config-driven parts ---------- */

  function applyConfig() {
    all('[data-text]').forEach(function (el) {
      var v = cfg(el.getAttribute('data-text'));
      if (v == null || v === '') { return; }
      el.textContent = el.hasAttribute('data-date') ? longDate(v) : v;
    });
    all('[data-href]').forEach(function (el) {
      var v = cfg(el.getAttribute('data-href'));
      if (v) {
        el.setAttribute('href', v);
        if (el.hasAttribute('data-show-url')) { el.textContent = v; }
      } else { el.removeAttribute('href'); }
    });
    all('[data-if-filled]').forEach(function (el) { el.hidden = !cfg(el.getAttribute('data-if-filled')); });
    all('[data-if-empty]').forEach(function (el) { el.hidden = !!cfg(el.getAttribute('data-if-empty')); });
    all('[data-if-true]').forEach(function (el) { el.hidden = cfg(el.getAttribute('data-if-true')) !== true; });
    all('[data-if-false]').forEach(function (el) { el.hidden = cfg(el.getAttribute('data-if-false')) === true; });
    all('img[data-src-if-true]').forEach(function (el) {
      if (cfg(el.getAttribute('data-src-if-true')) === true) {
        el.src = el.getAttribute('data-src-alt');
        var z = el.closest('a.zoom');
        if (z) { z.setAttribute('href', el.getAttribute('data-src-alt')); }
      }
    });
    var names = (cfg('trainers') || []).map(function (t) { return t.name; });
    all('[data-trainer-names]').forEach(function (el) { if (names.length) { el.textContent = names.join(' and '); } });
    all('[data-organisers]').forEach(function (el) {
      var o = cfg('site.organisers') || [];
      if (o.length) { el.innerHTML = o.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join(''); }
    });
  }

  function renderDownloads(el) {
    var list = cfg('downloads') || [];
    var html = '<ul class="files">';
    list.forEach(function (d) {
      var link = d.file || d.url;
      html += '<li><span class="fmt">' + esc(d.format) + '</span><span class="what">' +
        (link ? '<a href="' + esc(link) + '"' + (d.file ? ' download' : ' rel="noopener"') + '>' + esc(d.name) + '</a>' : '<strong>' + esc(d.name) + '</strong>') +
        '<span>' + esc(d.content) + (link ? '' : ', available on request') + '</span></span></li>';
    });
    el.innerHTML = html + '</ul>';
  }

  /* the parts of a session with their activity, from Tables 3 to 6 of the report */
  function renderSteps(el) {
    var t = table(el.getAttribute('data-steps'));
    if (!t) { return; }
    var html = '<ol class="steps">';
    t.rows.forEach(function (r) {
      if (!r[2]) { return; }
      html += '<li><strong>' + esc(r[0]) + '</strong><span>' + esc(r[2]) + '</span></li>';
    });
    el.innerHTML = html + '</ol>';
  }

  /* the words of the Miro notes by theme, from Table 13 */
  function renderChips(el) {
    var t = table(el.getAttribute('data-chips'));
    if (!t) { return; }
    var html = '<ul class="cards c3 themes">';
    t.rows.forEach(function (r) {
      html += '<li class="card"><h4>' + esc(r[0]) + ' <span class="count">' + esc(r[1]) + '</span></h4><p class="chips">' +
        r[2].split(', ').map(function (w) { return '<span>' + esc(w) + '</span>'; }).join(' ') + '</p></li>';
    });
    el.innerHTML = html + '</ul>';
  }

  /* the green and pink notes of the tables, from Table 14 */
  function renderNotes(el) {
    var t = table(el.getAttribute('data-notes'));
    if (!t) { return; }
    var html = '<ul class="cards c3 pairs">';
    t.rows.forEach(function (r) {
      html += '<li class="card"><h4>Table ' + esc(r[0]) + '</h4><p class="sticky green"><span>Green note</span>' + esc(r[1]) +
        '</p><p class="sticky pink"><span>Pink note</span>' + esc(r[2]) + '</p></li>';
    });
    el.innerHTML = html + '</ul>';
  }

  /* kinds of data and their owners, from Table 15 */
  function renderDataCards(el) {
    var t = table(el.getAttribute('data-datacards'));
    if (!t) { return; }
    var html = '<ul class="cards c4 owners">';
    t.rows.forEach(function (r) {
      html += '<li class="card"><h4>' + esc(r[0]) + '</h4><dl><dt>' + esc(t.header[1]) + '</dt><dd>' + esc(r[1]) + '</dd><dt>' +
        esc(t.header[2]) + '</dt><dd>' + esc(r[2]) + '</dd></dl></li>';
    });
    el.innerHTML = html + '</ul>';
  }

  /* tabs: one panel per Kahoot game */
  function setupTabs() {
    var tabs = all('.tab');
    if (!tabs.length) { return; }
    function show(id, focus) {
      var found = false;
      tabs.forEach(function (t) { if (t.getAttribute('data-tab') === id) { found = true; } });
      if (!found) { id = tabs[0].getAttribute('data-tab'); }
      tabs.forEach(function (t) {
        var on = t.getAttribute('data-tab') === id;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.setAttribute('tabindex', on ? '0' : '-1');
        document.getElementById(t.getAttribute('data-tab')).hidden = !on;
        if (on && focus) { t.focus(); }
      });
      redrawCharts();
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () {
        show(t.getAttribute('data-tab'));
        if (history.replaceState) { history.replaceState(null, '', '#' + t.getAttribute('data-tab')); }
      });
      t.addEventListener('keydown', function (e) {
        var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (d) { show(tabs[(i + d + tabs.length) % tabs.length].getAttribute('data-tab'), true); }
      });
    });
    window.addEventListener('hashchange', function () { show(location.hash.slice(1)); });
    show(location.hash.slice(1));
  }

  function renderTrainers() {
    var list = cfg('trainers') || [];
    all('[data-trainer]').forEach(function (el) {
      var t = list[Number(el.getAttribute('data-trainer'))];
      if (!t) { return; }
      var profile = el.querySelector('[data-profile]');
      var slug = t.name.toLowerCase().replace(/[^a-z]+/g, '-');
      var contact = [];
      if (t.email) { contact.push('<dt>E-mail</dt><dd><a href="mailto:' + esc(t.email) + '">' + esc(t.email) + '</a></dd>'); }
      if (t.linkedin) { contact.push('<dt>LinkedIn</dt><dd><a href="' + esc(t.linkedin) + '" rel="noopener">' + esc(t.linkedin.replace(/^[a-z]+:\/\/(www\.)?/, '').replace(/\/$/, '')) + '</a></dd>'); }
      if (t.website) { contact.push('<dt>Website</dt><dd><a href="' + esc(t.website) + '" rel="noopener">' + esc(t.website.replace(/^[a-z]+:\/\//, '')) + '</a></dd>'); }
      var lines = (t.lines && t.lines.length) ? t.lines : [t.role];
      var html = '<div class="person"><img src="assets/img/portrait-' + esc(slug) + '.jpg" width="180" height="180" alt="Portrait of ' + esc(t.name) + '">' +
        '<div><h3>' + esc(t.name) + '</h3><ul class="lines">' + lines.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' +
        (profile ? profile.outerHTML : '') + '<dl>';
      if (t.affiliation && t.affiliation.length) { html += '<dt>Affiliation</dt><dd>' + t.affiliation.map(esc).join('<br>') + '</dd>'; }
      if (t.sessions && t.sessions.length) { html += '<dt>Sessions</dt><dd>' + t.sessions.map(esc).join('<br>') + '</dd>'; }
      html += contact.join('') + '</dl></div></div>';
      el.innerHTML = html;
    });
  }

  function renderTumTools(el) {
    var t = cfg('tum_open_source_tools');
    if (!t) { return; }
    var html = '<p>' + esc(t.intro) + '</p><ul class="cards c6">';
    (t.tools || []).forEach(function (x) {
      html += '<li class="card"><h3>' + esc(x.name) + '</h3><p>' + esc(x.description) + '</p><dl><dt>Licence</dt><dd>' + esc(x.license) + '</dd>' +
        (x.in_the_training ? '<dt>In the training</dt><dd>' + esc(x.in_the_training) + '</dd>' : '') + '</dl>' +
        (x.url ? '<p class="more"><a href="' + esc(x.url) + '" rel="noopener">Repository of ' + esc(x.name) + '</a></p>' : '') + '</li>';
    });
    html += '</ul>';
    if (t.organisation) {
      html += '<p style="margin-top:16px">All repositories of the chair: <a href="' + esc(t.organisation) + '" rel="noopener">' + esc(t.organisation.replace(/^[a-z]+:\/\//, '')) + '</a></p>';
    }
    el.innerHTML = html;
  }

  /* ---------- folding blocks and the lightbox ---------- */

  function setupFolds() {
    all('details.fold').forEach(function (d) { d.addEventListener('toggle', redrawCharts); });
    all('[data-fold-all]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var open = btn.getAttribute('data-fold-all') === 'open';
        var scope = btn.closest('section') || document;
        all('details.fold', scope).forEach(function (d) { d.open = open; });
        redrawCharts();
      });
    });
    /* a link to a folded block opens it */
    function openTarget() {
      var id = location.hash.slice(1);
      var el = id && document.getElementById(id);
      if (el && el.tagName === 'DETAILS') { el.open = true; redrawCharts(); el.scrollIntoView(); }
    }
    window.addEventListener('hashchange', openTarget);
    openTarget();
  }

  function setupLightbox() {
    var zooms = all('.zoom');
    if (!zooms.length || !window.HTMLDialogElement) { return; }
    var dlg = document.createElement('dialog');
    dlg.className = 'lightbox';
    dlg.innerHTML = '<div class="bar"><span></span><button type="button" class="btn">Close</button></div>';
    var big = document.createElement('img');
    document.body.appendChild(dlg);
    dlg.querySelector('button').addEventListener('click', function () { dlg.close(); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) { dlg.close(); } });
    zooms.forEach(function (z) {
      z.addEventListener('click', function (ev) {
        ev.preventDefault();
        var img = z.querySelector('img');
        big.src = z.getAttribute('href') || img.src;
        big.alt = img.alt;
        dlg.appendChild(big);
        dlg.querySelector('span').textContent = z.getAttribute('data-title') || '';
        dlg.showModal();
      });
    });
  }

  /* a note above every table that is wider than the screen */
  function scrollHints() {
    all('.table-wrap').forEach(function (w) {
      var wide = w.scrollWidth > w.clientWidth + 1;
      var prev = w.previousElementSibling;
      var has = prev && prev.className === 'note scroll-hint';
      if (wide && !has) {
        var p = document.createElement('p');
        p.className = 'note scroll-hint';
        p.textContent = 'The table is wider than the screen. Swipe or scroll it sideways.';
        w.parentNode.insertBefore(p, w);
      } else if (!wide && has) { prev.parentNode.removeChild(prev); }
    });
  }

  /* ---------- start ---------- */

  function start() {
    applyConfig();
    fillCells();
    all('[data-table]').forEach(renderTable);
    all('[data-game-summary]').forEach(fillGameSummary);
    all('[data-game]').forEach(renderGame);
    all('[data-labchart]').forEach(renderLabChart);
    all('[data-question]').forEach(renderQuestion);
    all('[data-quiz-tiles]').forEach(renderQuizTiles);
    all('[data-tablechart]').forEach(renderTableChart);
    all('[data-downloads]').forEach(renderDownloads);
    all('[data-steps]').forEach(renderSteps);
    all('[data-chips]').forEach(renderChips);
    all('[data-notes]').forEach(renderNotes);
    all('[data-datacards]').forEach(renderDataCards);
    all('[data-count="games"]').forEach(function (el) { el.textContent = ((DATA.kahoot && DATA.kahoot.games) || []).length; });
    all('[data-tum-tools]').forEach(renderTumTools);
    renderTrainers();
    setupFolds();
    setupTabs();
    setupLightbox();
    scrollHints();
    var timer = null;
    window.addEventListener('resize', function () {
      clearTimeout(timer);
      timer = setTimeout(function () { redrawCharts(); scrollHints(); }, 150);
    });
    document.documentElement.setAttribute('data-ready', '1');
  }

  function boot() { loadData().then(start); }
  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', boot); } else { boot(); }
})();

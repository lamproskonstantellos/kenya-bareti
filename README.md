# BARETI Module 1: Sustainable Energy Planning Training

This repository holds a small static website. It documents the training "BARETI Module 1: Sustainable Energy Planning Training", held on 10 and 11 November 2026 at the Ibis Hotel in Nairobi, Kenya.

Published site: https://lamproskonstantellos.github.io/kenya-bareti/

The site was made by the two trainers, Lampros Konstantellos and Tim Lorenz of the Technical University of Munich (TUM). It is the trainers' own documentation and not an official website of the organisers (bbw international and AHK Eastern Africa).

## Structure

- `index.html`, `sessions.html`, `kahoot.html`, `miro-and-lab.html`, `tools.html`, `downloads.html`, `agenda.html`, `team.html`, `404.html`: the pages
- `assets/css/style.css`, `assets/js/site.js`, `assets/img/`: styles, script and images
- `data/`: the data of the site as JSON, and `data.js` with the same data for use from the disk
- `downloads/`: the slides and the agenda
- `GITHUB_UPLOAD_GUIDE.md`: how to publish and update the site

## Where the data comes from

All text and all numbers come from the trainers' report on the two days.
`data/report_tables.json` holds the tables of the report that the site uses. `data/kahoot_results.json` holds the seven Kahoot games with the count per answer option and no player names. `data/site_config.json` holds names, links and contact details. The pages build their tables and charts from these files.

The site is plain HTML, CSS and JavaScript. It has no build step, loads nothing from other servers and sets no cookies.

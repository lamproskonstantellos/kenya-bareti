# How to publish the site with GitHub Pages

Repository name: `kenya-bareti`
Address of the site: https://lamproskonstantellos.github.io/kenya-bareti/

There are two ways. Variant A works in the browser, without the command line. Variant B uses git. Steps 1, 4 and the steps after it are the same for both.

## 1. Create the repository

1. Sign in at github.com as `lamproskonstantellos`.
2. Select the plus sign at the top right, then "New repository".
3. Repository name: `kenya-bareti`. Visibility: Public.
4. Do not tick "Add a README file". Do not add a .gitignore or a licence. The zip brings its own README.
5. Select "Create repository".

## 2. Variant A: upload in the browser

1. Unpack `kenya-bareti.zip`. You get one folder named `kenya-bareti`.
2. Open this folder. You upload its CONTENT, not the folder itself. After the upload, `index.html` must lie in the root of the repository, next to `README.md`.
3. On the page of the new, empty repository select "uploading an existing file". In a repository that already has files, select "Add file", then "Upload files".
4. Drag the content of the folder into the browser window: select everything inside `kenya-bareti` (Cmd+A in the Finder) and drag it onto the upload area. Chrome, Edge and Safari keep the subfolders `assets`, `data` and `downloads` with their structure.
5. Wait until all files are listed. Write a short message, for example "First version of the site", and select "Commit changes".

Limits of the browser upload:

- At most 100 files at a time. The site has 30 files, so one upload is enough.
- No file above 25 MB. The largest file of the site is the slide deck of Day 2 with about 7.5 MB.

If the browser does not take everything at once, upload folder by folder:

1. First the files of the root: the nine `.html` files, `README.md` and `GITHUB_UPLOAD_GUIDE.md`. Commit.
2. Then "Add file", "Upload files" again, and drag the folder `assets` as a whole. Commit.
3. The same for the folder `data`, and then for the folder `downloads`.
4. Always drag the folder itself, not its single files. Only then does GitHub keep the path, for example `assets/css/style.css`.

The file `.nojekyll`:

- This empty file lies in the root. It tells GitHub Pages to publish the files as they are.
- On a Mac the Finder hides files that start with a dot. Press Cmd+Shift+. (full stop) in the Finder window to show hidden files. Then `.nojekyll` appears and you can drag it with the rest.
- Check after the upload that `.nojekyll` is in the file list of the repository.
- If it is missing, create it on GitHub: "Add file", "Create new file", type `.nojekyll` as the name, leave the content empty, "Commit changes".

## 3. Variant B: upload with git

Unpack the zip, open the Terminal and go into the folder `kenya-bareti` (the folder that holds `index.html`). Then run:

```
cd path/to/kenya-bareti
git init
git add -A
git commit -m "First version of the site"
git branch -M main
git remote add origin https://github.com/lamproskonstantellos/kenya-bareti.git
git push -u origin main
```

`git add -A` also takes the hidden file `.nojekyll`. Check with `git status` before the commit that it is listed.

## 4. Switch on GitHub Pages

1. In the repository select "Settings", then "Pages" in the left menu.
2. Under "Build and deployment", Source: "Deploy from a branch".
3. Branch: `main`, folder: `/ (root)`. Select "Save".
4. The first build takes about one to two minutes, sometimes up to ten. Reload the page "Settings", "Pages". When the build is done, the address of the site appears at the top of this page ("Your site is live at"). The tab "Actions" shows the progress of the build.

## 5. The address of the site

https://lamproskonstantellos.github.io/kenya-bareti/

## 6. What you can still fill in

The settings are in `data/site_config.json`. The same values are in `data/data.js`, at the top, under "copy of site_config.json". Change BOTH files, with the same values. Online the pages read the JSON file. Opened from the disk they read `data.js`.

On GitHub you can edit a file in the browser: open the file, select the pencil, change the line, "Commit changes".

The share link of your OneDrive folder with the slide PDFs. Change the line

```
  "onedrive_shared_folder": ""
```

to

```
  "onedrive_shared_folder": "PASTE-THE-SHARE-LINK-HERE"
```

The two web apps of Tim Lorenz, once they have a permanent address. Change the lines

```
  "investment_simulation": "",
  "household_energy_lab": "",
```

to

```
  "investment_simulation": "PASTE-THE-ADDRESS-HERE",
  "household_energy_lab": "PASTE-THE-ADDRESS-HERE",
```

The page Tools then shows a link in the card of each app.

The password of the Miro board. The page Tools shows the link and the password as text. To hide the password, change the line

```
  "show_miro_password": true,
```

to

```
  "show_miro_password": false,
```

The password then still stands in the two data files. To take it out, also empty the line `"miro_password"`.

The date in the footer of every page:

```
  "last_update": "2026-11-26",
```

Keep the quotation marks and the commas as they are. A missing comma breaks the file.

## 7. Share a OneDrive folder with a link that anyone can view

1. Open OneDrive in the browser and find the folder `00_Shared_PDF_Slides`.
2. Select the folder, then "Share".
3. Open the link settings (the line that says who can use the link) and choose "Anyone with the link".
4. Set the permission to "Can view". Do not allow editing.
5. Select "Apply", then "Copy link".
6. Paste the link into `onedrive_shared_folder` as shown in step 6.

If `onedrive_shared_folder` is filled, the page Downloads shows one extra line with this link: "The slides in one OneDrive folder". If it is empty, the line does not appear.

## 8. Update the site later

Replace a download:

1. Open the folder `downloads` in the repository.
2. "Add file", "Upload files", and drag the new file. It must have exactly the same name as the old one. GitHub then replaces the old file.
3. "Commit changes".

Add or remove a download: change the list `"downloads"` in `data/site_config.json` and in `data/data.js`. Each entry has a name, a content line, a format and a file path.

Change a number or a text in a table or chart:

1. Change the value in the JSON file in `data/` (`report_tables.json` or `kahoot_results.json`).
2. Make the same change in `data/data.js`.
3. Commit both files.

Change a text of a page: edit the `.html` file and commit.

With git, the same in three commands:

```
git add -A
git commit -m "Update"
git push
```

After each commit GitHub builds the site again. This takes about one minute. If you still see the old version, reload the page with Cmd+Shift+R.

## 9. Check list after publishing

- [ ] The address https://lamproskonstantellos.github.io/kenya-bareti/ opens the overview with the group photo.
- [ ] Every page opens from the menu: Overview, Sessions, Kahoot, Miro and lab, Tools, Downloads, Agenda, Team.
- [ ] The tables and charts appear, for example the quizzes on the page Kahoot. If they are missing, check that the folder `data` and the file `.nojekyll` were uploaded.
- [ ] Every download on the page Downloads works: two slide decks and the agenda.
- [ ] The external links on the page Tools work: the Kenya Power Planning Lab and the Miro board, with its password.
- [ ] The links on the page Team work: e-mail, LinkedIn and website.
- [ ] A wrong address, for example `/kenya-bareti/abc.html`, shows the page "Page not found".
- [ ] The site looks right on a phone.

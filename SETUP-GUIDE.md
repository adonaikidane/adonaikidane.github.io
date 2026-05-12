# How to put your site on the internet — step by step

This guide walks you through everything from zero to live. No experience needed.

---

## Part 1: Get the tools (one time only)

### Step 1 — Create a GitHub account
1. Go to https://github.com
2. Click "Sign up"
3. Choose a username — use your real name or something clean like `adonaikidane`
4. Verify your email

### Step 2 — Install Git on your computer
Git is what lets your computer talk to GitHub.

**Mac:**
- Open Terminal (press Cmd + Space, type "Terminal", press Enter)
- Type this and press Enter:
  ```
  git --version
  ```
- If it asks you to install developer tools, click Install and wait
- If it shows a version number, you already have it ✓

**Windows:**
- Go to https://git-scm.com/download/win
- Download and run the installer
- Click "Next" through everything (defaults are fine)

### Step 3 — Tell Git who you are
Open Terminal (Mac) or Git Bash (Windows) and run these two commands,
swapping in your real name and email:

```
git config --global user.name "Adonai Kidane"
git config --global user.email "your@email.com"
```

---

## Part 2: Create your GitHub repository

A "repository" (repo) is just a folder on GitHub that holds your site files.

### Step 4 — Create a new repo
1. Log into GitHub
2. Click the green "New" button (top left)
3. Name it exactly: `adonaikidane.github.io`
   (Replace "adonaikidane" with your GitHub username)
4. Set it to **Public**
5. Leave everything else unchecked
6. Click "Create repository"

---

## Part 3: Upload your site files

### Step 5 — Open Terminal in your site folder
**Mac:**
- Find the `adonai-site` folder in Finder
- Right-click it → "New Terminal at Folder"
  (or open Terminal and type `cd ` then drag the folder into Terminal and press Enter)

**Windows:**
- Find the `adonai-site` folder in File Explorer
- Right-click inside it → "Git Bash Here"

### Step 6 — Initialize and upload
Copy and run these commands one at a time:

```bash
git init
```
(Sets up Git in this folder)

```bash
git add .
```
(Stages all your files)

```bash
git commit -m "first commit — initial site"
```
(Saves a snapshot with a message)

```bash
git branch -M main
```
(Names your main branch "main")

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
```
⚠️ Replace YOUR-USERNAME with your actual GitHub username, twice.

```bash
git push -u origin main
```
(Uploads everything to GitHub)

It will ask for your GitHub username and password.
**Note:** For password, use a Personal Access Token, not your account password.
To create one: GitHub → Settings → Developer settings → Personal access tokens → Generate new token
Check the "repo" box → Generate → copy the token → paste it as your password.

---

## Part 4: Turn on GitHub Pages (makes it live)

### Step 7 — Enable Pages
1. Go to your repo on GitHub
2. Click "Settings" (top menu)
3. Click "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Branch: `main` / Folder: `/ (root)`
6. Click Save

### Step 8 — Wait ~2 minutes, then visit your site
Your site will be live at:
```
https://YOUR-USERNAME.github.io
```

---

## Part 5: Making changes in the future

Every time you update something:

```bash
git add .
git commit -m "describe what you changed"
git push
```

That's it. GitHub Pages auto-deploys in about 30 seconds.

---

## How to add images

### Step 9 — Adding a photo to the About page
1. Save your photo as `photo.jpg` (or .png) inside the `images/` folder
2. Open `pages/about.html` in a text editor (TextEdit / Notepad)
3. Find the line that says:
   ```html
   <!-- Replace with: <img src="../images/photo.jpg" alt="Adonai Kidane"> -->
   ```
4. Delete the two placeholder div lines above and below it
5. Uncomment (remove the `<!--` and `-->`) the img line
6. Save the file

### Step 10 — Adding images to projects
Same idea — in `pages/work.html`, find each project card.
The comment above each image placeholder tells you exactly what to do.
Save your image to `images/project-name.jpg` and swap in the path.

---

## How to add a new Thought/blog post

1. Duplicate one of the post cards in `pages/thoughts.html`
2. Update the title, tag, excerpt, and date
3. Link it to a new HTML file if you want a full article page
   (ask me and I'll build you a post template)

---

## Recommended text editors

- **VS Code** (free, best option): https://code.visualstudio.com
  Install it, then open your site folder with File → Open Folder
  It'll color-code your HTML and make editing much easier.

---

## Quick reference — the 3 commands you'll use most

```bash
git add .                           # stage changes
git commit -m "what I changed"      # save snapshot
git push                            # upload to GitHub
```

---

Need help with any step? Just ask.

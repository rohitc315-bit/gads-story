# For Gads — Our Story

A single-page website telling your story, ready to publish as a link.

## What's inside
- `index.html` — the page structure
- `style.css` — all styling and animations
- `script.js` — the interactive bits (quiz, secrets, constellation, letter)
- `photos/` — your photos, optimized for web
- `audio/` — your "Hey Gads..." voice line

## Publish it to GitHub Pages

1. Create a new repo, e.g. `for-gads`.
2. Copy everything in this folder (`index.html`, `style.css`, `script.js`, `photos/`, `audio/`) into the repo root.
3. Commit and push.
4. In the repo: **Settings → Pages → Source → Deploy from a branch → main → / (root)**.
5. Wait a minute, then your link will be live at:
   `https://<your-username>.github.io/for-gads/`

## Editing later
- To add a new constellation star: open `script.js`, find the `memories` array near the top, and add a new `{ img, label, caption }` entry (and a photo to `photos/`).
- To change quiz questions: edit the `quizData` array in `script.js`.
- To change any of the story text: edit the relevant `<p class="story-line">` lines directly in `index.html`.

## Note on the ending voice
The site currently reuses your one "Hey Gads..." clip for both the opening and the "Play the ending" button. If you record a second line for the closing ("Thank you for choosing me...") later, save it as `audio/ending.mp3` and I can wire it in — just ask.

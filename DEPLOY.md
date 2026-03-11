# Deploying the TruVixo static export (`out` folder)

The built site is in the **`out`** folder. For CSS and JavaScript to load correctly, follow this structure.

## 1. Deploy at domain root (recommended)

Upload the **entire contents** of the `out` folder to your **web root** (e.g. `public_html` on Hostinger), so that:

- `index.html` is at the root
- The `_next` folder is at the root (contains CSS and JS)
- Other folders (`about`, `services`, `contact`, etc.) stay as they are

Resulting structure on the server:

```
public_html/
  index.html
  _next/
    static/
      css/
      chunks/
      ...
  about/
    index.html
  services/
    index.html
  ...
  .htaccess
  fonts/
  ...
```

Do **not** upload the `out` folder itself as a subfolder (e.g. `public_html/out/`) unless you use a subdirectory build (see below).

## 2. Do not open `index.html` from disk

Opening `out/index.html` directly (e.g. double-clicking) uses `file://`. The HTML references `/ _next/static/...`, which then points to the wrong place and **CSS/JS will not load**.

- **Locally:** run `npx serve out` and open `http://localhost:3000`
- **On the server:** ensure the document root is the folder that contains `index.html` and `_next` (as in section 1)

## 3. Deploy to a subdirectory

If the site must live in a subdirectory (e.g. `https://example.com/truvixo/`):

1. In `next.config.js`, set:
   - `basePath: '/truvixo'`
   - `assetPrefix: '/truvixo'`
2. Run `npm run build` again.
3. Upload the **contents** of `out` into that subdirectory (e.g. `public_html/truvixo/`).

## 4. After uploading

- Ensure `.htaccess` is present in the same directory as `index.html` (it is copied there by `npm run build`).
- If the host uses Apache, the provided `.htaccess` allows direct access to `/_next/` and `/fonts/` so CSS and fonts load correctly.

# 🔧 Production 404 Error Fix - CSS/JS Files Not Loading

## Issue
Getting 404 errors for CSS and JS files on production:
- `/_next/static/css/5d439992eadbbd3c.css` - 404
- `/_next/static/chunks/webpack-8f6ac9cea4f3d288.js` - 404

## Root Cause
The `_next` folder is not being served correctly on Hostinger. This happens when:
1. `_next` folder wasn't uploaded completely
2. `.htaccess` rules aren't working
3. File permissions are wrong
4. Apache modules aren't enabled

---

## ✅ IMMEDIATE FIX STEPS

### Step 1: Verify `_next` Folder is Uploaded

**On Hostinger File Manager:**
1. Go to `public_html` folder
2. Check if `_next` folder exists
3. Verify structure:
   ```
   public_html/
   ├── _next/
   │   ├── static/
   │   │   ├── css/          ← Must exist
   │   │   ├── chunks/       ← Must exist
   │   │   └── ...
   │   └── ...
   ├── .htaccess
   └── index.html
   ```

**If `_next` folder is missing:**
- Re-upload the entire `out` folder contents
- Ensure `_next` folder is included

---

### Step 2: Check File Permissions

**Set permissions via File Manager:**
1. Select `_next` folder
2. Right-click → Change Permissions
3. Set to `755` (folders) and `644` (files)

**Or via FTP:**
```bash
chmod -R 755 _next
find _next -type f -exec chmod 644 {} \;
```

---

### Step 3: Verify `.htaccess` is Active

**Check `.htaccess` location:**
- Must be in `public_html` root (not in subfolder)
- File name must be exactly `.htaccess` (not `.htaccess.txt`)

**Check `.htaccess` content:**
Ensure these lines are present (at the top):
```apache
# Allow direct access to _next static files
RewriteCond %{REQUEST_URI} ^/_next/
RewriteRule ^ - [L]

# Also allow _next folder access without trailing slash
RewriteCond %{REQUEST_URI} ^/_next
RewriteRule ^ - [L]
```

---

### Step 4: Enable Apache Modules on Hostinger

**In Hostinger hPanel:**
1. Go to **Advanced** → **Apache Modules**
2. Enable these modules:
   - ✅ `mod_rewrite` (CRITICAL)
   - ✅ `mod_headers`
   - ✅ `mod_mime`
   - ✅ `mod_deflate` (optional)

---

### Step 5: Test File Access Directly

**Try accessing files directly in browser:**
- `https://truvixoo.com/_next/static/css/5d439992eadbbd3c.css`
- `https://truvixoo.com/_next/static/chunks/webpack-8f6ac9cea4f3d288.js`

**Expected results:**
- ✅ **200 OK** → Files are accessible (good!)
- ❌ **404 Not Found** → Files not uploaded or path wrong
- ❌ **403 Forbidden** → Permission issue

---

## 🔄 COMPLETE RE-UPLOAD PROCEDURE

If nothing works, do a complete re-upload:

### 1. Delete Everything from `public_html`
- Backup current files first!
- Delete all files and folders from `public_html`

### 2. Upload Fresh Build
- Upload ALL contents from `out` folder
- Ensure `_next` folder is uploaded completely
- Ensure `.htaccess` is in root

### 3. Set Permissions
```
Files: 644
Folders: 755
.htaccess: 644
```

### 4. Verify Structure
```
public_html/
├── .htaccess          ← Must be here
├── index.html         ← Must be here
├── _next/             ← Must be here
│   └── static/
│       ├── css/       ← Must exist
│       └── chunks/    ← Must exist
└── [other folders]/
```

---

## 🆘 ALTERNATIVE: Simplified `.htaccess`

If current `.htaccess` doesn't work, try this minimal version:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # CRITICAL: Allow _next folder FIRST (before any other rules)
  RewriteCond %{REQUEST_URI} ^/_next
  RewriteRule ^ - [L]
  
  # Don't rewrite existing files
  RewriteCond %{REQUEST_FILENAME} -f
  RewriteRule ^ - [L]
  
  # Don't rewrite static assets
  RewriteCond %{REQUEST_URI} \.(css|js|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|otf|json|xml|txt|webp|avif|map|eot)$
  RewriteRule ^ - [L]
  
  # Serve index.html from directories
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteCond %{REQUEST_FILENAME}/index.html -f
  RewriteRule ^(.*)$ $1/index.html [L]
  
  # Add trailing slash
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_URI} !(.*)/$
  RewriteRule ^(.*)$ $1/ [L,R=301]
  
  # Fallback to index.html
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)$ /index.html [L]
</IfModule>
```

---

## ✅ VERIFICATION CHECKLIST

After applying fixes, verify:

- [ ] `_next` folder exists in `public_html`
- [ ] `_next/static/css/` folder exists with CSS files
- [ ] `_next/static/chunks/` folder exists with JS files
- [ ] `.htaccess` is in `public_html` root
- [ ] `.htaccess` has `_next` rules at the top
- [ ] File permissions: `644` (files), `755` (folders)
- [ ] Apache `mod_rewrite` is enabled
- [ ] Direct file access works (test URLs above)
- [ ] Browser console shows no 404 errors

---

## 📞 Still Not Working?

**Contact Hostinger Support with:**
1. Screenshot of browser console (F12)
2. Screenshot of Network tab showing 404 errors
3. Confirmation that `_next` folder exists
4. Confirmation that `.htaccess` is in root
5. Confirmation that `mod_rewrite` is enabled

**Ask them to:**
- Verify `.htaccess` is being processed
- Check if `_next` folder is accessible
- Test direct file access to CSS/JS files

---

**Last Updated:** After fixing 404 errors for CSS/JS files


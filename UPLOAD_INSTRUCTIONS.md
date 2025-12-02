# 📤 Upload Instructions for Hostinger

## Step-by-Step Upload Guide

### Method 1: Using File Manager (Recommended)

1. **Log in to Hostinger**
   - Go to https://hpanel.hostinger.com
   - Log in with your credentials

2. **Open File Manager**
   - Click on **"File Manager"** in the hPanel dashboard
   - Navigate to **`public_html`** folder

3. **Clear Existing Files (Optional but Recommended)**
   - Select all existing files in `public_html`
   - Delete them (or backup first if needed)
   - This ensures a clean deployment

4. **Upload Files**
   - Click **"Upload"** button
   - Select **ALL files and folders** from your local `out` folder
   - **Important**: Upload the CONTENTS of `out`, not the `out` folder itself
   - Wait for upload to complete (may take a few minutes)

5. **Verify .htaccess**
   - Ensure `.htaccess` file is in the root of `public_html`
   - If it's not visible, enable "Show Hidden Files" in File Manager

6. **Set File Permissions**
   - Select all files → Right-click → **"Change Permissions"**
   - Set to **644** (rw-r--r--)
   - Select all folders → Right-click → **"Change Permissions"**
   - Set to **755** (rwxr-xr-x)
   - `.htaccess` should be **644**

### Method 2: Using FTP (Alternative)

1. **Get FTP Credentials**
   - In hPanel, go to **"FTP Accounts"**
   - Note your FTP host, username, and password

2. **Connect via FTP Client**
   - Use FileZilla, WinSCP, or any FTP client
   - Connect to your Hostinger FTP server

3. **Navigate to public_html**
   - Navigate to `/public_html` directory

4. **Upload Files**
   - Upload all contents from your local `out` folder
   - Maintain the exact folder structure
   - Ensure `.htaccess` is uploaded

5. **Set Permissions**
   - Files: 644
   - Folders: 755
   - `.htaccess`: 644

---

## 📋 Files to Upload

Upload **ALL** contents from the `out` folder:

```
out/
├── index.html
├── .htaccess          ← Important!
├── robots.txt
├── sitemap.xml
├── _next/             ← All JavaScript and CSS
├── fonts/             ← Font files
├── about/
├── services/
├── industry/
├── hire/
├── contact/
├── ... (all other folders)
└── ... (all other files)
```

---

## ✅ Post-Upload Checklist

After uploading, verify:

- [ ] Homepage loads: `https://yourdomain.com`
- [ ] CSS styles are applied (check if design looks correct)
- [ ] All pages are accessible
- [ ] Navigation menu works
- [ ] Contact form works
- [ ] All links redirect correctly
- [ ] Mobile view works
- [ ] No 404 errors

---

## 🆘 Troubleshooting

### If CSS doesn't load:
1. Check `.htaccess` is in root directory
2. Verify file permissions (644 for files, 755 for folders)
3. Check browser console (F12) for errors
4. See `CSS_FIX.md` for detailed troubleshooting

### If pages show 404:
1. Verify `.htaccess` is present and has correct permissions (644)
2. Check Apache mod_rewrite is enabled (contact Hostinger support)
3. Ensure all files were uploaded correctly

### If forms don't work:
1. Check EmailJS environment variables were set before build
2. Verify EmailJS dashboard for sent emails
3. Check browser console for errors

---

## 📞 Need Help?

If you encounter any issues:
1. Check browser console (F12) for errors
2. Verify file permissions
3. Contact Hostinger support if server configuration issues
4. Refer to `CSS_FIX.md` and `BUILD_FIXES_APPLIED.md` for solutions

---

**Good luck with your deployment!** 🚀


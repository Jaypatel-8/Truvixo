# Security Headers Configuration

Since this is a static export, security headers need to be configured on your hosting provider (Hostinger).

## Required Headers

Add these headers in your hosting provider's control panel or `.htaccess` file:

### 1. HSTS (Strict-Transport-Security)
```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

### 2. Cross-Origin-Opener-Policy (COOP)
```
Cross-Origin-Opener-Policy: same-origin
```

### 3. Content-Security-Policy with Trusted Types
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https:; frame-src 'self'; require-trusted-types-for 'script'
```

### 4. Additional Security Headers
```
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

## For Hostinger

1. Go to your hosting control panel
2. Navigate to "Headers" or "Security" settings
3. Add the headers listed above
4. Alternatively, use the `.htaccess` file in the `public` folder (if Apache is supported)

## Note

The `.htaccess` file has been created in the `public` folder. If your hosting provider supports Apache, these headers will be automatically applied.



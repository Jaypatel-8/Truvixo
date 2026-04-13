# Deploying TruVixoo (Node.js Build)

This site is now configured for a standard Next.js Node.js deployment, which is required for dynamic features, SSR, and optimized images.

## 1. Prerequisites

- A Hostinger VPS or a Node.js hosting plan.
- Node.js installed on the server (LTS recommended).
- (Optional) `pm2` for process management.

## 2. Deployment Steps

### A. Prepare the server
1. Connect to your server via SSH.
2. Navigate to your project directory (e.g., `/home/username/truvixo`).
3. Clone the repository or upload your files (excluding `node_modules` and `.next`).

### B. Build and Start
Run the following commands in the project root:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Start the production server
npm start
```

### C. Using PM2 (Recommended)
To keep the site running in the background:

```bash
# Install PM2 globally if not present
npm install -g pm2

# Start the Next.js app
pm2 start npm --name "truvixo" -- start

# Save to restart on reboot
pm2 save
```

## 3. Image Optimization
The site is now configured to optimize images on the fly. For best performance, ensure `sharp` is installed by running:

```bash
npm install sharp
```

## 4. Reverse Proxy (Optional)
If you are using Apache or Nginx as a reverse proxy, point it to `http://localhost:3000`.

- **Apache**: You might need to enable `mod_proxy` and `mod_proxy_http` and update your VirtualHost.
- **Nginx**: Use `proxy_pass http://localhost:3000;`.

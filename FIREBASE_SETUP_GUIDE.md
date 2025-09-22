# 🔥 Pure Detox - Firebase Hosting Setup Guide
## NexusEdge - Complete Deployment Instructions

### Prerequisites ✅
- Node.js installed
- Pure Detox website built (you have this!)
- Google account
- Squarespace domain: puredetox.app

---

## 🚀 DEPLOYMENT STEPS

### Step 1: Install Firebase CLI
```bash
npm install -g firebase-tools
```

### Step 2: Build Your Website
```bash
npm run build
```
This creates the `out` folder with your static website.

### Step 3: Login to Firebase
```bash
firebase login
```
- This opens your browser
- Sign in with your Google account
- Allow Firebase CLI access

### Step 4: Initialize Firebase Hosting
```bash
firebase init hosting
```

**During initialization, answer these questions:**

1. **"Please select an option"**
   - Choose: `Create a new project`

2. **"Please specify a unique project ID"**
   - Enter: `puredetox-web-prod` (or any unique name)

3. **"What do you want to use as your public directory?"**
   - Enter: `out`

4. **"Configure as a single-page app (rewrite all urls to /index.html)?"**
   - Enter: `y` (Yes)

5. **"Set up automatic builds and deploys with GitHub?"**
   - Enter: `n` (No, we'll deploy manually)

6. **"File out/index.html already exists. Overwrite?"**
   - Enter: `n` (No, keep your built website)

### Step 5: Deploy to Firebase
```bash
firebase deploy
```

This will:
- Upload your website to Firebase
- Give you a temporary URL like: `https://puredetox-web-prod.web.app`
- Your site is now live!

---

## 🌐 CONNECT YOUR CUSTOM DOMAIN

### Step 6: Add Custom Domain in Firebase Console

1. **Go to Firebase Console**: https://console.firebase.google.com
2. **Select your project** (`puredetox-web-prod`)
3. **Click "Hosting"** in the left sidebar
4. **Click "Add custom domain"**
5. **Enter your domain**: `puredetox.app`
6. **Click "Continue"**

### Step 7: Configure DNS in Squarespace

Firebase will show you DNS records to add. You'll need to:

1. **Go to Squarespace**: https://account.squarespace.com
2. **Go to Settings > Domains**
3. **Click on "puredetox.app"**
4. **Click "DNS Settings"**
5. **Add the DNS records Firebase shows you**

**Typical DNS records will be:**
```
Type: A
Name: @
Value: 151.101.1.195

Type: A  
Name: @
Value: 151.101.65.195

Type: CNAME
Name: www
Value: puredetox-web-prod.web.app
```

### Step 8: Verify Domain
- Firebase will automatically verify your domain
- This can take 24-48 hours for DNS propagation
- You'll get an email when it's ready

---

## ✅ VERIFICATION CHECKLIST

Once deployed, test these URLs:
- ✅ https://puredetox.app (main site)
- ✅ https://puredetox.app/privacy (privacy policy)
- ✅ https://puredetox.app/terms (terms of service)  
- ✅ https://puredetox.app/pricing (pricing page)
- ✅ https://puredetox.app/guides/block-tiktok-android-no-root (guide page)

---

## 🔄 FUTURE UPDATES

To update your website:
1. Make changes to your code
2. Run: `npm run build`
3. Run: `firebase deploy`
4. Your site updates instantly!

---

## 💰 COST INFORMATION

**Firebase Hosting Free Tier:**
- ✅ 10 GB storage
- ✅ 360 MB/day transfer
- ✅ Custom domain
- ✅ SSL certificate
- ✅ Global CDN

**Perfect for your Pure Detox website!**

---

## 🆘 TROUBLESHOOTING

**Build fails?**
```bash
# Check if Next.js config is correct
npm run build
# Look for errors in the output
```

**Domain not working?**
- Check DNS propagation: https://dnschecker.org
- Wait 24-48 hours for full propagation
- Verify DNS records in Squarespace match Firebase instructions

**Need help?**
- Firebase Console: https://console.firebase.google.com
- Contact: ridwan@puredetox.app

---

## 🎉 SUCCESS!

Once complete, your Pure Detox website will be live at:
**https://puredetox.app**

**Features:**
- ⚡ Lightning fast (Firebase CDN)
- 🔒 Automatic SSL certificate  
- 🌍 Global availability
- 📱 Mobile optimized
- 🛡️ DDoS protection included

@echo off
echo 🔥 Pure Detox Firebase Deployment Script
echo Company: NexusEdge
echo Domain: puredetox.app
echo.

echo Step 1: Install Firebase CLI
echo npm install -g firebase-tools
echo.

echo Step 2: Build and Deploy
echo npm run build
echo firebase login
echo firebase init hosting
echo firebase deploy
echo.

echo Step 3: Connect Custom Domain
echo 1. Go to Firebase Console: https://console.firebase.google.com
echo 2. Select your project
echo 3. Go to Hosting section
echo 4. Click "Add custom domain"
echo 5. Enter: puredetox.app
echo 6. Follow the DNS setup instructions
echo.

echo ✅ Your website will be live at: https://puredetox.app
pause

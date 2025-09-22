@echo off
echo.
echo ========================================
echo 🔥 PURE DETOX - FIREBASE DEPLOYMENT
echo ========================================
echo Company: NexusEdge
echo Domain: puredetox.app  
echo.

echo Step 1: Installing Firebase CLI...
call npm install -g firebase-tools
if errorlevel 1 (
    echo ❌ Firebase CLI installation failed
    pause
    exit /b 1
)
echo ✅ Firebase CLI installed successfully
echo.

echo Step 2: Building website...
call npm run build
if errorlevel 1 (
    echo ❌ Build failed - check for errors above
    pause
    exit /b 1
)
echo ✅ Website built successfully
echo.

echo Step 3: Firebase login...
echo 📝 This will open your browser - sign in with your Google account
pause
call firebase login
if errorlevel 1 (
    echo ❌ Firebase login failed
    pause
    exit /b 1
)
echo ✅ Firebase login successful
echo.

echo Step 4: Initialize Firebase hosting...
echo 📝 Answer the questions as shown in FIREBASE_SETUP_GUIDE.md
echo.
echo Key answers:
echo - Project: Create new project
echo - Project ID: puredetox-web-prod
echo - Public directory: out
echo - Single-page app: y
echo - GitHub deployment: n
echo - Overwrite index.html: n
echo.
pause
call firebase init hosting
if errorlevel 1 (
    echo ❌ Firebase initialization failed
    pause
    exit /b 1
)
echo ✅ Firebase initialized successfully
echo.

echo Step 5: Deploying to Firebase...
call firebase deploy
if errorlevel 1 (
    echo ❌ Deployment failed
    pause
    exit /b 1
)

echo.
echo ========================================
echo 🎉 DEPLOYMENT SUCCESSFUL!
echo ========================================
echo.
echo Your Pure Detox website is now live!
echo.
echo Temporary URL: Check the output above for your .web.app URL
echo Final URL: https://puredetox.app (after DNS setup)
echo.
echo NEXT STEPS:
echo 1. Go to Firebase Console: https://console.firebase.google.com
echo 2. Add custom domain: puredetox.app
echo 3. Configure DNS in Squarespace (see FIREBASE_SETUP_GUIDE.md)
echo.
echo Need help? Read FIREBASE_SETUP_GUIDE.md
echo Contact: ridwan@puredetox.app
echo.
pause

@echo off
echo 🚀 Pure Detox Quick Deployment Script
echo Company: NexusEdge
echo Domain: puredetox.app
echo.

echo Step 1: Install Google Cloud CLI if not installed
echo Download from: https://cloud.google.com/sdk/docs/install
echo.

echo Step 2: Run these commands in order:
echo.

echo === GOOGLE CLOUD SETUP ===
echo gcloud auth login
echo gcloud projects create puredetox-web-prod --name="Pure Detox"
echo gcloud config set project puredetox-web-prod
echo gcloud services enable cloudbuild.googleapis.com run.googleapis.com containerregistry.googleapis.com
echo.

echo === DEPLOYMENT ===
echo cd pure-detox-web
echo gcloud builds submit --tag gcr.io/puredetox-web-prod/puredetox-web
echo gcloud run deploy puredetox-web --image gcr.io/puredetox-web-prod/puredetox-web --platform managed --region asia-south1 --allow-unauthenticated --port 3000 --memory 512Mi --cpu 1 --min-instances 0 --max-instances 10 --set-env-vars NODE_ENV=production
echo gcloud run domain-mappings create --service puredetox-web --domain puredetox.app --region asia-south1
echo.

echo === SQUARESPACE DNS SETUP ===
echo 1. Go to Squarespace Domain Settings
echo 2. Add CNAME record: www -> ghs.googlehosted.com
echo 3. Add CNAME record: @ -> ghs.googlehosted.com
echo.

echo ✅ After setup, your website will be live at: https://puredetox.app
pause

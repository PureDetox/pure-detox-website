#!/bin/bash

# Pure Detox - Google Cloud Run Deployment Script
# Company: NexusEdge
# Domain: puredetox.app

echo "🚀 Deploying Pure Detox to Google Cloud Run..."

# Set variables
PROJECT_ID="your-project-id"  # Replace with your Google Cloud Project ID
SERVICE_NAME="puredetox-web"
REGION="asia-south1"  # Mumbai region (closest to Kolkata)
DOMAIN="puredetox.app"

# Build and push to Google Cloud Build
echo "📦 Building and pushing Docker image..."
gcloud builds submit --tag gcr.io/$PROJECT_ID/$SERVICE_NAME

# Deploy to Cloud Run
echo "🌐 Deploying to Cloud Run..."
gcloud run deploy $SERVICE_NAME \
  --image gcr.io/$PROJECT_ID/$SERVICE_NAME \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated \
  --port 3000 \
  --memory 512Mi \
  --cpu 1 \
  --min-instances 0 \
  --max-instances 10 \
  --set-env-vars NODE_ENV=production

# Map custom domain
echo "🔗 Mapping custom domain..."
gcloud run domain-mappings create \
  --service $SERVICE_NAME \
  --domain $DOMAIN \
  --region $REGION

echo "✅ Deployment complete!"
echo "🌐 Your website will be available at: https://$DOMAIN"
echo "📊 Cloud Run service: https://console.cloud.google.com/run/detail/$REGION/$SERVICE_NAME"

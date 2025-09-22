# Pure Detox Deployment Guide
## NexusEdge - Google Cloud Deployment

### Prerequisites
- Google Cloud account with billing enabled
- Squarespace domain: puredetox.app
- Google Cloud CLI installed

### Step 1: Google Cloud Setup

```bash
# Login to Google Cloud
gcloud auth login

# Create a new project (or use existing)
gcloud projects create puredetox-web-prod --name="Pure Detox"

# Set the project
gcloud config set project puredetox-web-prod

# Enable required APIs
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable containerregistry.googleapis.com
```

### Step 2: Deploy to Cloud Run

```bash
# Navigate to your project directory
cd pure-detox-web

# Make deploy script executable
chmod +x deploy.sh

# Update PROJECT_ID in deploy.sh
# Replace "your-project-id" with "puredetox-web-prod"

# Run deployment
./deploy.sh
```

### Step 3: Configure Squarespace Domain

#### Option A: Point Domain to Google Cloud Run
1. Go to your Squarespace domain settings
2. Add these DNS records:

**CNAME Records:**
```
Name: www
Value: ghs.googlehosted.com

Name: @
Value: ghs.googlehosted.com
```

#### Option B: Use Squarespace DNS with Cloud Run
1. In Google Cloud Console, go to Cloud Run
2. Find your deployed service URL (e.g., https://puredetox-web-xyz.a.run.app)
3. In Squarespace:
   - Go to Settings > Domains
   - Click on puredetox.app
   - Choose "Use a Squarespace subdomain" temporarily
   - Then redirect to your Cloud Run URL

### Step 4: Verify SSL Certificate
Google Cloud Run automatically provides SSL certificates for custom domains.

### Step 5: Test Your Deployment

Visit these URLs to verify:
- https://puredetox.app
- https://puredetox.app/privacy
- https://puredetox.app/terms
- https://puredetox.app/pricing

### Monitoring & Maintenance

**Google Cloud Console URLs:**
- Cloud Run: https://console.cloud.google.com/run
- Domain Mappings: https://console.cloud.google.com/run/domains
- Logs: https://console.cloud.google.com/logs

**Cost Optimization:**
- Cloud Run scales to zero when not in use
- You only pay for actual usage
- Estimated cost: $5-20/month for typical traffic

### Troubleshooting

**Domain not working?**
1. Check DNS propagation: https://dnschecker.org
2. Verify domain mapping in Cloud Run console
3. Ensure SSL certificate is provisioned

**Build failing?**
1. Check Cloud Build logs in Google Cloud Console
2. Ensure Docker builds locally first
3. Verify all dependencies are in package.json

**Need help?**
Contact: ridwan@puredetox.app

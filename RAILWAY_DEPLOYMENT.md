# Railway Deployment Guide

This guide will help you deploy your C-Store Insurance Application Form to Railway.

## Prerequisites

1. **Railway Account**: Sign up at [railway.app](https://railway.app)
2. **GitHub/GitLab Account**: For code repository (Railway supports GitHub, GitLab, and Bitbucket)
3. **API Keys**: All required environment variables (see below)

---

## Step 1: Prepare Your Repository

Make sure your code is pushed to a Git repository (GitHub, GitLab, or Bitbucket).

### Required Files (Already Created)
- ✅ `railway.json` - Railway configuration
- ✅ `Procfile` - Process file for Railway
- ✅ `next.config.js` - Updated for Railway deployment
- ✅ `package.json` - Updated with Railway-compatible start command

---

## Step 2: Create Railway Project

1. **Log in to Railway**: Go to [railway.app](https://railway.app) and sign in
2. **Create New Project**:
   - Click "New Project"
   - Select "Deploy from GitHub repo" (or GitLab/Bitbucket)
   - Choose your repository
   - Railway will automatically detect it's a Next.js project

3. **Project Setup**:
   - Railway will automatically run `npm install` and `npm run build`
   - The project will be named automatically (you can rename it)

---

## Step 3: Configure Environment Variables

### Required Environment Variables

Go to your Railway project → **Variables** tab and add the following:

#### **GoHighLevel CRM Integration** (Required)
```env
GHL_API_KEY=pit-08876e0d-f388-4a63-ba4d-c2bea2af5746
GHL_LOCATION_ID=eoDjI8W0iLnEwTnIgGPx
GHL_PIPELINE_ID=VDm7RPYC2GLUvdpKmBfC
GHL_PIPELINE_STAGE_ID=7915dedc-8f18-44d5-8bc3-77c04e994a10
```

#### **Google Maps API** (Required for Address Autocomplete)
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

**Note**: `NEXT_PUBLIC_*` variables are exposed to the browser. `GOOGLE_MAPS_API_KEY` is used server-side.

#### **Smarty Streets API** (Optional - for Property Data Enrichment)
```env
SMARTY_AUTH_ID=your_smarty_auth_id
SMARTY_AUTH_TOKEN=your_smarty_auth_token
```

#### **Railway Auto-Set Variables** (Do NOT set manually)
Railway automatically sets these:
- `PORT` - Railway sets this automatically
- `RAILWAY_ENVIRONMENT` - Railway environment name
- `RAILWAY_PROJECT_ID` - Your project ID

### How to Add Variables in Railway

1. Go to your project in Railway dashboard
2. Click on your service
3. Go to **Variables** tab
4. Click **"New Variable"**
5. Enter variable name and value
6. Click **"Add"**
7. Railway will automatically redeploy with new variables

---

## Step 4: Configure Build Settings

Railway should automatically detect Next.js, but verify these settings:

1. Go to your service → **Settings** → **Build Command**
   - Should be: `npm run build` (or leave empty for auto-detection)

2. **Start Command**:
   - Should be: `npm start` (Railway will use the PORT automatically)

3. **Root Directory**:
   - Leave empty (or set to `.` if needed)

---

## Step 5: Deploy

1. **Automatic Deployment**:
   - Railway automatically deploys when you push to your main branch
   - You can also manually trigger deployments from the dashboard

2. **Monitor Deployment**:
   - Go to **Deployments** tab to see build logs
   - Check for any errors in the logs

3. **First Deployment**:
   - First build may take 3-5 minutes
   - Subsequent deployments are faster (cached builds)

---

## Step 6: Configure Domain (Optional)

Railway provides a free domain (e.g., `your-project.up.railway.app`)

### To Use Custom Domain:

1. Go to **Settings** → **Networking**
2. Click **"Generate Domain"** (if not already generated)
3. For custom domain:
   - Click **"Custom Domain"**
   - Enter your domain
   - Follow DNS configuration instructions

### Update Google Maps API Key Restrictions:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to **APIs & Services** → **Credentials**
3. Click on your API key
4. Under **"Application restrictions"**:
   - Add your Railway domain: `*.railway.app`
   - Add your custom domain if using one
5. Save changes

---

## Step 7: Verify Deployment

### Check Application Health

1. **Visit Your Domain**: 
   - Railway provides a domain like: `https://your-project.up.railway.app`
   - Test the form flow

2. **Check Logs**:
   - Go to **Deployments** → Click on latest deployment → **View Logs**
   - Look for any errors

3. **Test Form Functionality**:
   - ✅ Address autocomplete works
   - ✅ Property data enrichment works
   - ✅ Form submission works
   - ✅ CRM integration saves data

### Common Issues & Solutions

#### Issue: "Google Maps API key not working"
- **Solution**: 
  - Verify `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` is set
  - Check API key restrictions in Google Cloud Console
  - Add Railway domain to allowed domains

#### Issue: "GoHighLevel API error"
- **Solution**:
  - Verify `GHL_API_KEY` is set correctly
  - Check API key is not expired
  - Verify `GHL_LOCATION_ID` matches your GoHighLevel account

#### Issue: "Build fails"
- **Solution**:
  - Check build logs in Railway dashboard
  - Verify all dependencies in `package.json`
  - Ensure Node.js version is compatible (Railway uses Node 18+)

#### Issue: "Application not starting"
- **Solution**:
  - Check **Variables** tab for missing required variables
  - Verify `PORT` is not manually set (Railway sets it automatically)
  - Check application logs for errors

---

## Step 8: Set Up Continuous Deployment

Railway automatically deploys when you push to your main branch.

### Branch Configuration:

1. Go to **Settings** → **Source**
2. Select your default branch (usually `main` or `master`)
3. Railway will auto-deploy on every push

### Manual Deployment:

1. Go to **Deployments** tab
2. Click **"Redeploy"** on any deployment
3. Or trigger from GitHub via Railway dashboard

---

## Step 9: Monitoring & Logs

### View Logs:

1. **Real-time Logs**:
   - Go to your service → **Logs** tab
   - View real-time application logs

2. **Deployment Logs**:
   - Go to **Deployments** → Click on a deployment
   - View build and deployment logs

### Metrics:

Railway provides basic metrics:
- CPU usage
- Memory usage
- Network traffic
- Request count

---

## Step 10: Production Checklist

Before going live, verify:

- [ ] All environment variables are set
- [ ] Google Maps API key is configured with domain restrictions
- [ ] GoHighLevel CRM integration is working
- [ ] Form submission works end-to-end
- [ ] Custom domain is configured (if using)
- [ ] HTTPS is enabled (Railway provides this automatically)
- [ ] Error logging is working
- [ ] Application is accessible via Railway domain

---

## Cost Estimation

### Railway Pricing:

- **Hobby Plan** (Free): 
  - $5 credit/month
  - Suitable for small projects
  - May need to upgrade for production

- **Pro Plan** ($20/month):
  - Better performance
  - More resources
  - Priority support

### API Costs:

- **Google Maps API**: 
  - Free tier: $200/month credit
  - Pay-as-you-go after

- **Smarty Streets API**: 
  - Check your plan pricing

- **GoHighLevel**: 
  - CRM subscription (separate)

---

## Security Best Practices

1. **Environment Variables**:
   - Never commit `.env.local` to Git
   - Use Railway's Variables tab for secrets
   - Rotate API keys regularly

2. **API Key Restrictions**:
   - Restrict Google Maps API key to your domain
   - Use different keys for development and production

3. **HTTPS**:
   - Railway provides HTTPS automatically
   - Ensure all API calls use HTTPS

4. **Rate Limiting**:
   - Consider adding rate limiting for API endpoints
   - Monitor API usage

---

## Rollback Procedure

If something goes wrong:

1. Go to **Deployments** tab
2. Find a previous working deployment
3. Click **"Redeploy"**
4. Railway will redeploy that version

---

## Support & Resources

### Railway Documentation:
- [Railway Docs](https://docs.railway.app/)
- [Railway Discord](https://discord.gg/railway)

### Next.js on Railway:
- [Next.js Deployment Guide](https://docs.railway.app/guides/nextjs)

### Troubleshooting:
- Check Railway logs first
- Verify environment variables
- Check API key restrictions
- Review build logs for errors

---

## Quick Reference: Environment Variables Checklist

Copy this checklist and verify each variable is set in Railway:

```env
# GoHighLevel CRM (Required)
✅ GHL_API_KEY
✅ GHL_LOCATION_ID
✅ GHL_PIPELINE_ID
✅ GHL_PIPELINE_STAGE_ID

# Google Maps (Required)
✅ NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
✅ GOOGLE_MAPS_API_KEY

# Smarty Streets (Optional)
⭕ SMARTY_AUTH_ID
⭕ SMARTY_AUTH_TOKEN
```

---

## Next Steps After Deployment

1. **Test the Form**: Fill out a test submission
2. **Verify CRM**: Check GoHighLevel for new contact/opportunity
3. **Monitor Logs**: Watch for any errors
4. **Set Up Alerts**: Configure notifications for errors
5. **Performance**: Monitor API response times
6. **Analytics**: Consider adding analytics tracking

---

## Need Help?

If you encounter issues:

1. Check Railway deployment logs
2. Verify all environment variables are set
3. Review application logs in Railway dashboard
4. Check API key restrictions and quotas
5. Consult Railway documentation

Good luck with your deployment! 🚀


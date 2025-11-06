# Quick Start: Deploy to Railway

## 🚀 Fast Deployment Steps

### 1. Push Code to Git
```bash
git add .
git commit -m "Prepare for Railway deployment"
git push origin main
```

### 2. Create Railway Project
1. Go to [railway.app](https://railway.app) and sign in
2. Click **"New Project"**
3. Select **"Deploy from GitHub repo"**
4. Choose your repository
5. Railway will auto-detect Next.js and start building

### 3. Add Environment Variables

Go to your Railway project → **Variables** tab → Add these:

#### Required:
```
GHL_API_KEY=pit-08876e0d-f388-4a63-ba4d-c2bea2af5746
GHL_LOCATION_ID=eoDjI8W0iLnEwTnIgGPx
GHL_PIPELINE_ID=VDm7RPYC2GLUvdpKmBfC
GHL_PIPELINE_STAGE_ID=7915dedc-8f18-44d5-8bc3-77c04e994a10
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

#### Optional:
```
SMARTY_AUTH_ID=your_smarty_auth_id
SMARTY_AUTH_TOKEN=your_smarty_auth_token
```

### 4. Wait for Deployment
- First build takes 3-5 minutes
- Railway will show build logs
- Deployment URL will be generated automatically

### 5. Test Your Application
- Visit your Railway URL (e.g., `https://your-project.up.railway.app`)
- Test the form submission
- Verify data appears in GoHighLevel CRM

---

## ✅ What's Been Configured

- ✅ `railway.json` - Railway configuration
- ✅ `Procfile` - Process file for Railway
- ✅ `next.config.js` - Production-ready config
- ✅ `package.json` - Updated start command
- ✅ `app/layout.tsx` - Google Maps key now uses environment variable
- ✅ `.railwayignore` - Files to exclude from deployment

---

## 📚 Full Documentation

See `RAILWAY_DEPLOYMENT.md` for complete deployment guide.

---

## 🆘 Quick Troubleshooting

**Build fails?**
- Check build logs in Railway dashboard
- Verify all dependencies are in `package.json`

**App won't start?**
- Check environment variables are set
- Verify API keys are correct

**Google Maps not working?**
- Verify `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` is set
- Add Railway domain to Google API key restrictions

**Need help?**
- Check Railway logs: Project → Logs tab
- Review `RAILWAY_DEPLOYMENT.md` for detailed troubleshooting

---

## 🎯 Next Steps After Deployment

1. Test form submission
2. Verify CRM integration
3. Configure custom domain (optional)
4. Set up monitoring
5. Share with your team!

Happy deploying! 🚀


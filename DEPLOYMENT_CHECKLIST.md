# Railway Deployment Checklist

Use this checklist to ensure your deployment is successful.

## Pre-Deployment

- [ ] Code pushed to Git repository (GitHub/GitLab/Bitbucket)
- [ ] All environment variables documented in `ENV_LOCAL_EXAMPLE.txt`
- [ ] Google Maps API key obtained and ready
- [ ] GoHighLevel API credentials ready
- [ ] Smarty Streets credentials ready (optional)

## Railway Setup

- [ ] Railway account created
- [ ] New project created in Railway
- [ ] Repository connected to Railway
- [ ] Build command verified: `npm run build`
- [ ] Start command verified: `npm start`

## Environment Variables

### Required Variables (Must be set in Railway)

- [ ] `GHL_API_KEY` - GoHighLevel API key
- [ ] `GHL_LOCATION_ID` - GoHighLevel location ID
- [ ] `GHL_PIPELINE_ID` - GoHighLevel pipeline ID
- [ ] `GHL_PIPELINE_STAGE_ID` - GoHighLevel stage ID
- [ ] `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` - Google Maps API key (for browser)
- [ ] `GOOGLE_MAPS_API_KEY` - Google Maps API key (for server)

### Optional Variables

- [ ] `SMARTY_AUTH_ID` - Smarty Streets auth ID
- [ ] `SMARTY_AUTH_TOKEN` - Smarty Streets auth token

## Configuration Files

- [ ] `railway.json` exists and is correct
- [ ] `Procfile` exists and is correct
- [ ] `next.config.js` updated for production
- [ ] `package.json` updated with Railway start command
- [ ] `app/layout.tsx` uses environment variable for Google Maps key

## Google Maps API Setup

- [ ] Google Maps API key created in Google Cloud Console
- [ ] Maps JavaScript API enabled
- [ ] Places API enabled
- [ ] API key restrictions configured (allow Railway domain)
- [ ] Billing enabled (if required)

## First Deployment

- [ ] Initial deployment triggered
- [ ] Build logs checked (no errors)
- [ ] Deployment successful
- [ ] Application URL obtained from Railway

## Post-Deployment Testing

### Form Functionality

- [ ] Application loads at Railway URL
- [ ] Address input field visible
- [ ] Google Maps autocomplete works
- [ ] Form submission works
- [ ] Success page displays after submission

### API Integrations

- [ ] Property data enrichment works (if Smarty enabled)
- [ ] Google Maps business data fetched
- [ ] GoHighLevel contact created
- [ ] GoHighLevel opportunity created
- [ ] Form data saved as note in CRM

### Error Handling

- [ ] Invalid address handled gracefully
- [ ] API failures don't break form
- [ ] Error messages display properly
- [ ] Form can be completed without enrichment

## Domain Configuration (Optional)

- [ ] Railway domain generated
- [ ] Custom domain configured (if using)
- [ ] DNS records updated (if custom domain)
- [ ] HTTPS enabled (automatic on Railway)
- [ ] Google Maps API key restrictions updated with domain

## Monitoring

- [ ] Railway logs accessible
- [ ] Application metrics visible
- [ ] Error tracking set up
- [ ] Deployment notifications configured

## Security

- [ ] All API keys stored in Railway Variables (not in code)
- [ ] Google Maps API key restricted to Railway domain
- [ ] No sensitive data in Git repository
- [ ] HTTPS enabled (automatic)

## Performance

- [ ] Application loads quickly
- [ ] API calls complete in reasonable time
- [ ] No console errors in browser
- [ ] Form submission is smooth

## Final Verification

- [ ] Complete form submission test
- [ ] Verify data in GoHighLevel CRM
- [ ] Check Railway logs for any warnings
- [ ] Test on mobile device (if applicable)
- [ ] Share application URL with team

## Rollback Plan

- [ ] Previous deployment identified
- [ ] Rollback procedure understood
- [ ] Backup plan in place

---

## Quick Deploy Command

If using Railway CLI:
```bash
railway login
railway init
railway up
```

## Support Resources

- Railway Docs: https://docs.railway.app/
- Railway Discord: https://discord.gg/railway
- Next.js Deployment: https://nextjs.org/docs/deployment

---

**Ready to deploy?** Follow the steps in `RAILWAY_DEPLOYMENT.md`!


# GoHighLevel Integration Troubleshooting

## Issues Fixed in This Update

### 1. Field Name Mismatches ✅
**Problem:** The form field names didn't match what the API was looking for.

**Fixed:**
- `buildingCoverage` → `building`
- `bppCoverage` → `bpp`
- `biCoverage` → `bi`
- `insideMonthly` → `insideSalesMonthly`
- `liquorMonthly` → `liquorSalesMonthly`
- `gasolineMonthly` → `gasolineSalesMonthly`
- `numberOfEmployees` → `noOfEmployees`
- `annualPayroll` → `payroll`
- `ownershipPercentage` → `ownership`
- `officers` → `officersInclExcl`
- `yearsInCurrentLocation` → `yearsAtLocation`
- `leasedSpace` → `anyLeasedOutSpace`

### 2. Alarm System Fields ✅
**Problem:** The API was looking for `burglarAlarm` and `fireAlarm` strings, but form had boolean checkboxes.

**Fixed:** Now combines checkbox values into "Yes"/"No" strings:
```javascript
burglarAlarm: formData.burglarAlarmCentral || formData.burglarAlarmLocal ? 'Yes' : 'No'
fireAlarm: formData.fireAlarmCentral || formData.fireAlarmLocal ? 'Yes' : 'No'
```

### 3. Added Better Error Logging ✅
Now the API logs:
- Environment variable status
- Form data received
- Complete API response
- Detailed error messages

## Common Issues & Solutions

### Issue: Data not reaching GoHighLevel

#### 1. Missing Environment Variables
**Check:** Look at your server console logs when submitting the form. You should see:
```
🔍 Environment Check: {
  hasApiKey: true/false,
  hasLocationId: true/false,
  ...
}
```

**Solution:** Create a `.env.local` file in the `user-friendly-form` folder:
```bash
# Required
GHL_API_KEY=your_actual_api_key
GHL_LOCATION_ID=your_location_id

# Optional but recommended
GHL_PIPELINE_ID=your_pipeline_id
GHL_PIPELINE_STAGE_ID=your_pipeline_stage_id
```

**Important:** Restart your dev server after creating/updating `.env.local`:
```bash
# Stop the server (Ctrl+C)
# Then restart
npm run dev
```

#### 2. Invalid API Key
**Symptoms:** Server shows error like "401 Unauthorized" or "Forbidden"

**Solution:** 
1. Go to GoHighLevel → Settings → API Keys
2. Create a new API key or copy an existing one
3. Make sure you're copying the FULL key (it's usually very long)
4. Update `.env.local` and restart server

#### 3. Wrong API Endpoint
**Current:** `https://services.leadconnectorhq.com/contacts/`
**Verify:** Check if this is the correct endpoint for your GoHighLevel account type

#### 4. Authorization Format
The code uses: `'Authorization': GHL_API_KEY`
Some GoHighLevel accounts need: `'Authorization': 'Bearer ' + GHL_API_KEY`

Try changing line 55 in `app/api/gohighlevel/route.ts` if you get authentication errors.

## Testing Steps

### 1. Check Console Logs
When you submit the form, watch your terminal/console for:
- ✅ `🔍 Environment Check:` - Shows if variables are loaded
- ✅ `📤 Sending data to GoHighLevel CRM...` - API call started
- ✅ `📡 GoHighLevel Response:` - Shows API response
- ✅ `✅ Contact created in GoHighLevel:` - Success!

### 2. Test with Browser DevTools
Open browser DevTools (F12) and go to Network tab:
1. Submit the form
2. Look for `/api/gohighlevel` request
3. Check the Response tab for error messages
4. Check the Payload tab to see what data was sent

### 3. Test with a Mock Server
Temporarily change the API endpoint to test the data format:
```javascript
const ghlResponse = await fetch('https://webhook.site/your-unique-url', {
  // ... same code
})
```
This lets you see exactly what data is being sent.

## Still Not Working?

### Enable Debug Mode
Add this at the start of the POST function:
```javascript
console.log('🔍 Full Request Debug:', {
  headers: {
    'Authorization': GHL_API_KEY?.substring(0, 20) + '...',
    'Content-Type': 'application/json',
  },
  body: contactData,
  apiKey: GHL_API_KEY ? 'Set (' + GHL_API_KEY.length + ' chars)' : 'Missing',
  locationId: GHL_LOCATION_ID || 'Missing'
})
```

### Check GoHighLevel Logs
1. Log into your GoHighLevel account
2. Go to Settings → API Logs
3. Look for requests from your application
4. Check if they're being rejected and why

### Common GoHighLevel Errors

| Error Code | Meaning | Solution |
|------------|---------|----------|
| 401 | Unauthorized | Check API key |
| 403 | Forbidden | Check API permissions |
| 404 | Not Found | Check Location ID |
| 422 | Validation Error | Check required fields |
| 500 | Server Error | Retry or contact GHL support |

## Next Steps

1. ✅ Fixed field name mismatches
2. ✅ Added error logging
3. 🔄 Create `.env.local` file
4. 🔄 Test the integration
5. 🔄 Check GoHighLevel dashboard for new contacts

## Need More Help?

Check the GoHighLevel API documentation:
- https://highlevel.stoplight.io/docs/integrations/
- Or contact GoHighLevel support


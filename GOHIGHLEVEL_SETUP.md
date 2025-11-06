# GoHighLevel CRM Integration Setup Guide

## Overview
This application automatically sends insurance lead data to your GoHighLevel CRM when users click "Save & Exit" or "Submit Application".

## Setup Steps

### 1. Get Your GoHighLevel API Key

1. Log in to your GoHighLevel account
2. Go to **Settings** → **API Keys** (or **Integrations** → **API**)
3. Create a new API key or copy an existing one
4. Copy the API key

### 2. Get Your Location ID

1. In GoHighLevel, go to **Settings** → **Company**
2. Look for your **Location ID** (usually in the URL or settings)
3. Copy the Location ID

### 3. Get Pipeline & Stage IDs (Optional but Recommended)

1. Go to **Opportunities** → **Pipelines**
2. Open the pipeline you want to use for insurance leads
3. The **Pipeline ID** is in the URL: `https://app.gohighlevel.com/v2/location/{locationId}/opportunities/pipelines/{pipelineId}`
4. Click on a stage to get the **Stage ID** from the URL

### 4. Update Environment Variables

Edit your `.env.local` file and add:

```bash
# GoHighLevel CRM Integration
GHL_API_KEY=your_actual_api_key_here
GHL_LOCATION_ID=your_actual_location_id_here
GHL_PIPELINE_ID=your_pipeline_id_here (optional)
GHL_PIPELINE_STAGE_ID=your_initial_stage_id_here (optional)
```

### 5. Restart Your Development Server

```bash
npm run dev
```

## How It Works

### When User Clicks "Save & Exit":
1. Current form progress is captured
2. Data is sent to GoHighLevel as a new contact
3. Contact includes:
   - Name, email, phone
   - Property address
   - Company information
   - All custom fields (DBA, sqft, coverage amounts, etc.)
4. An opportunity (deal) is created in your pipeline
5. User sees success message

### When User Submits Application:
1. Complete form data is sent to GoHighLevel
2. Same process as "Save & Exit"
3. Additional celebration confetti animation 🎉

## Custom Fields in GoHighLevel

The following custom fields will be populated:
- `application_type` - "C-Store Insurance"
- `dba` - Business DBA name
- `applicant_type` - Individual/Corporation/LLC etc.
- `property_address` - Full property address
- `years_in_business`
- `total_sqft` - Building square footage
- `year_built`
- `construction_type`
- `hours_of_operation`
- `inside_sales_monthly/yearly`
- `liquor_sales_monthly/yearly`
- `gasoline_sales_monthly/yearly`
- `building_coverage`
- `bpp_coverage`
- `bi_coverage`
- `fein`
- `number_of_employees`
- `annual_payroll`

**Note:** Make sure these custom fields exist in your GoHighLevel account, or remove them from the API route (`app/api/gohighlevel/route.ts`).

## Opportunity Value Calculation

The system automatically calculates the opportunity value as **1% of total coverage** (Building + BPP + BI coverage). You can adjust this in the `createOpportunity` function.

## Testing

1. Fill out the form with test data
2. Click "Save & Exit" button
3. Check your GoHighLevel CRM for:
   - New contact created
   - Contact has custom fields populated
   - Opportunity created in pipeline

## Troubleshooting

### "GoHighLevel not configured" error
- Make sure `GHL_API_KEY` is set in `.env.local`
- Restart your dev server after adding environment variables

### Custom fields not showing
- Create the custom fields in GoHighLevel first
- Or remove unused custom fields from the API route

### Contact created but no opportunity
- Set `GHL_PIPELINE_ID` and `GHL_PIPELINE_STAGE_ID` in environment variables
- Check that the pipeline IDs are correct

## API Endpoints

**POST** `/api/gohighlevel`
- Accepts form data JSON
- Creates contact in GoHighLevel
- Returns `{ success: true, contactId: "..." }`

## Security Notes

- Never commit `.env.local` to version control
- API keys should be kept secret
- GoHighLevel API key has full access to your CRM - protect it!

## Support

For GoHighLevel API documentation:
- https://highlevel.stoplight.io/docs/integrations/

For issues with this integration, check the browser console and server logs for error messages.

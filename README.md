# C-Store Insurance Application Form

A sophisticated multi-step insurance application form for C-Store (Convenience Store) insurance with smart data enrichment and CRM integration.

## Features

- ✅ **7-Step Multi-Step Form** - Comprehensive insurance application with 102 fields
- ✅ **Smart Data Enrichment** - Auto-fills property and business data from external APIs
- ✅ **Google Maps Integration** - Address autocomplete and business information
- ✅ **Smarty Streets Integration** - Property data enrichment
- ✅ **GoHighLevel CRM Integration** - Automatic lead and opportunity creation
- ✅ **Save & Exit** - Resume form completion later
- ✅ **Progress Tracking** - Visual progress indicators
- ✅ **Responsive Design** - Works on all devices

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Form Management**: React Hook Form
- **Styling**: Tailwind CSS
- **APIs**: Google Maps, Smarty Streets, GoHighLevel CRM

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- API keys for:
  - Google Maps API
  - GoHighLevel CRM (optional)
  - Smarty Streets (optional)

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp ENV_LOCAL_EXAMPLE.txt .env.local

# Edit .env.local with your API keys
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:3001
```

### Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Deployment

### Railway Deployment

This application is configured for Railway deployment.

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/rohit546/insure-cstore-form.git
   git push -u origin main
   ```

2. **Deploy on Railway**:
   - See `RAILWAY_DEPLOYMENT.md` for detailed instructions
   - Quick start: `QUICK_START_RAILWAY.md`

## Environment Variables

Required environment variables (see `ENV_LOCAL_EXAMPLE.txt`):

- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` - Google Maps API key
- `GOOGLE_MAPS_API_KEY` - Google Maps API key (server-side)
- `GHL_API_KEY` - GoHighLevel CRM API key
- `GHL_LOCATION_ID` - GoHighLevel location ID
- `GHL_PIPELINE_ID` - GoHighLevel pipeline ID
- `GHL_PIPELINE_STAGE_ID` - GoHighLevel stage ID
- `SMARTY_AUTH_ID` - Smarty Streets auth ID (optional)
- `SMARTY_AUTH_TOKEN` - Smarty Streets auth token (optional)

## Documentation

- `RAILWAY_DEPLOYMENT.md` - Complete Railway deployment guide
- `QUICK_START_RAILWAY.md` - Quick deployment steps
- `GOHIGHLEVEL_SETUP.md` - GoHighLevel CRM setup guide
- `DEPLOYMENT_CHECKLIST.md` - Deployment checklist
- `FORM_ANALYSIS.md` - Deep form analysis

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── gohighlevel/
│   │   │   └── route.ts          # CRM integration
│   │   └── prefill/
│   │       └── route.ts           # Data enrichment
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                   # Main form component
├── public/
├── railway.json                   # Railway configuration
├── Procfile                       # Railway process file
└── package.json
```

## Form Flow

1. **Step 0**: Address Entry (with Google Places Autocomplete)
2. **Step 1**: Personal Information (Lead Capture)
3. **Step 2**: Company Information
4. **Step 3**: Property & Business Details
5. **Step 4**: Sales Data
6. **Step 5**: Property Coverage
7. **Step 6**: Business Details
8. **Step 7**: Review & Submit

## API Integrations

### Google Maps API
- Address autocomplete
- Business information lookup
- Hours of operation extraction

### Smarty Streets API
- Property data enrichment
- Owner information
- Financial data (mortgage, lender)

### GoHighLevel CRM
- Contact creation
- Opportunity management
- Form data storage as notes

## License

Private - All rights reserved

## Support

For deployment issues, see:
- Railway: https://docs.railway.app/
- Next.js: https://nextjs.org/docs


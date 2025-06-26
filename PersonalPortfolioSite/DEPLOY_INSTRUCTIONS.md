# Final Portfolio Deployment Guide

## Files Ready for GitHub Upload

Your portfolio is now configured for Vercel deployment with these key components:

### Key Files:
- `vercel.json` - Vercel deployment configuration
- `api/contact.js` - Serverless function for contact form
- All React components and styling
- Database schema and configuration

## Upload to GitHub:

1. **Delete your current repository** (if it exists)
2. **Create new repository:** `yash-portfolio` (Public)
3. **Upload ALL project files** from this directory
4. **Commit with message:** "Complete portfolio with Vercel config"

## Deploy to Vercel:

1. **Import from GitHub** in Vercel dashboard
2. **Framework:** Other
3. **Build Command:** `npm run build`
4. **Output Directory:** `dist/public`
5. **Environment Variable:**
   - Name: `DATABASE_URL`
   - Value: Get from [neon.tech](https://neon.tech) (free PostgreSQL)

## Your Portfolio Features:
- ✅ Responsive design with dark/light mode
- ✅ Professional sections (Hero, About, Skills, Projects, Photography)
- ✅ Working contact form with database storage
- ✅ Vercel-optimized deployment
- ✅ Mobile-friendly navigation

## Database Setup:
1. Sign up at [neon.tech](https://neon.tech) with GitHub
2. Create project: "Portfolio Database"
3. Copy connection string to Vercel environment variables
4. Contact form will automatically create tables

Your portfolio will be live at: `https://yash-portfolio.vercel.app`

## Next Steps After Deployment:
1. Test all sections
2. Submit contact form to verify database
3. Share your portfolio URL with employers
4. Update resume with portfolio link
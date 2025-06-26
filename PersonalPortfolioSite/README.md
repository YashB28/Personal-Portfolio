# Yash Bhushan - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Software Engineer with expertise in AI/ML, cloud computing, and full-stack development.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Mode**: Toggle between themes
- **Interactive Sections**: Hero, About, Experience, Skills, Projects, Photography, Contact
- **Contact Form**: Functional contact form with database storage
- **Photography Gallery**: Showcase of black & white photography work
- **Smooth Animations**: Professional animations and transitions

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Node.js, Express.js, TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Build Tool**: Vite
- **Deployment**: Vercel

## Deployment on Vercel

### Prerequisites

1. Create a [Vercel account](https://vercel.com)
2. Install Vercel CLI: `npm i -g vercel`
3. Set up a PostgreSQL database (Neon, Supabase, or Vercel Postgres)

### Database Setup

1. Create a PostgreSQL database on your preferred platform
2. Get your database connection string
3. In Vercel dashboard, add environment variable:
   - `DATABASE_URL`: Your PostgreSQL connection string

### Deploy Steps

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variables:
     - `DATABASE_URL`: Your PostgreSQL connection string
   - Deploy

3. **Run Database Migration**:
   After deployment, run the database migration:
   ```bash
   npm run db:push
   ```

### Environment Variables

Set these in your Vercel project settings:

- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: production

## Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Create a `.env` file with:
   ```
   DATABASE_URL=your_postgresql_connection_string
   ```

3. **Run database migration**:
   ```bash
   npm run db:push
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```

## Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom hooks
│   │   └── lib/            # Utilities
├── server/                 # Express backend
│   ├── index.ts           # Main server file
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Database operations
│   └── db.ts              # Database connection
├── shared/                 # Shared types and schemas
│   └── schema.ts          # Database schema
└── vercel.json            # Vercel configuration
```

## Contact

- **Email**: ybhushan2002@gmail.com
- **Phone**: +91 8849453588
- **LinkedIn**: [yash-bhushan](https://www.linkedin.com/in/yash-bhushan-3a43a3262)
- **GitHub**: [YashB28](https://github.com/YashB28)
- **Location**: Bangalore, Karnataka, India

## License

MIT License - feel free to use this project as a template for your own portfolio!
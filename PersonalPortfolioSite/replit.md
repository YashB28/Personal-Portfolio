# Portfolio Website

## Overview

This is a full-stack portfolio website application built with a modern tech stack featuring React frontend, Express backend, and PostgreSQL database. The application showcases a personal portfolio with sections for experience, skills, projects, photography, and a contact form. It uses shadcn/ui components for a polished user interface and includes both light and dark theme support.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack React Query for server state management
- **Theme System**: Custom theme provider supporting light/dark modes
- **Build Tool**: Vite for development and build processes

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API structure
- **Development Setup**: Development server with hot module replacement via Vite integration

### Database Layer
- **Database**: PostgreSQL (configured for production)
- **ORM**: Drizzle ORM with type-safe queries
- **Schema Management**: Drizzle Kit for migrations
- **Development Storage**: In-memory storage implementation for development/testing

## Key Components

### Database Schema
- **users**: User management table with username/password authentication
- **contact_messages**: Stores contact form submissions with timestamp tracking
- **Schema Validation**: Zod integration for runtime type checking

### API Endpoints
- `POST /api/contact`: Contact form submission endpoint
- `GET /api/contact`: Admin endpoint to retrieve all contact messages
- `GET /api/resume`: Resume download endpoint (placeholder)

### Frontend Components
- **Navigation**: Sticky navigation with smooth scrolling and active section tracking
- **Hero Section**: Profile image and introduction with call-to-action buttons
- **About**: Personal information and quick facts
- **Experience**: Professional experience timeline
- **Skills**: Technical skills organized by categories
- **Projects**: Portfolio projects with technology badges and links
- **Photography**: Image gallery showcasing photography work
- **Contact**: Contact form with validation and submission handling
- **Footer**: Social links and copyright information

### UI Components
Complete shadcn/ui component library including:
- Form components (Input, Textarea, Button, Label)
- Layout components (Card, Sheet, Dialog)
- Navigation components (Accordion, Tabs)
- Feedback components (Toast, Alert)
- Data display components (Badge, Progress, Table)

## Data Flow

1. **Client Requests**: React app handles routing and renders appropriate components
2. **Server State**: TanStack React Query manages API calls and caching
3. **Form Submission**: Contact form validates data client-side, submits to backend
4. **Data Persistence**: Backend validates and stores data using Drizzle ORM
5. **Theme Management**: Theme state persisted in localStorage, applied via CSS classes

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **@tanstack/react-query**: Server state management
- **drizzle-orm & drizzle-zod**: Database ORM and validation
- **wouter**: Lightweight React router
- **zod**: Runtime type validation

### UI Dependencies
- **@radix-ui/***: Headless UI primitives for accessibility
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **react-icons**: Additional icon sets
- **class-variance-authority**: Component variant management

### Development Dependencies
- **vite**: Build tool and dev server
- **typescript**: Type checking
- **tsx**: TypeScript execution for development
- **esbuild**: Fast bundling for production

## Deployment Strategy

### Development Environment
- **Runtime**: Node.js 20
- **Database**: PostgreSQL 16 (via Replit modules)
- **Development Server**: Vite dev server with HMR
- **Port Configuration**: Application runs on port 5000

### Production Build
- **Frontend Build**: Vite builds static assets to `dist/public`
- **Backend Build**: esbuild bundles server code to `dist/index.js`
- **Deployment Target**: Autoscale deployment via Replit
- **Environment**: Production environment variables for database connection

### Build Commands
- `npm run dev`: Development server with hot reloading
- `npm run build`: Production build (frontend + backend)
- `npm run start`: Production server
- `npm run db:push`: Database schema migration

## Changelog

- June 25, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.
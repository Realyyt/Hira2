# Hira - Social Media & Secure Messaging

## Overview

This is a full-stack web application for Hira, a social media platform that combines public feeds with secure private messaging. The project uses a modern tech stack with React for the frontend, Express for the backend, and is configured for deployment on Replit. The application features a Telegram-inspired dark theme and showcases Hira's core capabilities including social feeds, end-to-end encrypted messaging, live streaming, and community features.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom WhatsApp-themed color variables
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Express sessions with PostgreSQL store
- **Build System**: esbuild for server-side bundling

### Development Setup
- **Hot Reload**: Vite dev server with HMR
- **Type Checking**: TypeScript with strict mode enabled
- **Development Tools**: tsx for running TypeScript directly
- **Error Handling**: Runtime error overlay for development

## Key Components

### UI Component System
- Complete Shadcn/ui implementation with 40+ reusable components
- Custom WhatsApp brand colors and theming
- Responsive design with mobile-first approach
- Accessibility features through Radix UI primitives

### Landing Page Sections
- **Navigation**: Fixed header with Hira branding and dark theme navigation
- **Hero Section**: Main value proposition with blue gradient background highlighting social + secure messaging
- **Features Section**: Grid of Hira's core features including social feeds, encryption, live streaming
- **Download Section**: Android and iOS download buttons with modern dark design
- **Social Section**: Showcase of social media features, communities, and content discovery
- **Security Section**: Privacy and encryption highlights with dark theme
- **Statistics Section**: User engagement metrics and growth statistics
- **Footer**: Links and social media integration with Hira branding

### Database Schema
- User management system with username/password authentication
- Extensible schema design using Drizzle ORM
- PostgreSQL integration with connection pooling

## Data Flow

### Client-Side Flow
1. React app renders landing page components
2. Smooth scroll navigation between sections
3. Interactive elements trigger state updates
4. Form submissions handled by React Hook Form
5. API calls managed through TanStack Query

### Server-Side Flow
1. Express server handles API routes under `/api` prefix
2. Static files served in production mode
3. Database operations through Drizzle ORM
4. Session management with PostgreSQL backing store
5. Error handling middleware for graceful degradation

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM, React Hook Form)
- Express.js with TypeScript support
- Vite build tooling with React plugin

### UI and Styling
- Tailwind CSS for utility-first styling
- Radix UI primitives for accessible components
- Lucide React for consistent iconography
- FontAwesome for brand icons

### Database and Data Management
- Drizzle ORM for type-safe database operations
- Neon Database serverless PostgreSQL
- TanStack Query for client-side data fetching
- Zod for runtime type validation

### Development Tools
- TypeScript for type safety
- ESBuild for fast server bundling
- TSX for running TypeScript in development
- PostCSS with Autoprefixer for CSS processing

## Deployment Strategy

### Build Process
1. Frontend: Vite builds React app to `dist/public`
2. Backend: ESBuild bundles server code to `dist/index.js`
3. Database: Drizzle migrations applied via `db:push` command

### Environment Configuration
- Development: Uses Vite dev server with Express backend
- Production: Serves static files from Express with API routes
- Database: Requires `DATABASE_URL` environment variable

### Replit Integration
- Configured for Replit's runtime environment
- Development banner injection for external access
- Cartographer integration for enhanced development experience
- Runtime error modal for better debugging

### Performance Optimizations
- Code splitting through Vite
- Tree shaking for minimal bundle size
- CSS variable system for consistent theming
- Lazy loading of non-critical components

## Hira Features (From User Requirements)

### Core Social Features
- **Public Feeds & Threaded Posts**: Users can create, reply to, like, repost, and share threaded posts
- **Trending Hashtags**: Real-time trending topics and content discovery
- **User Profiles**: Customizable bios, profile pictures, banners, verified handles
- **Content Discovery**: Algorithmic recommendations for users and posts

### Private & Group Messaging  
- **1:1 & Group Chats**: End-to-end encrypted messaging for individuals and groups
- **Role-based Access**: Admins, mods, members in group chats
- **Self-destructing Messages**: Messages that automatically delete after set time in secret chats

### Communication Tools
- **Voice/Video Calls**: Encrypted 1:1 and group calls, voice messages
- **Live Streaming**: Host live video sessions with real-time chat interaction

### Security & Privacy
- **End-to-End Encryption**: Default for all private/group chats and calls
- **Two-Step Verification**: Secure account login with OTP/email
- **Screenshot Prevention**: Option to block screenshots in secret chats
- **Anonymity**: Username-based interaction (no phone number required)
- **Chat Folders**: Organize chats with custom folders/tabs

### Platform Availability
- **Mobile Only**: Available on Android and iOS (no web/desktop versions)
- **Dark Mode**: Telegram-inspired dark theme design

## Changelog

```
Changelog:
- July 01, 2025. Initial WhatsApp clone setup
- July 01, 2025. Transformed to Hira social media app with dark theme, Android/iOS focus, and social features
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
App Requirements: Dark mode, Telegram-inspired design, Android/iOS only, social + secure messaging features
```
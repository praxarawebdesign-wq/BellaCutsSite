# Overview

This is a landscaping business website called "Bella Cuts" built as a full-stack web application. The project serves as a professional website for a landscaping company, featuring service information, portfolio showcases, company details, and a contact form for potential customers to submit inquiries. The application includes both client-facing content and basic contact management functionality.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built using React 18 with TypeScript and follows a component-based architecture. Key design decisions include:

- **Component Structure**: Organized into logical sections (Hero, Services, Portfolio, About, Contact, Footer) as separate components for maintainability
- **UI Framework**: Uses shadcn/ui components built on top of Radix UI primitives for consistent, accessible design
- **Styling**: Tailwind CSS with custom CSS variables for theming, supporting both light and dark modes
- **State Management**: React Query (TanStack Query) for server state management and form handling with React Hook Form
- **Routing**: Uses Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture

The backend follows a RESTful API design using Express.js:

- **Server Framework**: Express.js with TypeScript for type safety
- **API Design**: RESTful endpoints for contact form submissions and retrieval
- **Storage Layer**: Currently uses in-memory storage (MemStorage class) with a clean interface (IStorage) that allows easy migration to database storage
- **Validation**: Zod schemas for request validation and type safety
- **Error Handling**: Centralized error handling middleware with appropriate HTTP status codes

## Data Storage

- **Current Implementation**: In-memory storage using Map data structures for development/demo purposes
- **Database Ready**: Drizzle ORM configured for PostgreSQL with schema definitions and migrations setup
- **Schema Design**: Contact submissions table with fields for customer information, service requests, and project details
- **Migration Strategy**: Drizzle Kit configured for database schema management

## Form Handling and Validation

- **Client-side**: React Hook Form with Zod resolver for form validation
- **Server-side**: Zod schemas for request validation ensuring data integrity
- **User Experience**: Toast notifications for form submission feedback
- **Error Handling**: Graceful error handling with user-friendly messages

## Development and Build Process

- **Development**: Vite dev server with HMR for fast development cycles
- **TypeScript**: Strict TypeScript configuration with path mapping for clean imports
- **Build Process**: Separate builds for client (Vite) and server (esbuild) with optimized output
- **Asset Management**: Proper handling of static assets and fonts

# External Dependencies

## Database and ORM
- **Drizzle ORM**: Modern TypeScript ORM for database operations
- **Neon Database**: Serverless PostgreSQL database service (configured but not actively used)
- **PostgreSQL**: Target database system for production deployment

## UI and Styling
- **shadcn/ui**: Pre-built React components with Radix UI primitives
- **Radix UI**: Headless UI components for accessibility and functionality
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for consistent iconography

## Form and Data Management
- **React Hook Form**: Performant form library with minimal re-renders
- **TanStack Query**: Server state management and caching
- **Zod**: TypeScript-first schema validation library

## Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Static type checking and enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for server builds

## Fonts and Assets
- **Google Fonts**: Inter, Playfair Display, and other web fonts
- **Unsplash**: Stock photography for website imagery (demo content)

## Potential Production Dependencies
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Environment Configuration**: dotenv for environment variable management
- **Process Management**: PM2 or similar for production deployment
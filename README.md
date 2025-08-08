# React Basic Initial Setup

This is a modern React application setup with TypeScript and various tools for development efficiency and code quality.

## Core Dependencies

- **React**: Front-end UI library for building user interfaces
- **React DOM**: React rendering for web browsers
- **React Router DOM**: Routing library for React applications
- **Zustand**: Lightweight state management solution
- **TanStack React Query**: Data fetching and caching library
- **Axios**: HTTP client for making API requests
- **TailwindCSS**: Utility-first CSS framework

## Development Dependencies

### TypeScript and Type Definitions
- **typescript**: Adds static typing to JavaScript
- **@types/react**: TypeScript definitions for React
- **@types/react-dom**: TypeScript definitions for React DOM
- **@types/node**: TypeScript definitions for Node.js
- **@types/jest**: TypeScript definitions for Jest
- **@types/cypress**: TypeScript definitions for Cypress
- **ts-node**: TypeScript execution environment for Node.js

### Build and Development Tools
- **vite**: Fast development server and build tool
- **@vitejs/plugin-react-swc**: SWC-powered React plugin for Vite
- **vite-plugin-mock-dev-server**: Mock server plugin for Vite
- **cross-env**: Cross-platform environment variable setting

### Linting and Formatting
- **eslint**: JavaScript/TypeScript code linter
- **@eslint/js**: ESLint's core JavaScript rules
- **@typescript-eslint/parser**: TypeScript parser for ESLint
- **@typescript-eslint/eslint-plugin**: TypeScript-specific linting rules
- **eslint-plugin-react-hooks**: React Hooks linting rules
- **eslint-plugin-react-refresh**: React Refresh linting support
- **eslint-formatter-codeframe**: Codeframe formatter for ESLint
- **typescript-eslint**: ESLint support for TypeScript
- **prettier**: Code formatting tool
- **globals**: Global variables definition

### Testing
- **vitest**: Unit testing framework for Vite
- **cypress**: End-to-end testing framework



## Available Scripts

### Development Scripts
- `npm run dev`: Start the Vite development server for local development
- `npm run dev:mock`: Start development server with mock data enabled (uses VITE_USE_MOCK environment variable)
- `npm run serve`: Preview the production build locally on port 3000
- `npm run preview`: Preview the production build using Vite's preview server
- `npm run preview:mock`: Preview the production build with mock data enabled

### Build Scripts
- `npm run build`: Compile TypeScript and build the production bundle
- `npm run build:mock`: Build the production bundle with mock data support enabled

### Testing Scripts
- `npm run test`: Run all tests (format, types, lint, unit tests)
- `npm run test:unit`: Run Vitest unit tests once
- `npm run test:types`: Check TypeScript types without emitting files
- `npm run vitest:watch`: Run Vitest in watch mode with unlimited timeout
- `npm run cypress:open`: Build the app and open Cypress Test Runner UI
- `npm run cypress:run`: Build the app and run Cypress tests headlessly

### Code Quality Scripts
- `npm run lint`: Run all code quality checks (format, types, and linting)
- `npm run test:lint`: Run ESLint with codeframe formatter (max 0 warnings)
- `npm run format`: Auto-format all TypeScript/JavaScript files using Prettier
- `npm run format:check`: Check if files are properly formatted without making changes
- `npm run test:format`: Alias for format:check

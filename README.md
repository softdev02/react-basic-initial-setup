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

- **TypeScript**: Adds static typing to JavaScript
- **Vite + SWC**: Fast development server and bundler with SWC compiler
- **ESLint**: Code linting tool with various plugins for code quality
- **Prettier**: Code formatting tool
- **Cypress**: End-to-end testing framework
- **Vitest**: Unit testing framework
- **Cross-env**: Cross-platform environment variable setting

## Testing Setup

### Unit Testing with Vitest

This project uses Vitest for unit testing, which provides:
- Fast test execution with native ESM support
- Jest-compatible API
- Built-in mocking capabilities
- Watch mode for development
- TypeScript support out of the box

Example of a test with mocking:
```typescript
import { vi, describe, it, expect } from 'vitest'

describe('Example test with mock', () => {
  it('demonstrates mocking', () => {
    const mockFn = vi.fn()
    mockFn.mockReturnValue('mocked value')
    expect(mockFn()).toBe('mocked value')
  })
})
```

### End-to-End Testing with Cypress

Cypress is configured for end-to-end testing, providing:
- Real browser testing environment
- Time-travel debugging
- Automatic waiting
- Network traffic control
- Visual testing tools

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

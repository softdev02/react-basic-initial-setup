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

## Project Structure

```
src/
├── @types/                 # Global TypeScript type definitions
│   ├── authTypes.ts       # Authentication related types
│   └── index.ts          # Type exports
│
├── assets/                # Static assets (images, fonts, etc.)
│   └── react.svg         # Example asset
│
├── components/            # Reusable React components
│   └── Home/             # Component grouped by feature
│       └── Home.tsx      # Home component implementation
│
├── constants/             # Application-wide constants
│   ├── api.ts            # API endpoints and configurations
│   ├── routes.ts         # Route definitions
│   ├── labels.ts         # UI text and labels
│   └── messages.ts       # Error/success messages
│
├── hooks/                 # Custom React hooks
│   ├── useLocalStorage.ts # Local storage management hook
│   └── useTest.ts        # Example test hook
│
├── router/                # Routing configuration
│   └── AppRouter.tsx     # Main router setup
│
├── services/             # API and external service integrations
│   ├── apiService.ts     # API communication logic
│   └── index.ts         # Service exports
│
├── store/                # State management
│   ├── counterStore.ts   # Example Zustand store
│   └── index.ts         # Store exports
│
├── tests/                # Test files
│   └── useCounterStore.test.ts  # Store tests
│
├── utils/                # Utility functions
│   ├── api.ts           # API related utilities
│   └── validationUtils.ts # Form validation utilities
│
├── App.tsx              # Root application component
└── main.tsx             # Application entry point

cypress/               # E2E Testing
├── e2e/               # End-to-end test specs
├── fixtures/          # Test data
└── support/          # Test helpers and commands

mock/                 # Mock data for development
└── test.ts           # Mock data definitions
```

### Detailed Directory Structure Explanation

#### 1. Source Code Organization (`src/`)

##### `@types/` - TypeScript Type Definitions
```typescript
// @types/authTypes.ts
export interface User {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'user';
}

// @types/index.ts
export * from './authTypes';
```
Purpose: Centralized location for TypeScript interfaces, types, and type declarations used throughout the application.

##### `assets/` - Static Resources
```
assets/
├── images/         # Image files (.png, .jpg, .svg)
├── fonts/          # Custom fonts
└── styles/         # Global styles or CSS modules
```
Purpose: Storage for all static files used in the application.

##### `components/` - React Components
```typescript
// components/Button/Button.tsx
interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ variant, children, onClick }: ButtonProps) => (
  <button 
    className={`btn btn-${variant}`} 
    onClick={onClick}
  >
    {children}
  </button>
);

// components/Home/Home.tsx
import { Button } from '../Button/Button';

export const Home = () => (
  <div className="home-container">
    <h1>Welcome</h1>
    <Button variant="primary">
      Get Started
    </Button>
  </div>
);
```
Purpose: Reusable UI components organized by feature or functionality. Each component folder may contain:
- Component file (`.tsx`)
- Styles (if using CSS modules)
- Unit tests
- Stories (if using Storybook)

##### `constants/` - Application Constants
```typescript
// constants/api.ts
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
  },
  USERS: '/api/users',
};

// constants/routes.ts
export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
};

// constants/messages.ts
export const MESSAGES = {
  ERROR: {
    AUTH: 'Authentication failed',
    NETWORK: 'Network error occurred',
  },
  SUCCESS: {
    SAVED: 'Changes saved successfully',
  },
};
```
Purpose: Central location for all constant values to maintain consistency and make updates easier.

##### `hooks/` - Custom React Hooks
```typescript
// hooks/useLocalStorage.ts
export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
};

// hooks/useAuth.ts
export const useAuth = () => {
  const user = useLocalStorage('user', null);
  const login = async (credentials) => {
    // Authentication logic
  };
  return { user, login };
};
```
Purpose: Shared logic extracted into reusable hooks to maintain DRY principles.

##### `router/` - Routing Configuration
```typescript
// router/AppRouter.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      <Route
        path={ROUTES.PROFILE}
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
    </Routes>
  </BrowserRouter>
);
```
Purpose: Application routing setup and navigation logic.

##### `services/` - API and External Services
```typescript
// services/apiService.ts
import axios from 'axios';
import { API_ENDPOINTS } from '../constants/api';

export class ApiService {
  async login(credentials: LoginCredentials) {
    return axios.post(API_ENDPOINTS.AUTH.LOGIN, credentials);
  }

  async getUsers() {
    return axios.get(API_ENDPOINTS.USERS);
  }
}

// services/index.ts
export const apiService = new ApiService();
```
Purpose: Handles all external communications and API integrations.

##### `store/` - State Management
```typescript
// store/counterStore.ts
import create from 'zustand';

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
```
Purpose: Global state management using Zustand.

#### 2. Testing Organization

##### `tests/` - Unit and Integration Tests
```typescript
// tests/useCounterStore.test.ts
import { renderHook, act } from '@testing-library/react-hooks';
import { useCounterStore } from '../store/counterStore';

describe('useCounterStore', () => {
  it('should increment counter', () => {
    const { result } = renderHook(() => useCounterStore());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });
});
```
Purpose: Unit tests for hooks, stores, and utilities.

##### `cypress/` - E2E Testing
```typescript
// cypress/e2e/home.cy.ts
describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display welcome message', () => {
    cy.get('h1').should('contain', 'Welcome');
  });

  it('should navigate to dashboard', () => {
    cy.get('[data-testid="dashboard-link"]').click();
    cy.url().should('include', '/dashboard');
  });
});
```
Purpose: End-to-end tests ensuring the application works as a whole.

#### 3. Development Support

##### `mock/` - Mock Data
```typescript
// mock/test.ts
export const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

export const mockProducts = [
  { id: 1, name: 'Product 1', price: 99.99 },
  { id: 2, name: 'Product 2', price: 149.99 },
];
```
Purpose: Mock data for development and testing environments.


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

# Project Architecture

This document describes the high-level architecture and folder structure of the project, following the guidelines defined in `.windsurfrules`.

## Principles
- **Domain-driven design** for scalability and maintainability
- **Separation of concerns**: core, shared, and feature-specific logic are clearly separated
- **Consistent naming conventions** for files, directories, variables, components, hooks, context, utils, and types
- **Testability**: clear separation of test utilities and mocks
- **Documentation-first**: every major directory contains a `README.md` explaining its purpose

## Folder Structure

```
/src
  /app              # Next.js App Router entry (routes, layouts, pages)
  /core             # Core utilities, config, and global services
  /features         # Domain-driven feature modules
    /<feature-name>
      /components   # Feature-specific components
      /hooks        # Feature-specific hooks
      /api          # API calls related to the feature
      /store        # Zustand stores (if needed)
      /types        # Feature-specific types
      /tests        # Feature/unit tests for the feature
      index.ts
  /components       # Shared, reusable UI components
  /hooks            # Shared hooks
  /context          # Shared context providers
  /utils            # Shared utility functions
  /types            # Shared/global TypeScript types
  /styles           # Global and shared styles (e.g., Tailwind config, CSS files)
  /services         # Global services (API clients, third-party integrations)
  /testing          # Test utilities, mocks, and setup files

/public             # Static assets
/docs               # Project and feature documentation
/tests              # e2e tests (Playwright)
/__mocks__          # Global mocks (if needed)
```

## Directory Purpose
- **/src/core**: Core utilities, configuration, and global services (API clients, constants, env configs)
- **/src/features**: Domain-driven modules, each feature with its own logic, UI, and tests
- **/src/components**: Shared, reusable UI components
- **/src/hooks**: Shared React hooks
- **/src/context**: Shared React context providers
- **/src/utils**: Shared utility functions
- **/src/types**: Shared/global TypeScript types
- **/src/services**: Global services (API clients, third-party integrations)
- **/src/styles**: Global and shared styles
- **/src/testing**: Test utilities, mocks, and setup files
- **/docs**: Project and feature documentation
- **/tests**: End-to-end tests (Playwright)
- **/__mocks__**: Global mocks for testing

## Standards & Conventions
- **Airbnb Style Guide** for code formatting
- **PascalCase** for React component file names
- **Named exports** for components
- **SOLID, DRY, KISS, YAGNI** principles
- **Playwright** for e2e, **Jest** for unit testing
- **React Hook Form** and **Yup** for form and validation testing
- **README.md** in every directory for clarity
- **Documentation files**: `PROJECT-ARCHITECTURE.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, `MAINTAINERS.md`, `ROADMAP.md`, `CHANGELOG.md`, and `LICENSE.md`

---

## State Management: Zustand

This template uses **Zustand** for global and feature-level state management, following enterprise best practices and the project rules:

- **Type safety:** All stores are fully typed with TypeScript interfaces.
- **Modularity:** Each feature or domain should have its own store in `src/state/featureNameStore.ts`.
- **Colocation:** State logic is colocated with features for maintainability and testability.
- **SOLID/DRY:** Stores expose only the minimal API needed for components, and logic is encapsulated.

### Example: Global App Store

```ts
// src/state/useAppStore.ts
import { create } from 'zustand';

export interface AppState {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  sidebarOpen: false,
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
}));
```

### Usage in a Component
```tsx
import { useAppStore } from '@/state/useAppStore';

const SidebarToggle = () => {
  const { sidebarOpen, setSidebarOpen } = useAppStore();
  return (
    <button onClick={() => setSidebarOpen(!sidebarOpen)}>
      {sidebarOpen ? 'Close' : 'Open'} Sidebar
    </button>
  );
};
```

### Rationale
- Zustand is simple, fast, and works seamlessly with React Server Components and SSR.
- No provider is needed; stores are tree-shakable and testable.
- For larger apps, organize stores by feature/module for maintainability.

---

## Theming System
The template uses a robust, token-based theming system for all UI primitives, supporting both light and dark modes. All theme tokens are defined as CSS variables in `src/app/globals.css` and are consumed by Tailwind utility classes and custom CSS.

#### Light Theme

All tokens for the default (light) theme are defined under the `:root` selector. These include:
- `--background`, `--foreground`, `--heading-font`, `--main-font`, `--form-font`
- Colors, font sizes, paddings, border radii for headings, tabs, buttons, forms, and inputs
- All tokens are chosen to match MiFin branding and accessibility best practices

#### Dark Theme (Enterprise-Grade)

The dark theme is defined using the `.dark` selector, which is toggled via the `<html>` element. The dark theme supports both system preference (via `prefers-color-scheme`) and manual switching (via the theme toggle UI). All tokens are **carefully redesigned** for dark mode, ensuring visual clarity, contrast, and modern SaaS polish:

- **Backgrounds:** Deep navy (`#101624`) for main surfaces, layered for depth—not pure black for eye comfort.
- **Typography:** High-contrast off-white for foreground, blue-tinted white for headings, muted blue-gray for subheadings and labels.
- **Tabs:** Clear distinction between active/inactive states, with vibrant blue for active and subtle blue-gray for inactive.
- **Buttons:** Modern SaaS blue for primary, outlined style for secondary, with proper contrast and hover potential.
- **Inputs:** Dark surfaces, blue-gray borders, light text for clarity.
- **Form labels/content:** Muted blue-gray for less noise, high contrast for main content.

**Design Rationale:**
- The dark theme is not a simple inversion, but a palette inspired by MiFin and leading SaaS/FinTech platforms.
- It provides depth, accessibility, and a premium look and feel for enterprise products.
- All tokens are visually distinct from light mode, ensuring clarity and brand consistency.

#### Theme Switching

- The theme toggle allows switching between "light", "dark", and "system" (OS-based) modes.
- The `.dark` class is applied to `<html>` for dark mode, ensuring Tailwind and CSS variables update instantly.
- User preference is persisted in `localStorage` and respected on reload.

#### Visual QA: Theme Demo

- The `/theme-demo` page previews all tokens and components in **both light and dark modes side-by-side** for instant visual QA.
- This approach allows designers and developers to verify parity and catch regressions without toggling back and forth.

#### Example

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  /* ... */
}
.dark {
  --background: #101624;
  --foreground: #f4f6fa;
  /* ... */
}
```

#### Usage

- Use the provided CSS variables and Tailwind classes for all custom components.
- The theme is globally managed via React context and persists user preference in localStorage.

#### Rationale
---

This document should be kept up-to-date with any changes to the project structure, theming, or architectural decisions.

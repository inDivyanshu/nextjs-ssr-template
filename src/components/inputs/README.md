# Input Components

This folder contains theme-compliant, accessible, and reusable input primitives for forms:

- `TextInput`: Single-line text input
- `TextArea`: Multi-line textarea
- `SelectInput`: Dropdown select
- `InputMapper`: Maps type to the correct component for dynamic forms

## Features
- Uses CSS variables for theme compliance (light/dark)
- Integrates with React Hook Form for validation
- Displays errors and ARIA attributes for accessibility
- All styles are in `inputs.module.css` for maintainability
- Extendable for additional input types (checkbox, radio, etc.)

## Usage Example
```tsx
import { InputMapper } from '@/components/inputs/InputMapper';

<InputMapper type="text" name="email" label="Email" error={formError} />
```

# Agent Guidelines

## Styling

### Class Name Declarations

Use `joinClassNames` from `src/util` for className declarations. Group related classes together, particularly those with multiple declarations or responsive modifiers:

```tsx
// Good: Related classes grouped together
<div
  className={joinClassNames(
    "max-w-4xl mx-auto px-4",
    "grid grid-cols-1 lg:grid-cols-[max-content_1fr_max-content]"
  )}
>

// Good: Responsive modifiers grouped with their base class
<div
  className={joinClassNames(
    "sm:flex sm:justify-between",
    "mt-2 sm:mt-0",
    "lg:contents"
  )}
>

// Acceptable: Single class can remain a simple string
<div className="mt-auto">
```

Grouping guidelines:

- Group layout/spacing classes together (e.g. `max-w-4xl mx-auto px-4`)
- Group responsive variants of the same property together (e.g. `mt-2 sm:mt-0`)
- Group related flex/grid properties together (e.g. `sm:flex sm:justify-between`)
- Single classes can remain as simple strings

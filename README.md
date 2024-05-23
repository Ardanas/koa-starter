# KOA2 TypeScript Starter

## Prerequisites
Node.js (18+): recommend using nvm

## Installation
First, clone this repo and cd into the main directory. Then:

```
pnpm install
```

## Development
During development, the /app folder is being watched for changes.

All changes invoke the TypeScript compiler, which restarts the app upon completion.
```
npm run dev
```

## Code Linter
A TypeScript linter has been added to keep code consistent among developers.
```
pnpm run lint
```
To autofix linting errors (not all errors are auto-fixable):
```
pnpm run fix
```

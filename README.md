# nextjs-skeleton

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), [typescript](https://www.typescriptlang.org/), [material-ui](https://material-ui.com/) and [sass](https://sass-lang.com/)

## Requirements

-   NodeJS 14+

## Developers guide

1. Setup:

```bash
npm install
npm run dev
```

2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# 📃 Frontend conventions

## Git usage agreements and IDE settings

1. Git usage agreements: (..._define your rules_...)
2. We use LF instead of CRLF
3. We use editorconfig, eslint, prettier and husky for the automatic code formatting and ensuring our code quality

Find the configs in the repository and don't forget to set up your working IDE environment to work with these configs

## Project structure

```
./
├── pages/
├── common/
├── styles/
├── public/
├── components/
│   ├── component-a/
│   ├── component-b/
│   └── component-c/
│       ├── index.ts
│       ├── component-name.tsx
│       └── component-name.module.scss
└── features/
    ├── feature-a/
    ├── feature-b/
    └── feature-c/
        ├── index.ts
        ├── feature-name.tsx
        ├── feature-name.test.tsx
        ├── feature-name.store.ts
        ├── feature-name.utils.ts
        ├── feature-name.data-access.ts
        └── feature-name.module.scss
```

-   pages/ - page wrapper components without business-logic, we are able to store here only routing settings, error handling, page layout styles and server-side data-fetching
-   common/ - shared utils, constants, helpers, etc.
-   styles/ - global styles
-   public/ - raw icons, fonts, images, and other assets
-   components/ - shared reusable presentation components, icon components and layout components without business-logic and data-fetching
-   features/ - feature-specific components with business-logic and client-side data-fetching (business domain layer)

*We use index files for the export components

## Naming rules

-   We use business terms, names of back-end entities and component names from Figma to name our modules (according to "Domain Driven Design")
-   We use kebab-case for the file names
-   We use camelCase and PascalCase for the functions and classes
-   We use UPPERCASE for the constant names
-   In other cases we are guided by best practices

## Testing

We write tests only for the basic usage cases of completed features and critical or algorithmically complex code sections
For example completed feature component from "features/" folder or complicated helper function or utility should be covered by tests

## State management

-   We use [React local state](https://reactjs.org/docs/hooks-reference.html#usestate) and [React context](https://reactjs.org/docs/context.html) for the state management in ordinary situations
-   In other cases we are able to use browser storages, cache and other specific tools like [SWR](https://swr.vercel.app/getting-started)

## Data-fetching

We use basic [NextJS recommendations](https://nextjs.org/docs/basic-features/data-fetching) for the data-fetching

\*Clarification:

In case of client-side data-fetching we should fetch data from feature-specific components (frontend/features) by using React hooks with wrapper for the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) and [SWR](https://swr.vercel.app/getting-started)

In case of server-side data-fetching we should fetch data from page wrapper components (frontend/pages) by using [getStaticProps](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation) and [getServerSideProps](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering) with wrapper for the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## Adaptive and responsive web design concepts

We use "Responsive web design" concepts in accordance with our vision without using a grid

## Pull requests

-   Pull request can be merged if there are 2 or more approvals
-   Pull request can only be merged by its initiator

## CI/CD

..._define your rules_...

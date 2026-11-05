# Liberu Boilerplate · Next.js and React

An application foundation for independently deployed React clients of a reviewed Laravel API. This starter contains an accessible application shell; authentication, product modules and API workflows require implementation.

## Start locally

Use the Node version in `.node-version` and npm. Clone this repository, copy `.env.example` to `.env.local`, then run:

```bash
npm ci
npm run dev
```

Open http://localhost:3000. `LARAVEL_API_URL` is reserved for future server-only transport; the initial shell makes no API calls. Never put server credentials in `NEXT_PUBLIC_*` values.

## Verify and deploy

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

Deploy the production server behind HTTPS with environment-specific secrets. Keep authorization and tenant enforcement in Laravel. Before adding protected routes, implement reviewed session integration, cache isolation and explicit API error mapping; verify allowed, denied, expired-session and wrong-tenant behavior. No API integration or native release is claimed by this starter.

## Structure and extension

`src/app` owns routing and layouts; reusable capability UI belongs in independently released npm modules. Keep DTOs and transport contracts separate from Next.js navigation. Start a product from this boilerplate rather than recreating its build configuration. Preserve public boundary rules from [AGENTS.md](AGENTS.md).

The wider project family offers Laravel with Filament, Laravel with Inertia and Vue or React, Nuxt with Vue, React Native, Flutter, and separate Dart desktop and mobile implementations. The presentation catalog will link the available product repositories as they are created.

Read the [architecture](https://github.com/liberusoftware/documentation/blob/main/architecture/PRESENTATION.md) and [Next.js implementation guide](https://github.com/liberusoftware/documentation/blob/main/guides/presentation/NEXTJS.md) before implementing a capability.

## Dependency baseline

Generated with create-next-app 16.4.5; Next.js 16.4.5 and React 19.3.0 are locked. On 2026-11-05, npm audit reported eight moderate findings in the development lint dependency chain, rooted in minimatch ([advisory](https://github.com/advisories/GHSA-g3hv-75wg-m249)). The suggested automatic fix downgrades eslint-config-next across a major version; review compatible upstream updates before changing the baseline.

## Enable GitHub Actions

The verification workflow is provided at `docs/github-actions-checks.yml`. Move it to `.github/workflows/checks.yml` using a GitHub credential with workflow permission to activate the same install, lint, typecheck and build checks.

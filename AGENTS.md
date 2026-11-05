# Agent guidance — Boilerplate, Next.js · React

Read [README.md](README.md), [integration responsibilities](docs/INTEGRATION.md), [presentation architecture](https://github.com/liberusoftware/documentation/blob/main/architecture/PRESENTATION.md), [module architecture](https://github.com/liberusoftware/documentation/blob/main/architecture/MODULES.md), and the [layer runbook](https://github.com/liberusoftware/documentation/blob/main/guides/presentation/NEXTJS.md). Product plans live at [projects/boilerplate](https://github.com/liberusoftware/documentation/blob/main/projects/boilerplate/README.md).

- This application owns composition, navigation, configuration and presentation. Canonical Laravel packages own policies, actor/tenant context, domain rules, persistence, transactions and durable events.
- Use public actions/queries for a trusted Laravel host; independent clients use reviewed API contracts. Do not invent endpoints, claim existing package availability from a slug, or access another owner's private tables.
- Select real compatible modules. Preserve public package identities and extension hooks. Keep core/API and UI lifecycle dependencies separate.
- Keep credentials outside source and browser/device bundles. Never treat a submitted tenant ID, a hidden button or successful authentication as full authorization.
- Implement accessible loading, empty, denied, invalid, stale/conflict, pending and recoverable error states. Reconcile uncertain writes before retrying. Clear scoped cached data on logout and revocation.
- Follow the committed lockfiles and declared toolchain. Run the verification commands in README.md. Add meaningful boundary and journey tests for implemented behavior; never assert business parity from copied skeletons.
- Reusable modules need independent Composer, npm or pub manifests matching their runtime. Application npm roots stay private; Dart application pubspecs use publish_to: none.
- Keep this surface focused: Independent React application with explicit Next.js server/client boundaries.

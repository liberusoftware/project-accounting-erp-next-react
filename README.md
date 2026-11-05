# Boilerplate · Next.js · React

Shared application foundation and module composition. Independent React application with explicit Next.js server/client boundaries.

This is a presentation skeleton. Product workflows, identity integration and reviewed API adapters must be implemented and verified before production use. Module plans describe intended behavior; they are not installed or published packages.

Shared foundation for the product shells in this presentation layer.

## Start locally

Clone this repository, enter its directory and use the declared toolchain and committed lockfiles:

```bash
cp .env.example .env.local
npm ci
npm run dev
```

Use Node from `.node-version`. Keep API credentials and session integration server-only. Default protected API reads to no-store until a tenant-aware cache policy is reviewed. Application routes, deployment and authentication composition belong here; reusable UI libraries have independent npm manifests. The initial shell makes no API calls.

## Verify and extend

```bash
npm run lint
npm run typecheck
npm run build
```

Read [AGENTS.md](AGENTS.md), [integration responsibilities](docs/INTEGRATION.md), the [presentation runbook](https://github.com/liberusoftware/documentation/blob/main/guides/presentation/NEXTJS.md) and the [product scope](https://github.com/liberusoftware/documentation/blob/main/projects/boilerplate/README.md). Enable one vertical journey at a time against reviewed contracts. Verify allowed, denied, wrong-tenant, expired-session, validation and concurrency outcomes when implementing protected behavior. A pending operation is not a completed business transition.

## Other projects using Next.js · React

Use the same presentation foundation for other domains. These repositories provide starting structures; their availability does not establish feature parity.

| Project | Scope |
| --- | --- |
| [Accounting ERP](https://github.com/liberusoftware/project-accounting-erp-next-react) | Ledgers, tax, reporting and finance workflows |
| [Automation](https://github.com/liberusoftware/project-automation-next-react) | AI gateways, approvals, rules and integrations |
| [Billing](https://github.com/liberusoftware/project-billing-next-react) | Subscriptions, pricing, payments and provisioning |
| [Browser Game](https://github.com/liberusoftware/project-browser-game-next-react) | Game worlds, players and community workflows |
| [CMS](https://github.com/liberusoftware/project-cms-next-react) | Content authoring, publishing and delivery |
| [Control Panel](https://github.com/liberusoftware/project-control-panel-next-react) | Infrastructure and hosting operations |
| [CRM](https://github.com/liberusoftware/project-crm-next-react) | Relationships, sales pipelines and customer service |
| [Ecommerce](https://github.com/liberusoftware/project-ecommerce-next-react) | Catalogs, checkout, orders and fulfillment |
| [Enterprise SAP](https://github.com/liberusoftware/project-enterprise-sap-next-react) | Enterprise workspace and cross-product orchestration |
| [Genealogy](https://github.com/liberusoftware/project-genealogy-next-react) | Family trees, research, evidence and collaboration |
| [Liberu Platform](https://github.com/liberusoftware/project-liberu-official-next-react) | Official sites, staff applications and platform composition |
| [Maintenance](https://github.com/liberusoftware/project-maintenance-next-react) | Assets, work orders, schedules and field operations |
| [Music DAW](https://github.com/liberusoftware/project-music-daw-next-react) | Composition, recording, sequencing and audio production |
| [Real Estate](https://github.com/liberusoftware/project-real-estate-next-react) | Listings, sales, lettings and agency operations |
| [Social Network](https://github.com/liberusoftware/project-social-network-next-react) | Profiles, feeds, communities and moderation |

## Other presentations for Boilerplate

Choose the surface that fits the audience and deployment boundary. The Laravel core remains authoritative across these alternatives.

- [Laravel · Filament](https://github.com/liberusoftware/project-boilerplate-laravel-filament): PHP/Composer Laravel host with Filament panels.
- [Laravel · Inertia · Vue](https://github.com/liberusoftware/project-boilerplate-laravel-inertia-vue): Laravel routes and sessions with Vue pages over the Inertia protocol.
- [Laravel · Inertia · React](https://github.com/liberusoftware/project-boilerplate-laravel-inertia-react): Laravel routes and sessions with React pages over the Inertia protocol.
- [Nuxt · Vue](https://github.com/liberusoftware/project-boilerplate-nuxt-vue): Independent Vue application with Nuxt server rendering and reviewed API integration.
- [React Native · Expo](https://github.com/liberusoftware/project-boilerplate-mobile-react): Native iOS/Android application using React Native and Expo.
- [Flutter · Mobile](https://github.com/liberusoftware/project-boilerplate-mobile-flutter): Flutter iOS/Android application using Dart and mobile widgets.
- [Dart · Desktop](https://github.com/liberusoftware/project-boilerplate-dart-desktop): Dedicated Dart desktop application with a Flutter host for Linux, macOS and Windows.
- [Dart · Mobile](https://github.com/liberusoftware/project-boilerplate-dart-mobile): Separate Dart mobile application with a Flutter host for iOS and Android.

## License and delivery

See the repository license and preserve upstream notices. Review environment configuration, dependencies, backups and rollback before deployment. Publish reusable packages separately from deploying applications. The CI example, where supplied under `docs/`, must be activated with a credential authorized to manage GitHub workflows.

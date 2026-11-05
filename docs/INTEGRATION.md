# Boilerplate integration boundary

This Next.js · React shell is a starting point for shared application foundation and module composition. The [product documentation](https://github.com/liberusoftware/documentation/blob/main/projects/boilerplate/README.md) and [source inventory](https://github.com/liberusoftware/documentation/blob/main/architecture/SOURCE-INVENTORY.md) establish actual contracts and source availability.

1. Select the adoption profile and canonical domain owners. Record reviewed module identities, actor/tenant rules, API versions and deployment topology.
2. Install compatible released modules using Composer, npm or pub as appropriate. A module document or repository is not proof of a published release.
3. Keep application/session composition here. Keep reusable capability code and its release manifest in its module repository. Do not copy private core logic into the client.
4. Implement sign-in, context selection, one authorized read/command, its outcome and logout. Do not add fake credentials or placeholder endpoints to make a demo appear integrated.
5. Verify denial and tenant isolation at the authoritative boundary, plus accessible errors and safe draft recovery. Review caching, operation reconciliation and offline policy for the selected surface.
6. Record actual checks, supported platforms and unverified release gates in the delivery record.

No product modules are enabled by this new shell. Select modules from reviewed product plans; defaults must not silently install every optional adapter.

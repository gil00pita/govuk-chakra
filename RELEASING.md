# Releasing `govuk-chakra`

The `CI and Release` workflow validates every pushed commit and pull request. A
successful commit to `main` is published to npm with a unique prerelease version
under the `canary` dist-tag. Install it with:

```sh
yarn add govuk-chakra@canary
```

Release Please also maintains a release pull request. Merging that pull request
updates `package.json` and `CHANGELOG.md`, creates a GitHub release and publishes
the stable package under npm's `latest` dist-tag.

## One-time repository setup

1. On npmjs.com, open the `govuk-chakra` package's publishing access settings and
   add a GitHub Actions trusted publisher with:

   - Organization or user: `gil00pita`
   - Repository: `govuk-chakra`
   - Workflow filename: `release.yml`
   - Environment: `npm`
   - Allowed action: direct publishing with `npm publish`

2. In GitHub, create an environment named `npm`. Restrict deployment branches to
   `main`. Do not add required reviewers if every `main` commit should publish a
   canary without manual approval.
3. In GitHub's Actions settings, enable **Allow GitHub Actions to create and
   approve pull requests**.
4. Optional but recommended: create a fine-grained token that can write repository
   contents and pull requests, save it as `RELEASE_PLEASE_TOKEN`, and use a bot or
   maintainer account. Without it, Release Please uses `GITHUB_TOKEN`; GitHub does
   not run other workflows for pull requests created by that token.
5. Protect `main` and require the `Quality checks` and `Visual regression` status
   checks before merging. Enable squash merging and repository auto-merge.
6. After branch protection is active, create the repository variable
   `DEPENDABOT_AUTOMERGE` with the value `true`. Safe Chakra patch and minor pull
   requests will then enable auto-merge and wait for all required checks.

No long-lived npm token is required. The publish jobs use npm trusted publishing
with short-lived OpenID Connect credentials and package provenance.

## Version rules

Release Please derives stable versions from Conventional Commit prefixes:

- `fix:` creates a patch release.
- `feat:` creates a minor release.
- `feat!:` or a `BREAKING CHANGE:` footer creates a major release.
- `docs:`, `test:` and `chore:` do not create a library release by default.

Dependabot checks `@chakra-ui/*` packages weekly, groups patch and minor changes,
and prefixes the pull request with `feat(chakra)`. When that pull request is squash
merged, Release Please therefore prepares a minor `govuk-chakra` release. Chakra
major upgrades are intentionally excluded because they need compatibility review;
submit those manually with a breaking-change commit when appropriate.

Set the GitHub repository variable `PUBLISH_CANARY` to `false` if publishing every
`main` commit becomes too noisy. Stable releases continue to work.

# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

## [2.0.5] - 2025-03-14

### Fixed

- Switch to `pnpm` from `yarn`.

## [2.0.4]

Skipped.

## [2.0.3]

Skipped.

## [2.0.2]

Skipped.

## [2.0.1] - 2025-03-14

### Fixed

- Dependencies updates.

## [2.0.0] - 2025-03-13

[BREAKING]: Drop support for Node.js 18.
[BREAKING]: Remove React 16. Now only React 17 and 18 are supported.
[BREAKING]: `streamlit-component-lib-react-hooks` is now bundled as a dual package (CJS and ESM).

## [1.2.8] - 2024-03-04

Republished the same package.

## [1.2.7] - 2024-03-04

Republished the same package.

## [1.2.6] - 2024-03-03

Republished the same package.

## [1.2.5] - 2024-03-03

**Accidentally the versions `<=1.2.4` of this package have been unpublished and cannot be restored. The same package is now published as `@streamlit/component-lib-react-hooks` starting from version `1.2.5`.**

## [1.2.4] - 2024-02-27

### Fixed

- Improve the CI/CD workflow, #114.
- Remove `prepare` and `prepublishOnly` hooks.

## [1.2.3]

Skipped.

## [1.2.2]

Skipped.

## [1.2.1] - 2024-02-27

### Changed

- Remove Node 14 and 16 from the CI/CD, #111.
- Update `react-scripts` to `5.0.1` and `streamlit-component-lib` to `^2.0.0`, #112.

## [1.2.0]

Skipped.

## [1.1.0] - 2023-06-08

### Changed

- Remove `bootstrap.min.css`, #106.

## [1.0.2] - 2022-04-24

### Fix

- Include `CHANGELOG.md` in the NPM package, #53.

## [1.0.1] - 2022-04-24

### Fix

- Internal package updates.

## [1.0.0] - 2022-01-26

No change - just bump the version 1.0.0 as the API has been stabilized and the package is already used in some projects stably.

## [0.3.1] - 2021-11-18

### Fix

- A bug that `<ErrorBoundary />` does not display the caught error.

## [0.3.0] - 2021-10-24

### Added

- `<StreamlitProvider />` as an all-in-one wrapper component for React-Hooks-based components and `useRenderData` to get the `renderData` object inside the provider, #3.

## [0.2.1] - 2021-10-24

### Added

- CI/CD to test and publish, #1.
- Monorepo management with Lerna, #2.

## [0.2.0] - 2021-09-20

### Fix

- Depending React version.

## [0.1.0] - 2021-09-20

### Added

- `useStreamlit` and `ErrorBoundary`.

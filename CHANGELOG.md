# Changelog

## [Unreleased]

### Changed

- Rebranded project from ZeroSpend to OpenZero (`openzero`) with full backward compatibility (`openzero` CLI alongside `zerospend`, `~/.openzero` alongside `~/.zerospend`, `OPENZERO_*` alongside `ZEROSPEND_*`).
- Refreshed logo, marks, console branding, documentation, and repository URLs to `openzero`.

### Fixed

- `zerospend status`, `dashboard`, `doctor`, `components`, setup output, and the Console now resolve Router/Console ports from `~/.zerospend/config/routing.json` when the `ZEROSPEND_ROUTER_PORT`/`ZEROSPEND_CONSOLE_PORT` environment variables are absent, so a machine installed on non-default ports no longer reports itself as offline.
- The benchmark LaunchAgent template now uses `Weekday` 0 (Sunday) 04:40, matching the schedule documented in `docs/` and printed by `zerospend automation status`; it previously used `Weekday` 1, which launchd reads as Monday.
- `zerospend automation status` now reads each installed plist and reports the schedule launchd will actually run, printing `MISMATCH` and exiting non-zero when it disagrees with the advertised schedule.
- `zerospend automation install` now writes the version-independent Homebrew `opt` path (`/opt/homebrew/opt/<formula>/bin/node`) instead of the version-pinned `Cellar/<formula>/<version>` path, so schedule entries survive Node upgrades.

## [0.4.0] - 2026-10-01

### Added

- Direct APINex provider support with hidden credential entry, fail-closed free/zero-price evidence, and bounded availability verification.
- Real-time streaming benchmark progress visualizer and transparent results leaderboard in the Console automation view.
- Live Console auto-refresh with status indicator and visible last-updated timestamp.
- Interactive multi-column sorting (ascending/descending) across all Console tables with state preservation.
- Daily stacked token consumption chart by model with smooth CSS animations, hover tooltips, and exact token counts.
- Dynamic Console port detection preserving user-configured runtime ports.

### Fixed

- Router SSE stream token accounting now reliably extracts `usage` blocks from final stream chunks.
- Exact unit resolution for token counts across metric cards and table rows instead of compact abbreviations.
- Integration-test service startup checks now retain a bounded five-second budget under parallel load.

### Changed

- Frontier model ranking and benchmark scoring now incorporate runtime reliability weighting and anti-churn thresholds.

## [0.3.0] - 2026-08-27

### Added

- Direct TokenHarbor provider support with fail-closed `:free` and zero-price catalog verification.
- TokenHarbor live-catalog pricing normalization for `*_usd_per_1m` fields.

### Fixed

- Setup, doctor, component inventory, and dashboard output now honor custom router and Console ports instead of reporting hardcoded defaults.
- Project version metadata is synchronized across `VERSION`, `package.json`, `package-lock.json`, and `PROJECT.yaml`.

### Changed

- GitHub Actions use the current checkout, Node setup, CodeQL, and Pages deployment majors.

## [0.2.0] - 2026-08-12

### Added

- Live verified-free discovery for OpenRouter, OpenCode, and NVIDIA, with bounded health checks and last-known-good preservation.
- Quota-bounded task benchmarks, deterministic grading, runtime reliability weighting, anti-churn promotion, atomic routing updates, and dry-run reports.
- Daily discovery and weekly benchmark macOS LaunchAgents with overlap locks.
- Nine-page metadata-only Console with a fully synthetic demo covering normal routing, fallbacks, rate limits, promotions, and safety rejection.
- Isolated-home installer and CLI integration coverage.

### Changed

- Provider metadata now uses a common capability, pricing-evidence, availability, and context-capacity schema.
- The macOS installer creates a user-local CLI launcher and reports occupied ports conservatively.

## [0.1.0] - 2026-08-12

### Added

- Deterministic semantic router with strict-free eligibility and fallback.
- Modular OpenAI-compatible, OpenRouter, and NVIDIA provider foundations.
- Metadata-only SQLite observability and synthetic demo console.
- CLI, macOS-first bootstrap, mock CI tests, integration guides, and documentation.

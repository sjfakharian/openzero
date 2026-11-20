---
type: project
title: "OpenZero"
domain: platform
status: active
version: "0.4.0"
runtime: "node 24"
schedule: "always-on launchd com.zerospend.router + com.zerospend.console (KeepAlive)"
entrypoints: ["packages/router/src/server.mjs", "apps/console/server.mjs", "cli/openzero.mjs", "install.sh"]
data_sources: []
tables: []
pii: false
repo: "github sjfakharian/openzero"
updated: 2026-11-20
description: "Public MIT OpenAI-compatible local LLM router that only routes to verified-free models (UNKNOWN COST = NOT FREE), with console, CLI and VitePress docs."
tags: [project, platform]
---

# OpenZero (formerly ZeroSpend)

> [!note] Independent repo, not portfolio-synced
> Unrelated to Digikala (user, 2026-10-11). Its own release cadence; `99_system/tools/check_structure.py` does not flag this hub note's `version` against `VERSION` (`VERSION_SYNC_EXEMPT`). Update this hub note's frontmatter yourself whenever you bump the repo's own `VERSION` — nothing does it for you.

ZeroSpend is an open-source, OpenAI-compatible local LLM router. It sends requests only to routes it has verified as free, and it's fail-closed: `UNKNOWN COST = NOT FREE`. It's pure Node ESM using `node:sqlite`. Its only npm dependency is the dev dependency `vitepress`, used for the docs site on GitHub Pages.

It has four parts:
- the router in `packages/router`;
- the console in `apps/console`;
- the CLI in `cli/zerospend.mjs` (`setup`, `doctor`, `discover`, `benchmark`, `provider add`);
- launch-media generation scripts.

## Status

As of 2026-09-23:
- Version 0.3.0. Public repo at `https://github.com/sjfakharian/zerospend`; the last commit is `3469748` on 2026-09-08 (APINex provider).
- The repo is protected in this redesign, so its contents are not reorganized.
- Uncommitted work: 3 modified scripts (`scripts/*walkthrough*.mjs`, `scripts/generate-launch-media.mjs`) and 4 untracked `" (1)"` conflict copies.
- On the old Mac the router was in a crash loop.
  - It raised `unverified route rejected: tokenharbor/qwen3.8-27b:free`.
  - The cause: all 8 aliases in `~/.zerospend/config/routing.json` pointed to a route that discovery no longer verifies.
  - The console was running.
- Ports on this machine: the router uses 20229 and the console uses 20231. The project defaults are 20129 and 20131, but those collide with the Hermes Smart Router and FreeRoute Console.
- The zerospend plists call `/usr/local/bin/node`. On the old Mac that was the broken Node 25 (see the incident linked below). Use `node@24`.
- The LaunchAgents are staged in `laptop_migration/config/launch_agents/` and aren't installed on the new Mac yet (checked 2026-09-24).

## How to run

```bash
cd "/Users/sajjadfakharian/Work/DK Project/70_platform/llm_routing/zerospend"
export ZEROSPEND_ROUTER_PORT=20229 ZEROSPEND_CONSOLE_PORT=20231
npm test                 # node --test unit + integration (mock/loopback)
npm start                # router
npm run console          # console
node cli/zerospend.mjs doctor
npm run docs:build       # -> dist/docs
```

See [[70_platform/llm_routing/zerospend/README|README]].

## Outputs

- `dist/` (887M, gitignored, rebuildable): docs build and launch-media renders.
- Runtime state and config live in `~/.zerospend/` (`config/routing.json`, `state/verified-routes.json`, `logs/`).

## Data

No warehouse tables. ZeroSpend never uses company data.

## Related

- [[platform]]
- [[llm_routing]]: program hub
- [[free_route_console]]
- [[2026-08-21T173331Z_default_node_runtime_missing_simdjson]]: the Node 25 runtime is broken, and the zerospend plists use `/usr/local/bin/node` (related by runtime; the incident doesn't name this project).

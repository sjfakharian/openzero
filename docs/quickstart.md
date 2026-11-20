# Quickstart

Requirements: macOS, Node.js 22+, npm, and at least one supported provider account.

```bash
git clone https://github.com/sjfakharian/openzero.git
cd openzero
./install.sh
openzero setup
openzero doctor
```

Configure one provider from the terminal or the local Console:

```bash
openzero provider add
openzero provider test openrouter
openzero providers
openzero discover
openzero benchmark --dry-run
openzero benchmark
openzero automation install
```

OpenRouter, NVIDIA NIM, TokenHarbor, and APINex are direct providers. TokenHarbor eligibility requires an explicit `:free` model ID and explicit zero input/output pricing; review its free-route data-retention opt-in before use. APINex eligibility requires an explicit free marker plus explicit zero input/output catalog pricing; paid or ambiguously priced models are never admitted.

`--dry-run` writes recommendations but never changes production routing. Review generated LaunchAgents before loading them. The credential-free synthetic console is available with `npm run demo` at `http://127.0.0.1:20131` and contacts no provider.

Bearer credentials are entered with terminal echo disabled and stored by the same provider manager used by the Console. Manual `.token` file creation is an advanced recovery/configuration option only.

For occupied default ports, use explicit alternatives consistently:

```bash
OPENZERO_ROUTER_PORT=20229 OPENZERO_CONSOLE_PORT=20231 ./install.sh
OPENZERO_ROUTER_PORT=20229 OPENZERO_CONSOLE_PORT=20231 openzero doctor
```

Point Hermes or another compatible client to `http://127.0.0.1:20229/v1` in this example.

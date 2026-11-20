import test from 'node:test';
import assert from 'node:assert/strict';
import { defaults } from '../../packages/config/src/index.mjs';

test('defaults returns expected configuration', () => {
  const config = defaults();

  assert.deepEqual(config, {
    schema_version: 1,
    zero_cost_policy: 'strict',
    uncertain_fallback: 'free-general',
    host: '127.0.0.1',
    port: 20129,
    console_port: 20131,
    aliases: {
      'free-code': [],
      'free-sql': [],
      'free-reasoning': [],
      'free-general': [],
      'free-tools': [],
      'free-fast': [],
      'free-long-context': [],
      'free-structured': [],
      'free-council': []
    }
  });
});

test('resolveEndpoints prefers environment, then routing config, then defaults', async () => {
  const { resolveEndpoints, PORT_FALLBACKS } = await import('../../packages/config/src/index.mjs');

  assert.deepEqual(resolveEndpoints({ config: { port: 20229, console_port: 20231 }, env: {} }), {
    routerPort: 20229,
    consolePort: 20231
  });
  assert.deepEqual(resolveEndpoints({ config: { port: 20229, console_port: 20231 }, env: { ZEROSPEND_ROUTER_PORT: '23129' } }), {
    routerPort: 23129,
    consolePort: 20231
  });
  assert.deepEqual(resolveEndpoints({ config: {}, env: {} }), PORT_FALLBACKS);
  assert.deepEqual(resolveEndpoints({ config: { port: 'not-a-port', console_port: -1 }, env: { ZEROSPEND_CONSOLE_PORT: '0' } }), PORT_FALLBACKS);
});

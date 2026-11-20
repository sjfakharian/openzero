import test from 'node:test';
import assert from 'node:assert/strict';
import { stableNodePath } from '../../packages/automation/src/index.mjs';

test('stableNodePath collapses versioned Cellar paths onto the opt symlink', () => {
  assert.equal(stableNodePath('/opt/homebrew/Cellar/node@24/24.21.0/bin/node'), '/opt/homebrew/opt/node@24/bin/node');
  assert.equal(stableNodePath('/usr/local/Cellar/node@24/24.19.0/bin/node'), '/usr/local/opt/node@24/bin/node');
  assert.equal(stableNodePath('/opt/homebrew/opt/node@24/bin/node'), '/opt/homebrew/opt/node@24/bin/node');
  assert.equal(stableNodePath('/usr/bin/node'), '/usr/bin/node');
});

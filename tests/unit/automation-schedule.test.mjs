import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { mkdir, mkdtemp, writeFile } from 'node:fs/promises';
import os from 'node:os';
import { configuredSchedules, readSchedule, scheduleSummary } from '../../packages/automation/src/index.mjs';

const repo = path.dirname(path.dirname(path.dirname(fileURLToPath(import.meta.url))));
const template = name => readFile(path.join(repo, 'services', 'macos', name), 'utf8');

test('benchmark template schedules Sunday 04:40, matching the reported schedule', async () => {
  const calendar = readSchedule(await template('com.zerospend.benchmark.plist.template'));
  assert.equal(calendar.weekday, 0, 'launchd Weekday 0 is Sunday');
  assert.equal(calendar.summary, 'Sunday 04:40');
  assert.equal(calendar.summary, scheduleSummary.weekly_benchmark);
});

test('discovery template runs daily at 04:10 with no weekday key', async () => {
  const calendar = readSchedule(await template('com.zerospend.discovery.plist.template'));
  assert.equal(calendar.weekday, null);
  assert.equal(calendar.summary, scheduleSummary.daily_discovery);
});

test('readSchedule flags a weekday that disagrees with the advertised schedule', () => {
  const monday = '<key>StartCalendarInterval</key><dict><key>Weekday</key><integer>1</integer><key>Hour</key><integer>4</integer><key>Minute</key><integer>40</integer></dict>';
  assert.equal(readSchedule(monday).summary, 'Monday 04:40');
  assert.notEqual(readSchedule(monday).summary, scheduleSummary.weekly_benchmark);
});

test('configuredSchedules marks installed files and flags a persisted mismatch', async () => {
  const home = await mkdtemp(path.join(os.tmpdir(), 'zs-schedule-'));
  const dir = path.join(home, 'Library', 'LaunchAgents');
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, 'com.zerospend.benchmark.plist'), await template('com.zerospend.benchmark.plist.template'));
  const rows = await configuredSchedules({ home });
  const benchmark = rows.find(row => row.label === 'com.zerospend.benchmark');
  const discovery = rows.find(row => row.label === 'com.zerospend.discovery');
  assert.equal(benchmark.installed, true);
  assert.equal(benchmark.summary, benchmark.schedule);
  assert.equal(discovery.installed, false);
});

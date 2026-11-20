import {readFile} from 'node:fs/promises';import path from 'node:path';import {paths} from '../../shared/src/paths.mjs';
export async function loadConfig(){const p=path.join(paths().config,'routing.json');return JSON.parse(await readFile(p,'utf8'))}
export function defaults(){return {schema_version:1,zero_cost_policy:'strict',uncertain_fallback:'free-general',host:'127.0.0.1',port:20129,console_port:20131,aliases:{'free-code':[],'free-sql':[],'free-reasoning':[],'free-general':[],'free-tools':[],'free-fast':[],'free-long-context':[],'free-structured':[],'free-council':[]}}}
export const PORT_FALLBACKS={routerPort:20129,consolePort:20131};
const validPort=value=>{const candidate=Number(value);return Number.isInteger(candidate)&&candidate>0&&candidate<65536?candidate:null};
export function resolveEndpoints({config={},env=process.env}={}){const pick=(envKey,configKey,fallback)=>validPort(env?.[envKey])??validPort(config?.[configKey])??fallback;return {routerPort:pick('ZEROSPEND_ROUTER_PORT','port',PORT_FALLBACKS.routerPort),consolePort:pick('ZEROSPEND_CONSOLE_PORT','console_port',PORT_FALLBACKS.consolePort)}}
export async function currentEndpoints({env=process.env}={}){let config={};try{config=await loadConfig()}catch{}return resolveEndpoints({config,env})}

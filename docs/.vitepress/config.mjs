import {defineConfig} from 'vitepress';

export default defineConfig({
  title:'OpenZero',
  description:'A verified-free, task-aware local LLM routing stack.',
  base:'/openzero/',
  outDir:'../dist/docs',
  cleanUrls:true,
  lastUpdated:true,
  appearance:true,
  head:[
    ['link',{rel:'icon',href:'/openzero/logo.svg'}],
    ['meta',{name:'theme-color',content:'#6d5dfc'}],
    ['meta',{property:'og:image',content:'https://sjfakharian.github.io/openzero/og.svg'}],
    ['meta',{property:'og:title',content:'OpenZero — verified-free LLM routing'}],
    ['meta',{property:'og:description',content:'One local endpoint. Task-aware routing. Paid fallback impossible by policy.'}]
  ],
  themeConfig:{
    logo:'/logo.svg',
    siteTitle:'OpenZero',
    search:{provider:'local'},
    nav:[
      {text:'Guide',link:'/quickstart'},
      {text:'Providers',link:'/providers/openrouter'},
      {text:'Console',link:'/dashboard'},
      {text:'Security',link:'/security'},
      {text:'GitHub',link:'https://github.com/sjfakharian/openzero'}
    ],
    sidebar:[
      {text:'Start',items:[{text:'Overview',link:'/'},{text:'Quickstart',link:'/quickstart'},{text:'Install on macOS',link:'/installation/macos'},{text:'Linux (experimental)',link:'/installation/linux-experimental'},{text:'From zero to stack',link:'/from-zero-to-stack'}]},
      {text:'Core concepts',items:[{text:'Architecture',link:'/architecture'},{text:'Routing',link:'/routing'},{text:'Free verification',link:'/free-verification'},{text:'Benchmarking',link:'/benchmarking'},{text:'Observability',link:'/observability'}]},
      {text:'Providers',items:[{text:'OpenRouter',link:'/providers/openrouter'},{text:'OpenCode Free',link:'/providers/opencode'},{text:'NVIDIA NIM',link:'/providers/nvidia'},{text:'TokenHarbor',link:'/providers/tokenharbor'},{text:'APINex',link:'/providers/apinex'},{text:'OmniRoute',link:'/providers/omniroute'}]},
      {text:'Integrations',items:[{text:'Hermes Agent',link:'/integrations/hermes'},{text:'Cursor & Continue',link:'/integrations/cursor-continue'},{text:'LibreChat & Open-WebUI',link:'/integrations/librechat-openwebui'},{text:'TypingMind',link:'/integrations/typingmind'},{text:'OpenAI-compatible',link:'/integrations/openai-compatible'}]},
      {text:'Operate',items:[{text:'Console',link:'/dashboard'},{text:'Configuration',link:'/configuration'},{text:'Privacy',link:'/privacy'},{text:'Security',link:'/security'},{text:'Troubleshooting',link:'/troubleshooting'}]},
      {text:'Project',items:[{text:'FAQ',link:'/faq'},{text:'Contributing',link:'/contributing'},{text:'Clean-machine validation',link:'/clean-machine-validation'}]}
    ],
    socialLinks:[{icon:'github',link:'https://github.com/sjfakharian/openzero'}],
    footer:{message:'Local-first. Metadata-only. Strictly verified-free.',copyright:'Released under the MIT License.'},
    editLink:{pattern:'https://github.com/sjfakharian/openzero/edit/main/docs/:path'},
    outline:{level:[2,3],label:'On this page'}
  }
});

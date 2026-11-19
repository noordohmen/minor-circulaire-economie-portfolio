import fs from 'node:fs';
fs.mkdirSync('dist/server',{recursive:true});fs.mkdirSync('dist/.openai',{recursive:true});
const html=fs.readFileSync('web/index.html','utf8').replace('/*STYLE*/',fs.readFileSync('web/style.css','utf8')).replace('/*SCRIPT*/',fs.readFileSync('web/app.js','utf8'));
const assets=Object.fromEntries(fs.readdirSync('assets').filter(f=>f.endsWith('.json')).map(f=>[f.slice(0,-5),JSON.parse(fs.readFileSync('assets/'+f,'utf8'))]));
const source=fs.readFileSync('worker/index.js','utf8').replace("import { HTML } from '../web/page.js';",'const HTML = '+JSON.stringify(html)+';').replace('/*ASSETS*/ {}',JSON.stringify(assets));
fs.writeFileSync('dist/server/index.js',source);fs.copyFileSync('.openai/hosting.json','dist/.openai/hosting.json');console.log('Portfolio built.');

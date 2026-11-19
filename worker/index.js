import { HTML } from '../web/page.js';
export const initialData = {
 about: {text:'Ik ben Noor Dohmen, vierdejaarsstudent Bedrijfskunde aan de HAN in Nijmegen. Tijdens de minor Circulaire Economie onderzoek ik hoe organisaties duurzamer en toekomstbestendiger kunnen werken.\n\nMijn interesses liggen bij procesverbetering, verandermanagement, kwaliteitsmanagement en innovatie. In dit portfolio laat ik zien aan welke projecten ik werk, hoe ik ze aanpak en wat ik daarvan leer.',photo:''},
 projects:[
 {id:'greenstories',title:'Greenstories',subtitle:'Duurzame vraagstukken, verrassende verhalen.',start:'2026-09',end:'2026-10',tags:['Duurzaamheid','Kortcyclisch project'],status:'Afgerond',art:'green',summary:'Een variant op Blackstories waarin duurzame vraagstukken centraal staan. Met verhalen en vragen wordt duurzaamheid bespreekbaar.',approach:'',result:'',reflection:'',team:'',duration:'September – oktober 2026',cover:'',files:[],updates:[],published:true},
 {id:'oceaanwebsite',title:'Duik in de diepte',subtitle:'Een oceanenwebsite voor kinderen.',start:'2026-10',end:'2026-10',tags:['Educatie','Website'],status:'Afgerond',art:'ocean',summary:'Een website voor kinderen over de oceanen. Een digitaal project waarin informatie op een toegankelijke manier wordt aangeboden.',approach:'',result:'',reflection:'',team:'',duration:'Oktober 2026',link:'',cover:'',files:[],updates:[],published:true},
 {id:'talis',title:'Talis',subtitle:'Deelmobiliteit begint bij mensen.',start:'2026-09',end:'2027-01',tags:['Deelmobiliteit','Verandermanagement','Grote opdracht'],status:'Bezig',art:'talis',summary:'Onderzoek naar verandermanagement rondom deelmobiliteit voor woningcorporatie Talis. Verschillende belangen en perspectieven vormen de basis voor een onderbouwd advies.',approach:'We verzamelen kennis via interviews en koppelen onze inzichten terug aan de opdrachtgevers. Daarbij stellen we kritische vervolgvragen om de verschillende perspectieven en belangen beter te begrijpen.',result:'Het onderzoek loopt nog. Het eindresultaat wordt hier later toegevoegd.',reflection:'Tijdens dit project oefen ik met actief vragen stellen, kritisch doorvragen en mijn eigen ideeën delen.',team:'',duration:'September 2026 – januari 2027',cover:'',files:[],updates:[],published:true},
 {id:'roelofs',title:'Roelofs',subtitle:'Duurzame impact concreet maken.',start:'2026-11',end:'2026-12',tags:['Circulariteit','IMPACT Dashboard','Kortcyclisch project'],status:'Bezig',art:'roelofs',summary:'Hoe help je projectteams en opdrachtgevers om duurzamere keuzes te maken? Bij Roelofs staat het IMPACT Dashboard centraal.',approach:'De opdracht richt zich op het onderzoeken van de customer journey, het ontwikkelen van een workshop en het uitwerken van een praktisch implementatieplan.',result:'Dit project loopt nog. De resultaten volgen na afronding.',reflection:'',team:'',duration:'November – december 2026',cover:'',files:[],updates:[],published:true},
 {id:'poes',title:'Poes',subtitle:'Experimenteren met AI en webdesign.',start:'2026-11',end:'2026-11',tags:['AI','Website','Kortcyclisch project'],status:'Bezig',art:'poes',summary:'Een AI-website voor Poes. Een project om de mogelijkheden van AI bij het maken van een website te verkennen.',approach:'',result:'',reflection:'',team:'',duration:'November 2026',cover:'',files:[],updates:[],published:true},
 {id:'innovatiehub',title:'Innovatiehub',subtitle:'Ruimte voor nieuwe ideeën.',start:'2026-12',end:'2026-12',tags:['Innovatie'],status:'Nog te starten',art:'hub',summary:'Een gepland project in december. De opdracht, aanpak en resultaten worden toegevoegd zodra het project begint.',approach:'',result:'',reflection:'',team:'',duration:'December 2026',cover:'',files:[],updates:[],published:true},
 {id:'lots-of-luck',title:'Lots of Luck',subtitle:'Een volgend digitaal experiment.',start:'2026-12',end:'2026-12',tags:['AI','Website','Kortcyclisch project'],status:'Nog te starten',art:'luck',summary:'Een geplande AI-website voor Lots of Luck. Het project start in december.',approach:'',result:'',reflection:'',team:'',duration:'December 2026',cover:'',files:[],updates:[],published:true}
 ],
 goals:[
 {id:'feedback',title:'Actief deelnemen en op tijd feedback vragen',description:'Ik wil eerder feedback vragen aan groepsgenoten en docenten, zodat ik mijn werk en aanpak tijdig kan verbeteren.',evidence:'Bij kortcyclische opdrachten vraag ik de opdrachtgever naar verwachtingen en feedback. Bij Talis koppelen we onze inzichten regelmatig terug aan de opdrachtgevers.',reflection:'',projects:['talis','roelofs']},
 {id:'mening',title:'Meer vertrouwen in mijn eigen mening en ideeën',description:'Ik wil mijn ideeën eerder delen en beter leren onderbouwen waarom ik een bepaalde keuze maak.',evidence:'Bij Talis deel ik actief mijn ideeën en stel ik kritische vervolgvragen tijdens gesprekken.',reflection:'',projects:['talis']},
 {id:'comfortzone',title:'Vaker uit mijn comfortzone stappen',description:'Ik wil mezelf uitdagen om dingen te doen die ik anders sneller vermijd en samenwerken met verschillende mensen.',evidence:'Ik neem deel aan kortcyclische opdrachten, werk met andere mensen en oefen met kritische vragen stellen tijdens interviews.',reflection:'',projects:['talis','roelofs']}
 ]
};
const headers={'X-Content-Type-Options':'nosniff','Referrer-Policy':'strict-origin-when-cross-origin','X-Robots-Tag':'noindex, nofollow','Content-Security-Policy':"default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; object-src 'none'; frame-src 'self'; base-uri 'none'; form-action 'self'; frame-ancestors 'self' https://chatgpt.com"};
const json=(data,status=200,extra={})=>new Response(JSON.stringify(data),{status,headers:{...headers,'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store',...extra}});
const admin=(req,env)=>!!env.ADMIN_EMAIL && !!req.headers.get('oai-authenticated-user-id') && req.headers.get('oai-authenticated-user-email')?.toLowerCase()===env.ADMIN_EMAIL.toLowerCase();
const safeURL=x=>typeof x==='string'&&(x===''||/^https:\/\/[^\s]+$/.test(x)||/^\/files\/[a-zA-Z0-9-]+$/.test(x));
export function validData(d){
 if(!d||!Array.isArray(d.projects)||!Array.isArray(d.goals)||d.projects.length>100||d.goals.length>100||!d.about||typeof d.about.text!=='string'||!safeURL(d.about.photo)) return false;
 const ids=new Set();
 for(const p of d.projects){if(!p||typeof p.id!=='string'||!/^[a-z0-9-]{1,80}$/.test(p.id)||ids.has(p.id)||typeof p.title!=='string'||!p.title.trim()||!Array.isArray(p.tags)||!p.tags.every(t=>typeof t==='string'&&t.length<100)||!Array.isArray(p.files)||!Array.isArray(p.updates)||!safeURL(p.cover)||!safeURL(p.link||'')||!['Afgerond','Bezig','Nog te starten'].includes(p.status))return false;ids.add(p.id);for(const k of ['summary','subtitle','approach','result','reflection','team','duration','start','end','art'])if(typeof p[k]!=='string'||p[k].length>30000)return false;for(const f of p.files)if(!f||typeof f.id!=='string'||!/^\/files\/[a-zA-Z0-9-]+$/.test(f.url)||typeof f.name!=='string'||typeof f.type!=='string')return false;for(const u of p.updates)if(!u||typeof u.date!=='string'||typeof u.title!=='string'||typeof u.text!=='string')return false;}
 const goals=new Set();for(const g of d.goals){if(!g||typeof g.id!=='string'||goals.has(g.id)||!Array.isArray(g.projects)||!g.projects.every(id=>ids.has(id)))return false;goals.add(g.id);for(const k of ['title','description','evidence','reflection'])if(typeof g[k]!=='string'||g[k].length>30000)return false;}
 return true;
}
async function readData(env){const obj=await env.BUCKET.get('portfolio/content.json');return obj?{data:await obj.json(),etag:obj.etag}:{data:structuredClone(initialData),etag:'initial'};}
const allowedTypes=new Set(['image/jpeg','image/png','image/webp','image/gif','application/pdf','text/plain','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']);
export default {async fetch(req,env){try{
 const url=new URL(req.url);const path=url.pathname;const isAdmin=admin(req,env);
 if(path==='/api/session')return json({admin:isAdmin,signedIn:!!req.headers.get('oai-authenticated-user-id')});
 if(path.startsWith('/api/')&&!['GET','HEAD'].includes(req.method)){
  if(!isAdmin)return json({error:'Alleen Noor kan dit portfolio aanpassen.'},403);
  if(req.headers.get('origin')!==url.origin)return json({error:'Ongeldige aanvraag.'},403);
 }
 if(path==='/api/content'&&req.method==='GET'){
 const {data,etag}=await readData(env);if(!isAdmin){data.projects=data.projects.filter(p=>p.published);const ids=new Set(data.projects.map(p=>p.id));data.goals=data.goals.map(g=>({...g,projects:g.projects.filter(id=>ids.has(id))}));}return json(data,200,{ETag:'"'+etag+'"'});
 }
 if(path==='/api/content'&&req.method==='PUT'){
  if(Number(req.headers.get('content-length')||0)>2000000)return json({error:'Te veel tekst. Verklein de inhoud.'},413);
  const body=await req.text();if(body.length>2000000)return json({error:'Te veel tekst.'},413);let data;try{data=JSON.parse(body);}catch{return json({error:'Ongeldige inhoud.'},400);}
  if(!validData(data))return json({error:'Controleer de projectvelden en links. Alleen https-links zijn toegestaan.'},400);
  const expected=req.headers.get('if-match')?.replaceAll('"','');if(!expected)return json({error:'Herlaad de pagina voordat je opslaat.'},409);
  const opts={httpMetadata:{contentType:'application/json'},onlyIf:expected==='initial'?{etagDoesNotMatch:'*'}:{etagMatches:expected}};
  const saved=await env.BUCKET.put('portfolio/content.json',body,opts);if(!saved)return json({error:'Er is in een ander venster iets gewijzigd. Herlaad deze pagina.'},409);
  return json({ok:true},200,{ETag:'"'+saved.etag+'"'});
 }
 if(path==='/api/upload'&&req.method==='POST'){
  const size=Number(req.headers.get('content-length')||0);if(size>21*1024*1024)return json({error:'Maximaal 20 MB per bestand.'},413);
  const form=await req.formData();const file=form.get('file');if(!file||typeof file==='string')return json({error:'Kies een bestand.'},400);
  if(file.size>20*1024*1024)return json({error:'Maximaal 20 MB per bestand.'},413);
  if(!allowedTypes.has(file.type))return json({error:'Kies een foto (JPG, PNG, WebP, GIF), pdf, tekstbestand of Office-document.'},400);
  const id=crypto.randomUUID();const name=file.name.replace(/[\r\n"\\/]/g,'_').slice(0,200);
  await env.BUCKET.put('files/'+id,await file.arrayBuffer(),{httpMetadata:{contentType:file.type},customMetadata:{name}});
  return json({id,name,url:'/files/'+id,type:file.type,size:file.size});
 }
 if(path.startsWith('/files/')&&['GET','HEAD'].includes(req.method)){
 const id=path.slice(7);if(!/^[a-zA-Z0-9-]+$/.test(id))return new Response('Niet gevonden',{status:404});
 const {data}=await readData(env);const projects=isAdmin?data.projects:data.projects.filter(p=>p.published);const publicRef=projects.some(p=>p.files.some(f=>f.url===path)||p.cover===path)||data.about.photo===path;
 if(!publicRef&&!isAdmin)return new Response('Niet gevonden',{status:404});
 const obj=await env.BUCKET.get('files/'+id);if(!obj)return new Response('Niet gevonden',{status:404});
 const type=obj.httpMetadata?.contentType||'application/octet-stream';const preview=type.startsWith('image/')||type==='application/pdf';
 return new Response(req.method==='HEAD'?null:obj.body,{headers:{...headers,'Content-Type':type,'Content-Disposition':(url.searchParams.has('download')||!preview?'attachment':'inline')+"; filename*=UTF-8''"+encodeURIComponent(obj.customMetadata?.name||'bestand'),'Cache-Control':'private, no-store','Content-Security-Policy':"sandbox; default-src 'none'"}});
 }
 if(path.startsWith('/api/'))return json({error:'Niet gevonden'},404);
 if(!['GET','HEAD'].includes(req.method))return new Response('Niet toegestaan',{status:405});
 if(!['/','/leerdoelen','/over-mij','/beheer'].includes(path)&&!/^\/project\/[a-z0-9-]+$/.test(path))return new Response('Pagina niet gevonden',{status:404});
 return new Response(req.method==='HEAD'?null:HTML,{headers:{...headers,'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'}});
 }catch(e){console.error('Portfolio request failed',e.message);return json({error:'De website kan dit nu niet laden. Probeer het opnieuw.'},500);}}};

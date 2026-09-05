import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_PACKAGE || 'playwright');
const browser=await chromium.launch({channel:'msedge',headless:true});
try {
 const page=await browser.newPage({viewport:{width:390,height:844}});
 await page.route('**/*',async route=>{const u=new URL(route.request().url());if(u.hostname!=='app.test')return route.abort();if(u.pathname.startsWith('/api/'))return route.fulfill({status:u.pathname==='/api/auth/me'?401:200,contentType:'application/json',body:JSON.stringify({user:null})});try{const f=path.join(process.cwd(),decodeURIComponent(u.pathname==='/'?'/index.html':u.pathname));const body=await fs.readFile(f);const ext=path.extname(f);await route.fulfill({body,contentType:({'.js':'application/javascript','.css':'text/css','.html':'text/html','.json':'application/json','.png':'image/png','.jpg':'image/jpeg'})[ext]||'application/octet-stream'});}catch{await route.fulfill({status:404,body:''});}});
 await page.goto('http://app.test/index.html#/home');
 await page.waitForFunction(()=>window.__zhixingAuthReady===true);
 await page.waitForFunction(()=>!window.__zhixingBooting);
 await page.evaluate(()=>{window.badFrames=[];function sample(){if(location.hash==='#/message'){const main=document.querySelector('#main-content');if(main&&/研学一班|第二小组|任务即将到期/.test(main.textContent))window.badFrames.push(main.textContent.slice(0,120));}requestAnimationFrame(sample);}requestAnimationFrame(sample);});
 for(let n=0;n<5;n++){await page.evaluate(()=>location.hash='/message');await page.locator('[data-message-route-shell]').waitFor({state:'attached'});await page.locator('#guest-message-hard-lock').waitFor({state:'visible'});await page.evaluate(()=>location.hash='/home');await page.locator('#guest-message-hard-lock').waitFor({state:'detached'});}
 assert.deepEqual(await page.evaluate(()=>window.badFrames),[]);
 console.log('PASS: 5 message/home cycles, guest prompt visible, no legacy message frames');
}finally{await browser.close();}

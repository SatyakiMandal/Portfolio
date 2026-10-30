import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const outDir = 'D:\\Projects\\portfolio-kit\\site\\public\\device-tests';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const devices = [
  { name: 'mobile', width: 390, height: 844, scale: 2, mobile: true },
  { name: 'tablet', width: 768, height: 1024, scale: 2, mobile: true },
  { name: 'laptop', width: 1280, height: 800, scale: 1, mobile: false },
  { name: 'desktop', width: 1920, height: 1080, scale: 1, mobile: false }
];

const pages = [
  { slug: 'home', path: '/' },
  { slug: 'work-campus', path: '/work/campus-activewear' },
  { slug: 'comp-tenet', path: '/competitions/tenet-2026' }
];

async function captureDevice(device, page) {
  return new Promise((resolve, reject) => {
    const filename = path.join(outDir, `${device.name}-${page.slug}.png`);
    const edge = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
      '--headless=new',
      '--remote-debugging-port=9222',
      `http://localhost:3000${page.path}`
    ]);

    setTimeout(async () => {
      try {
        const tabs = await new Promise((res, rej) => {
          http.get('http://127.0.0.1:9222/json', r => {
            let d = '';
            r.on('data', c => d += c);
            r.on('end', () => res(JSON.parse(d)));
          }).on('error', rej);
        });

        const tab = tabs.find(t => t.type === 'page');
        if (!tab) throw new Error('No page tab');

        const ws = new globalThis.WebSocket(tab.webSocketDebuggerUrl);
        ws.addEventListener('open', () => {
          // 1. Set emulation metrics
          ws.send(JSON.stringify({
            id: 1,
            method: 'Emulation.setDeviceMetricsOverride',
            params: {
              width: device.width,
              height: device.height,
              deviceScaleFactor: device.scale,
              mobile: device.mobile
            }
          }));

          // 2. Wait 1200ms for animations and layout
          setTimeout(() => {
            ws.send(JSON.stringify({
              id: 2,
              method: 'Page.captureScreenshot',
              params: {
                format: 'png',
                captureBeyondViewport: false
              }
            }));
          }, 1200);
        });

        ws.addEventListener('message', (evt) => {
          const msg = JSON.parse(evt.data);
          if (msg.id === 2 && msg.result?.data) {
            fs.writeFileSync(filename, Buffer.from(msg.result.data, 'base64'));
            ws.close();
            edge.kill();
            resolve(filename);
          }
        });
      } catch (err) {
        edge.kill();
        reject(err);
      }
    }, 2000);
  });
}

async function run() {
  console.log('Starting device-wide screenshot audit...');
  for (const p of pages) {
    for (const d of devices) {
      console.log(`Capturing ${d.name} for ${p.slug}...`);
      try {
        const file = await captureDevice(d, p);
        console.log(`Saved: ${file}`);
      } catch (err) {
        console.error(`Failed ${d.name}-${p.slug}:`, err.message);
      }
    }
  }
  console.log('All captures finished!');
}

run();

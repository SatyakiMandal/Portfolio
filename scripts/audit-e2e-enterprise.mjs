import http from 'http';
import fs from 'fs';

const BASE_URL = 'http://localhost:3000';

const PAGES = [
  '/',
  '/work/tata-steel',
  '/work/tata-consumer-products',
  '/work/campus-activewear',
  '/work/hul-red-label',
  '/work/xlri-alumni-policy',
  '/work/1001-stories',
  '/work/ajooni-biotech',
  '/work/arthdex',
  '/competitions/tenet-2026',
  '/competitions/mochaverse-venix-2026',
  '/competitions/tvs-credit-epic-8',
  '/competitions/grad-3-galderma',
  '/competitions/hero-campus-challenge-10',
  '/competitions/market-makers-mochatrade',
  '/competitions/xcelerate-maruti-suzuki-2026',
];

const OG_IMAGES = [
  '/opengraph-image',
  '/work/tata-steel/opengraph-image',
  '/work/tata-consumer-products/opengraph-image',
  '/work/campus-activewear/opengraph-image',
  '/work/hul-red-label/opengraph-image',
  '/work/xlri-alumni-policy/opengraph-image',
  '/work/1001-stories/opengraph-image',
  '/work/ajooni-biotech/opengraph-image',
  '/work/arthdex/opengraph-image',
  '/competitions/tenet-2026/opengraph-image',
  '/competitions/mochaverse-venix-2026/opengraph-image',
  '/competitions/tvs-credit-epic-8/opengraph-image',
  '/competitions/grad-3-galderma/opengraph-image',
  '/competitions/hero-campus-challenge-10/opengraph-image',
  '/competitions/market-makers-mochatrade/opengraph-image',
  '/competitions/xcelerate-maruti-suzuki-2026/opengraph-image',
];

const UTILITY_ROUTES = [
  '/sitemap.xml',
  '/robots.txt',
  '/icon.svg',
  '/apple-icon.png',
];

// Enterprise Red Hat & OWASP Security Probe Payloads
const SECURITY_PROBES = [
  { name: 'Path Traversal (URL Encoded)', path: '/..%2f..%2fpackage.json', expectNot200: true },
  { name: 'Path Traversal (Double Encoded)', path: '/%252e%252e%252fpackage.json', expectNot200: true },
  { name: 'Sensitive File: .env', path: '/.env', expectNot200: true },
  { name: 'Sensitive File: .env.local', path: '/.env.local', expectNot200: true },
  { name: 'Sensitive File: .git/HEAD', path: '/.git/HEAD', expectNot200: true },
  { name: 'Sensitive File: .git/config', path: '/.git/config', expectNot200: true },
  { name: 'Sensitive File: aws credentials', path: '/.aws/credentials', expectNot200: true },
  { name: 'Sensitive File: .DS_Store', path: '/.DS_Store', expectNot200: true },
  { name: 'Admin Probe: wp-login.php', path: '/wp-login.php', expectNot200: true },
  { name: 'Admin Probe: /admin', path: '/admin', expectNot200: true },
  { name: 'XSS Reflection Probe: Script Tag', path: '/<script>alert(1)</script>', expectNot200: true },
  { name: 'XSS Reflection in Query', path: '/?search=%3Cscript%3Ealert(%22xss%22)%3C/script%3E', expectCleanHtml: true },
  { name: 'Prototype Pollution Probe', path: '/?__proto__[polluted]=true&constructor[prototype][polluted]=true', expectCleanHtml: true },
  { name: 'Non-Existent Custom 404 Route', path: '/non-existent-page-probe-test-404', expectStatus: 404 },
];

function request(urlPath, method = 'GET') {
  return new Promise((resolve) => {
    const start = performance.now();
    const url = new URL(urlPath, BASE_URL);
    const req = http.request(url, { method }, (res) => {
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => {
        const buffer = Buffer.concat(chunks);
        resolve({
          path: urlPath,
          method,
          statusCode: res.statusCode,
          headers: res.headers,
          durationMs: Math.round((performance.now() - start) * 10) / 10,
          byteLength: buffer.length,
          bodyText: buffer.toString('utf8'),
        });
      });
    });
    req.on('error', (err) => {
      resolve({
        path: urlPath,
        method,
        statusCode: 0,
        headers: {},
        durationMs: 0,
        byteLength: 0,
        bodyText: '',
        error: err.message,
      });
    });
    req.end();
  });
}

async function run() {
  console.log('=== RUNNING END-TO-END ENTERPRISE & RED HAT SECURITY AUDIT ===\n');

  const report = {
    timestamp: new Date().toISOString(),
    pages: [],
    ogImages: [],
    utilityRoutes: [],
    securityProbes: [],
    subresources: [],
    securityHeadersCheck: {},
    complianceViolations: [],
    brokenLinks: [],
  };

  // 1. Audit Pages
  console.log(`[1/6] Auditing ${PAGES.length} Core Static Pages...`);
  const referencedAssets = new Set();
  const internalLinks = new Set();

  for (const p of PAGES) {
    const res = await request(p);
    const body = res.bodyText;

    // Extract subresources
    const scriptMatches = [...body.matchAll(/src=["'](\/_next\/static\/[^"']+)["']/g)];
    scriptMatches.forEach(m => referencedAssets.add(m[1]));
    const cssMatches = [...body.matchAll(/href=["'](\/_next\/static\/[^"']+\.css)["']/g)];
    cssMatches.forEach(m => referencedAssets.add(m[1]));
    const fontMatches = [...body.matchAll(/href=["'](\/_next\/static\/media\/[^"']+\.woff2)["']/g)];
    fontMatches.forEach(m => referencedAssets.add(m[1]));
    const imgMatches = [...body.matchAll(/src=["'](\/images\/[^"']+|\/logos\/[^"']+)["']/g)];
    imgMatches.forEach(m => referencedAssets.add(m[1]));

    // Extract links
    const linkMatches = [...body.matchAll(/href=["'](\/[^"'#?]*)["']/g)];
    linkMatches.forEach(m => {
      if (!m[1].startsWith('//')) internalLinks.add(m[1]);
    });

    // Check title, meta description, canonical, OG
    const titleMatch = body.match(/<title[^>]*>(.*?)<\/title>/i);
    const descMatch = body.match(/<meta[^>]*name=["']description["'][^>]*content=["'](.*?)["']/i);
    const canonicalMatch = body.match(/<link[^>]*rel=["']canonical["'][^>]*href=["'](.*?)["']/i);
    const ogTitleMatch = body.match(/<meta[^>]*property=["']og:title["'][^>]*content=["'](.*?)["']/i);
    const ogImageMatch = body.match(/<meta[^>]*property=["']og:image["'][^>]*content=["'](.*?)["']/i);
    const h1Matches = [...body.matchAll(/<h1[^>]*>(.*?)<\/h1>/gis)].map(m => m[1].replace(/<[^>]+>/g, '').trim());

    // Compliance checks
    const violations = [];
    if (body.includes('\u2014')) violations.push('Contains forbidden em dash (—)');
    if (body.includes('\u20B9')) violations.push('Contains forbidden Rupee symbol (₹)');
    if (body.includes('NexCon')) violations.push('Contains forbidden term "NexCon"');
    
    // Check for raw consumer survey counts
    const surveyMatch = body.match(/\b(n\s*=\s*\d+)\b/i) || body.match(/\b(\d+)\s*(respondents|intercepts)\b/i);
    if (surveyMatch) violations.push(`Potential raw survey count: ${surveyMatch[0]}`);

    // Check for phone numbers
    const phoneMatch = body.match(/\b(?:\+91[\s-]?)?[6-9]\d{9}\b/);
    if (phoneMatch) violations.push(`Potential phone number leak: ${phoneMatch[0]}`);

    if (p === '/work/tata-steel') {
      if (!body.includes('modelled') && !body.includes('Modelled')) {
        violations.push('Tata Steel missing required "modelled" disclaimer');
      }
      if (!body.includes('Live Project')) {
        violations.push('Tata Steel missing required "Live Project" tag');
      }
    }

    report.pages.push({
      path: p,
      status: res.statusCode,
      durationMs: res.durationMs,
      sizeKb: Math.round(res.byteLength / 102.4) / 10,
      title: titleMatch ? titleMatch[1] : null,
      hasDescription: !!descMatch,
      hasCanonical: !!canonicalMatch,
      hasOgTitle: !!ogTitleMatch,
      hasOgImage: !!ogImageMatch,
      h1Count: h1Matches.length,
      violations,
    });
  }

  // 2. Audit OpenGraph Image Endpoints
  console.log(`[2/6] Auditing ${OG_IMAGES.length} OpenGraph Dynamic Image Endpoints...`);
  for (const og of OG_IMAGES) {
    const res = await request(og);
    report.ogImages.push({
      path: og,
      status: res.statusCode,
      contentType: res.headers['content-type'],
      sizeKb: Math.round(res.byteLength / 102.4) / 10,
      durationMs: res.durationMs,
      isImage: (res.headers['content-type'] || '').includes('image/png'),
    });
  }

  // 3. Audit Utility Routes
  console.log(`[3/6] Auditing ${UTILITY_ROUTES.length} Utility Endpoints...`);
  for (const u of UTILITY_ROUTES) {
    const res = await request(u);
    report.utilityRoutes.push({
      path: u,
      status: res.statusCode,
      contentType: res.headers['content-type'],
      sizeKb: Math.round(res.byteLength / 102.4) / 10,
      durationMs: res.durationMs,
    });
  }

  // 4. Audit Subresources (Chunks, Styles, Fonts, Images)
  console.log(`[4/6] Verifying ${referencedAssets.size} Subresources (Scripts, Stylesheets, Fonts, Images)...`);
  const assetChecks = [];
  for (const asset of referencedAssets) {
    const res = await request(asset);
    assetChecks.push({
      asset,
      status: res.statusCode,
      ok: res.statusCode === 200,
      byteLength: res.byteLength,
      cacheControl: res.headers['cache-control'],
    });
  }
  report.subresources = {
    totalChecked: assetChecks.length,
    failedAssets: assetChecks.filter(a => !a.ok),
    all200Ok: assetChecks.every(a => a.ok),
  };

  // Check Internal Link Targets
  console.log(`[5/6] Validating ${internalLinks.size} Internal Link Targets...`);
  const linkChecks = [];
  for (const link of internalLinks) {
    if (link === '' || link.startsWith('#')) continue;
    const res = await request(link);
    linkChecks.push({
      link,
      status: res.statusCode,
      ok: res.statusCode === 200,
    });
  }
  report.brokenLinks = linkChecks.filter(l => !l.ok);

  // 5. Red Hat & OWASP Security Testing
  console.log(`[6/6] Executing Enterprise & Red Hat Security Hardening Suite...`);
  
  // Headers audit on home
  const homeRes = await request('/');
  const h = homeRes.headers;

  const secHeaders = {
    contentSecurityPolicy: {
      present: !!h['content-security-policy'],
      value: h['content-security-policy'],
      hasDefaultSrcSelf: (h['content-security-policy'] || '').includes("default-src 'self'"),
      hasFrameAncestorsNone: (h['content-security-policy'] || '').includes("frame-ancestors 'none'"),
      hasObjectSrcNone: (h['content-security-policy'] || '').includes("object-src 'none'"),
      hasBaseUriSelf: (h['content-security-policy'] || '').includes("base-uri 'self'"),
      hasFormActionSelf: (h['content-security-policy'] || '').includes("form-action 'self'"),
    },
    strictTransportSecurity: {
      present: !!h['strict-transport-security'],
      value: h['strict-transport-security'],
      hasPreload: (h['strict-transport-security'] || '').includes('preload'),
      hasSubDomains: (h['strict-transport-security'] || '').includes('includeSubDomains'),
    },
    xFrameOptions: {
      present: !!h['x-frame-options'],
      value: h['x-frame-options'],
      isDeny: h['x-frame-options'] === 'DENY',
    },
    xContentTypeOptions: {
      present: !!h['x-content-type-options'],
      value: h['x-content-type-options'],
      isNosniff: h['x-content-type-options'] === 'nosniff',
    },
    referrerPolicy: {
      present: !!h['referrer-policy'],
      value: h['referrer-policy'],
    },
    permissionsPolicy: {
      present: !!h['permissions-policy'],
      value: h['permissions-policy'],
    },
    coop: {
      present: !!h['cross-origin-opener-policy'],
      value: h['cross-origin-opener-policy'],
    },
    corp: {
      present: !!h['cross-origin-resource-policy'],
      value: h['cross-origin-resource-policy'],
    },
    informationDisclosure: {
      xPoweredByRemoved: !h['x-powered-by'],
      serverClean: !h['server'] || !h['server'].includes('/'),
    },
  };
  report.securityHeadersCheck = secHeaders;

  // Run security probes
  for (const probe of SECURITY_PROBES) {
    const res = await request(probe.path);
    let passed = false;

    if (probe.expectStatus) {
      passed = res.statusCode === probe.expectStatus;
    } else if (probe.expectNot200) {
      // Must NOT return 200 with sensitive contents
      passed = res.statusCode !== 200 || !res.bodyText.includes('DB_PASSWORD') && !res.bodyText.includes('ref: refs/heads');
    } else if (probe.expectCleanHtml) {
      // Must NOT unescaped reflect script tag
      passed = !res.bodyText.includes('<script>alert("xss")</script>');
    }

    report.securityProbes.push({
      probe: probe.name,
      path: probe.path,
      statusCode: res.statusCode,
      passed,
    });
  }

  // Method testing
  const methodsToTest = ['HEAD', 'OPTIONS', 'POST', 'PUT', 'DELETE'];
  const methodResults = [];
  for (const m of methodsToTest) {
    const res = await request('/', m);
    methodResults.push({
      method: m,
      statusCode: res.statusCode,
      safe: res.statusCode !== 200 || m === 'HEAD',
    });
  }
  report.httpMethods = methodResults;

  // Write results
  fs.writeFileSync('d:/Projects/portfolio-kit/scratch/audit-e2e-enterprise-results.json', JSON.stringify(report, null, 2));
  console.log('\nAudit complete! Full JSON saved to d:/Projects/portfolio-kit/scratch/audit-e2e-enterprise-results.json');
}

run();

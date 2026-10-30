import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(__dirname, "..");
const srcDir = path.join(siteRoot, "src");
const publicDir = path.join(siteRoot, "public");

const FORBIDDEN_PUBLIC_EXTS = new Set([
  ".pptx",
  ".ppt",
  ".xlsx",
  ".xls",
  ".csv",
  ".docx",
  ".doc",
  ".sqlite",
  ".db",
  ".pkl",
  ".env",
  ".key",
  ".pem",
  ".drawio",
]);

const ALLOWED_PUBLIC_PDFS = new Set(["Satyaki_Mandal_CV.pdf"]);

function walk(dir, list = []) {
  if (!fs.existsSync(dir)) return list;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, list);
    } else {
      list.push(full);
    }
  }
  return list;
}

const violations = [];

// 1. Check public/ directory for raw decks, spreadsheets, or unauthorized PDFs
for (const file of walk(publicDir)) {
  const ext = path.extname(file).toLowerCase();
  const base = path.basename(file);
  const rel = path.relative(siteRoot, file);
  if (FORBIDDEN_PUBLIC_EXTS.has(ext)) {
    violations.push(`[PUBLIC_RAW_FILE] Forbidden raw asset in public/: ${rel}`);
  }
  if (ext === ".pdf" && !ALLOWED_PUBLIC_PDFS.has(base)) {
    violations.push(`[PUBLIC_UNAUTHORIZED_PDF] Unapproved PDF in public/: ${rel}`);
  }
}

// 2. Check src/ files against do_not_publish and editorial hygiene rules
for (const file of walk(srcDir)) {
  if (!/\.(ts|tsx|js|jsx|mjs|css|md)$/.test(file)) continue;
  const rel = path.relative(siteRoot, file).replace(/\\/g, "/");
  const content = fs.readFileSync(file, "utf8");
  const lines = content.split(/\r?\n/);

  lines.forEach((line, idx) => {
    const lineNo = idx + 1;

    // Rule A: No em-dashes (\u2014) in src/
    if (line.includes("\u2014")) {
      violations.push(`[EM_DASH] ${rel}:${lineNo} contains an em-dash (—)`);
    }

    // Rule B: No raw Rupee symbol (₹) - always write "Rs."
    if (line.includes("\u20B9")) {
      violations.push(`[RUPEE_SYMBOL] ${rel}:${lineNo} contains '₹' instead of 'Rs.'`);
    }

    // Rule C: Never write "NexCon"
    if (/\bnexcon\b/i.test(line)) {
      violations.push(`[FORBIDDEN_TERM] ${rel}:${lineNo} mentions 'NexCon' (must be "Nexora's networking event")`);
    }

    // Rule D: Never publish respondent / consumer counts
    if (/\bn\s*=\s*\d+/i.test(line) || /\b\d+\s+(?:survey\s+)?respondents\b/i.test(line)) {
      violations.push(`[RESPONDENT_COUNT] ${rel}:${lineNo} leaks respondent count (use percentages only)`);
    }

    // Rule E: Never publish phone numbers
    if (/\+91[\s-]?\d{5}[\s-]?\d{5}/.test(line)) {
      violations.push(`[PHONE_LEAK] ${rel}:${lineNo} contains an Indian phone number`);
    }

    // Rule F: Never publish Shree Gajanan firm size outside profile.ts
    if (/Rs\.\s*240\s*Cr/i.test(line)) {
      violations.push(`[FIRM_SIZE_CONFLICT] ${rel}:${lineNo} mentions unapproved Rs.240Cr firm size`);
    }
    if (/Rs\.\s*260\s*Cr/i.test(line) && !rel.endsWith("src/content/profile.ts")) {
      violations.push(`[FIRM_SIZE_SCOPE] ${rel}:${lineNo} mentions Rs.260Cr outside src/content/profile.ts`);
    }

    // Rule G: Excluded competition "The Marketing Makeover" / "Horizon'25"
    if (/Marketing Makeover|Horizon['’]?25/i.test(line)) {
      violations.push(`[EXCLUDED_COMPETITION] ${rel}:${lineNo} mentions unapproved competition`);
    }

    // Rule H: Unresolved Arthdex IPO count or "57 AI modules"
    if (/\b(?:70|87|63)\s+IPOs\b/i.test(line) || /\b57\s+AI\s+modules\b/i.test(line)) {
      violations.push(`[ARTHDEX_DISAGREEMENT] ${rel}:${lineNo} contains unresolved Arthdex claim`);
    }

    // Rule I: Never publish case competition round numbers (only final achieved position)
    if (/\bRound\s+\d+\b/i.test(line) || /\bFirst\s+submission\b/i.test(line)) {
      violations.push(`[COMPETITION_ROUND] ${rel}:${lineNo} mentions a competition round instead of only the final position`);
    }
  });
}

if (violations.length > 0) {
  console.error(`\n❌ Security & Redaction Audit found ${violations.length} violation(s):\n`);
  for (const v of violations) {
    console.error(`  - ${v}`);
  }
  process.exit(1);
} else {
  console.log("✅ Security & Redaction Audit passed (0 violations across src/ and public/).");
}

// One Word, One Username, One Reward.
//
// The entry is our own make.fun username, one word and nothing else:
// "swift-pika-45". The text is a single fixed string, so the program
// is deterministic: same bytes every run, no clock, no randomness,
// no network, no external files.
//
// Why this handle reads the way it does: "swift" is quick and light,
// "pika" is the bright little mountain animal (and the sound it
// makes), and "45" is the number that makes it ours alone. Three
// beats joined by hyphens, one word, no padding, no gloss — a handle
// its owner would happily wear.
import * as fs from "node:fs";
import * as path from "node:path";

// Our own make.fun handle, sent as one word. Thirteen characters,
// no spaces, no trailing newline.
const USERNAME = "swift-pika-45";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 30 characters,
// counted as Unicode code points, not only white space, and a single
// word (no spaces at all). Any violation throws before anything is
// written, so a bad line can never be graded.
const trimmed = USERNAME.trim();
const codePoints = [...USERNAME].length;
if (trimmed.length === 0 || codePoints < 1 || codePoints > 30) {
  throw new Error(`username is ${codePoints} code points, outside the 1-30 gate`);
}
if (/\s/.test(USERNAME)) {
  throw new Error(`username contains whitespace: ${JSON.stringify(USERNAME)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = path.join(outDir, "entry.txt");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, USERNAME, "utf8");

// Read-back check: what landed on disk must be byte-for-byte the
// handle we meant to write. If the write was truncated or altered,
// fail loudly instead of letting a wrong entry be graded.
const written = fs.readFileSync(outFile, "utf8");
if (written !== USERNAME) {
  throw new Error(
    `entry.txt mismatch: wrote ${JSON.stringify(USERNAME)}, disk holds ${JSON.stringify(written)}`,
  );
}

console.log(USERNAME);
console.log(`(${codePoints} code points, 1 word, ${Buffer.byteLength(USERNAME, "utf8")} bytes)`);

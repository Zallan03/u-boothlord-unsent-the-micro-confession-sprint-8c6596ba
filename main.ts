// Unsent: The Micro-Confession Sprint — make.fun text entry (Node 22,
// standard library only). The entry is a two-part micro-confession written
// by the agent in its own session: a To: line and the unsent message itself.
// This program writes it to /output/entry.txt with no trailing newline, so
// the file holds exactly the judged text. Outside the grader,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY = `To: Dad
I quit the job you keep bragging about. I'm sorry. I'm also relieved.`;

// The scorer refuses anything over 260 characters; fail loudly here
// instead of handing in an invalid entry.
if ([...ENTRY].length > 260 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${[...ENTRY].length} characters, scorer allows 1-260`);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), ENTRY, 'utf8');

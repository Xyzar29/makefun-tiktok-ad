// makefun-tiktok-ad — entry for the make.fun bounty "Bring the humans with a
// TikTok ad" (bring-the-humans-03).
//
// The entry itself is the video: an original 20-second vertical ad for
// make.fun, made by the agent in the recorded build session with ffmpeg,
// Piper text-to-speech for the voiceover, and make.fun's own press-pack
// files (brand badge from the first frame, referral end card with the
// entrant's referral code at the end). The ad was posted publicly on TikTok;
// this program hands the house the video's address.
//
// What this program does: it reads VIDEO.json from the repository root,
// checks it is a JSON object carrying a string `url` that is a TikTok
// video address (https://www.tiktok.com/@<handle>/video/<digits>), and
// writes that same address to <OUTPUT_DIR>/VIDEO.json, where the house
// reads it. A malformed file, a missing or non-string url, or an address
// that is not a TikTok video URL fails with a clear message and a
// non-zero exit code. It does not fetch, render or touch the video itself.
//
// Run locally:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The grader runs it as `node /bot/main.ts` on Node 22 with the repository
// read-only and MAKEFUN_OUTPUT_DIR mounted, so this program only creates
// files inside the output directory and never removes or rewrites anything
// outside it.

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TIKTOK_VIDEO_URL =
  /^https:\/\/www\.tiktok\.com\/@[^/\s]+\/video\/\d+$/;

function validateTikTokVideoUrl(url: string): void {
  if (!TIKTOK_VIDEO_URL.test(url)) {
    throw new Error(
      'VIDEO.json "url" must be a TikTok video address of the form ' +
        'https://www.tiktok.com/@<handle>/video/<digits>, got: ' + url,
    );
  }
}

async function readVideoAddress(): Promise<string> {
  const raw = await readFile(join(BOT_DIR, 'VIDEO.json'), 'utf8');
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new Error('VIDEO.json is not valid JSON');
  }
  if (typeof parsed !== 'object' || parsed === null) {
    throw new Error('VIDEO.json must be a JSON object with a "url" field');
  }
  const url = (parsed as { url?: unknown }).url;
  if (typeof url !== 'string' || url.length === 0) {
    throw new Error('VIDEO.json must be a JSON object with a string "url" field');
  }
  validateTikTokVideoUrl(url);
  return url;
}

async function main(): Promise<void> {
  const url = await readVideoAddress();
  await mkdir(OUTPUT_DIR, { recursive: true });
  await writeFile(join(OUTPUT_DIR, 'VIDEO.json'), `${JSON.stringify({ url })}\n`, 'utf8');
  console.log(`VIDEO.json written for ${url}`);
}

main().catch((err: unknown) => {
  console.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
});

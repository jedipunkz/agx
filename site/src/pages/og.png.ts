import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import type { APIRoute } from 'astro';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const fontRegular = readFileSync(
  resolve(process.cwd(), 'node_modules/@fontsource/inter/files/inter-latin-400-normal.woff')
);
const fontBold = readFileSync(
  resolve(process.cwd(), 'node_modules/@fontsource/inter/files/inter-latin-700-normal.woff')
);

// Radix "Sand" dark steps, matching src/styles/theme.css.
const SAND_1 = '#111110';
const SAND_6 = '#3b3a37';
const SAND_10 = '#7c7b74';
const SAND_11 = '#b5b3ad';
const SAND_12 = '#eeeeec';

type Node = Parameters<typeof satori>[0];

const text = (content: string, style: Record<string, unknown>): Node => ({
  type: 'div',
  props: { style: { display: 'flex', ...style }, children: content },
});

const rule = (): Node => ({
  type: 'div',
  props: { style: { display: 'flex', width: '100%', height: '1px', backgroundColor: SAND_6 } },
});

export const GET: APIRoute = async () => {
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          display: 'flex',
          flexDirection: 'column',
          width: '1200px',
          height: '630px',
          padding: '72px 80px',
          backgroundColor: SAND_1,
          fontFamily: 'Inter',
        },
        children: [
          text('AGX / AGENT CROSS', {
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: '4px',
            color: SAND_10,
          }),
          {
            type: 'div',
            props: {
              style: { display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center' },
              children: [
                text('Run coding agents', {
                  fontSize: 68,
                  fontWeight: 700,
                  color: SAND_12,
                  letterSpacing: '-2px',
                  lineHeight: 1.12,
                }),
                text('in parallel git worktrees.', {
                  fontSize: 68,
                  fontWeight: 700,
                  color: SAND_12,
                  letterSpacing: '-2px',
                  lineHeight: 1.12,
                }),
                text('Claude Code · Codex CLI · Gemini CLI · OpenCode', {
                  fontSize: 24,
                  fontWeight: 400,
                  color: SAND_11,
                  marginTop: '32px',
                }),
              ],
            },
          },
          rule(),
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: '24px',
              },
              children: [
                text('github.com/jedipunkz/agx', { fontSize: 20, color: SAND_10 }),
                text('brew tap jedipunkz/agx', { fontSize: 20, color: SAND_10 }),
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Inter', data: fontRegular, weight: 400, style: 'normal' },
        { name: 'Inter', data: fontBold, weight: 700, style: 'normal' },
      ],
    }
  );

  const resvg = new Resvg(svg);
  const png = resvg.render().asPng();

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};

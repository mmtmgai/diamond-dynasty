#!/usr/bin/env node
/**
 * Custom build script for Diamond Dynasty
 * Uses esbuild to bundle React app (bypasses npm registry issues)
 */

import * as esbuild from 'esbuild';
import { readFileSync, writeFileSync, mkdirSync, cpSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distDir = join(__dirname, 'dist-latest');
const srcDir = join(__dirname, 'src');

// Create dist directory
if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true });
}
if (!existsSync(join(distDir, 'assets'))) {
  mkdirSync(join(distDir, 'assets'), { recursive: true });
}

// Copy public assets
if (existsSync(join(__dirname, 'public'))) {
  try {
    cpSync(join(__dirname, 'public'), distDir, { recursive: true });
  } catch (e) {
    console.log('Note: Could not copy public folder:', e.message);
  }
}

// Bundle the app
console.log('Building Diamond Dynasty...');

try {
  const result = await esbuild.build({
    entryPoints: [join(srcDir, 'main.jsx')],
    bundle: true,
    minify: true,
    sourcemap: false,
    target: ['es2020'],
    outfile: join(distDir, 'assets', 'index.js'),
    format: 'esm',
    jsx: 'automatic',
    loader: {
      '.js': 'jsx',
      '.jsx': 'jsx',
      '.css': 'css',
      '.png': 'dataurl',
      '.svg': 'dataurl',
    },
    define: {
      'process.env.NODE_ENV': '"production"',
    },
    external: [],
    // Bundle CSS into the JS file
    plugins: [{
      name: 'css-injector',
      setup(build) {
        build.onLoad({ filter: /\.css$/ }, async (args) => {
          const css = readFileSync(args.path, 'utf8');
          return {
            contents: `
              const style = document.createElement('style');
              style.textContent = ${JSON.stringify(css)};
              document.head.appendChild(style);
            `,
            loader: 'js',
          };
        });
      },
    }],
  });

  console.log('Build completed successfully!');

  // Create index.html
  const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Diamond Dynasty - Baseball Poker Roguelike</title>
  <link rel="icon" type="image/svg+xml" href="/vite.svg">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #1a1a2e;
      min-height: 100vh;
    }
    #root { min-height: 100vh; }
  </style>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="./assets/index.js"></script>
</body>
</html>`;

  writeFileSync(join(distDir, 'index.html'), indexHtml);
  console.log('Created index.html');
  console.log(`\nBuild output in: ${distDir}`);
  console.log('To test: open dist-latest/index.html in a browser');

} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}

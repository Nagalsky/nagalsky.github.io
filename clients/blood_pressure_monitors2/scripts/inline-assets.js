import { readFileSync, writeFileSync, readdirSync, unlinkSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')
const assetsDir = join(distDir, 'assets')

// Get all HTML files in dist
const htmlFiles = readdirSync(distDir).filter(f => f.endsWith('.html'))

// Get CSS and JS content from assets folder
const assetFiles = readdirSync(assetsDir)
const cssFile = assetFiles.find(f => f.endsWith('.css'))
const jsFile = assetFiles.find(f => f.endsWith('.js'))

const cssContent = cssFile ? readFileSync(join(assetsDir, cssFile), 'utf-8') : ''
const jsContent = jsFile ? readFileSync(join(assetsDir, jsFile), 'utf-8') : ''

// Process each HTML file
htmlFiles.forEach(htmlFile => {
  let html = readFileSync(join(distDir, htmlFile), 'utf-8')
  
  // Replace CSS link with inline style
  html = html.replace(
    /<link rel="stylesheet"[^>]*href="[^"]*\.css"[^>]*>/g,
    `<style>${cssContent}</style>`
  )
  
  // Replace JS script with inline script (remove type="module")
  html = html.replace(
    /<script type="module"[^>]*src="[^"]*\.js"[^>]*><\/script>/g,
    `<script>${jsContent}</script>`
  )
  
  writeFileSync(join(distDir, htmlFile), html)
  console.log(`Inlined assets in ${htmlFile}`)
})

// Remove only CSS and JS files from assets folder (keep images, fonts, etc.)
if (cssFile) {
  unlinkSync(join(assetsDir, cssFile))
  console.log(`Removed ${cssFile}`)
}
if (jsFile) {
  unlinkSync(join(assetsDir, jsFile))
  console.log(`Removed ${jsFile}`)
}

console.log('Done! CSS and JS inlined, other assets preserved.')

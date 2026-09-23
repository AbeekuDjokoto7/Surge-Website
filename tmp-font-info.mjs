import fontkit from "next/dist/compiled/@next/font/dist/fontkit/index.js"
import { readFileSync } from "node:fs"

const font = fontkit.default(readFileSync("src/app/fonts/Polaris-Book.woff2"))
console.log("glyphs", font.numGlyphs)
console.log("chars", font.characterSet?.length)
const sample = "The quick brown fox jumps over the lazy dog 0123456789"
for (const ch of sample) {
  const g = font.glyphForCodePoint(ch.codePointAt(0))
  if (!g || g.id === 0) console.log("MISSING", ch)
}
console.log("license", font.name.records.license)
console.log("description", font.name.records.description)

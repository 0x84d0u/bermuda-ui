// tsup.config.ts
import { defineConfig } from 'tsup'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  entry: ['src/**/*.{ts,tsx}'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  
  // CRITICAL: Disable minification
  minify: false,
  
  // Process files individually
  bundle: false,
  
  esbuildOptions(options) {
    options.keepNames = true
    options.minify = false
  },
  
  // Post-build: Add directives to .client.js files
  async onSuccess() {
    const distDir = path.resolve(process.cwd(), 'dist')
    
    const addDirectives = (dir: string) => {
      const files = fs.readdirSync(dir, { withFileTypes: true })
      
      for (const file of files) {
        const fullPath = path.join(dir, file.name)
        
        if (file.isDirectory()) {
          addDirectives(fullPath)
        } else if (file.name.includes('.client.') && file.name.endsWith('.js')) {
          const content = fs.readFileSync(fullPath, 'utf-8')
          
          if (!content.startsWith('"use client"')) {
            fs.writeFileSync(fullPath, `"use client";\n${content}`)
            console.log(`✅ Added directive to: ${file.name}`)
          }
        }
      }
    }
    
    addDirectives(distDir)
  }
})

// import { defineConfig } from 'tsup';

// export default defineConfig({
//   entry: ['src/index.ts'],
//   format: ['esm'],
//   dts: true,
//   sourcemap: true,
//   clean: true,
//   external: ['react', 'react-dom'],
//   treeshake: true,
//   splitting: true,
  
//   esbuildOptions(options) {
//     options.minify = false;  // ← This line matters
//   },
// });
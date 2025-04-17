const fs = require('fs')
const path = require('path')

const sourceDir = path.join(
  __dirname,
  '..',
  'node_modules',
  '@getnectar',
  'schema',
)
const targetDir = path.join(__dirname, '..', 'db')

function copyDirectory(source, target) {
  // Create target directory if it doesn't exist
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true })
  }

  // Read the contents of the source directory
  const files = fs.readdirSync(source)

  for (const file of files) {
    // Skip package.json
    if (file === 'package.json') continue

    const sourcePath = path.join(source, file)
    const targetPath = path.join(target, file)

    const stats = fs.statSync(sourcePath)

    if (stats.isDirectory()) {
      // Recursively copy subdirectories
      copyDirectory(sourcePath, targetPath)
    } else {
      // Copy files
      fs.copyFileSync(sourcePath, targetPath)
    }
  }
}

try {
  copyDirectory(sourceDir, targetDir)
  console.log(
    'Schema copied successfully to db folder (excluding package.json)',
  )
} catch (error) {
  console.error('Error copying schema:', error)
} 
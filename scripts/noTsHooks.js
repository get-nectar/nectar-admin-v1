const fs = require('fs')
const path = require('path')

const targetDir = path.join(__dirname, '..', 'db')

function addTsNoCheck(dir) {
  const files = fs.readdirSync(dir)

  for (const file of files) {
    const filePath = path.join(dir, file)
    const stats = fs.statSync(filePath)

    if (stats.isDirectory()) {
      addTsNoCheck(filePath)
    } else if (path.extname(file) === '.ts') {
      let content = fs.readFileSync(filePath, 'utf8')
      if (!content.includes('// @ts-nocheck')) {
        content = '// @ts-nocheck\n' + content
        fs.writeFileSync(filePath, content)
        console.log(`Added // @ts-nocheck to ${filePath}`)
      }
    }
  }
}

try {
  addTsNoCheck(targetDir)
  console.log('Added // @ts-nocheck to all .ts files in db folder')
} catch (error) {
  console.error('Error adding // @ts-nocheck:', error)
} 
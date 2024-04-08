// generateSidebar.ts
import * as fs from 'fs'
import * as path from 'path'

interface SidebarConfig {
  [key: string]: SidebarItem[]
}

interface SidebarItem {
  text: string
  items?: string[]
}

const ExcludeFiles = ['public', 'ChineseMedicine', 'Diy', 'WebGL']

function generateSidebar(dir: string): SidebarConfig {
  const sidebar: SidebarConfig = {}
  console.log(fs.readdirSync(dir), 'fs.readdirSync(dir)')

  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file)
    const stats = fs.statSync(filePath)
    console.log(file, 'file', filePath)
    if (stats.isDirectory()) {
      if (ExcludeFiles.indexOf(file) == -1) {
        sidebar[`/${file}/`] = {
          text: file,
          item: [],
        }
        generateSidebar(filePath)
      }
    } else if (file.toLowerCase().endsWith('.md')) {
      // sidebar = {}
      // sidebar[`/${file.replace(/\.md$/, '')}/`] = [
      //   '',
      //   ...fs
      //     .readdirSync(dir)
      //     .filter((f) => f.toLowerCase().endsWith('.md'))
      //     .map((mdFile) => `/${mdFile.replace(/\.md$/, '')}`),
      // ]
    }
  })

  return sidebar
}

const sidebar = generateSidebar('docs/src')

// 将侧边栏配置写入文件
fs.writeFileSync(
  'docs/.vitepress/sidebar.json',
  JSON.stringify(sidebar, null, 2)
)
console.log('Sidebar configuration generated successfully!')

export default sidebar

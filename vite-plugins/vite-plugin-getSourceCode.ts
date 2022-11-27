import type { PluginOption } from 'vite'
import * as path from 'path'
import * as fs from 'fs'
import { baseParse } from '@vue/compiler-core'

export const getSourceCode = (): PluginOption => {
  return {
    // 插件名称
    name: 'vite-plugin-getSourceCode',
    transform(code: string, id: string) {
      let titleCode: string = ''
      let bodyCode: string = ''
      if (!/vue&type=demo/.test(id)) {
        return code
      }
      let filePath: string = ''
      try {
        filePath = id.match(/src\/.*\.vue/)![0]
      } catch (e) {
        filePath = ''
      }
      if (filePath) {
        const fileAbsolutePath = path.resolve(__dirname, '../', filePath)
        const file = fs.readFileSync(fileAbsolutePath).toString()
        const parsed = baseParse(file).children.find((n) => n.tag === 'demo')
        titleCode = parsed.children[0].content
        bodyCode = file.split(parsed.loc.source).join('').trim()
      }

      return `export default Component => {
      Component.__sourceCode = ${JSON.stringify(bodyCode)}
      Component.__sourceCodeTitle = ${JSON.stringify(titleCode)}
    }`.trim()
    }
  }
}

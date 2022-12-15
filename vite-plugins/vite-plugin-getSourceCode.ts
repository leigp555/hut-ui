import type { PluginOption } from 'vite'
import * as path from 'path'
import * as fs from 'fs'
import { baseParse, TemplateChildNode } from '@vue/compiler-core'

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
      filePath = id.match(/src\/.*\.vue/)![0]
      const fileAbsolutePath = path.resolve(__dirname, '../', filePath)
      const file = fs.readFileSync(fileAbsolutePath).toString()
      try {
        const parsed = baseParse(file).children.find(
          (n: TemplateChildNode | { tag: string }) => {
            return !!('tag' in n && n.tag)
          }
        )
        if (parsed) {
          // @ts-ignore
          titleCode = parsed.children[0].content
          bodyCode = file
            .split(parsed.loc.source)
            .join('')
            .trim()
            .replace(/@\/lib/, 'hut-ui')
        }
      } catch (e) {
        const regx = /<demo>((.|\n)*?)<\/demo>/
        if (file.match(regx)) {
          titleCode = file.match(regx)![1].trim()
        }
        bodyCode = file
          .replace(regx, '')
          .replace(/@\/lib/, 'hut-ui')
          .trim()
      }
      return `export default Component => {
      Component.__sourceCode = ${JSON.stringify(bodyCode)}
      Component.__sourceTitle = ${JSON.stringify(titleCode)}
    }`.trim()
    }
  }
}

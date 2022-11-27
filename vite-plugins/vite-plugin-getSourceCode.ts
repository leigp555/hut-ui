import type { PluginOption } from 'vite'

export const getSourceCode = (): PluginOption => {
  return {
    // 插件名称
    name: 'vite-plugin-getSourceCode',
    transform(code: string, id: string) {
      if (!/vue&type=demo/.test(id)) {
        return code
      }
      return `export default Component => {
      Component.__sourceCode = ${code}
    }`
    }
  }
}

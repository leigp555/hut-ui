import type { PluginOption } from 'vite'

export default function vitePluginGetSourceCode(): PluginOption {
  return {
    // 插件名称
    name: 'vite-plugin-template',

    // pre 会较于 post 先执行
    enforce: 'pre' // post
  }
}

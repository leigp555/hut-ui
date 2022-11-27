import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import path, { resolve } from 'path'
import { viteMockServe } from 'vite-plugin-mock'
import viteCompression from 'vite-plugin-compression'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { getSourceCode } from './vite-plugins/vite-plugin-getSourceCode'

export default defineConfig({
  plugins: [
    vue(),
    getSourceCode(),
    viteMockServe({
      // default
      mockPath: 'mock'
    }),
    viteCompression(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/lib/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[name]',
      inject: 'body-first'
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
    }
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        // 生产环境时移除console
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]'
      }
    }
  },
  server: {
    port: 4500, // 设置服务启动端口号
    open: false // 设置服务启动时是否自动打开浏览器
  }
})

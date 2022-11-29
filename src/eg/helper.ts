// 代码高亮
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import { VNode } from 'vue'

const Prism = (window as any).Prism

// 颜色对象
export function randomColor() {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  return `rgba(${r},${g},${b},1)`
}

// 获取Prism转译过的代码
export const getSourceCode = (sourceCode: string) => {
  if (sourceCode) {
    return Prism.highlight(sourceCode, Prism.languages.html, 'html')
  }
  return ''
}
// 获取demo-display列表
export const getDemo = (
  demo: VNode & { __sourceCode: string; __sourceTitle: string },
  prefix: string,
  suffix: number
) => {
  return {
    html: demo.__sourceCode,
    title: demo.__sourceTitle,
    id: `${prefix}-demo-${suffix.toString()}`,
    demo
  }
}

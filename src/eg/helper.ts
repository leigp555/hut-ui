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
// 获取导航内容
export const generateNav = (componentName: string, titleArr: string[]) => {
  const arr: { id: string; title: string; nested: boolean }[] = [
    { id: `#ex-${componentName}-title`, title: '简介', nested: false },
    { id: `#ex-${componentName}-demo`, title: '案例', nested: false }
  ]
  const demoNavArr = titleArr.map((item, index) => {
    return { id: `#${componentName}-demo-${index}`, title: `${item}`, nested: true }
  })
  return [
    ...arr,
    ...demoNavArr,
    { id: `#ex-${componentName}-api`, title: '接口', nested: false }
  ]
}

import { createApp, h, VNode } from 'vue'
import Pop from './Pop.vue'
import { AlertType } from '../alert/type'

type ModalType = Omit<AlertType, 'loading'>
type Options = {
  title: string
  content: VNode | string
  icon?: VNode
  onOK?: () => void
  onCancel?: () => void
  cancelText?: string
  okText?: string
}

// 获取挂载点，没有就创建
const getRoot = () => {
  let el = document.getElementById('ui-modal-pop')
  if (!el) {
    el = document.createElement('div')
    el.setAttribute('id', 'ui-modal-pop')
    document.body.appendChild(el)
  }
  const div = document.createElement('div')
  el.appendChild(div)
  return div
}

// 渲染节点
const render = (options: Options, type: ModalType, mountEl: HTMLElement): VNode => {
  const unMount = () => {
    mountEl.remove()
  }
  return h(Pop, { ...options, type, unMount })
}

const info = (option: Options) => {
  const mountEl = getRoot()
  createApp(render(option, 'info', mountEl)).mount(mountEl)
}
const success = (option: Options) => {
  const mountEl = getRoot()
  createApp(render(option, 'success', mountEl)).mount(mountEl)
}
const error = (option: Options) => {
  const mountEl = getRoot()
  createApp(render(option, 'error', mountEl)).mount(mountEl)
}
const warning = (option: Options) => {
  const mountEl = getRoot()
  createApp(render(option, 'warning', mountEl)).mount(mountEl)
}

export const modal = {
  info,
  success,
  error,
  warning
}

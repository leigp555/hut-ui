import { createApp, h, VNode } from 'vue'
import Notification from './Notification.vue'
import { AlertType } from '../alert/type'
import './index.scss'

type ModalType = Omit<AlertType, 'loading'>
type Options = {
  message: VNode | string
  description: VNode | string
  icon?: VNode
  onOk?: () => void
  onCancel?: () => void
  okText?: string
  width?: number
  duration?: number | 'infinite'
}

// 获取挂载点，没有就创建
const getRoot = () => {
  let el = document.getElementById('ui-notification-pop')
  if (!el) {
    el = document.createElement('div')
    el.setAttribute('id', 'ui-notification-pop')
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
  return h(Notification, {
    ...options,
    ok: !!options.onOk,
    cancel: !!options.onCancel,
    type,
    unMount
  })
}

const info = (option: Options) => {
  const mountEl = getRoot()
  createApp(render(option, 'info', mountEl)).mount(mountEl)
  return () => {
    mountEl.remove()
  }
}
const success = (option: Options) => {
  const mountEl = getRoot()
  createApp(render(option, 'success', mountEl)).mount(mountEl)
  return () => {
    mountEl.remove()
  }
}
const error = (option: Options) => {
  const mountEl = getRoot()
  createApp(render(option, 'error', mountEl)).mount(mountEl)
  return () => {
    mountEl.remove()
  }
}
const warning = (option: Options) => {
  const mountEl = getRoot()
  createApp(render(option, 'warning', mountEl)).mount(mountEl)
  return () => {
    mountEl.remove()
  }
}
const custom = (option: Options) => {
  const mountEl = getRoot()
  createApp(render(option, 'success', mountEl)).mount(mountEl)
  return () => {
    mountEl.remove()
  }
}
const open = (option: Options) => {
  const mountEl = getRoot()
  createApp(render(option, 'open', mountEl)).mount(mountEl)
  return () => {
    mountEl.remove()
  }
}

export const notification = {
  info,
  success,
  error,
  warning,
  custom,
  open
}

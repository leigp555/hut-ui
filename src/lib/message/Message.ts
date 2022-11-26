import { createApp, h, VNode } from 'vue'
import Alert from '../alert/Alert.vue'

import './index.scss'
import { AlertType } from '@/lib/alert/type'

type Options = {
  content?: string
  style?: Partial<CSSStyleDeclaration>
  duration?: number
}

const getRoot = () => {
  const el = document.getElementById('ui-message-pop')
  if (el) {
    return el
  }
  const newEl = document.createElement('div')
  newEl.setAttribute('id', 'ui-message-pop')
  document.body.appendChild(newEl)
  return newEl
}
const root = getRoot()
const createMount = () => {
  const div = document.createElement('div')
  root.appendChild(div)
  return div
}

const render = (options: string | Options, type: AlertType): VNode => {
  if (typeof options === 'string') {
    return h(Alert, {
      message: options,
      class: 'ui-message-pop',
      type,
      showIcon: true
    })
  }
  return h(Alert, {
    message: options.content,
    style: options.style,
    class: 'ui-message-pop',
    type,
    showIcon: true
  })
}

const alertFn = (option: string | Options, type: AlertType) => {
  const mountEl = createMount()
  const alertDom: VNode = render(option, type)
  createApp(alertDom).mount(mountEl)
  if (typeof option === 'string') {
    const id = setTimeout(() => {
      mountEl.remove()
      window.clearTimeout(id)
    }, 3000)
  } else {
    const id = setTimeout(() => {
      mountEl.remove()
      window.clearTimeout(id)
    }, option.duration || 3000)
  }
}

const info = (option: string | Options) => {
  alertFn(option, 'info')
}
const success = (option: string | Options) => {
  alertFn(option, 'success')
}
const error = (option: string | Options) => {
  alertFn(option, 'error')
}
const warning = (option: string | Options) => {
  alertFn(option, 'warning')
}
const loading = (option: string | Options) => {
  const mountEl = createMount()
  const alertDom: VNode = render(option, 'loading')
  createApp(alertDom).mount(mountEl)
  return () => {
    mountEl.remove()
  }
}

export const alert = {
  info,
  success,
  error,
  warning,
  loading
}

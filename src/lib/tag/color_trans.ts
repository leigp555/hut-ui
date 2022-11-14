import { colorTable } from './color_source'

export const nameToHex = (color: string) => {
  let hexColor = '#ffffff'
  for (let i = 0; i < colorTable.length; i++) {
    if (colorTable[i][0] === color) {
      hexColor = colorTable[i][1]
    }
  }
  return hexColor
}

export const rgbToRgba = (color: string, alp: number) => {
  let r: number
  let g: number
  let b: number
  const rgbaAttr = color.match(/[\d.]+/g)
  if (rgbaAttr && rgbaAttr.length >= 3) {
    r = parseInt(rgbaAttr[0], 10)
    g = parseInt(rgbaAttr[1], 10)
    b = parseInt(rgbaAttr[2], 10)
    return `rgba(${r},${g},${b},${alp})`
  }
  return 'rgba(0,0,0,.2)'
}

export const hexToRgb = (hexValue: string) => {
  const rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  const hex = hexValue.replace(rgx, (m, r, g, b) => r + r + g + g + b + b)
  const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  const r = rgb && parseInt(rgb[1], 16)
  const g = rgb && parseInt(rgb[2], 16)
  const b = rgb && parseInt(rgb[3], 16)
  return `rgb(${r},${g},${b})`
}

export const hslToRgb = (hslValue: string) => {
  const hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue)
  const h = hsl && parseInt(hsl[1], 10) / 360
  const s = hsl && parseInt(hsl[2], 10) / 100
  const l = hsl && parseInt(hsl[3], 10) / 100

  function hue2rgb(p: number, q: number, t: number) {
    if (t < 0) t += 1
    if (t > 1) t -= 1
    if (t < 1 / 6) return p + (q - p) * 6 * t
    if (t < 1 / 2) return q
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
    return p
  }

  let r: number
  let g: number
  let b: number
  if (s === 0 && l) {
    // eslint-disable-next-line no-multi-assign
    r = g = b = l
    return `rgb(${r * 255},${g * 255},${b * 255})`
  }
  if (l && s && h && s !== 0) {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q
    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
    return `rgb(${r * 255},${g * 255},${b * 255})`
  }
  return 'rgb(255,255,255)'
}

export const justColor = (col: string, amt: number) => {
  let usePound = false

  if (col[0] === '#') {
    col = col.slice(1)
    usePound = true
  }

  const num = parseInt(col, 16)

  // eslint-disable-next-line no-bitwise
  let r = (num >> 16) + amt

  if (r > 255) r = 255
  else if (r < 0) r = 0

  // eslint-disable-next-line no-bitwise
  let b = ((num >> 8) & 0x00ff) + amt

  if (b > 255) b = 255
  else if (b < 0) b = 0

  // eslint-disable-next-line no-bitwise
  let g = (num & 0x0000ff) + amt

  if (g > 255) g = 255
  else if (g < 0) g = 0

  // eslint-disable-next-line no-bitwise
  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}

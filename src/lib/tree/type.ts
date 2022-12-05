export interface TreeOptions {
  title: string
  value: string
  show?: boolean
  color?: string
  href?: string
  children?: TreeOptions[]
  parent?: string
  checked?: boolean
}

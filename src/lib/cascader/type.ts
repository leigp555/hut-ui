export interface CascaderOptions {
  value: string
  label: string
  children?: CascaderOptions[] | null
  parent?: string
  show?: boolean
}

// rowIndex为行数
export type TableDataType = {
  key: string
  label?: string
  rowIndex?: number
  colspan?: number
  rowspan?: number
  customCell?: (index: number) => { colspan?: number; rowspan?: number }
}

export interface ListData {
  title: string
  avatar?: string
  description: string
}

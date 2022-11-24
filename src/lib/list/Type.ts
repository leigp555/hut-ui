// rowIndex为行数
export type TableDataType = {
  key: string
  label?: string
  rowIndex?: number
  colspan?: number
  rowspan?: number
  customCell?: (index: number) => { colspan?: number; rowspan?: number }
}

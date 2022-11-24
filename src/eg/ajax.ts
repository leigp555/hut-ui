import { TableDataType } from '@/lib/list/Type'

let num: number = 0
const totalDate: {
  title: string
  avatar: string
  description: string
}[] = []
let j = 0
while (j < 1000) {
  totalDate.push({
    title: `Ant Design Title ${j + 1}`,
    avatar: 'https://joeschmoe.io/api/v1/random',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam asperiores, autem blanditiis cumque debitis dolorem est illo odit optio praesentium quasi recusandae rem sint tempora veritatis vitae voluptates voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam asperiores, autem blanditiis cumque debitis dolorem est illo odit optio praesentium quasi recusandae rem sint tempora veritatis vitae voluptates voluptatibus.'
  })
  j++
}

const tableDate: (
  | TableDataType
  | {
      name: string
      age: number
      address: string
      tags: string[]
      tel: string
      phone: string
    }
)[] = []
let x = 0
while (x < 1000) {
  tableDate.push({
    rowIndex: x + 1,
    key: `${x + 1}`,
    name: `John Brown ${x + 1}`,
    age: 32,
    tel: '0571-22098909',
    phone: '18889898989',
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  })
  x++
}

export const ajax = (url: string, count: number, page: number, per_page: number) => {
  const data: {
    title: string
    avatar: string
    description: string
  }[] = []
  return new Promise((resolve, reject) => {
    if (url === '/mock') {
      let i = 0
      while (i < count) {
        data.push({
          title: `Ant Design Title ${num + 1}`,
          avatar: 'https://joeschmoe.io/api/v1/random',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam asperiores, autem blanditiis cumque debitis dolorem est illo odit optio praesentium quasi recusandae rem sint tempora veritatis vitae voluptates voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam asperiores, autem blanditiis cumque debitis dolorem est illo odit optio praesentium quasi recusandae rem sint tempora veritatis vitae voluptates voluptatibus.'
        })
        i++
        num++
      }
      const id = setTimeout(() => {
        resolve(data)
        window.clearTimeout(id)
      }, 2000)
    } else if (url === '/pagination') {
      const end = page * per_page
      const id = setTimeout(() => {
        resolve({
          data: totalDate.slice(end - per_page, end),
          totalDateNum: totalDate.length
        })
        window.clearTimeout(id)
      }, 2000)
    } else if (url === '/table') {
      const end = page * per_page
      const id = setTimeout(() => {
        resolve({
          data: tableDate.slice(end - per_page, end),
          totalDateNum: tableDate.length
        })
        window.clearTimeout(id)
      }, 2000)
    } else {
      const id = setTimeout(() => {
        reject(new Error(JSON.stringify({ err: '无效的请求', status: 404 })))
        window.clearTimeout(id)
      }, 2000)
    }
  })
}

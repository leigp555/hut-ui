let num: number = 0

export const ajax = (url: string, count: number) => {
  const data: {
    title: string
    avatar: string
    description: string
  }[] = []
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
  return new Promise((resolve, reject) => {
    if (url === '/mock') {
      const id = setTimeout(() => {
        resolve(data)
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

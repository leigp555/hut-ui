const body = document.body

// 这个函数使用来给body加样式的
// 由于vue组件内不能有条件的在body上面加样式,所以单独抽离一个函数来加样式

export const addClass = (shouldAddClass: boolean) => {
  const body_classname = body.className
  if (shouldAddClass) {
    body.classList.add('draw_pop')
  } else {
    body_classname !== 'draw_pop'
      ? body.classList.remove('draw_pop')
      : body.removeAttribute('class')
  }
}

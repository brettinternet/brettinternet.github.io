export const disableBodyScroll = () => {
  document.body.classList.add('no-overflow')
}

export const enableBodyScroll = () => {
  document.body.classList.remove('no-overflow')
}

export const isBodyScrollEnabled = () =>
  window.getComputedStyle(document.body).overflow !== 'hidden'

export const filterEvent = (ev: Event) => {
  ev.stopPropagation()
}

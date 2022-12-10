export const getStatisticUrl = (url: string) => {
  return new URL(url, import.meta.url).href
}

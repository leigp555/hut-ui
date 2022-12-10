export default function getStaticUrl(url: string) {
  return new URL(`../${url}`, import.meta.url).href
}

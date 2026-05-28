import { useEffect } from 'react'

interface SEOHeadProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

const SITE_NAME = 'Los Unicos FC'
const DEFAULT_DESCRIPTION = 'Sitio oficial del Club Los Unicos FC — Noticias, plantilla, partidos y galeria.'

export function SEOHead({ title, description, image, url }: SEOHeadProps) {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Sitio Oficial`

  useEffect(() => {
    document.title = pageTitle

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        if (name.startsWith('og:')) {
          el.setAttribute('property', name)
        } else {
          el.setAttribute('name', name)
        }
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', description || DEFAULT_DESCRIPTION)
    setMeta('og:title', pageTitle)
    setMeta('og:description', description || DEFAULT_DESCRIPTION)
    setMeta('og:site_name', SITE_NAME)
    setMeta('og:type', 'website')
    if (image) setMeta('og:image', image)
    if (url) setMeta('og:url', url)
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', pageTitle)
    setMeta('twitter:description', description || DEFAULT_DESCRIPTION)
    if (image) setMeta('twitter:image', image)
  }, [pageTitle, description, image, url])

  return null
}

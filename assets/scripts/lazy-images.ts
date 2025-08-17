export const setup = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(
      (
        entries: IntersectionObserverEntry[],
        observer: IntersectionObserver,
      ) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            const sources = img.parentElement?.querySelectorAll(
              'source',
            ) as NodeListOf<HTMLSourceElement>

            // Update sources if they exist (for picture element)
            sources?.forEach((source: HTMLSourceElement) => {
              if (source.dataset.srcset) {
                source.srcset = source.dataset.srcset
                source.removeAttribute('data-srcset')
              }
            })

            // Update img
            if (img.dataset.srcset) {
              img.srcset = img.dataset.srcset
              img.removeAttribute('data-srcset')
            }
            if (img.dataset.src) {
              img.src = img.dataset.src
              img.removeAttribute('data-src')
            }

            observer.unobserve(img)
          }
        })
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.01,
      },
    )

    // Observe all images with data-src
    document
      .querySelectorAll<HTMLImageElement>('img[data-src]')
      .forEach((img: HTMLImageElement) => {
        imageObserver.observe(img)
      })
  }
}

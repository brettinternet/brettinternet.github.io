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

            // Check if this is a progressive GIF
            if (img.classList.contains('gif-progressive')) {
              handleProgressiveGif(img, sources)
            } else {
              // Standard image handling
              handleStandardImage(img, sources)
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

    function handleStandardImage(
      img: HTMLImageElement,
      sources: NodeListOf<HTMLSourceElement>,
    ): void {
      // First load placeholder if available
      if (img.dataset.placeholderSrc) {
        img.src = img.dataset.placeholderSrc
        img.removeAttribute('data-placeholder-src')
      }

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
    }

    function handleProgressiveGif(
      img: HTMLImageElement,
      sources: NodeListOf<HTMLSourceElement>,
    ): void {
      const placeholderSrc = img.dataset.placeholderSrc
      const webpSrc = img.dataset.webpSrc
      const webpSrcset = img.dataset.webpSrcset
      const gifSrc = img.dataset.gifSrc
      const gifSrcset = img.dataset.gifSrcset

      // Step 0: Load placeholder first if available
      if (placeholderSrc) {
        img.src = placeholderSrc
        img.removeAttribute('data-placeholder-src')
      }

      // Step 1: Load WebP still frame
      if (webpSrc && webpSrcset) {
        // Update sources to WebP
        sources?.forEach((source: HTMLSourceElement) => {
          if (source.type === 'image/webp' && webpSrcset) {
            source.srcset = webpSrcset
            source.removeAttribute('data-srcset')
          }
        })

        // Update img to WebP still
        img.srcset = webpSrcset
        img.src = webpSrc

        // Step 2: Preload GIF in background
        if (gifSrc && gifSrcset) {
          preloadGif(img, gifSrc, gifSrcset)
        }
      }
    }

    function preloadGif(
      img: HTMLImageElement,
      gifSrc: string,
      gifSrcset: string,
    ): void {
      // Parse the srcset to get the appropriate source for current viewport
      const appropriateGifSrc =
        selectAppropriateSource(gifSrcset, img.clientWidth) || gifSrc

      const preloadImg = new Image()

      // Only preload the single appropriate source, not the full srcset
      preloadImg.src = appropriateGifSrc

      preloadImg.onload = () => {
        // GIF is loaded, swap it in
        img.style.opacity = '0.7'

        setTimeout(() => {
          // Remove or disable the WebP source so browser uses img srcset
          const picture = img.parentElement
          const webpSource = picture?.querySelector(
            'source[type="image/webp"]',
          ) as HTMLSourceElement
          if (webpSource) {
            webpSource.remove() // Remove WebP source entirely
          }

          // Now update the img to use GIF
          img.srcset = gifSrcset
          img.src = gifSrc
          img.style.opacity = '1'

          // Clean up data attributes
          img.removeAttribute('data-webp-src')
          img.removeAttribute('data-webp-srcset')
          img.removeAttribute('data-gif-src')
          img.removeAttribute('data-gif-srcset')
          img.classList.remove('gif-progressive')
        }, 50)
      }

      // Handle preload errors gracefully
      preloadImg.onerror = () => {
        // Keep the WebP still frame
        img.removeAttribute('data-gif-src')
        img.removeAttribute('data-gif-srcset')
      }
    }

    function selectAppropriateSource(
      srcset: string,
      clientWidth: number,
    ): string | null {
      if (!srcset) return null

      const sources = srcset.split(',').map((src) => {
        const parts = src.trim().split(' ')
        const url = parts[0]
        const widthStr = parts[1] || ''
        const width = Number.parseInt(widthStr.replace('w', '')) || 0
        return { url, width }
      })

      // Sort by width and find the smallest that's larger than clientWidth
      sources.sort((a, b) => a.width - b.width)

      for (const source of sources) {
        if (source.width >= clientWidth) {
          return source.url ?? null
        }
      }

      // If none found, return the largest
      return sources[sources.length - 1]?.url || null
    }

    // Observe all images with lazy loading data
    document
      .querySelectorAll<HTMLImageElement>('img[data-src], img[data-webp-src]')
      .forEach((img: HTMLImageElement) => {
        imageObserver.observe(img)
      })
  }
}

import {
  disableBodyScroll,
  enableBodyScroll,
  isBodyScrollEnabled,
  filterEvent,
} from './dom'
import { breakpoints } from './styles'

type HeaderConfig = {
  headerEl: HTMLElement
  openEl: HTMLElement
  closeEl: HTMLElement
  drawerEl: HTMLElement
}

class Header {
  header: HTMLElement
  openButton: HTMLElement
  closeButton: HTMLElement
  drawer: HTMLElement
  drawerContent: HTMLElement | null
  drawerHeader: HTMLElement | null
  drawerFooter: HTMLElement | null
  openClassName = 'drawer-open'

  constructor({ headerEl, openEl, closeEl, drawerEl }: HeaderConfig) {
    this.header = headerEl
    this.openButton = openEl
    this.closeButton = closeEl
    this.drawer = drawerEl

    setTimeout(() => {
      this.drawer.classList.add('transition-all', 'duration-200')
    }, 200)

    this.openButton.addEventListener('click', this.enableMenu)
    this.closeButton.onclick = this.disableMenu

    this.drawerContent = this.drawer.querySelector('aside')
    this.drawerHeader = this.drawer.querySelector('#drawer-header')
    this.drawerFooter = this.drawer.querySelector('#drawer-footer')
    if (this.drawerContent) {
      this.drawerContent.addEventListener(
        'scroll',
        this.handleDrawerContentScroll
      )
      this.drawerContent.addEventListener('touchmove', filterEvent)
      this.assignShadowScrolledClasses(this.drawerContent)
    }
  }

  get isDrawerActive() {
    return this.isSmallWidth && this.isHeaderOpen
  }

  get isDrawerInactive() {
    return this.isSmallWidth && !this.isHeaderOpen
  }

  get isHeaderOpen() {
    return this.header.classList.contains(this.openClassName)
  }

  get isDrawerFullWidth() {
    return window.innerWidth <= breakpoints.sm
  }

  get isSmallWidth(): void | boolean {
    const drawerOpenStyle = window.getComputedStyle(this.openButton)
    const drawerCloseStyle = window.getComputedStyle(this.closeButton)
    return (
      drawerOpenStyle.display !== 'none' || drawerCloseStyle.display !== 'none'
    )
  }

  get overlay(): HTMLElement | null {
    return document.getElementById('overlay')
  }

  enableMenu = () => {
    this.header.classList.add(this.openClassName)
    this.openOverlay(this.disableMenu)
    if (this.isDrawerFullWidth) {
      disableBodyScroll()
    }
    this.drawer.setAttribute('aria-hidden', 'false')
    window.addEventListener('resize', this.handleResize)
  }

  disableMenu = () => {
    this.header.classList.remove(this.openClassName)
    this.closeOverlay()
    if (!isBodyScrollEnabled()) {
      enableBodyScroll()
    }
    this.drawer.setAttribute('aria-hidden', 'true')
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    const isScrollable = isBodyScrollEnabled()
    if (this.isDrawerFullWidth && isScrollable) {
      disableBodyScroll()
    } else if (!this.isDrawerFullWidth && !isScrollable) {
      enableBodyScroll()
    }
  }

  openOverlay = (handleClick: () => void) => {
    const overlay =
      document.getElementById('overlay') || document.createElement('div')
    overlay.id = 'overlay'
    overlay.addEventListener('click', handleClick)
    document.body.append(overlay)
  }

  closeOverlay = () => {
    if (this.overlay) {
      this.overlay.remove()
    }
  }

  handleDrawerContentScroll = (ev: Event) => {
    if (ev.currentTarget) {
      this.assignShadowScrolledClasses(ev.currentTarget as HTMLElement)
    }
  }

  assignShadowScrolledClasses = (target: HTMLElement) => {
    const { scrollTop, scrollHeight, offsetHeight } = target
    const isNotScrolledTop = scrollTop > 0
    const isNotScrolledBottom = scrollHeight - scrollTop !== offsetHeight
    if (isNotScrolledTop) {
      this.drawerHeader?.classList.add('bottom-shadow-scrolled')
    } else {
      this.drawerHeader?.classList.remove('bottom-shadow-scrolled')
    }
    if (isNotScrolledBottom) {
      this.drawerFooter?.classList.add('top-shadow-scrolled')
    } else {
      this.drawerFooter?.classList.remove('top-shadow-scrolled')
    }
  }
}

const headerEl = document.getElementById('header')
const openEl = document.getElementById('drawer-open')
const closeEl = document.getElementById('drawer-close')
const drawerEl = document.getElementById('drawer')

if (headerEl && openEl && closeEl && drawerEl) {
  const header = new Header({
    headerEl,
    openEl,
    closeEl,
    drawerEl,
  })

  /**
   * Open drawer when element inside is focused
   */
  const headerAnchors = Array.from(
    drawerEl ? drawerEl.getElementsByTagName('a') : []
  )
  headerAnchors.forEach((anchor) => {
    anchor.addEventListener('focus', () => {
      if (header.isDrawerInactive) {
        header.enableMenu()
      }
    })
  })

  /**
   * Close drawer when outside element is focused
   */
  const focusableElements = Array.from(
    document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  )
  focusableElements.forEach((element) => {
    element.addEventListener('focus', () => {
      if (
        header.isSmallWidth &&
        header.isHeaderOpen &&
        document.activeElement &&
        document.activeElement.tagName.toLowerCase() === 'a' &&
        !headerAnchors.includes(document.activeElement as HTMLAnchorElement)
      ) {
        header.disableMenu()
      }
    })
  })

  /**
   * Close drawer when escape is pressed
   */
  document.addEventListener('keydown', (ev: KeyboardEvent) => {
    if (header.isDrawerActive && ev.key === 'Escape') {
      header.disableMenu()
    }
  })
}

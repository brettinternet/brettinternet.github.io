function showCopyFeedback(
  button: HTMLButtonElement,
  status: 'Copied' | 'Failed',
  resetText = button.textContent ?? 'Copy',
) {
  button.textContent = status

  setTimeout(() => {
    button.textContent = resetText
  }, 2000)
}

function stripTrailingNewline(text: string) {
  return text.replace(/\n$/, '')
}

function getCodeFromLineSpans(lineSpans: Element[]) {
  return lineSpans
    .map((lineSpan) => {
      const childSpans = Array.from(lineSpan.querySelectorAll('span'))
      const lineNumberSpans = childSpans.filter(
        (span) =>
          span.style.webkitUserSelect?.includes('none') ||
          span.style.userSelect?.includes('none'),
      )

      if (lineNumberSpans.length > 0) {
        const codeSpans = childSpans.filter(
          (span) =>
            !span.style.webkitUserSelect?.includes('none') &&
            !span.style.userSelect?.includes('none'),
        )
        return codeSpans
          .map((span) => stripTrailingNewline(span.textContent || ''))
          .join('')
      }

      return stripTrailingNewline(lineSpan.textContent || '')
    })
    .join('\n')
}

function getCodeFromPre(pre: HTMLPreElement) {
  const lineSpans = pre.querySelectorAll('span[style*="display:flex"]')
  if (lineSpans.length > 0) {
    return getCodeFromLineSpans(Array.from(lineSpans))
  }

  const codeElements = pre.querySelectorAll('[data-line]')
  if (codeElements.length > 0) {
    return Array.from(codeElements)
      .map((element) => element.textContent || '')
      .join('\n')
  }

  const lineNumberElements = pre.querySelectorAll('.ln')
  if (lineNumberElements.length > 0) {
    const preClone = pre.cloneNode(true) as HTMLPreElement
    preClone.querySelectorAll('.ln').forEach((lineNumber) => {
      lineNumber.remove()
    })
    return preClone.textContent || ''
  }

  return pre.textContent || ''
}

function getCodeFromBlock(blockGroup: Element, pre: HTMLPreElement) {
  const table = blockGroup.querySelector('table')
  if (table) {
    const codeTd = table.querySelector('td:nth-child(2) pre')
    if (codeTd) {
      return stripTrailingNewline(codeTd.textContent || '')
    }

    const secondTd = table.querySelector('td:nth-child(2)')
    return secondTd ? stripTrailingNewline(secondTd.textContent || '') : ''
  }

  return stripTrailingNewline(getCodeFromPre(pre))
}

export function setup() {
  document.addEventListener('DOMContentLoaded', () => {
    const codeBlocks = document.querySelectorAll('.group\\/codeblock')

    codeBlocks.forEach((blockGroup) => {
      const pre = blockGroup.querySelector('pre') as HTMLPreElement
      const copyBtn = blockGroup.querySelector('.copy-btn') as HTMLButtonElement
      if (!copyBtn) return

      copyBtn.classList.remove('hidden')

      copyBtn.addEventListener('click', async () => {
        const code = getCodeFromBlock(blockGroup, pre)

        try {
          await navigator.clipboard.writeText(code)
          showCopyFeedback(copyBtn, 'Copied')
        } catch (_err) {
          // Fallback for older browsers
          const textArea = document.createElement('textarea')
          textArea.value = code
          document.body.appendChild(textArea)
          textArea.select()

          try {
            document.execCommand('copy')
            showCopyFeedback(copyBtn, 'Copied')
          } catch (_fallbackErr) {
            showCopyFeedback(copyBtn, 'Failed', 'Copy')
          }

          document.body.removeChild(textArea)
        }
      })
    })
  })
}

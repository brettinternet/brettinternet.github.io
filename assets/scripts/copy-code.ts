export function setup() {
  document.addEventListener('DOMContentLoaded', () => {
    const codeBlocks = document.querySelectorAll('.group\\/codeblock')

    codeBlocks.forEach((blockGroup) => {
      const pre = blockGroup.querySelector('pre') as HTMLPreElement
      const copyBtn = blockGroup.querySelector('.copy-btn') as HTMLButtonElement
      if (!copyBtn) return

      copyBtn.classList.remove('hidden')

      copyBtn.addEventListener('click', async () => {
        let code = ''

        // Check if this is a table-based line number structure (Hugo's default)
        const table = blockGroup.querySelector('table')
        if (table) {
          // Hugo uses a table structure with line numbers in first td, code in second td
          const codeTd = table.querySelector('td:nth-child(2) pre')
          if (codeTd) {
            code = codeTd.textContent || ''
          } else {
            // Fallback to second td if no pre inside
            const secondTd = table.querySelector('td:nth-child(2)')
            code = secondTd ? secondTd.textContent || '' : ''
          }
        } else {
          // Check for flex-based line structure (both with and without line numbers)
          const lineSpans = pre.querySelectorAll('span[style*="display:flex"]')
          if (lineSpans.length > 0) {
            // Each line is in a flex span
            code = Array.from(lineSpans)
              .map((lineSpan) => {
                // Check if there are child spans with user-select:none (line numbers)
                const lineNumberSpans = Array.from(
                  lineSpan.querySelectorAll('span'),
                ).filter(
                  (span) =>
                    span.style.webkitUserSelect?.includes('none') ||
                    span.style.userSelect?.includes('none'),
                )

                if (lineNumberSpans.length > 0) {
                  // Has line numbers, get only the code spans (non-user-select:none)
                  const codeSpans = Array.from(
                    lineSpan.querySelectorAll('span'),
                  ).filter(
                    (span) =>
                      !span.style.webkitUserSelect?.includes('none') &&
                      !span.style.userSelect?.includes('none'),
                  )
                  return codeSpans
                    .map((span) => (span.textContent || '').replace(/\n$/, ''))
                    .join('')
                }
                // No line numbers, get content from the line span directly
                // Remove any trailing newline since we'll add our own when joining
                return (lineSpan.textContent || '').replace(/\n$/, '')
              })
              .join('\n')
          } else {
            // No inline line numbers, check for other line number patterns
            const codeElements = pre.querySelectorAll('[data-line]')
            if (codeElements.length > 0) {
              // If line numbers exist, get text from code elements only
              code = Array.from(codeElements)
                .map((el) => el.textContent || '')
                .join('\n')
            } else {
              // Fallback: look for .ln class (Hugo's line number class)
              const lineNumberElements = pre.querySelectorAll('.ln')
              if (lineNumberElements.length > 0) {
                // Clone the pre element and remove line number elements
                const preClone = pre.cloneNode(true) as HTMLPreElement
                preClone.querySelectorAll('.ln').forEach((ln) => ln.remove())
                code = preClone.textContent || ''
              } else {
                // No line numbers detected, use full text content
                code = pre.textContent || ''
              }
            }
          }
        }

        code = code.replace(/\n$/, '')

        try {
          await navigator.clipboard.writeText(code)

          const originalText = copyBtn.textContent
          copyBtn.textContent = 'Copied'

          setTimeout(() => {
            copyBtn.textContent = originalText
          }, 2000)
        } catch (_err) {
          // Fallback for older browsers
          const textArea = document.createElement('textarea')
          textArea.value = code
          document.body.appendChild(textArea)
          textArea.select()

          try {
            document.execCommand('copy')
            const originalText = copyBtn.textContent
            copyBtn.textContent = 'Copied'

            setTimeout(() => {
              copyBtn.textContent = originalText
            }, 2000)
          } catch (_fallbackErr) {
            copyBtn.textContent = 'Failed'
            setTimeout(() => {
              copyBtn.textContent = 'Copy'
            }, 2000)
          }

          document.body.removeChild(textArea)
        }
      })
    })
  })
}

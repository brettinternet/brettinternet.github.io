import { afterEach, beforeAll, expect, jest, mock, test } from 'bun:test'
import { GlobalRegistrator } from '@happy-dom/global-registrator'

import { setup } from './copy-code'

GlobalRegistrator.register()

beforeAll(() => {
  setup()
})

afterEach(() => {
  jest.useRealTimers()
  jest.restoreAllMocks()
  document.body.replaceChildren()
})

test('copies plain highlighted code and resets the button label', async () => {
  document.body.innerHTML = `
    <div class="group/codeblock">
      <button class="copy-btn hidden">Copy</button>
      <pre><span style="display:flex"><span>const answer = 42</span>\n</span><span style="display:flex"><span>console.log(answer)</span>\n</span></pre>
    </div>
  `
  const writeText = mock(() => Promise.resolve())
  Object.defineProperty(navigator, 'clipboard', {
    configurable: true,
    value: { writeText },
  })
  jest.useFakeTimers()

  document.dispatchEvent(new Event('DOMContentLoaded'))

  const copyBtn = document.querySelector('.copy-btn') as HTMLButtonElement
  expect(copyBtn.classList.contains('hidden')).toBe(false)

  copyBtn.click()
  await Promise.resolve()

  expect(writeText).toHaveBeenCalledWith(
    'const answer = 42\nconsole.log(answer)',
  )
  expect(copyBtn.textContent).toBe('Copied')

  jest.advanceTimersByTime(2000)
  expect(copyBtn.textContent).toBe('Copy')
})

test('copies table code without line numbers or a trailing newline', async () => {
  document.body.innerHTML = `
    <div class="group/codeblock">
      <button class="copy-btn hidden">Copy</button>
      <table><tbody><tr>
        <td><pre>1\n2\n</pre></td>
        <td><pre>alpha\nbeta\n</pre></td>
      </tr></tbody></table>
    </div>
  `
  const writeText = mock(() => Promise.resolve())
  Object.defineProperty(navigator, 'clipboard', {
    configurable: true,
    value: { writeText },
  })
  jest.useFakeTimers()

  document.dispatchEvent(new Event('DOMContentLoaded'))
  const copyBtn = document.querySelector('.copy-btn') as HTMLButtonElement

  copyBtn.click()
  await Promise.resolve()

  expect(writeText).toHaveBeenCalledWith('alpha\nbeta')
})

test('falls back to execCommand and removes the temporary textarea', async () => {
  document.body.innerHTML = `
    <div class="group/codeblock">
      <button class="copy-btn hidden">Copy</button>
      <pre><span style="display:flex"><span>fallback code</span>\n</span></pre>
    </div>
  `
  const writeText = mock(() => Promise.reject(new Error('Clipboard denied')))
  const execCommand = mock(() => {
    expect(
      (document.querySelector('textarea') as HTMLTextAreaElement).value,
    ).toBe('fallback code')
    return true
  })
  Object.defineProperty(navigator, 'clipboard', {
    configurable: true,
    value: { writeText },
  })
  Object.defineProperty(document, 'execCommand', {
    configurable: true,
    value: execCommand,
  })
  jest.useFakeTimers()

  document.dispatchEvent(new Event('DOMContentLoaded'))
  const copyBtn = document.querySelector('.copy-btn') as HTMLButtonElement

  copyBtn.click()
  await Promise.resolve()

  expect(writeText).toHaveBeenCalledWith('fallback code')
  expect(execCommand).toHaveBeenCalledWith('copy')
  expect(document.querySelector('textarea')).toBeNull()
  expect(copyBtn.textContent).toBe('Copied')

  jest.advanceTimersByTime(2000)
  expect(copyBtn.textContent).toBe('Copy')
})

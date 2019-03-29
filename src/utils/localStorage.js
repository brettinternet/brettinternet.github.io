const keys = {
  DARKMODE: "dark",
}

function getItem(key) {
  return localStorage.getItem(key)
}

/**
 * hella atomic
 */
function setItem(key, value) {
  if (value) {
    localStorage.setItem(key, value)
  } else if (key) {
    localStorage.removeItem(key)
  } else {
    localStorage.clear()
  }
}

export const getDarkMode = () => getItem(keys.DARKMODE) === "true"
export const setDarkMode = isOn =>
  setItem(keys.DARKMODE, isOn || isOn === false ? !!isOn : undefined)

export const sort = array => {
  return array.sort((a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
  })
}

export const proper = string => {
  const letters = string.split('')
  const proper = letters.map((letter, i) => {
    if (i === 0) return letter.toUpperCase()
    return letter.toLowerCase()
  })
  return proper.join('')
}

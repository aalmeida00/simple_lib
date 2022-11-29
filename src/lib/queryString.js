module.exports.queryString = (object) => {
  const entries = Object.entries(object).map(item => {
    return `${item[0]}=${item[1]}`
  })
  return entries.join('&')
}
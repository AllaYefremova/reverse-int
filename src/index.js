module.exports = function reverse (n) {
  const arrNumb = String(n).split('').filter(el => el !== '-')
  const reverseNumb = arrNumb.reverse().join('')
  return reverseNumb
}

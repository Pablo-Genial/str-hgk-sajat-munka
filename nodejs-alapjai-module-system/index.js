const increaseAndFormatDate = require('./utils')

const dates = [
  new Date('October 2, 1965'),
  new Date('November 7, 1934'),
  new Date('February 25, 1993'),
  new Date('May 1, 1981'),
  new Date('April 25, 1954'),
]

// const date = new Date('October 2, 1965')

console.log(increaseAndFormatDate(dates))

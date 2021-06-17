const increaseDate = (date, days = 3) => date.setDate(date.getDate() + days)

const increaseAndFormatDate = (arr) => {
  return arr.map((date) =>
    Intl.DateTimeFormat('hu-HU').format(increaseDate(date))
  )
}

module.exports = increaseAndFormatDate

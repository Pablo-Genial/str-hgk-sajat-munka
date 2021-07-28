const fsp = require('fs').promises
const path = require('path')

const filePath = path.join(__dirname, '..', 'database', 'person.data.json')

const readList = async () => {
  const content = await fsp.readFile(filePath, 'utf8')
  return JSON.parse(content)
}

module.exports = {
  readList,
}

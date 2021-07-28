const express = require('express')
const personService = require('./person.service')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('ESZT (Egészségügyi Szuri Tár)')
})

router.get('/vaccinated', async (req, res, next) => {
  const peopleList = await personService.readList()
  vaccinatedList = peopleList.filter((p) => p.vaccine)
  res.json(vaccinatedList)
})

router.get('/count', async (req, res, next) => {
  const peopleList = await personService.readList()
  const vaccinatedCount = peopleList.filter((p) => p.vaccine).length
  res.json(`A beoltottak száma: ${vaccinatedCount} fő`)
})

module.exports = router

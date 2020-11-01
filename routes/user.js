var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  const person = req.body
  console.log(person)
  res.json({ message: 'respond with a resource' })
})

module.exports = router

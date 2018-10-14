const router = require('express').Router();
const {Mail} = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const allMails = await Mail.findAll();
    res.status(200).send(allMails);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const mail = await Mail.findById(req.params.id);
    res.status(200).send(mail);
  } catch (err) {
    next(err);
  }
})

module.exports = router;
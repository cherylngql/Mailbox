const router = require('express').Router();
const {Folder, Mail} = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const folder = await Folder.findOne({
      include: [{
        model: Mail
      }],
      where: {
        name: ''
      }
    });
    res.status(200).send(folder);
  } catch (err) {
    next(err);
  }
})

router.get('/:name', async (req, res, next) => {
  try {
    const folder = await Folder.findOne({
      include: [{
        model: Mail
      }],
      where: {
        name: req.params.name
      }
    });
    res.status(200).send(folder);
  } catch (err) {
    next(err);
  }
})

module.exports = router;
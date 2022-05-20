const router = require('express').Router();


router.get("/", (req, res) => {
  res.send("En la raiz de viajes");
});

module.exports = router;
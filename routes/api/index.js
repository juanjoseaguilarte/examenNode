const router = require('express').Router();

const apiClientsRouter = require("./clients");
const apiHotelsRouter = require("./hotels");
const apiTravelsRouter = require("./travels");


router.use("/clients", apiClientsRouter);
router.use("/hotels", apiHotelsRouter);
router.use("/travels", apiTravelsRouter);

module.exports = router;
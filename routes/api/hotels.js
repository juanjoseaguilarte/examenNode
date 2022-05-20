const router = require('express').Router();
const { getAll, create, update, getById, deleteById } = require("../../models/hotel.model");

router.get("/", async (req, res) => {
  try {
    const result = await getAll();
    res.send(result);
  } catch (err) {
    res.json({ error: err.message });
  }
});

router.post("/new", async (req, res) => {
  try {
    const result = await create(req.body);
    res.json(result);
  } catch (err) {
    res.json({ error: err.message });
  }
});


router.put("/edit/:pHotelId", async (req, res) => {
  try {
    const result = await update(req.params.pHotelId, req.body);
    const travelUpdated = await getById(req.params.pHotelId);
    res.json("vuelo actualizado");
  } catch (err) {
    console.log(err);
    res.json({ message: err.message });
  }
});

router.delete("/delete/:pHotelId", async (req, res) => {
  try {
    const hotel = await getById(req.params.pHotelId);
    if (hotel === null) {
      return res.send("No se ha encontrado el hotel");
    }
    const result = await deleteById(req.params.pHotelId);
    console.log(result);
    res.send("Hotel borrado con éxito");
  } catch (err) {
    res.json({ error: err.message });
  }
});





module.exports = router;
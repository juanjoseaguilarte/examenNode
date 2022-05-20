const router = require('express').Router();
const { getAll, create, update, getById, deleteById } = require("../../models/travels.model");

router.get("/", async (req, res) => {
  //res.send("En la raiz de viajes")
  try {
    const result = await getAll();
    res.send(result);
  } catch (err) {
    res.json({ error: err.message });
  }
});

router.post("/new/:pHotels", async (req, res) => {
  try {
    let newTravel = req.body
    newTravel.hotel_id = req.params.pHotels
    const result = await create(newTravel);
        
    res.send(result);
    } catch (err) {
        res.send(req.params.pHotels);
        res.json({ error: err.message });
  }
});

router.put("/edit/:pTravelId", async (req, res) => {
  try {
    const result = await update(req.params.pTravelId, req.body);
    const travelUpdated = await getById(req.params.pTravelId);
    res.json("vuelo actualizado");
  } catch (err) {
    console.log(err);
    res.json({ message: err.message });
  }
});

router.delete("/delete/:pTravelId", async (req, res) => {
  try {
    const travel = await getById(req.params.pTravelId);
    if (travel === null) {
      return res.send("No se ha encontrado ningún viaje");
    }
    const result = await deleteById(req.params.pTravelId);
    res.send("Viaje borrado con éxito");
  } catch (err) {
    res.json({ error: err.message });
  }
});
module.exports = router;
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

router.post("/", async (req, res) => {
  try {
    const result = await create(req.body);
    res.send("Se ha creado el viaje con éxito");
  } catch (err) {
    res.json({ error: err.message });
  }
});

router.put("/:pTravelId", async (req, res) => {
  try {
    const result = await update(req.params.pTravelId, req.body);
    const travelUpdated = await getById(req.params.pTravelId);
    res.json("vuelo actualizado");
  } catch (err) {
    console.log(err);
    res.json({ message: err.message });
  }
});

router.delete("/:pTravelId", async (req, res) => {
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
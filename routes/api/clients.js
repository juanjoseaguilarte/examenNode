const router = require('express').Router();
const { getAll, create, update, getById, deleteById, createClientTravel } = require("../../models/client.model");

router.get('/', async (req, res) => {
  try {
    const result = await getAll()
    res.send(result);
  } catch (err) {
    res.json({ error: err.message })      
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

router.put("/edit/:clienteId", async (req, res) => {
  try {
    const result = await update(req.params.clienteId, req.body);
    const clientUpdated = await getById(req.params.clienteId);
    res.json(clientUpdated);
  } catch (err) {
    console.log(err);
    res.json({ message: err.message });
  }
});

router.delete("/delete/:clientId", async (req, res) => {
  try {
    const client = await getById(req.params.clientId);
    if (client === null) {
    return res.send("No se ha encontrado el cliente"); 
    }
    const result = await deleteById(req.params.clientId);
    console.log(result)
    res.send('Cliente borrado con éxito');
  } catch (err) {
    res.json({ error: err.message });
  }
});

router.post("/:idClient/travel/:idTravel", async (req, res) => {

  try {
    const idCliente = req.params.idClient;
    const idTravel = req.params.idTravel;
    const clientTravel = await createClientTravel(idCliente, idTravel);  
  } catch (err) {
    res.send({error: err.message})
    
  }
})

module.exports = router;

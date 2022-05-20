const router = require('express').Router();
const { getAll, create, update, getById, deleteById } = require('../../models/client.model')

router.get('/', async (req, res) => {
  //res.send("En la raiz de clientes")
  try {
    const result = await getAll()
    res.send(result);
  } catch (err) {
    res.json({ error: err.message })      
  }
});


router.post("/", async (req, res) => {
  try {
    const result = await create(req.body);
    res.json(result);
  } catch (err) {
    res.json({ error: err.message });
  }
});

router.put("/:clienteId", async (req, res) => {
  try {
    const result = await update(req.params.clienteId, req.body);
    const clientUpdated = await getById(req.params.clienteId);
    res.json(clientUpdated);
  } catch (err) {
    console.log(err);
    res.json({ message: err.message });
  }
});

router.delete("/:clientId", async (req, res) => {
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

module.exports = router;
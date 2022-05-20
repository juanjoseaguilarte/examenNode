const router = require('express').Router();
const { getAll, create, update, getById, deleteById } = require('../../models/client.model')

router.get('/', async (req, res) => {
  //res.send("En la raiz de clientes")
  try {
    const result = await getAll()
    res.json(result);
  } catch (err) {
    res.json({ error: err.message })      
  }
});


router.post("/", async (req, res) => {
  try {
    const result = await create(req.body);
    res.json(newCliente);
  } catch (err) {
    res.json({ error: err.message });
  }
});

router.put("/:clienteId", async (req, res) => {
  try {
    const result = await update(req.params.clienteId, req.body);
    const clienteUpdated = await getById(req.params.clienteId);
    res.json(clienteUpdated);
  } catch (err) {
    console.log(err);
    res.json({ message: err.message });
  }
});

router.delete("/:clienteId", (req, res) => {
    try {
        const result = deleteById(req.params.clienteId);
        res.send('Cliente borrado con éxito');
    } catch (err) {
        res.json({ error: err.message });
    }
});

module.exports = router;
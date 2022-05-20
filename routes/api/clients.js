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
    const clienteUpdated = await getById(req.params.clienteId);
    res.json(clienteUpdated);
  } catch (err) {
    console.log(err);
    res.json({ message: err.message });
  }
});

router.delete("/:clienteId", async (req, res) => {
    try {
        const cliente = await getById(req.params.clienteId);
        if (cliente === null) {
            return res.send("No se ha encontrado el cliente"); 
        }
        const result = await deleteById(req.params.clienteId);
        console.log(result)
        res.send('Cliente borrado con éxito');
    } catch (err) {
        res.json({ error: err.message });
    }
});

module.exports = router;
const { executeQuery, executeQueryOne } = require("../helpers/utils");

const getAll = () => {
  return executeQuery("select * from clientes");
};
//nombre, apellidos, dirección, teléfono, fecha de nacimiento, email, dni
const create = ({
  id,
  nombre,
  apellidos,
  direccion,
  telefono,
  fecha_nacimiento,
  email,
  dni
}) => {
  return executeQuery(
    "insert into clientes (id, nombre, apellidos, direccion, telefono, fecha_nacimiento, email, dni) values(?, ?, ?, ?, ?, ?, ?, ?)",
      [
      id,
      nombre,
      apellidos,
      direccion,
      telefono,
      fecha_nacimiento,
      email,
      dni
    ]
  );
};

const getById = (pClienteId) => {
  return executeQueryOne("select * from clientes where id = ?", [pClienteId]);
};


const update = (
  pClienteId,
  { id, nombre, apellidos, direccion, telefono, fecha_nacimiento, email, dni }
) => {
  return executeQuery(
    "update clientes set id = ?, nombre = ?, apellidos = ?, direccion = ?, telefono = ?, fecha_nacimiento = ?, email = ?, dni = ?  where id = ?",
    [
      id, nombre, apellidos, direccion, telefono, fecha_nacimiento, email, dni,
      pClienteId,
    ]
  );
};

const deleteById = (pClienteId) => {
  return executeQuery("delete from clientes where id = ?", [pClienteId]);
};

module.exports = {
  getAll,
  create,
  getById,
  update,
  deleteById,
};

import { pool } from "../database";
const helpers = require("../libs/helpers");
export const registrarTrabajador = async (req, res) => {
  const { nombre, apellidos, usuario, contraseña } = req.body;
  const pass = await helpers.encryptPassword(contraseña);
  pool.query(
    "insert into trabajador(nombre,apellidos,usuario,contraseña) values(?,?,?,?);",
    [nombre, apellidos, usuario, pass],
    function (err, result) {
      try {
        return res.status(200).json("Trabajador registrado con exito");
      } catch (error) {
        return res.status(500).json("Error al registrar trabajador");
      }
    }
  );
};

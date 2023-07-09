import { pool } from "../database";
export const getDocumento = async (req, res) => {
  pool.query("select * from tipo_documento;", function (err, result) {
    try {
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json("Error al listar documentos");
    }
  });
};

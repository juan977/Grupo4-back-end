import { pool } from "../database";

export const createDescripcionofPredio = async (req, res) => {
  const {
    nivel,
    mes,
    año,
    AreaConstruidaDEC,
    AreaConstruidaVER,
    AreaConstruidaCOMUNDEC,
    AreaConstruidaCOMUNVER,

    muros,
    techos,
    pisos,
    puertas,
    reves,
    baños,
    instal,
    estado,
    material,
    predioid,
  } = req.body;
  console.log(predioid);
  pool.query(
    "INSERT INTO descripcionpredio (nivel, mes, año, AreaConstruidaDEC, AreaConstruidaVER, AreaConstruidaCOMUNDEC, AreaConstruidaCOMUNVER, muros, techos, pisos, puertas, reves, baños, instal, estado, material, predioid) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);",
    [
      nivel,
      mes,
      año,
      AreaConstruidaDEC,
      AreaConstruidaVER,
      AreaConstruidaCOMUNDEC,
      AreaConstruidaCOMUNVER,

      muros,
      techos,
      pisos,
      puertas,
      reves,
      baños,
      instal,
      estado,
      material,
      predioid,
    ],
    function (err, result) {
      try {
        return res.status(200).json(result);
      } catch (error) {
        return res.status(500).json("Error al listar tipovia");
      }
    }
  );
};
export const createObraofPredio = async (req, res) => {
  const {
    descripcion,
    tiponivel,
    nivel,
    estado,
    material,
    m2,
    categoria,
    cantidad,
    metrado,
    fecha,
    predio,
  } = req.body;
  pool.query(
    "INSERT INTO obeascomplementarias (descripcion, tiponivel, nivel, `EST.CONST`, `MAT.PRED`, `M2/M3/UND`, CATEGORIA, CANTIDAD, METRADO, `MES-AÑO`, predio) VALUES(?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?);",
    [
      descripcion,
      tiponivel,
      nivel,
      estado,
      material,
      m2,
      categoria,
      cantidad,
      metrado,
      fecha,
      predio,
    ],
    function (err, result) {
      try {
        return res.status(200).json(result);
      } catch (error) {
        return res.status(500).json("Error al listar tipovia");
      }
    }
  );
};

export const getObraPredio = async (req, res) => {
  const id= req.params.id;
  pool.query(
    "select *  from obeascomplementarias where predio=?;",
    [id],
    function (err, result) {
      try {
        return res.status(200).json(result);
      } catch (error) {
        return res.status(500).json("Error al buscar contribuyente");
      }
    }
  );
};
export const getDescripcionPredio = async (req, res) => {
  const id= req.params.id;
  pool.query(
    "select *  from descripcionpredio where predioid=?;",
    [id],
    function (err, result) {
      try {
        return res.status(200).json(result);
      } catch (error) {
        return res.status(500).json("Error al buscar contribuyente");
      }
    }
  );
};
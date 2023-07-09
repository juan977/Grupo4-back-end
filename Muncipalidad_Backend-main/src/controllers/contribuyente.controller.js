import { pool } from "../database";
const helpers = require("../libs/helpers");
export const getContribuyente = async (req, res) => {
  pool.query(
    "select predio.id,contribuyente.codigo, contribuyente.Nombre_Completo_razonsocial, contribuyente.numeroDoc, predio.manzana_cat from contribuyente left join predio on contribuyente.codigo=predio.Contribuyente_codigo where contribuyente.estado=1;",
    function (err, result) {
      try {
        return res.status(200).json(result);
      } catch (error) {
        return res.status(500).json("Error al listar contribuyente");
      }
    }
  );
};

export const buscarContribuyente = async (req, res) => {
  const { codigo } = req.body;
  pool.query("call BUSCAR_CONTRIBUYENTE(?);", [codigo], function (err, result) {
    try {
      return res.status(200).json(result[0]);
    } catch (error) {
      return res.status(500).json("Error al buscar contribuyente");
    }
  });
};
export const deleteContribuyente = async (req, res) => {
  const { codigo } = req.body;
  pool.query(
    "update contribuyente set estado=0 where codigo=?;",
    [codigo],
    function (err, result) {
      try {
        return res.status(200).json("Contribuyente eliminado logicamente");
      } catch (error) {
        return res.status(500).json("Error al buscar contribuyente");
      }
    }
  );
};

export const createContribuyente = async (req, res) => {
  const {
    P_InefactoPensionista,
    P_DescripcionCintribuyente,
    P_FechaResolucion,
    P_FechaAplicacion,
    P_FechaVencimiento,
    P_Referencia,
    P_Calle,
    P_ManzanaDomicilio,
    P_LoteDomicilio,
    P_KmDomicilio,
    P_Dpto,
    P_IdDistrito,
    P_IdTipoVia,
    P_Numerodomicilio,
    P_Int,
    P_NombreCompleto,
    P_Documento,
    P_TipoContribuyente,
    P_IdTipoDocumento,
    URL,
    P_TipodePropiedad,
    P_PorcentajePropiedad,
    P_FechaAdquisicion,
    P_AreaTerreno_PropiaDeclarada,
    P_AreaTerreno_ComunDeclarada,
    P_PorcentajeBc,
    P_TerrenoMatriz,
    P_AreaTerreno_PropiaVerificada,
    P_AreaTerreno_ComunVerificada,
    P_Tipovia,
    P_Via,
    P_Numero,
    P_Km,
    P_Mz,
    P_Lote,
    P_TipoEdif,
    P_NumeroVia,
    P_TipoInt,
    P_Sublote,
    P_LinderoFrente,
    P_LinderoDerecho,
    P_LinderoIzquierda,
    P_LinderoFondo,
    P_Uso,
    P_Clacificacion,
    P_Frontis,
    P_Berma,
    P_frontisAreaVerde,
    P_TipoAgrupacion,
    P_NumeroPredio,
    P_Zona,
    P_Sector,
    P_Manzana,
    P_LoteCategoria,

    P_HabilitacionHurbana,
  } = req.body;

  const fileName = Date.now();
  const P_Codigo = `${fileName}`;
  pool.query(
    "CALL Registro(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);",
    [
      P_InefactoPensionista,
      P_DescripcionCintribuyente,
      P_FechaResolucion,
      P_FechaAplicacion,
      P_FechaVencimiento,
      P_Referencia,
      P_Calle,
      P_ManzanaDomicilio,
      P_LoteDomicilio,
      P_KmDomicilio,
      P_Dpto,
      P_IdDistrito,
      P_IdTipoVia,
      P_Numerodomicilio,
      P_Int,
      P_Codigo,
      P_NombreCompleto,
      P_Documento,
      P_TipoContribuyente,
      P_IdTipoDocumento,
      URL,
      P_TipodePropiedad,
      P_PorcentajePropiedad,
      P_FechaAdquisicion,
      P_AreaTerreno_PropiaDeclarada,
      P_AreaTerreno_ComunDeclarada,
      P_PorcentajeBc,
      P_TerrenoMatriz,
      P_AreaTerreno_PropiaVerificada,
      P_AreaTerreno_ComunVerificada,
      P_Tipovia,
      P_Via,
      P_Numero,
      P_Km,
      P_Mz,
      P_Lote,
      P_TipoEdif,
      P_NumeroVia,
      P_TipoInt,
      P_Sublote,
      P_LinderoFrente,
      P_LinderoDerecho,
      P_LinderoIzquierda,
      P_LinderoFondo,
      P_Uso,
      P_Clacificacion,
      P_Frontis,
      P_Berma,
      P_frontisAreaVerde,
      P_TipoAgrupacion,
      P_NumeroPredio,
      P_Zona,
      P_Sector,
      P_Manzana,
      P_LoteCategoria,
      P_HabilitacionHurbana,
    ],
    function (err, result) {
      try {
        return res.status(200).json({
          message: "Contribuyente registrado correctamente",
        });
      } catch (error) {
        return res.status(500).json("Error al crear al Contribuyente");
      }
    }
  );
};
export const createContribuyenteMovil = async (req, res) => {
  console.log(req.body);
  const P_InefactoPensionista = req.body.P_InefactoPensionista; //listo
  const P_DescripcionCintribuyente = req.body.P_DescripcionCintribuyente; //listo
  const P_FechaResolucion = req.body.P_FechaResolucion; //listo
  const P_FechaAplicacion = req.body.P_FechaAplicacion; //listo
  const P_FechaVencimiento = req.body.P_FechaVencimiento; //listo
  const P_Referencia = req.body.P_Referencia; //listo
  const P_Calle = req.body.P_Calle; //listo
  const P_ManzanaDomicilio = req.body.P_ManzanaDomicilio; //listo
  const P_LoteDomicilio = req.body.P_LoteDomicilio; //listo
  const P_KmDomicilio = req.body.P_KmDomicilio; //listo
  const P_Dpto = req.body.P_Dpto; //listo
  const P_IdDistrito = parseInt(req.body.P_IdDistrito); //listo
  const P_IdTipoVia = parseInt(req.body.P_IdTipoVia); //listo
  const P_Numerodomicilio = req.body.P_Numerodomicilio; //listo
  const P_Int = req.body.P_Int; //listo
  const P_NombreCompleto = req.body.P_NombreCompleto; //listo
  const P_Documento = req.body.P_Documento; //listo
  const P_TipoContribuyente = req.body.P_TipoContribuyente; //listo
  const P_IdTipoDocumento = parseInt(req.body.P_IdTipoDocumento); //listo
  const P_Url = req.body.URL;
  const P_TipodePropiedad = req.body.P_TipodePropiedad; //listo
  const P_PorcentajePropiedad = req.body.P_PorcentajePropiedad; //listo
  const P_FechaAdquisicion = req.body.P_FechaAdquisicion; //listo
  const P_AreaTerreno_PropiaDeclarada = req.body.P_AreaTerreno_PropiaDeclarada; //listo
  const P_AreaTerreno_ComunDeclarada = req.body.P_AreaTerreno_ComunDeclarada; //listo
  const P_PorcentajeBc = req.body.P_PorcentajeBc; //listo
  const P_TerrenoMatriz = req.body.P_TerrenoMatriz; //listo
  const P_AreaTerreno_PropiaVerificada =
    req.body.P_AreaTerreno_PropiaVerificada; //listo
  const P_AreaTerreno_ComunVerificada = req.body.P_AreaTerreno_ComunVerificada; //listo

  const P_Tipovia = req.body.P_Tipovia; //listo
  const P_Via = req.body.P_Via; //listo
  const P_Numero = req.body.P_Numero; //listo
  const P_Km = req.body.P_Km; //listo
  const P_Mz = req.body.P_Mz; //listo
  const P_Lote = req.body.P_Lote; //listo
  const P_TipoEdif = req.body.P_TipoEdif; //listo
  const P_NumeroVia = req.body.P_NumeroVia; //listo
  const P_TipoInt = req.body.P_TipoInt; //listo
  const P_Sublote = req.body.P_Sublote; //listo

  const P_LinderoFrente = req.body.P_LinderoFrente;
  const P_LinderoDerecho = req.body.P_LinderoDerecho;
  const P_LinderoIzquierda = req.body.P_LinderoIzquierda;
  const P_LinderoFondo = req.body.P_LinderoFondo;
  const P_Uso = req.body.P_Uso;
  const P_Clacificacion = req.body.P_Clacificacion;
  const P_Frontis = req.body.P_Frontis;
  const P_Berma = req.body.P_Berma;
  const P_frontisAreaVerde = req.body.P_frontisAreaVerde;

  const P_TipoAgrupacion = req.body.P_TipoAgrupacion; //listo
  const P_NumeroPredio = req.body.P_NumeroPredio; //listo
  const P_Zona = req.body.P_Zona; //listo
  const P_Sector = req.body.P_Sector; //listo
  const P_Manzana = req.body.P_Manzana; //listo
  const P_LoteCategoria = req.body.P_LoteCategoria; //listo
  const P_HabilitacionHurbana = req.body.P_HabilitacionHurbana; //listo

  const fileName = Date.now();
  const P_Codigo = `${fileName}`;
  console.log(P_Codigo);

  pool.query(
    "CALL Registro(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);",
    [
      P_InefactoPensionista,
      P_DescripcionCintribuyente,
      P_FechaResolucion,
      P_FechaAplicacion,
      P_FechaVencimiento,
      P_Referencia,
      P_Calle,
      P_ManzanaDomicilio,
      P_LoteDomicilio,
      P_KmDomicilio,
      P_Dpto,
      P_IdDistrito,
      P_IdTipoVia,
      P_Numerodomicilio,
      P_Int,
      P_Codigo,
      P_NombreCompleto,
      P_Documento,
      P_TipoContribuyente,
      P_IdTipoDocumento,
      P_Url,
      P_TipodePropiedad,
      P_PorcentajePropiedad,
      P_FechaAdquisicion,
      P_AreaTerreno_PropiaDeclarada,
      P_AreaTerreno_ComunDeclarada,
      P_PorcentajeBc,
      P_TerrenoMatriz,
      P_AreaTerreno_PropiaVerificada,
      P_AreaTerreno_ComunVerificada,
      P_Tipovia,
      P_Via,
      P_Numero,
      P_Km,
      P_Mz,
      P_Lote,
      P_TipoEdif,
      P_NumeroVia,
      P_TipoInt,
      P_Sublote,
      P_LinderoFrente,
      P_LinderoDerecho,
      P_LinderoIzquierda,
      P_LinderoFondo,
      P_Uso,
      P_Clacificacion,
      P_Frontis,
      P_Berma,
      P_frontisAreaVerde,
      P_TipoAgrupacion,
      P_NumeroPredio,
      P_Zona,
      P_Sector,
      P_Manzana,
      P_LoteCategoria,
      P_HabilitacionHurbana,
    ],
    function (err, result) {
      try {
        return res.status(200).json({
          message: "Contribuyente registrado correctamente",
        });
      } catch (error) {
        return res.status(500).json("Error al crear al Contribuyente");
      }
    }
  );
};

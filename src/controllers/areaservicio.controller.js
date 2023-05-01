import { getConnection, querys, sql } from "../database";


export const getAreaBySerie = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("serie", req.params.serie)
      .input("idCliente1", req.params.idCliente1)
      .input("idCliente2", req.params.idCliente2)
      .query(querys.getAreaBySerie);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getAreaByPlaca = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("placa", req.params.placa)
        .input("idCliente1", req.params.idCliente1)
      .input("idCliente2", req.params.idCliente2)
        .query(querys.getAreaByPlaca);
      return res.json(result.recordset[0]);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const getAreaSinTecnico = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool.request()
        .query(querys.getAreaSinTecnico);
      return res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  
  export const updateActivoByTecnico = async (req, res) => {
    const { AS_id, AS_USU_id,AS_USU_ing } = req.body;
  
    // validating
    if (AS_id == null || AS_USU_id == null ||  AS_USU_ing==null) {
      return res.status(400).json({ msg: "Favor ingresar Datos Requeridos" });
    }
  
  
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("id", req.params.id)
        .input("AS_USU_id", sql.VarChar, AS_USU_id)
        .input("AS_USU_ing", sql.VarChar, AS_USU_ing)
        .query(querys.updateActivoByTecnico);
  
     if(result.rowsAffected==1){
      return res.status(200).json({ status: "ok", msg: "Registro exitoso" ,token:0});
    }else{
      return res.status(400).json({ status: "400", msg: "No se pudo registrar, consulte al administrador" ,token:0});
    }
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

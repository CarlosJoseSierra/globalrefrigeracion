import { getConnection, querys, sql } from "../database";


export const getInventoryById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getInventoryById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const addNewInventory = async (req, res) => {
  const { CINV_descripcion, CINV_CLI_id,CINV_fechaInicio,CINV_fechaCierre,CINV_Totalingreso,CINV_Totalentrega,CINV_saldoAnterior,CINV_USU_ing} = req.body;
  
  // validating
  if (CINV_descripcion == null || CINV_USU_ing == null) {
    return res.status(400).json({ msg: "Favor ingresar Datos Requeridos" });
  }

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("CINV_descripcion", sql.VarChar, CINV_descripcion)
      .input("CINV_CLI_id", sql.Decimal, CINV_CLI_id)
      .input("CINV_fechaInicio", sql.Date, CINV_fechaInicio)
      .input("CINV_fechaCierre", sql.Date, CINV_fechaCierre)
      .input("CINV_Totalingreso", sql.Decimal, CINV_Totalingreso)
      .input("CINV_Totalentrega", sql.Decimal, CINV_Totalentrega)
      .input("CINV_saldoAnterior", sql.Decimal, CINV_saldoAnterior)
      .input("CINV_USU_ing", sql.Decimal, CINV_USU_ing)
      .query(querys.addNewInventario);
      if(result.rowsAffected[0]==1){
        return res.status(200).json({ status: "ok", msg: "Registro exitoso" ,token:0,INV_id:result.recordset[0].INV_id});
      }else{
        return res.status(400).json({ status: "400", msg: "No se pudo registrar, consulte al administrador" ,token:0});
      }
    
  } catch (error) {
    res.status(500);
    console.log(error.message);
    res.send(error.message);
  }
};

export const getInventoryCorte = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(querys.getInventoryCorte);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };






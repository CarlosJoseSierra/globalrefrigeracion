import { getConnection, querys, sql } from "../database";

export const getInventory = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllInventory);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


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

export const createNewInventory = async (req, res) => {
  const { CINV_descripcion, CINV_CLI_id,CINV_fechaIni,CINV_fechaCierre,CINV_ingreso,CINV_entrega,CINV_saldo,CINV_USU_ing} = req.body;
  
  // validating
  if (CINV_descripcion == null || CINV_USU_ing == null) {
    return res.status(400).json({ msg: "Favor ingresar Datos Requeridos" });
  }

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("CINV_descripcion", sql.VarChar, CINV_descripcion)
      .input("CINV_CLI_id", sql.VarChar, CINV_CLI_id)
      .input("CINV_fechaIni", sql.VarChar, CINV_fechaIni)
      .input("CINV_fechaCierre", sql.VarChar, CINV_fechaCierre)
      .input("CINV_ingreso", sql.VarChar, CINV_ingreso)
      .input("CINV_entrega", sql.VarChar, CINV_entrega)
      .input("CINV_saldo", sql.VarChar, CINV_saldo)
      .input("CINV_USU_ing", sql.VarChar, CINV_USU_ing)
      .query(querys.addNewInventario);
      if(result.rowsAffected[0]==1){
        return res.status(200).json({ status: "ok", msg: "Registro exitoso" ,token:0,INV_id:result.recordset[0].INV_id,INV_BOD_id:INV_BOD_id});
      }else{
        return res.status(400).json({ status: "400", msg: "No se pudo registrar, consulte al administrador" ,token:0});
      }
    
  } catch (error) {
    res.status(500);
    console.log(error.message);
    res.send(error.message);
  }
};






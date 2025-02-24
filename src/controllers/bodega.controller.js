import { getConnection, querys, sql } from "../database";


export const getBodegas = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllBodegas);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


export const getBodegasById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getBodegaById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewBodega = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("BOD_nombre", sql.VarChar, req.body.Bodega)
      .input("BOD_USU_ing", sql.Decimal, req.body.idUser)
      .query(querys.addNewBodega);
      if(result.rowsAffected[0]==1){
        return res.status(200).json({ status: "ok", msg: "Registro exitoso" ,token:0});
      }else{
        return res.status(400).json({ status: "400", msg: "No se pudo registrar, consulte al administrador" ,token:0});
      }
    
  } catch (error) {
    res.status(500);
    console.log(error.message);
    res.send(error.message);
  }
};

export const updateBodegaById = async (req, res) => {
  try {
    const pool = await getConnection();
    
    const result = await pool
      .request()
      .input("id", req.params.id)
      .input("BOD_nombre", sql.VarChar, req.body.Bodega)
      .input("BOD_USU_edit", sql.Decimal, req.body.idUser)
      .query(querys.updateBodegaById);

   if(result.rowsAffected==1){
    return res.status(200).json({ status: "ok", msg: "Actualizacion exitosa" ,token:0});
  }else{
    return res.status(400).json({ status: "400", msg: "No se pudo actualizar, consulte al administrador" ,token:0});
  }
  } catch (error) {
      res.status(500);
      res.send(error.message);
  }
};

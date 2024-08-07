import { getConnection, querys, sql } from "../database";

export const getUbicacion = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllUbicacion);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewUbicacion = async (req, res) => {
  const { UBIC_ciudad, UBIC_provincia,UBIC_USU_ing} = req.body;
  
  // validating
  if (UBIC_ciudad == null || UBIC_provincia == null) {
    return res.status(400).json({ msg: "Favor ingresar Datos Requeridos" });
  }

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("UBIC_ciudad", sql.VarChar, UBIC_ciudad)
      .input("UBIC_provincia", sql.VarChar, UBIC_provincia)
      .query(querys.addNewUbicacion);
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

export const updateUbicacionById = async (req, res) => {
  const { UBIC_ciudad, UBIC_provincia} = req.body;
  
  // validating
  if (UBIC_ciudad == null || UBIC_provincia == null) {
    return res.status(400).json({ msg: "Favor ingresar Datos Requeridos" });
  }
  try {
    //console.log('no se conecto');
    const pool = await getConnection();
    
    const result = await pool
      .request()
      .input("id", req.params.id)
      .input("UBIC_ciudad", sql.VarChar, UBIC_ciudad)
      .input("UBIC_provincia", sql.VarChar, UBIC_provincia)
      .query(querys.updateUbicacionById);

   if(result.rowsAffected==1){
    //return res.status(200).json({ status: "ok", msg: "Actualizacion exitosa" ,token:0});
    return res.status(200).json({ status: "ok", msg: "Registro exitoso" ,token:0});
  }else{
    return res.status(400).json({ status: "400", msg: "No se pudo actualizar, consulte al administrador" ,token:0});
  }
  } catch (error) {
      res.status(500);
      res.send(error.message);
  }
};

export const getUbicacionById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getUbicacionById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

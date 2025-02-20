import { getConnection, querys, sql } from "../database";

export const getEquipos = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllEquipos);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


export const getEquipoById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getEquipoById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getMarcas = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllEquipos);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


export const getMarcasById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getMarcaById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewModelo = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("EQUIP_modelo", sql.VarChar, EQUIP_modelo)
      .input("EQUIP_marca", sql.VarChar, EQUIP_marca)
      .input("EQUIP_descripcion", sql.VarChar, EQUIP_descripcion)
      .query(querys.addNewModelo);
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

export const updateModeloById = async (req, res) => {
  try {
    //console.log('no se conecto');
    const pool = await getConnection();
    
    const result = await pool
      .request()
      .input("id", req.params.id)
      .input("EQUIP_modelo", sql.VarChar, EQUIP_modelo)
      .input("EQUIP_marca", sql.VarChar, EQUIP_marca)
      .input("EQUIP_descripcion", sql.VarChar, EQUIP_descripcion)
      .query(querys.updateModeloById);

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

export const createNewMarca = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("MARCA_descripcion", sql.VarChar, EQUIP_modelo)
      .input("MARCA_USU_ing", sql.Decimal, EQUIP_marca)
      .query(querys.addNewMarca);
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

export const updateMarcaById = async (req, res) => {
  try {
    //console.log('no se conecto');
    const pool = await getConnection();
    
    const result = await pool
      .request()
      .input("id", req.params.id)
      .input("MARCA_descripcion", sql.VarChar, EQUIP_modelo)
      .input("MARCA_USU_ing", sql.Decimal, EQUIP_marca)
      .query(querys.updateMarcaById);

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

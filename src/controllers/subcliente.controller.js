import { getConnection, querys, sql } from "../database";

export const getSubClientes = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllSubClientes);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getSubClientesById = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
    .request()
    .input("id", req.params.id)
    .query(querys.getSubClienteById);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
  };

  export const createNewSubCliente = async (req, res) => {
    const { SC_nombre, SC_codUniversal, SC_direccion,SC_establecimiento,SC_telefono,SC_USU_ing,SC_identificacion, SC_referencia,SC_tipoNegocio} = req.body;
    
    // validating
    if (SC_nombre == null || SC_direccion == null ||  SC_establecimiento==null) {
      return res.status(400).json({ msg: "Favor ingresar Datos Requeridos" });
    }

    if(SC_referencia == null){
      SC_referencia = "";
    }
    if(SC_tipoNegocio==null){
      SC_tipoNegocio = "";
    }
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("SC_nombre", sql.VarChar, SC_nombre)
        .input("SC_codUniversal", sql.VarChar, SC_codUniversal)
        .input("SC_direccion", sql.VarChar, SC_direccion)
        .input("SC_establecimiento", sql.VarChar, SC_establecimiento)
        .input("SC_telefono", sql.VarChar, SC_telefono)
        .input("SC_USU_ing", sql.Decimal, SC_USU_ing)
        .input("SC_identificacion", sql.VarChar, SC_identificacion)
        .input("SC_referencia", sql.VarChar, SC_referencia)
        .input("SC_tipoNegocio", sql.VarChar, SC_tipoNegocio)
        .query(querys.addNewSubCliente);
        if(result.rowsAffected==1){
          return res.status(200).json({ status: "ok", msg: "Registro exitoso" ,token:result.recordset});
        }else{
          return res.status(400).json({ status: "400", msg: "No se pudo registrar, consulte al administrador" ,token:0});
        }
      
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };
  
  export const updateSubClienteById = async (req, res) => {
    const { SC_nombre, SC_codUniversal, SC_direccion,SC_establecimiento,SC_telefono,SC_USU_ing,SC_identificacion, SC_referencia,SC_tipoNegocio} = req.body;
   
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("id", req.params.id)
        .input("SC_codUniversal", sql.VarChar, SC_codUniversal)
        .input("SC_direccion", sql.VarChar, SC_direccion)
        .input("SC_establecimiento", sql.VarChar, SC_establecimiento)
        .input("SC_telefono", sql.VarChar, SC_telefono)
        .input("SC_USU_ing", sql.Decimal, SC_USU_ing)
        .input("SC_identificacion", sql.VarChar, SC_identificacion)
        .input("SC_referencia", sql.VarChar, SC_referencia)
        .input("SC_tipoNegocio", sql.VarChar, SC_tipoNegocio)
        .query(querys.updateSubClienteById);
  
     if(result.rowsAffected==1){
      return res.status(200).json({ status: "ok", msg: "Actualización exitosa" ,token:0});
    }else{
      return res.status(400).json({ status: "400", msg: "No se pudo actualizar, consulte al administrador" ,token:0});
    }
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };
  
  
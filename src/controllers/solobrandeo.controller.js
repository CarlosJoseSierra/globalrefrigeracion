import { getConnection, querys, sql } from "../database";

export const getBrandeos = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllVentasBrandeos);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


export const getVentaBrandeoById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getVentaBrandeoById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


export const getDetalleBrandeoByIdVenta = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getDetalleBrandeoByIdVenta);
    return res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewBrandeo = async (req, res) => {
  const { CLI_nombre, CLI_direccion,CLI_identificacion,CLI_USU_ing} = req.body;
  
  // validating
  if (CLI_nombre == null || CLI_direccion == null ||  CLI_identificacion==null) {
    return res.status(400).json({ msg: "Favor ingresar Datos Requeridos" });
  }

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("CLI_nombre", sql.VarChar, CLI_nombre)
      .input("CLI_direccion", sql.VarChar, CLI_direccion)
      .input("CLI_identificacion", sql.VarChar, CLI_identificacion)
      .input("CLI_USU_ing", sql.Decimal, CLI_USU_ing)
      .query(querys.addNewCliente);
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

export const updateBrandeoById = async (req, res) => {
  const { CLI_nombre, CLI_direccion,CLI_identificacion} = req.body;
  
  // validating
  if (CLI_nombre == null || CLI_direccion == null ||  CLI_identificacion==null) {
    return res.status(400).json({ msg: "Favor ingresar Datos Requeridos" });
  }
  try {
    //console.log('no se conecto');
    const pool = await getConnection();
    
    const result = await pool
      .request()
      .input("id", req.params.id)
      .input("CLI_nombre", sql.VarChar, CLI_nombre)
      .input("CLI_direccion", sql.VarChar, CLI_direccion)
      .input("CLI_identificacion", sql.VarChar, CLI_identificacion)
      .query(querys.updateClienteById);

   if(result.rowsAffected==1){
    return res.status(200).json({ status: "ok", msg: "Registro exitoso" ,token:0});
  }else{
    return res.status(400).json({ status: "400", msg: "No se pudo actualizar, consulte al administrador" ,token:0});
  }
  } catch (error) {
      res.status(500);
      res.send(error.message);
  }
};


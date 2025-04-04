import { getConnection, querys, sql } from "../database";

export const getProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllProducts);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getProductsVenta = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllProductsVenta);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewProduct = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("PROD_codigo", sql.VarChar, req.body.Codigo)
      .input("PROD_nombre", sql.VarChar, req.body.Descripcion)
      .input("PROD_pvp", sql.Decimal(18,2), req.body.Precio)
      .input("PROD_item", sql.VarChar, req.body.TipoItem)
      .input("PROD_costoUnitarioH", sql.Decimal, req.body.entrega)
      .query(querys.addNewProduct);
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

export const getProductById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getProductById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteProductById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      //.input("Id", Id)
      .query(querys.deleteProduct);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTotalProducts = async (req, res) => {
  const pool = await getConnection();

  const result = await pool.request().query(querys.getTotalProducts);
  console.log(result);
  res.json(result.recordset[0][""]);
};

export const updateProductById = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", req.params.id)
      .input("PROD_codigo", sql.VarChar, req.body.Codigo)
      .input("PROD_nombre", sql.VarChar, req.body.Descripcion)
      .input("PROD_pvp", sql.Decimal(18,2), req.body.Precio)
      .input("PROD_item", sql.VarChar, req.body.TipoItem)
      .input("PROD_costoUnitarioH", sql.Decimal, req.body.entrega)
      .query(querys.updateProductById);
      if(result.rowsAffected==1){
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

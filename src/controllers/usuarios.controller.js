import { getConnection, querys, sql } from "../database";
const jwt = require('jsonwebtoken');
const cloudinary = require("../libs/cloudinary");
const upload = require ('../libs/multer');

export const getUsuarios = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllUsuarios);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getUser = async(req, res) =>{
  const { USU_usuario, USU_clave } = req.body;
  
  //return res.status(200).json({ status: "200",msg: "Hola" + req.params.USU_usuario});
  console.log(req.body);

   if (USU_usuario == null || USU_clave == null) {
      return res.status(400).json({ status: "400",msg: "Favor ingresar Datos Requeridos" });
    }
    else
    {

      return res.status(200).json({ status: "200",msg: "Bienvenido" });
    }
}

export const getByUserPass = async (req, res) => {
    const { USU_usuario, USU_clave } = req.body;

    // validating
    if (USU_usuario == null || USU_clave == null) {
      return res.status(400).json({ status: "400",msg: "Favor ingresar Datos Requeridos" });
    }
  
    try {
      const pool = await getConnection();
      const result = await pool
        .request()
        .input("USU_usuario", sql.VarChar, USU_usuario)
        .query(querys.getUserPass);
      //Lo nuevo implementado por cs
      if(result.recordset[0]){
          if(result.recordset[0]['USU_clave'] == USU_clave){
            const userFormToken={
              id:result.recordset[0]['USU_id'],
              nameU: result.recordset[0]['USU_usuario'],
              }
              //const token = jwt.sign(userFormToken,process.env.SECRET_WORD)
              const token = '00ggg';
            return res.json({status: "ok", msg: result.recordset[0],token:token});
          }
          else{
            return res.status(400).json({ status: "400", msg: "El password es incorrecto" ,token:0});
          }
      }
      else{
        return res.status(400).json({ status: "400", msg: "El user es incorrecto",token:0 });
      }
    } catch (error) {
      res.status(500);
      res.send(error.message);
      return res.status(500).json({ status: "500", msg: res.send(error.message),token:0  });
    }
};

export const getUsuarioById = async (req, res) => {
    try {
        const pool = await getConnection();
    
        const result = await pool
          .request()
          .input("id", req.params.id)
          .query(querys.getUsuarioById);
        return res.json(result.recordset[0]);
      } catch (error) {
        res.status(500);
        res.send(error.message);
      }
  };

  export const getUsuarioByCargo = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(querys.getAllUsuariosByCargo);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };
  export const createNewUser = async (req, res) => {  
    try {
      let image = '';
      if(req.file!=undefined)
        {
          const img = await cloudinary.uploader.upload(req.file.path);
          image = img.secure_url;
        }
      const pool = await getConnection();
      const result = await pool
        .request()
        .input("USU_nombre", sql.VarChar, req.bodyUSU_nombre)
        .input("USU_usuario", sql.VarChar, req.bodyUSU_usuario)
        .input("USU_clave", sql.VarChar, req.bodyUSU_clave)
        .input("USU_cargo", sql.VarChar, req.bodyUSU_cargo)
        .input("USU_rol", sql.VarChar, req.bodyUSU_rol)
        .input("USU_ing", sql.Decimal, req.bodyUSU_ing)
        .input("USU_firma", sql.VarChar, image)
        .query(querys.addNewUser);
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

  export const updateUserById = async (req, res) => {
        
    try {
      let image = '';
     
        if(req.file!=undefined)
        {
          const img = await cloudinary.uploader.upload(req.file.path);
          image = img.secure_url;
        }
      
      const pool = await getConnection();
      
      const result = await pool
        .request()
        .input("id", req.params.id)
        .input("USU_nombre", sql.VarChar, req.body.USU_nombre)
        .input("USU_usuario", sql.VarChar, req.body.USU_usuario)
        .input("USU_clave", sql.VarChar, req.body.USU_clave)
        .input("USU_cargo", sql.VarChar, req.body.USU_cargo)
        .input("USU_rol", sql.VarChar, req.body.USU_rol)
        .input("USU_firma", sql.VarChar, image)
        .query(querys.updateUserById);
  
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


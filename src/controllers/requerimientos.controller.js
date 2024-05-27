import { getConnection, querys, sql } from "../database";
const jwt = require('jsonwebtoken');

export const getAllRequerimientos = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getRequerimientos);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getRequerimientosActivos = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(querys.getRequerimientosActivos);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const createRequerimientos = async (req, res) => {
    
    try {
     // console.log(req.body);
      //console.log("La direccion es: "+ req.body.Direccion);
      //console.log("La longitud es: "+ req.body.details.length);
      const pool = await getConnection();
      
      const codigo = await pool.request().query(querys.getLastIdRequerimiento);
      let idR = 0;
     if(codigo.recordset[0].REQ_id == 0){
      idR = 1; 
     }
     else{
       idR = codigo.recordset[0].REQ_id;
     }
     
      let secuencial = '';
      secuencial = "REQ"+idR;
     
      const pool2 = await getConnection();
        const result = await pool2
        .request()
        .input("REQ_codigo", sql.VarChar,secuencial)
        .input("REQ_personaReporta", sql.VarChar, req.body.PersonaR)
        .input("REQ_fecha", sql.DateTime, req.body.FechaReq)
        .input("REQ_TPS_id", sql.Decimal, req.body.TipoServicio)
        .input("REQ_serie", sql.VarChar, req.body.Serie)
        .input("REQ_placa", sql.VarChar, req.body.Placa)
        .input("REQ_EQUIP_id", sql.Decimal, req.body.Modelo)
        .input("REQ_CLI_id", sql.Decimal, req.body.Cliente)
        .input("REQ_contacto", sql.VarChar, req.body.Subcliente)
        .input("REQ_establecimiento", sql.VarChar, req.body.Establecimiento)
        .input("REQ_telefono", sql.VarChar, req.body.Telefono)
        .input("REQ_direccion", sql.VarChar, req.body.Direccion)
        .input("REQ_UBIC_id", sql.Decimal, req.body.Ciudad)
        .input("REQ_observacion", sql.VarChar, req.body.Observacion)
        .input("REQ_ubicacionMaps", sql.VarChar, req.body.Maps)
        .input("REQ_SS_id", sql.Decimal, req.body.Servicio)
        .input("REQ_USU_id", sql.Decimal, req.body.TecnicoChofer)
        .input("REQ_SubTotal", sql.Decimal(18,2), req.body.Subtotal)
        .input("REQ_IVA", sql.Decimal(18,2), req.body.IVA)
        .input("REQ_total", sql.Decimal(18,2), req.body.Total) 
        .input("REQ_USU_ing", sql.Decimal, req.body.idReq)
        .query(querys.addRequerimiento);
        if(result.rowsAffected[0]==1){
          let idReq = result.recordset[0].REQ_id;
          if(req.body.details.length>0){
            for(let i=0;i<req.body.details.length;i++){
              const pool3 = await getConnection();
              const result = await pool3
              .request()
              .input("REQDET_REQ_id", sql.Decimal,idReq)
              .input("REQDET_PROD_id", sql.Decimal, req.body.details[i].productName)
              .input("REQDET_cantidad", sql.Decimal(18,2), req.body.details[i].qty)
              .input("REQDET_pvp", sql.Decimal(18,2), req.body.details[i].salesPrice)
              .input("REQDET_total", sql.Decimal(18,2), req.body.details[i].total)
              .query(querys.addNewRequerimientoDetalle);
            }
          }
          return res.status(200).json({ status: "ok", msg: "Registro exitoso" ,token:0});
        }
       else{
          return res.status(400).json({ status: "400", msg: "No se pudo registrar, consulte al administrador" ,token:0});
        }
      }
     catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }
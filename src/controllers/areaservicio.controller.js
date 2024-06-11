import { getConnection, querys, sql } from "../database";


export const getAreaBySerie = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("serie", req.params.serie)
      .input("idCliente1", req.params.idCliente1)
      .input("idCliente2", req.params.idCliente2)
      .query(querys.getAreaBySerie);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getAreaByPlaca = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("placa", req.params.placa)
        .input("idCliente1", req.params.idCliente1)
      .input("idCliente2", req.params.idCliente2)
        .query(querys.getAreaByPlaca);
      return res.json(result.recordset[0]);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const getAreaSinTecnico = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool.request()
        .query(querys.getAreaSinTecnico);
      return res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  
  export const updateActivoByTecnico = async (req, res) => {
    const {AS_USU_id,AS_USU_ing } = req.body;
  
    // validating
    if (AS_USU_id == null ||  AS_USU_ing==null) {
      return res.status(400).json({ msg: "Favor ingresar Datos Requeridos" });
    }
  
  
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("id", req.params.id)
        .input("AS_USU_id", sql.VarChar, AS_USU_id)
        .input("AS_USU_ing", sql.VarChar, AS_USU_ing)
        .query(querys.updateActivoByTecnico);
  
     if(result.rowsAffected==1){
      return res.status(200).json({ status: "ok", msg: "Registro exitoso" ,token:0});
    }else{
      return res.status(400).json({ status: "400", msg: "No se pudo registrar, consulte al administrador" ,token:0});
    }
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const getAreaByTecnico = async (req, res) => {
    
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("id", req.params.id)
        .query(querys.getAreaByTecnico);
  
        return res.json(result.recordset);
      } catch (error) {
        res.status(500);
        res.send(error.message);
      }
  };

  export const createNewAreaServicio = async (req, res) => {
    const {AS_SS_id, AS_USU_id, AS_fecha,AS_CLI_id,AS_AT_id,AS_OT_id,AS_OT_codigo, AS_TPS_id,
      AS_EC_id,AS_UBIC_id,AS_serie,AS_placa,AS_EQUIP_id,AS_LOGO_id,AS_observacionTecnica,
      AS_USU_ing,AS_Subtotal,AS_impuesto,AS_iva,AS_total,AS_descCliente,AS_descuento,
      AS_descuentoR,AS_descuentoS,AS_descuentoP,AS_EstadoFactura,
      AS_Reporte,AS_SC_id,AS_ES_id,AS_IE_id,AS_SEDE_id,AS_fechaReq,AS_semana,AS_numReq,
      AS_PR_id,AS_UBIC_id2,AS_TPSP_id,AS_VEND_id,AS_serie2,AS_placa2,AS_EQUIP_id2,
      AS_LOGO_id2,AS_observacion2,AS_EM_id,AS_CT_idOrigen,AS_serieCompresor} = req.body;
    try {
      const pool = await getConnection();
      
      const codigo = await pool.request().query(querys.getLastIdAreaServivio);
      let idCT = 0;
      if(codigo.recordset[0].REQ_id == 0){
        idCT = 1; 
      }
      else{
        idCT = codigo.recordset[0].REQ_id;
      }
     
      let secuencial = '';
      secuencial = "CT"+idCT;
      
        const pool2 = await getConnection();
        const result = await pool2
        .request()
        .input("AS_secuencial", sql.VarChar, secuencial)
        .input("AS_SS_id", sql.Decimal, AS_SS_id)
        .input("AS_USU_id", sql.Decimal, AS_USU_id)
        .input("AS_fecha", sql.DateTime, AS_fecha)
        .input("AS_CLI_id", sql.Decimal, AS_CLI_id)
        .input("AS_AT_id", sql.Decimal, AS_AT_id)
        .input("AS_OT_id", sql.Decimal, AS_OT_id)
        .input("AS_OT_codigo", sql.VarChar, AS_OT_codigo)
        .input("AS_TPS_id", sql.Decimal, AS_TPS_id)
        .input("AS_EC_id", sql.Decimal, AS_EC_id)
        .input("AS_UBIC_id", sql.Decimal, AS_UBIC_id)
        .input("AS_serie", sql.VarChar, AS_serie)
        .input("AS_placa", sql.VarChar, AS_placa)
        .input("AS_EQUIP_id", sql.Decimal, AS_EQUIP_id)
        .input("AS_LOGO_id", sql.Decimal, AS_LOGO_id)
        .input("AS_observacionTecnica", sql.VarChar, AS_observacionTecnica)
        .input("AS_USU_ing", sql.Decimal, AS_USU_ing)
        .input("AS_Subtotal", sql.Decimal, AS_Subtotal)
        .input("AS_impuesto", sql.Decimal, AS_impuesto)
        .input("AS_iva", sql.Decimal, AS_iva)
        .input("AS_total", sql.Decimal, AS_total)
        .input("AS_descCliente", sql.Decimal, AS_descCliente)
        .input("AS_descuento", sql.Decimal, AS_descuento)
        .input("AS_descuentoR", sql.Decimal, AS_descuentoR)
        .input("AS_descuentoS", sql.Decimal, AS_descuentoS)
        .input("AS_descuentoP", sql.Decimal, AS_descuentoP)
        .input("AS_EstadoFactura", sql.Decimal, AS_EstadoFactura)
        .input("AS_Reporte", sql.VarChar, AS_Reporte)
        .input("AS_SC_id", sql.Decimal, AS_SC_id)
        .input("AS_ES_id", sql.Decimal, AS_ES_id)
        .input("AS_IE_id", sql.Decimal, AS_IE_id)
        .input("AS_SEDE_id", sql.Decimal, AS_SEDE_id)
        .input("AS_fechaReq", sql.DateTime, AS_fechaReq)
        .input("AS_semana", sql.VarChar, AS_semana)
        .input("AS_numReq", sql.VarChar, AS_numReq)
        .input("AS_PR_id", sql.Decimal, AS_PR_id)
        .input("AS_UBIC_id2", sql.Decimal, AS_UBIC_id2)
        .input("AS_TPSP_id", sql.Decimal, AS_TPSP_id)
        .input("AS_VEND_id", sql.Decimal, AS_VEND_id)
        .input("AS_serie2", sql.VarChar, AS_serie2)
        .input("AS_placa2", sql.VarChar, AS_placa2)
        .input("AS_EQUIP_id2", sql.Decimal, AS_EQUIP_id2)
        .input("AS_LOGO_id2", sql.Decimal, AS_LOGO_id2)
        .input("AS_observacion2", sql.VarChar, AS_observacion2)
        .input("AS_EM_id", sql.Decimal, AS_EM_id)
        .input("AS_CT_idOrigen", sql.Decimal, AS_CT_idOrigen)
        .input("AS_serieCompresor", sql.VarChar, AS_serieCompresor)
        
        .query(querys.addNewAreaServicio);
        if(result.rowsAffected==1){
          return res.status(200).json({ status: "ok", msg: "Registro exitoso" ,token:0});
        }else{
          return res.status(400).json({ status: "400", msg: "No se pudo registrar, consulte al administrador" ,token:0});
      }
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };


  export const getAreaServicioMovimiento = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .query(querys.getAreaByMovimiento);
      return res.json(result.recordset[0]);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const getAreaServicioMantenimiento = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .query(querys.getAreaByMantenimiento);
      return res.json(result.recordset[0]);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const getReporteGeneral = async(req, res) =>{
    try {
      const pool = await getConnection();
      const result = await pool
      
        .request()
        .query(querys.getReporteGeneralSabana);
        return res.json(result.recordset);
    } catch (error) {
      res.status(500);
    }
  };

  export const createNewAreaServicioByRequerimiento = async (req, res) => {
    try {
      const pool = await getConnection();
      const codigo = await pool.request().query(querys.getLastIdAreaServivio);
      let idC = 0;
      if(codigo.recordset[0].AS_id == 0){
        idC = 1; 
       }
       else{
         idC = codigo.recordset[0].AS_id;
       }

       let secuencial = '';
      secuencial = "CT"+idC
      
      let AS_ES_id = 0
      if(AS_SS_id==2){
        AS_ES_id = 1;
        AS_EM_id = 10;
      }
      else{
        AS_ES_id = 4
        AS_EM_id = 10;
      }

        const pool2 = await getConnection();
        const result = await pool2
        .request()
        .input("AS_secuencial", sql.VarChar, secuencial)
        .input("AS_SS_id", sql.Decimal, req.body.REQ_SS_id)
        .input("AS_USU_id", sql.Decimal, req.body.REQ_USU_id)
        .input("AS_CLI_id", sql.Decimal, req.body.REQ_CLI_id)
        .input("AS_TPS_id", sql.Decimal, req.body.REQ_TPS_id)
        .input("AS_UBIC_id", sql.Decimal, req.body.REQ_UBIC_id)
        .input("AS_serie", sql.VarChar, req.body.REQ_serie)
        .input("AS_placa", sql.VarChar, req.body.REQ_placa)
        .input("AS_EQUIP_id", sql.Decimal, req.body.REQ_EQUIP_id)
        .input("AS_observacionTecnica", sql.VarChar, req.body.REQ_observacionTecnica)
        .input("AS_USU_ing", sql.Decimal, req.body.id)
        .input("AS_Subtotal", sql.Decimal(18,2), req.body.REQ_SubTotal)
        .input("AS_iva", sql.Decimal(18,2), req.body.REQ_IVA)
        .input("AS_total", sql.Decimal(18,2), req.body.REQ_total)
        .input("AS_fechaIngreso", sql.VarChar, req.body.REQ_fechaVisita)
        .input("AS_Reporte", sql.VarChar, req.body.REQ_codigo)
        .input("AS_ES_id", sql.Decimal, AS_ES_id)
        .input("AS_fechaReq", sql.DateTime, req.body.REQ_fecha)
        .input("AS_EM_id", sql.Decimal, AS_EM_id)
        .input("AS_USU_edit", sql.Decimal, req.body.id)
        .input("AS_REQ_id", sql.DateTime, req.body.REQ_id)
        .query(querys.addNewAreaServicioByReq);
        if(result.rowsAffected[0]==1){
          let idAS = result.recordset[0].AS_id;
          if(req.body.REQ_detalles.length>0){
            for(let i=0;i<req.body.REQ_detalles.length;i++){
              const pool3 = await getConnection();
              const result = await pool3
              .request()
              .input("AS_DET_AS_id", sql.Decimal,idAS)
              .input("AS_DET_PROD_id", sql.Decimal, req.body.REQ_detalles[i].REQDET_PROD_id)
              .input("AS_DET_PROD_codigo", sql.VarChar, req.body.REQ_detalles[i].PROD_item)
              .input("AS_DET_PROD_descripcion", sql.VarChar, req.body.REQ_detalles[i].PROD_nombre)
              .input("AS_DET_cantidad", sql.Decimal(18,2), req.body.REQ_detalles[i].REQDET_cantidad)
              .input("AS_DET_costoU", sql.Decimal(18,2), req.body.REQ_detalles[i].REQDET_pvp)
              .input("AS_DET_pvp", sql.Decimal(18,2), req.body.REQ_detalles[i].REQDET_pvp)
              .input("AS_DET_pminimo", sql.Decimal(18,2), req.body.REQ_detalles[i].REQDET_pvp)
              .input("AS_DET_USU_ing", sql.Decimal, req.body.id)
              .input("AS_DET_pvp2", sql.Decimal(18,2), req.body.REQ_detalles[i].REQDET_pvp)
              .input("AS_DET_total", sql.Decimal(18,2), req.body.REQ_detalles[i].REQDET_total)
              .input("AS_DET_cantidadIngreso", sql.Decimal(18,2), req.body.REQ_detalles[i].REQDET_cantidad)
              .query(querys.addNewAreaServicioDetalle);
            }
          }
          return res.status(200).json({ status: "ok", msg: "Registro exitoso" ,token:0, codigo: secuencial});
        

          //return res.status(200).json({ status: "ok", msg: "Registro exitoso" ,token:0,codigo:secuencial});
        }else{
          return res.status(400).json({ status: "400", msg: "No se pudo registrar, consulte al administrador" ,token:0, codigo:''});
        }
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };




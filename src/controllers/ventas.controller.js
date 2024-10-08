import { getConnection, querys, sql } from "../database";

export const getAllVentas = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllVentas);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getVentasActivos = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(querys.getVentasActivos);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const createventas = async (req, res) => {
    try {
      const pool = await getConnection();
      const codigo = await pool.request().query(querys.getLastIdVenta);
      let idR = 0;
     if(codigo.recordset[0].VENT_id == 0){
      idR = 1; 
     }
     else{
       idR = codigo.recordset[0].VENT_id;
     }

      let secuencial = '';
      secuencial = "VENTA"+idR;

      let brand = 0;
      if(req.body.Brandeo){
        brand = 1;}
     
      const pool2 = await getConnection();
        const result = await pool2
        .request()
        .input("VENT_codigo", sql.VarChar,secuencial)
        .input("VENT_fecha", sql.DateTime, req.body.FechaVenta)
        .input("VENT_CLI_id", sql.Decimal, req.body.Cliente)
        .input("VENT_personaReporta", sql.VarChar, req.body.PersonaR)
        .input("VENT_observacion", sql.VarChar, req.body.Observacion)
        .input("VENT_temperatura", sql.VarChar, req.body.Temperatura)
        .input("VENT_EQUIP_id", sql.Decimal, req.body.Modelo)
        .input("VENT_brandeoEquipo", sql.Decimal, brand)
        .input("VENT_UBIC_id", sql.Decimal, req.body.Ciudad)
        .input("VENT_contacto", sql.VarChar, req.body.Subcliente)
        .input("VENT_establecimiento", sql.VarChar, req.body.Establecimiento)
        .input("VENT_telefono", sql.VarChar, req.body.Telefono)
        .input("VENT_direccion", sql.VarChar, req.body.Direccion)
        .input("VENT_USU_ing", sql.Decimal, req.body.id)
        .query(querys.addVenta);
        if(result.rowsAffected[0]==1){
          let idVenta = result.recordset[0].VENT_id;
          if(req.body.details.length>0){
            for(let i=0;i<req.body.details.length;i++){
              const pool3 = await getConnection();
              const result = await pool3
              .request()
              .input("VENTDET_VENT_id", sql.Decimal,idVenta)
              .input("VENTDET_PROD_id", sql.Decimal, req.body.details[i].productName)
              .input("VENTDET_cantidad", sql.Decimal(18,2), req.body.details[i].qty)
              .query(querys.addNewVentaDetalle);
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
  };

  export const editVentas = async (req, res) => {
    try {
        let brand = 0;
      if(req.body.Brandeo){
        brand = 1;
      }
      const pool = await getConnection();
        const result = await pool
        .request()
        .input("id", req.params.id)
        .input("VENT_fecha", sql.DateTime, req.body.FechaVenta)
        .input("VENT_CLI_id", sql.Decimal, req.body.Cliente)
        .input("VENT_personaReporta", sql.VarChar, req.body.PersonaR)
        .input("VENT_temperatura", sql.VarChar, req.body.Temperatura)
        .input("VENT_observacion", sql.VarChar, req.body.Observacion)
        .input("VENT_EQUIP_id", sql.Decimal, req.body.Modelo)
        .input("VENT_brandeoEquipo", sql.Decimal, brand)
        .input("VENT_UBIC_id", sql.Decimal, req.body.Ciudad)
        .input("VENT_contacto", sql.VarChar, req.body.Subcliente)
        .input("VENT_establecimiento", sql.VarChar, req.body.Establecimiento)
        .input("VENT_telefono", sql.VarChar, req.body.Telefono)
        .input("VENT_direccion", sql.VarChar, req.body.Direccion)
        .query(querys.editVentas);
        if(result.rowsAffected==1){
          const pool2 = await getConnection();
          const result2 = await pool2
          .request()
          .input("VENTDET_VENT_id", req.params.id)
          .query(querys.cambiarEstadoVentasDetalle);
          //ingresar los nuevos registros
          if(result2.rowsAffected>0){
            if(req.body.details.length>0){
              for(let i=0;i<req.body.details.length;i++){
                const pool3 = await getConnection();
                const result3 = await pool3
                .request()
                .input("VENTDET_PROD_id", sql.Decimal, req.body.details[i].productName)
                .input("VENTDET_cantidad", sql.Decimal(18,2), req.body.details[i].qty)
                .input("VENTDET_VENT_id", sql.Decimal,req.params.id)
                .query(querys.addNewVentaDetalle);
              }
            }
          }else{
            if(req.body.details.length>0){
              for(let i=0;i<req.body.details.length;i++){
                const pool3 = await getConnection();
                const result3 = await pool3
                .request()
                .input("VENTDET_PROD_id", sql.Decimal, req.body.details[i].productName)
                .input("VENTDET_cantidad", sql.Decimal(18,2), req.body.details[i].qty)
                .input("VENTDET_VENT_id", sql.Decimal,req.params.id)
                .query(querys.addNewVentaDetalle);
              }
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
  };

  export const editVentaPorSerie = async (req, res) => {
    try {
      const pool = await getConnection();
    
        const result = await pool
        .request()
        .input("id", req.params.id)
        .input("VENT_serieCheck", sql.Decimal, req.body.SerieChek)
        .input("VENT_serie", sql.VarChar, req.body.Serie)
        .query(querys.editVentaPorSerie);
        if(result.rowsAffected==1){
            return res.status(200).json({ status: "ok", msg: "Actualizacion exitosa" ,token:0});
          }else{
            return res.status(400).json({ status: "400", msg: "No se pudo actualizar, consulte al administrador" ,token:0});
          }
      }
     catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const editVentaPorNumEnsamble = async (req, res) => {
    try {
      const pool = await getConnection();
    
        const result = await pool
        .request()
        .input("id", req.params.id)
        .input("VENT_NumEnsambleCheck", sql.Decimal, req.body.NumEnsambleChek)
        .input("VENT_NumEnsamble", sql.VarChar, req.body.NumEnsamble)
        .query(querys.editVentaPorNumEnsamble);
        if(result.rowsAffected==1){
            return res.status(200).json({ status: "ok", msg: "Actualizacion exitosa" ,token:0});
          }else{
            return res.status(400).json({ status: "400", msg: "No se pudo actualizar, consulte al administrador" ,token:0});
          }
      }
     catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const editVentaPorTerminacionBrandeo = async (req, res) => {
    try {
      const pool = await getConnection();
    
        const result = await pool
        .request()
        .input("id", req.params.id)
        .input("VENT_brandeoTerminadoCheck", sql.Decimal, req.body.BrandeoTerminadoCheck)
        .query(querys.editVentaPorBrandeoTerminado);
        if(result.rowsAffected==1){
            return res.status(200).json({ status: "ok", msg: "Actualizacion exitosa" ,token:0});
          }else{
            return res.status(400).json({ status: "400", msg: "No se pudo actualizar, consulte al administrador" ,token:0});
          }
      }
     catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };
  
  export const editVentaPorPegadoBrandeo = async (req, res) => {
    try {
      const pool = await getConnection();
    
        const result = await pool
        .request()
        .input("id", req.params.id)
        .input("VENT_brandeoPegadoCheck", sql.Decimal, req.body.BrandeoPegadoCheck)
        .query(querys.editVentaPorBrandeoPegado);
        if(result.rowsAffected==1){
            return res.status(200).json({ status: "ok", msg: "Actualizacion exitosa" ,token:0});
          }else{
            return res.status(400).json({ status: "400", msg: "No se pudo actualizar, consulte al administrador" ,token:0});
          }
      }
     catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const getVentaById = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getVentaById);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };
  
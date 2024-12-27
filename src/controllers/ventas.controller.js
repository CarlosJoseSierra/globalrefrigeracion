import { getConnection, querys, sql } from "../database";
const cloudinary = require("../libs/cloudinary");

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

export const getAllBrandeosVenta = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllBrandeosVenta);
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

  export const getVentasActivosPorBrandeo = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(querys.getVentasActivosPorBrandeo);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const getBrandeosPorPegar = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(querys.getBrandeosPorPegar);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const getDetalleVentasEquipos = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getDetalleVentasEquiposById);
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
      let brandeo = 0;
     if(codigo.recordset[0].VENT_id == 0){
      idR = 1; 
     }
     else{
       idR = codigo.recordset[0].VENT_id;
     }
     if(req.body.detailsModelo.length>0){
      for(let i=0;i<req.body.detailsModelo.length;i++){
          if(req.body.detailsModelo[i].productName!=34){//es 34 prque es el ID del no brandeo
            brandeo = 1;
          }
      }
     }
      let secuencial = '';
      secuencial = "VENTA"+idR;

      let totalDetalle = 0;
        let ivaDetalle = 0;
        let totalFinalDetalle = 0;
        if(req.body.details.length>0){
          for(let i=0;i<req.body.details.length;i++){
            totalDetalle = totalDetalle + (req.body.details[i].qty * req.body.details[i].salesPrice);
          }
          ivaDetalle = totalDetalle * (15/100);
          totalFinalDetalle = totalDetalle + ivaDetalle;
        }
     
      const pool2 = await getConnection();
        const result = await pool2
        .request()
        .input("VENT_codigo", sql.VarChar,secuencial)
        .input("VENT_fecha", sql.DateTime, req.body.FechaVenta)
        .input("VENT_CLI_id", sql.Decimal, req.body.Cliente)
        .input("VENT_observacion", sql.VarChar, req.body.Observacion)
        .input("VENT_UBIC_id", sql.Decimal, req.body.Ciudad)
        .input("VENT_contacto", sql.VarChar, req.body.Subcliente)
        .input("VENT_establecimiento", sql.VarChar, req.body.Establecimiento)
        .input("VENT_direccion", sql.VarChar, req.body.Direccion)
        .input("VENT_telefono", sql.VarChar, req.body.Telefono)
        .input("VENT_brandeoEquipo", sql.Decimal, brandeo)
        .input("VENT_USU_ing", sql.Decimal, req.body.id)
        .input("VENT_SubTotal", sql.Decimal(18,2), totalDetalle)
        .input("VENT_IVA", sql.Decimal(18,2),ivaDetalle)
        .input("VENT_total", sql.Decimal(18,2), totalFinalDetalle) 
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
              .input("VENTDET_pvp", sql.Decimal(18,2), req.body.details[i].salesPrice)
              .input("VENTDET_total", sql.Decimal(18,2), req.body.details[i].qty * req.body.details[i].salesPrice)
              .query(querys.addNewVentaDetalle);
            }
          }
          if(req.body.detailsModelo.length>0){
            for(let i=0;i<req.body.detailsModelo.length;i++){
              const pool3 = await getConnection();
              const result = await pool3
              .request()
              .input("EQVENT_VENT_id", sql.Decimal,idVenta)
              .input("EQVENT_EQC_id", sql.Decimal, req.body.detailsModelo[i].id)
              .input("EQVENT_EQC_serie", sql.VarChar, req.body.detailsModelo[i].serie)
              .input("EQVENT_temperatura", sql.VarChar, req.body.detailsModelo[i].temperatura)
              .input("EQVENT_BRAND_id", sql.Decimal, req.body.detailsModelo[i].productName)
              .query(querys.addNewVentaEquipo);
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
      let totalDetalle = 0;
      let ivaDetalle = 0;
      let totalFinalDetalle = 0;
      let brandeo = 0;
      if(req.body.details.length>0){
        for(let i=0;i<req.body.details.length;i++){
          totalDetalle = totalDetalle + (req.body.details[i].qty * req.body.details[i].salesPrice);
        }
        ivaDetalle = totalDetalle * (15/100);
        totalFinalDetalle = totalDetalle + ivaDetalle;
      }

      if(req.body.detailsModelo.length>0){
        for(let i=0;i<req.body.detailsModelo.length;i++){
            if(req.body.detailsModelo[i].productName!=34){//es 34 prque es el ID del no brandeo
              brandeo = 1;
            }
        }
       }
      const pool = await getConnection();
        const result = await pool
        .request()
        .input("id", req.params.id)
        .input("VENT_fecha", sql.DateTime, req.body.FechaVenta)
        .input("VENT_CLI_id", sql.Decimal, req.body.Cliente)
        .input("VENT_observacion", sql.VarChar, req.body.Observacion)
        .input("VENT_UBIC_id", sql.Decimal, req.body.Ciudad)
        .input("VENT_contacto", sql.VarChar, req.body.Subcliente)
        .input("VENT_establecimiento", sql.VarChar, req.body.Establecimiento)
        .input("VENT_direccion", sql.VarChar, req.body.Direccion)
        .input("VENT_telefono", sql.VarChar, req.body.Telefono)
        .input("VENT_brandeoEquipo", sql.Decimal, brandeo)
        .input("VENT_USU_ing", sql.Decimal, req.body.id)
        .input("VENT_SubTotal", sql.Decimal(18,2), totalDetalle)
        .input("VENT_IVA", sql.Decimal(18,2), ivaDetalle)
        .input("VENT_total", sql.Decimal(18,2), totalFinalDetalle) 
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
                .input("VENTDET_VENT_id", sql.Decimal,req.params.id)
                .input("VENTDET_PROD_id", sql.Decimal, req.body.details[i].productName)
                .input("VENTDET_cantidad", sql.Decimal(18,2), req.body.details[i].qty)
                .input("VENTDET_pvp", sql.Decimal(18,2), req.body.details[i].salesPrice)
                .input("VENTDET_total", sql.Decimal(18,2), req.body.details[i].qty * req.body.details[i].salesPrice)
                .query(querys.addNewVentaDetalle);
              }
            }
            if(req.body.detailsModelo.length>0){
              for(let i=0;i<req.body.detailsModelo.length;i++){
                const pool3 = await getConnection();
                const result = await pool3
                .request()
                .input("EQVENT_VENT_id", sql.Decimal,req.params.id)
                .input("EQVENT_EQC_id", sql.Decimal, req.body.detailsModelo[i].id)
                .input("EQVENT_EQC_serie", sql.VarChar, req.body.detailsModelo[i].serie)
                .input("EQVENT_temperatura", sql.VarChar, req.body.detailsModelo[i].temperatura)
                .input("EQVENT_BRAND_id", sql.Decimal, req.body.detailsModelo[i].productName)
                .query(querys.addNewVentaEquipo);
              }
            } 
          }else{
            if(req.body.details.length>0){
              for(let i=0;i<req.body.details.length;i++){
                const pool3 = await getConnection();
                const result3 = await pool3
                .request()
                .input("VENTDET_VENT_id", sql.Decimal,req.params.id)
                .input("VENTDET_PROD_id", sql.Decimal, req.body.details[i].productName)
                .input("VENTDET_cantidad", sql.Decimal(18,2), req.body.details[i].qty)
                .input("VENTDET_pvp", sql.Decimal(18,2), req.body.details[i].salesPrice)
                .input("VENTDET_total", sql.Decimal(18,2), req.body.details[i].qty * req.body.details[i].salesPrice)
                .query(querys.addNewVentaDetalle);
              }
            }
            if(req.body.detailsModelo.length>0){
              for(let i=0;i<req.body.detailsModelo.length;i++){
                const pool3 = await getConnection();
                const result = await pool3
                .request()
                .input("EQVENT_VENT_id", sql.Decimal,req.params.id)
                .input("EQVENT_EQC_id", sql.Decimal, req.body.detailsModelo[i].id)
                .input("EQVENT_EQC_serie", sql.VarChar, req.body.detailsModelo[i].serie)
                .input("EQVENT_temperatura", sql.VarChar, req.body.detailsModelo[i].temperatura)
                .input("EQVENT_BRAND_id", sql.Decimal, req.body.detailsModelo[i].productName)
                .query(querys.addNewVentaEquipo);
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

  export const editVentaPorDiseno = async (req, res) => {
    try {
      const pool = await getConnection();
    
        const result = await pool
        .request()
        .input("id", req.params.id)
        .input("VENT_brandeoEquipo", req.body.brandeo)
        .query(querys.editVentaPorDiseno);
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
        .input("VENT_factura", sql.VarChar, req.body.Factura)
        .query(querys.editVentaPorNumFactura);
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

  export const editVentaPorCierreCaso = async (req, res) => {
    try {
      const pool = await getConnection();
        const result = await pool
        .request()
        .input("id", req.params.id)
        .query(querys.editVentaCorte);
        if(result.rowsAffected>0){
         if(req.body.VENT_list_brandeos.length>0){
            for(let i=0;i<req.body.VENT_list_brandeos.length;i++){
              const pool3 = await getConnection();
              const result2 = await pool3
              .request()
              .input("EQC_id", sql.Decimal, req.body.VENT_list_brandeos[i].EQVENT_EQC_id)
              .input("EQC_CLI_id", sql.Decimal, req.body.VENT_CLI_id)
              .query(querys.updateEquipoCompleto);
            }
          }
          return res.status(200).json({ status: "ok", msg: "Registro exitoso" ,token:0});
          //return res.status(200).json({ status: "ok", msg: req.body.VENT_list_brandeos ,token:0});
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
  
  export const editVentaPorConfirmadoBrandeo = async (req, res) => {
    try {
      const pool = await getConnection();
    
        const result = await pool
        .request()
        .input("id", req.params.id)
        .input("VENT_brandeoEquipo", req.body.brandeo)
        .query(querys.editVentaPorConfirmadoBrandeo);
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

  export const editVentaPorImpresionBrandeo = async (req, res) => {
    try {
      const pool = await getConnection();
    
        const result = await pool
        .request()
        .input("id", req.params.id)
        .input("VENT_brandeoEquipo", req.body.brandeo)
        .query(querys.editVentaPorImpresionBrandeo);
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

  export const editVentaPorLaminadoBrandeo = async (req, res) => {
    try {
      const pool = await getConnection();
    
        const result = await pool
        .request()
        .input("id", req.params.id)
        .input("VENT_brandeoEquipo", req.body.brandeo)
        .query(querys.editVentaPorLaminadoBrandeo);
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

  export const editVentaPorCorteBrandeo = async (req, res) => {
    try {
      const pool = await getConnection();
    
        const result = await pool
        .request()
        .input("id", req.params.id)
        .input("VENT_brandeoEquipo", req.body.brandeo)
        .query(querys.editVentaPorCorteBrandeo);
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

  export const editVentaPorEntregadoBrandeo = async (req, res) => {
    try {
      const pool = await getConnection();
    
        const result = await pool
        .request()
        .input("id", req.params.id)
        .input("VENT_brandeoEquipo", req.body.brandeo)
        .query(querys.editVentaPorEntregadoBrandeo);
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

  export const editVentaPorCerrarBrandeo = async (req, res) => {
    try {
      const pool = await getConnection();
    
        const result = await pool
        .request()
        .input("id", req.params.id)
        .query(querys.editVentaPorCerrarBrandeo);
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

  export const getInventarioTotal = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(querys.getInventarioTotal);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const getInventarioByIdEquipo = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getInventarioByIdEquipo);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const getImagenEquipoByVenta = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getImagenEquipoByVenta);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const createImageEquipoPegado = async (req, res) => {
    try {
      let imageruta= '';      
      if(req.files.length>0)
      {
        for(let i=0;i<req.files.length;i++){
          const img = await cloudinary.uploader.upload(req.files[i].path);
          imageruta = img.secure_url;
          const pool = await getConnection();
          const result = await pool
          .request()
          .input("IMGEQUIP_VENT_id", req.params.id)
          .input("IMGEQUIP_ruta", sql.VarChar, imageruta)
          .query(querys.createImageEquipoPegado);
        }
          return res.status(200).json({ status: "ok", msg: "Registro exitoso" ,token:0});
      }
    }
    catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };
  
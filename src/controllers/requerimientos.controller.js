import { url } from "inspector";
import { getConnection, querys, sql } from "../database";
const jwt = require('jsonwebtoken');
const path = require('path');
const cloudinary = require("../libs/cloudinary");
const upload = require ('../libs/multer');


export const getAllRequerimientos = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllRequerimientos);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getRequerimientosMapa = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getRequerimientosMapa);
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

  export const getRequerimientosNotificados = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(querys.getRequerimientosNotificados);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const createRequerimientos2 = async (req, res) => {
    console.log(req.files);
    console.log(req.body);
   // console.log(req.body.image);
   // console.log(req.files[0]);//Sino esta subida la foto, te muestra unidefined como resultado
    return res.json({
      message:'Foto subida con exito'
    })
  }

  export const createRequerimientos = async (req, res) => {
    try {
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
        if(req.body.Modelo=='')
          req.body.Modelo = 137; 
     
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
        .input("REQ_SubTotal", sql.Decimal(18,2), totalDetalle)
        .input("REQ_IVA", sql.Decimal(18,2),ivaDetalle)
        .input("REQ_total", sql.Decimal(18,2), totalFinalDetalle) 
        .input("REQ_USU_ing", sql.Decimal, req.body.id)
        .input("REQ_REQ_Padre", sql.Decimal, req.body.idPadre)
        .input("REQ_estado", sql.Decimal, req.body.aprobado)
        .input("REQ_garantia", sql.Decimal, req.body.Garantia)
        .input("REQ_codCliente", sql.VarChar, req.body.CodCliente)
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
              .input("REQDET_total", sql.Decimal(18,2), req.body.details[i].qty * req.body.details[i].salesPrice)
              .query(querys.addNewRequerimientoDetalle);
            }
          }
          if(req.body.detailsMov.length>0){
            for(let i=0;i<req.body.detailsMov.length;i++){
              const pool3 = await getConnection();
              const result = await pool3
              .request()
              .input("REQMOV_REQ_id", sql.Decimal,idReq)
              .input("REQMOV_EQC_serie", sql.VarChar, req.body.detailsMov[i].serie)
              .input("REQMOV_EQC_marca", sql.VarChar, req.body.detailsMov[i].marca)
              .input("REQMOV_EQC_modelo", sql.VarChar, req.body.detailsMov[i].modelo)
              .input("REQMOV_BRAND_desc", sql.VarChar, '')
              .input("REQMOV_cantidad", sql.Decimal(18,2), 1)
              .input("REQMOV_PROD_desc", sql.VarChar, '')
              .input("REQMOV_tipo", sql.Decimal, 0)//ES 0, REGISTRADO DIRECTAMENTE DESDE REQUERIMIENTOS
              .input("REQMOV_estado", sql.Decimal, 1)
              .query(querys.addNewRequerimientoMovimiento);
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

  export const editRequerimientos = async (req, res) => {
    try {
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
      const pool = await getConnection();
        const result = await pool
        .request()
        .input("id", req.params.id)
        .input("REQ_fecha", sql.DateTime, req.body.FechaReq)
        .input("REQ_SS_id", sql.VarChar, req.body.Servicio)
        .input("REQ_personaReporta", sql.VarChar, req.body.PersonaR)
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
        .input("REQ_observacionTecnica", sql.VarChar, req.body.ObservacionTec)
        .input("REQ_ubicacionMaps", sql.VarChar, req.body.Maps)
        .input("REQ_USU_id", sql.Decimal, req.body.TecnicoChofer)
        .input("REQ_SubTotal", sql.Decimal(18,2), totalDetalle)
        .input("REQ_IVA", sql.Decimal(18,2), ivaDetalle)
        .input("REQ_total", sql.Decimal(18,2), totalFinalDetalle) 
        .input("REQ_USU_edit", sql.Decimal, req.body.id)
        .input("REQ_garantia", sql.Decimal, req.body.Garantia)
        .input("REQ_codCliente", sql.VarChar, req.body.CodCliente)
        .query(querys.editRequerimiento);
        if(result.rowsAffected==1){
          const pool2 = await getConnection();
          const result2 = await pool2
          .request()
          .input("REQDET_REQ_id", req.params.id)
          .query(querys.cambiarEstadoRequerimientoDetalle);
          //ingresar los nuevos registros
          if(result2.rowsAffected>0){
            if(req.body.details.length>0){
              for(let i=0;i<req.body.details.length;i++){
                const pool3 = await getConnection();
                const result3 = await pool3
                .request()
                .input("REQDET_PROD_id", sql.Decimal, req.body.details[i].productName)
                .input("REQDET_cantidad", sql.Decimal(18,2), req.body.details[i].qty)
                .input("REQDET_pvp", sql.Decimal(18,2), req.body.details[i].salesPrice)
                .input("REQDET_total", sql.Decimal(18,2), req.body.details[i].qty * req.body.details[i].salesPrice)
                .input("REQDET_REQ_id", sql.Decimal,req.params.id)
                .query(querys.addNewRequerimientoDetalle);
              }
            }
          }else{
            if(req.body.details.length>0){
              for(let i=0;i<req.body.details.length;i++){
                const pool3 = await getConnection();
                const result3 = await pool3
                .request()
                .input("REQDET_PROD_id", sql.Decimal, req.body.details[i].productName)
                .input("REQDET_cantidad", sql.Decimal(18,2), req.body.details[i].qty)
                .input("REQDET_pvp", sql.Decimal(18,2), req.body.details[i].salesPrice)
                .input("REQDET_total", sql.Decimal(18,2), req.body.details[i].qty * req.body.details[i].salesPrice)
                .input("REQDET_REQ_id", sql.Decimal,req.params.id)
                .query(querys.addNewRequerimientoDetalle);
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

  export const editRequerimientosVisitaTecnica = async (req, res) => {
    try {
      const pool = await getConnection();
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
        const result = await pool
        .request()
        .input("id", req.params.id)
        .input("REQ_TPS_id", sql.Decimal, req.body.TipoServicio)
        .input("REQ_serie", sql.VarChar, req.body.Serie)
        .input("REQ_placa", sql.VarChar, req.body.Placa)
        .input("REQ_EQUIP_id", sql.Decimal, req.body.Modelo)
        .input("REQ_contacto", sql.VarChar, req.body.Subcliente)
        .input("REQ_establecimiento", sql.VarChar, req.body.Establecimiento)
        .input("REQ_telefono", sql.VarChar, req.body.Telefono)
        .input("REQ_direccion", sql.VarChar, req.body.Direccion)
        .input("REQ_observacionTecnica", sql.VarChar, req.body.ObservacionTec)
        .input("REQ_SubTotal", sql.Decimal(18,2), totalDetalle)
        .input("REQ_IVA", sql.Decimal(18,2), ivaDetalle)
        .input("REQ_total", sql.Decimal(18,2), totalFinalDetalle) 
        .input("REQ_USU_edit", sql.Decimal, req.body.id)
        .input("REQ_garantia", sql.Decimal, req.body.Garantia)
        .input("REQ_codCliente", sql.VarChar, req.body.CodCliente)
        .query(querys.editRequerimientoVisitaTecnica);
        if(result.rowsAffected==1){
          const pool2 = await getConnection();
          const result2 = await pool2
          .request()
          .input("REQDET_REQ_id", req.params.id)
          .query(querys.cambiarEstadoRequerimientoDetalle);
          //ingresar los nuevos registros
          if(result2.rowsAffected>0){
            if(req.body.details.length>0){
              for(let i=0;i<req.body.details.length;i++){
                const pool3 = await getConnection();
                const result3 = await pool3
                .request()
                .input("REQDET_PROD_id", sql.Decimal, req.body.details[i].productName)
                .input("REQDET_cantidad", sql.Decimal(18,2), req.body.details[i].qty)
                .input("REQDET_pvp", sql.Decimal(18,2), req.body.details[i].salesPrice)
                .input("REQDET_total", sql.Decimal(18,2), req.body.details[i].qty * req.body.details[i].salesPrice)
                .input("REQDET_REQ_id", sql.Decimal,req.params.id)
                .query(querys.addNewRequerimientoDetalle);
              }
            }
          }else{
            if(req.body.details.length>0){
              for(let i=0;i<req.body.details.length;i++){
                const pool3 = await getConnection();
                const result3 = await pool3
                .request()
                .input("REQDET_PROD_id", sql.Decimal, req.body.details[i].productName)
                .input("REQDET_cantidad", sql.Decimal(18,2), req.body.details[i].qty)
                .input("REQDET_pvp", sql.Decimal(18,2), req.body.details[i].salesPrice)
                .input("REQDET_total", sql.Decimal(18,2), req.body.details[i].qty * req.body.details[i].salesPrice)
                .input("REQDET_REQ_id", sql.Decimal,req.params.id)
                .query(querys.addNewRequerimientoDetalle);
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

  export const editRequerimientosAprobacion = async (req, res) => {
    try {
      const pool = await getConnection();
        const result = await pool
        .request()
        .input("id", req.params.id)
        .input("REQ_USU_edit", sql.Decimal, req.body.id)
        .input("REQ_estado", sql.Decimal, req.body.estado)
        .query(querys.editRequerimientoAprobacion);
        if(result.rowsAffected==1){
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

  export const getRequerimientosActivosXtecnico = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("id", req.params.id)
        .query(querys.getRequerimientosActivosXtec);
      return res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const getReparacionesActivosXtecnico = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("id", req.params.id)
        .query(querys.getReparacionesActivosXtec);
      return res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const editRequerimientosReparacion = async (req, res) => {
    try {
      let image = '',image1= '',image2= '',image3= '',image4= '',firma=''; 
      let imageruta= '',imageruta1= '',imageruta2= '',imageruta3= '',imageruta4= '',imageruta5= ''; 
      const pool = await getConnection();
      let totalDetalle = 0;
      let ivaDetalle = 0;
      let totalFinalDetalle = 0;
      
      if(req.files.length>0)
      {
        if(req.files[0]!=undefined)
        {
          if(req.files[0].originalname.includes('Firma')){
              const img = await cloudinary.uploader.upload(req.files[0].path);
              firma = img.secure_url;
          }
          else{
            image = req.files[0].filename;
            const img = await cloudinary.uploader.upload(req.files[0].path);
            imageruta = img.secure_url;
          }
        }
        if(req.files[1]!=undefined)
        {
          if(req.files[1].originalname.includes('Firma')){
            const img = await cloudinary.uploader.upload(req.files[1].path);
            firma = img.secure_url;
          }else{
            image1 = req.files[1].filename;
            const img = await cloudinary.uploader.upload(req.files[1].path);
            imageruta1 = img.secure_url;
          }
        }
        if(req.files[2]!=undefined)
        {
          if(req.files[2].originalname.includes('Firma')){
            const img = await cloudinary.uploader.upload(req.files[2].path);
            firma = img.secure_url;
          }else{
            image2 = req.files[2].filename;
            const img = await cloudinary.uploader.upload(req.files[2].path);
            imageruta2 = img.secure_url;
          }
        }
        if(req.files[3]!=undefined)
        {
          if(req.files[3].originalname.includes('Firma')){
            const img = await cloudinary.uploader.upload(req.files[3].path);
            firma = img.secure_url;
          }else{
            image3 = req.files[3].filename;
            const img = await cloudinary.uploader.upload(req.files[3].path);
            imageruta3 = img.secure_url;
          }
        }
        if(req.files[4]!=undefined)
        {
          if(req.files[4].originalname.includes('Firma')){
            const img = await cloudinary.uploader.upload(req.files[4].path);
            firma = img.secure_url;
          }else{
            image4 = req.files[4].filename;
            const img = await cloudinary.uploader.upload(req.files[4].path);
            imageruta4 = img.secure_url;
          }
        }

        if(req.files[5]!=undefined)
        {
          if(req.files[5].originalname.includes('Firma')){
            const img = await cloudinary.uploader.upload(req.files[5].path);
            firma = img.secure_url;
          }else{
            const img = await cloudinary.uploader.upload(req.files[5].path);
            imageruta5 = img.secure_url;
          }
        }

        if(req.files[6]!=undefined){
          if(req.files[6].originalname.includes('Firma')){
            const img = await cloudinary.uploader.upload(req.files[6].path);
            firma = img.secure_url;
          }
          else{
            firma = '';
          }
        }
      }
      
      if(req.body.details.length>0){
        for(let i=0;i<req.body.details.length;i++){
          const json = JSON.parse(req.body.details[i])            
            totalDetalle = totalDetalle + (json.qty * json.salesPrice);
        }
        ivaDetalle = totalDetalle * (15/100);
        totalFinalDetalle = totalDetalle + ivaDetalle;
      }
        const result = await pool
        .request()
        .input("id", req.params.id)
        .input("REQ_TPS_id", sql.Decimal, req.body.TipoServicio)
        .input("REQ_serie", sql.VarChar, req.body.Serie)
        .input("REQ_placa", sql.VarChar, req.body.Placa)
        .input("REQ_EQUIP_id", sql.Decimal, req.body.Modelo)
        .input("REQ_contacto", sql.VarChar, req.body.Subcliente)
        .input("REQ_establecimiento", sql.VarChar, req.body.Establecimiento)
        .input("REQ_telefono", sql.VarChar, req.body.Telefono)
        .input("REQ_direccion", sql.VarChar, req.body.Direccion)
        .input("REQ_observacionTecnica", sql.VarChar, req.body.ObservacionTec)
        .input("REQ_SubTotal", sql.Decimal(18,2), totalDetalle)
        .input("REQ_IVA", sql.Decimal(18,2), ivaDetalle)
        .input("REQ_total", sql.Decimal(18,2), totalFinalDetalle) 
        .input("REQ_USU_edit", sql.Decimal, req.body.id)
        .input("REQ_imagen1", sql.VarChar, image)
        .input("REQ_rutaimagen1", sql.VarChar, imageruta)
        .input("REQ_imagen2", sql.VarChar, image1)
        .input("REQ_rutaimagen2", sql.VarChar, imageruta1)
        .input("REQ_imagen3", sql.VarChar, image2)
        .input("REQ_rutaimagen3", sql.VarChar, imageruta2)
        .input("REQ_imagen4", sql.VarChar, image3)
        .input("REQ_rutaimagen4", sql.VarChar, imageruta3)
        .input("REQ_imagen5", sql.VarChar, image4)
        .input("REQ_rutaimagen5", sql.VarChar, imageruta4)
        .input("REQ_rutaimagen6", sql.VarChar, imageruta5)
        .input("REQ_firmaCliente", sql.VarChar, firma)
        .input("REQ_garantia", sql.Decimal, req.body.Garantia)
        .input("REQ_codCliente", sql.VarChar, req.body.CodCliente)
        .query(querys.editRequerimientoReparacion);
        
        if(result.rowsAffected==1){
          const pool2 = await getConnection();
          const result2 = await pool2
          .request()
          .input("REQDET_REQ_id", req.params.id)
          .query(querys.cambiarEstadoRequerimientoDetalle);
          //ingresar los nuevos registros
          if(result2.rowsAffected>0){

            if(req.body.details.length>0){
              for(let i=0;i<req.body.details.length;i++){
                const json = JSON.parse(req.body.details[i])            
                  totalDetalle = totalDetalle + (json.qty * json.salesPrice);
              }
              ivaDetalle = totalDetalle * (15/100);
              totalFinalDetalle = totalDetalle + ivaDetalle;
            }


            if(req.body.details.length>0){
              for(let i=0;i<req.body.details.length;i++){
                const json = JSON.parse(req.body.details[i])      
                const pool3 = await getConnection();
                const result3 = await pool3
                .request()
                .input("REQDET_PROD_id", sql.Decimal, json.productName)
                .input("REQDET_cantidad", sql.Decimal(18,2), json.qty)
                .input("REQDET_pvp", sql.Decimal(18,2), json.salesPrice)
                .input("REQDET_total", sql.Decimal(18,2), json.qty * json.salesPrice)
                .input("REQDET_REQ_id", sql.Decimal,req.params.id)
                .query(querys.addNewRequerimientoDetalle);
              }
            }
          }else{
            if(req.body.details.length>0){
              for(let i=0;i<req.body.details.length;i++){
                const json = JSON.parse(req.body.details[i])      
                const pool3 = await getConnection();
                const result3 = await pool3
                .request()
                .input("REQDET_PROD_id", sql.Decimal, json.productName)
                .input("REQDET_cantidad", sql.Decimal(18,2), json.qty)
                .input("REQDET_pvp", sql.Decimal(18,2), json.salesPrice)
                .input("REQDET_total", sql.Decimal(18,2), json.qty * json.salesPrice)
                .input("REQDET_REQ_id", sql.Decimal,req.params.id)
                .query(querys.addNewRequerimientoDetalle);
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

  export const getRquerimientosPadre = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("id", req.params.id)
        .query(querys.getRequerimientosHijos);
      return res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const editRequerimientosCierraCaso = async (req, res) => {
    try {
      const pool = await getConnection();
        const result = await pool
        .request()
        .input("id", req.params.id)
        .input("REQ_USU_edit", sql.Decimal, req.body.id)
        .query(querys.editRequerimientoCorte);
        if(result.rowsAffected>0){
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

  export const editRequerimientosHabilitar = async (req, res) => {
    try {
      const pool = await getConnection();
        const result = await pool
        .request()
        .input("id", req.params.id)
        .query(querys.editRequerimientoHabilitar);
        if(result.rowsAffected==1){
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

  export const RequerimientosNotificados = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(querys.RequerimientosNotificados);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const editRequerimientosCierraNot = async (req, res) => {
    try {
      const pool = await getConnection();
        const result = await pool
        .request()
        .input("id", req.params.id)
        .query(querys.editRequerimientoNot);
        if(result.rowsAffected>0){
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

  export const editFacturaRequerimiento = async (req, res) => {
    try {
      const pool = await getConnection();
    
        const result = await pool
        .request()
        .input("id", req.params.id)
        .input("REQ_factura", sql.VarChar, req.body.Factura)
        .query(querys.editFacturaRequerimiento);
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

  export const getMovimientoRequerimiento = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("id", req.params.id)
        .query(querys.getMovimientoRequerimiento);
      return res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };
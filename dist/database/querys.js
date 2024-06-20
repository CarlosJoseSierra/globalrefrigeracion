"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.querys = void 0;
var querys = {
  getAllProducts: "SELECT TOP(500) * FROM PRODUCTO",
  getProductById: "SELECT * FROM PRODUCTO Where PROD_id = @Id",
  addNewProduct: "INSERT INTO PRODUCTO (PROD_codigo, PROD_nombre, PROD_medida) VALUES (@name,@description,@quantity);",
  deleteProduct: "DELETE FROM PRODUCTO WHERE PROD_id= @Id",
  getTotalProducts: "SELECT COUNT(*) FROM PRODUCTO",
  updateProductById: "UPDATE [PRODUCTO SET PROD_codigo = @name, PROD_nombre = @description, PROD_medida = @quantity WHERE PROD_id = @Id",
  //Querys Tabla Equipo_Completo
  getAllActivos: "SELECT EQC_id,EQC_serie,EQC_placa,EQC_EQUIP_id,EQC_CLI_id,EQC_codTag,EQUIP_modelo,EQUIP_marca,EQUIP_descripcion,CLI_nombre,EQC_LOGO_id,LOGO_nombre FROM EQUIPO_COMPLETO AS E inner join EQUIPO ON EQC_EQUIP_id = EQUIP_id inner join CLIENTE ON EQC_CLI_id = CLI_id inner join LOGO ON EQC_LOGO_id = LOGO_id",
  getActivoByCliente: "SELECT EQC_id,EQC_serie,EQC_placa,EQC_EQUIP_id,EQC_CLI_id,EQC_codTag,EQUIP_modelo,EQUIP_marca,EQUIP_descripcion,CLI_nombre FROM EQUIPO_COMPLETO AS E inner join EQUIPO ON EQC_EQUIP_id = EQUIP_id inner join CLIENTE ON EQC_CLI_id = CLI_id WHERE (EQC_CLI_id = @idCliente  or EQC_CLI_id = @idCliente2) and EQC_id in (SELECT max(EQC_id) from EQUIPO_COMPLETO GROUP BY EQC_serie) order by EQC_serie",
  getActivoById: "SELECT * FROM EQUIPO_COMPLETO Where EQC_id = @Id",
  getActivoByTag: "SELECT EQC_id,EQC_serie,EQC_placa,EQC_EQUIP_id,EQC_CLI_id,EQC_codTag,EQUIP_modelo,EQUIP_marca,EQUIP_descripcion,CLI_nombre FROM EQUIPO_COMPLETO AS E inner join EQUIPO ON EQC_EQUIP_id = EQUIP_id inner join CLIENTE ON EQC_CLI_id = CLI_id Where EQC_codTag = @EQC_codTag AND EQC_estado = 1 ",
  addNewActivo: "INSERT INTO EQUIPO_COMPLETO (EQC_serie, EQC_placa, EQC_EQUIP_id,EQC_CLI_id,EQC_USU_ing,EQC_fecha_ing,EQC_codTag,EQC_LOGO_id) VALUES (@EQC_serie,@EQC_placa,@EQC_EQUIP_id,@EQC_CLI_id,@EQC_USU_ing,GETDATE(),@EQC_codTag,@EQC_LOGO_id);",
  deleteActivo: "DELETE FROM EQUIPO_COMPLETO WHERE EQC_id= @Id",
  getTotalActivos: "SELECT COUNT(*) FROM EQUIPO_COMPLETO",
  updateActivoById: "UPDATE EQUIPO_COMPLETO SET EQC_serie = @EQC_serie, EQC_placa = @EQC_placa, EQC_EQUIP_id = @EQC_EQUIP_id,EQC_CLI_id = @EQC_CLI_id,EQC_USU_ing = @EQC_USU_ing, EQC_fecha_ing = GETDATE(), EQC_codTag = @EQC_codTag, EQC_LOGO_id = @EQC_LOGO_id WHERE EQC_id = @Id",
  //Querys Tabla Cliente
  getAllClientes: "SELECT CLI_id,CLI_nombre FROM CLIENTE ORDER BY CLI_nombre",
  getClienteById: "SELECT * FROM CLIENTE Where CLI_id = @Id",
  //Querys Tabla Modelos de Equipos
  getAllEquipos: "SELECT * FROM EQUIPO ORDER BY EQUIP_modelo",
  getEquipoById: "SELECT * FROM EQUIPO Where EQ_id = @Id",
  //Querys Tabla Modelos de Usuarios
  getAllUsuarios: "SELECT * FROM USUARIOS ORDER BY USU_nombre",
  getUserPass: "SELECT * FROM USUARIOS Where USU_usuario like @USU_usuario",
  //Querys Tabla Historial Equipos
  getDataReparados: "SELECT T.MES,COUNT(DISTINCT(T.HIST_AS_id))AS CONTEO FROM(SELECT DATENAME(MONTH, HIST_AS_fecha ) AS MES, HIST_AS_id,AS_CLI_id FROM HISTORIAL_AS_TIPOSERVICIO INNER JOIN AREA_SERVICIO ON HIST_AS_id = AS_id WHERE  HIST_AS_TPS_id = 2 or HIST_AS_TPS_id = 3 or HIST_AS_TPS_id = 4 or HIST_AS_TPS_id = 5 or HIST_AS_TPS_id = 6 or HIST_AS_TPS_id = 8 GROUP BY HIST_AS_fecha,HIST_AS_id,AS_CLI_id) T WHERE T.AS_CLI_id = @id OR T.AS_CLI_id = @id2 GROUP BY T.MES, T.AS_CLI_id ORDER BY (CASE WHEN T.MES='Enero' THEN 1 WHEN T.MES='Febrero' THEN 2 WHEN T.MES='Marzo' THEN 3 WHEN T.MES='Abril' THEN 4 WHEN T.MES='Mayo' THEN 5 WHEN T.MES='Junio' THEN 6 WHEN T.MES='Julio' THEN 7 WHEN T.MES='Agosto' THEN 8 WHEN T.MES='Septiembre' THEN 9 WHEN T.MES='Octubre' THEN 10 WHEN T.MES='Noviembre' THEN 11 WHEN T.MES='Deciembre' THEN 12 ELSE 0 END)",
  getDataDisponibles: "SELECT T.MES,COUNT(DISTINCT(T.HIST_AS_id))AS CONTEO FROM(SELECT DATENAME(MONTH, HIST_AS_fecha ) AS MES, HIST_AS_id,AS_CLI_id FROM HISTORIAL_AS_TIPOSERVICIO INNER JOIN AREA_SERVICIO ON HIST_AS_id = AS_id WHERE  HIST_AS_TPS_id = 7 GROUP BY HIST_AS_fecha,HIST_AS_id,AS_CLI_id) T WHERE T.AS_CLI_id = @id OR T.AS_CLI_id = @id2 GROUP BY T.MES ORDER BY (CASE WHEN T.MES='Enero' THEN 1 WHEN T.MES='Febrero' THEN 2 WHEN T.MES='Marzo' THEN 3 WHEN T.MES='Abril' THEN 4 WHEN T.MES='Mayo' THEN 5 WHEN T.MES='Junio' THEN 6 WHEN T.MES='Julio' THEN 7 WHEN T.MES='Agosto' THEN 8 WHEN T.MES='Septiembre' THEN 9 WHEN T.MES='Octubre' THEN 10 WHEN T.MES='Noviembre' THEN 11 WHEN T.MES='Deciembre' THEN 12 ELSE 0 END)",
  getDataEntregados: "SELECT T.MES,COUNT(DISTINCT(T.HIST_AS_id))AS CONTEO FROM(SELECT DATENAME(MONTH, HIST_AS_fecha ) AS MES, HIST_AS_id,AS_CLI_id FROM HISTORIAL_AS_TIPOSERVICIO INNER JOIN AREA_SERVICIO ON HIST_AS_id = AS_id WHERE  HIST_AS_TPS_id = 10 GROUP BY HIST_AS_fecha,HIST_AS_id,AS_CLI_id) T WHERE T.AS_CLI_id = @id OR T.AS_CLI_id = @id2 GROUP BY T.MES ORDER BY (CASE WHEN T.MES='Enero' THEN 1 WHEN T.MES='Febrero' THEN 2 WHEN T.MES='Marzo' THEN 3 WHEN T.MES='Abril' THEN 4 WHEN T.MES='Mayo' THEN 5 WHEN T.MES='Junio' THEN 6 WHEN T.MES='Julio' THEN 7 WHEN T.MES='Agosto' THEN 8 WHEN T.MES='Septiembre' THEN 9 WHEN T.MES='Octubre' THEN 10 WHEN T.MES='Noviembre' THEN 11 WHEN T.MES='Deciembre' THEN 12 ELSE 0 END)",
  getTopFiveItems: "SELECT TOP 5 count(AS_DET_cantidad) AS CANTIDAD, AS_DET_PROD_descripcion AS DESCRIPCION FROM AREA_SERVICIODETALLE INNER JOIN AREA_SERVICIO ON AS_DET_AS_id = AS_id WHERE (AS_DET_Estado = 1 ) AND (AS_CLI_id = @id OR AS_CLI_id = @id2) and (AS_OT_id>1)  AND AS_DET_PROD_codigo like 'SERVICIO' GROUP BY AS_DET_PROD_descripcion ORDER BY CANTIDAD DESC",
  geoTotalItemsServicios: "SELECT TOP 5 count(AS_DET_cantidad) AS CANTIDAD, AS_DET_PROD_descripcion AS DESCRIPCION FROM AREA_SERVICIODETALLE INNER JOIN AREA_SERVICIO ON AS_DET_AS_id = AS_id WHERE (AS_DET_Estado = 1 ) AND (AS_OT_id>1)  AND AS_DET_PROD_codigo like 'SERVICIO' GROUP BY AS_DET_PROD_descripcion ORDER BY CANTIDAD DESC",
  getHistorialReparacion: "SELECT HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo FROM HISTORIAL_AS_TIPOSERVICIO INNER JOIN AREA_SERVICIO ON HIST_AS_id = AS_id INNER JOIN AREA_TRABAJO ON HIST_AS_TPS_id = AT_id INNER JOIN EQUIPO on AS_EQUIP_id = EQUIP_id WHERE HIST_id in (SELECT MAX(HIST_id) FROM HISTORIAL_AS_TIPOSERVICIO GROUP BY HIST_AS_id) AND (AS_CLI_id = @id OR AS_CLI_id = @id2) AND (HIST_AS_TPS_id = 1 OR HIST_AS_TPS_id = 2 OR HIST_AS_TPS_id = 3 OR HIST_AS_TPS_id = 4 OR HIST_AS_TPS_id = 5 OR HIST_AS_TPS_id = 6 OR HIST_AS_TPS_id = 8) GROUP BY HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo,EQUIP_marca ORDER BY HIST_id",
  getHistorialDisponible: "SELECT HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo FROM HISTORIAL_AS_TIPOSERVICIO INNER JOIN AREA_SERVICIO ON HIST_AS_id = AS_id INNER JOIN AREA_TRABAJO ON HIST_AS_TPS_id = AT_id INNER JOIN EQUIPO on AS_EQUIP_id = EQUIP_id WHERE HIST_id in (SELECT MAX(HIST_id) FROM HISTORIAL_AS_TIPOSERVICIO GROUP BY HIST_AS_id) AND (AS_CLI_id = @id OR AS_CLI_id = @id2) AND (HIST_AS_TPS_id = 7) GROUP BY HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo,EQUIP_marca ORDER BY HIST_id ",
  getHistorialEntregados: "SELECT HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo FROM HISTORIAL_AS_TIPOSERVICIO INNER JOIN AREA_SERVICIO ON HIST_AS_id = AS_id INNER JOIN AREA_TRABAJO ON HIST_AS_TPS_id = AT_id INNER JOIN EQUIPO on AS_EQUIP_id = EQUIP_id WHERE HIST_id in (SELECT MAX(HIST_id) FROM HISTORIAL_AS_TIPOSERVICIO GROUP BY HIST_AS_id) AND (AS_CLI_id = @id OR AS_CLI_id = @id2) AND (HIST_AS_TPS_id = 10) GROUP BY HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo,EQUIP_marca ORDER BY HIST_id ",
  //Totales
  getDataReparadosTotal: "SELECT T.MES,COUNT(DISTINCT(T.HIST_AS_id))AS CONTEO FROM(SELECT DATENAME(MONTH, HIST_AS_fecha ) AS MES, HIST_AS_id FROM HISTORIAL_AS_TIPOSERVICIO INNER JOIN AREA_SERVICIO ON HIST_AS_id = AS_id WHERE  HIST_AS_TPS_id = 2 or HIST_AS_TPS_id = 3 or HIST_AS_TPS_id = 4 or HIST_AS_TPS_id = 5 or HIST_AS_TPS_id = 6 or HIST_AS_TPS_id = 8 GROUP BY HIST_AS_fecha,HIST_AS_id) T GROUP BY T.MES ORDER BY (CASE WHEN T.MES='Enero' THEN 1 WHEN T.MES='Febrero' THEN 2 WHEN T.MES='Marzo' THEN 3 WHEN T.MES='Abril' THEN 4 WHEN T.MES='Mayo' THEN 5 WHEN T.MES='Junio' THEN 6 WHEN T.MES='Julio' THEN 7 WHEN T.MES='Agosto' THEN 8 WHEN T.MES='Septiembre' THEN 9 WHEN T.MES='Octubre' THEN 10 WHEN T.MES='Noviembre' THEN 11 WHEN T.MES='Deciembre' THEN 12 ELSE 0 END)",
  getDataDisponiblesTotal: "SELECT T.MES,COUNT(DISTINCT(T.HIST_AS_id))AS CONTEO FROM(SELECT DATENAME(MONTH, HIST_AS_fecha ) AS MES, HIST_AS_id FROM HISTORIAL_AS_TIPOSERVICIO INNER JOIN AREA_SERVICIO ON HIST_AS_id = AS_id WHERE  HIST_AS_TPS_id = 7 GROUP BY HIST_AS_fecha,HIST_AS_id) T  GROUP BY T.MES ORDER BY (CASE WHEN T.MES='Enero' THEN 1 WHEN T.MES='Febrero' THEN 2 WHEN T.MES='Marzo' THEN 3 WHEN T.MES='Abril' THEN 4 WHEN T.MES='Mayo' THEN 5 WHEN T.MES='Junio' THEN 6 WHEN T.MES='Julio' THEN 7 WHEN T.MES='Agosto' THEN 8 WHEN T.MES='Septiembre' THEN 9 WHEN T.MES='Octubre' THEN 10 WHEN T.MES='Noviembre' THEN 11 WHEN T.MES='Deciembre' THEN 12 ELSE 0 END)",
  getDataEntregadosTotal: "SELECT T.MES,COUNT(DISTINCT(T.HIST_AS_id))AS CONTEO FROM(SELECT DATENAME(MONTH, HIST_AS_fecha ) AS MES, HIST_AS_id FROM HISTORIAL_AS_TIPOSERVICIO INNER JOIN AREA_SERVICIO ON HIST_AS_id = AS_id WHERE  HIST_AS_TPS_id = 10 GROUP BY HIST_AS_fecha,HIST_AS_id) T GROUP BY T.MES ORDER BY (CASE WHEN T.MES='Enero' THEN 1 WHEN T.MES='Febrero' THEN 2 WHEN T.MES='Marzo' THEN 3 WHEN T.MES='Abril' THEN 4 WHEN T.MES='Mayo' THEN 5 WHEN T.MES='Junio' THEN 6 WHEN T.MES='Julio' THEN 7 WHEN T.MES='Agosto' THEN 8 WHEN T.MES='Septiembre' THEN 9 WHEN T.MES='Octubre' THEN 10 WHEN T.MES='Noviembre' THEN 11 WHEN T.MES='Deciembre' THEN 12 ELSE 0 END)",
  //Obtener Equipos Reparados, Disponibles, Totales
  getHistorialTotalReparacion: "SELECT HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo FROM HISTORIAL_AS_TIPOSERVICIO INNER JOIN AREA_SERVICIO ON HIST_AS_id = AS_id INNER JOIN AREA_TRABAJO ON HIST_AS_TPS_id = AT_id INNER JOIN EQUIPO on AS_EQUIP_id = EQUIP_id WHERE HIST_id in (SELECT MAX(HIST_id) FROM HISTORIAL_AS_TIPOSERVICIO GROUP BY HIST_AS_id) AND (HIST_AS_TPS_id = 1 OR HIST_AS_TPS_id = 2 OR HIST_AS_TPS_id = 3 OR HIST_AS_TPS_id = 4 OR HIST_AS_TPS_id = 5 OR HIST_AS_TPS_id = 6 OR HIST_AS_TPS_id = 8) GROUP BY HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo,EQUIP_marca ORDER BY HIST_id",
  getHistorialTotalDisponible: "SELECT HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo FROM HISTORIAL_AS_TIPOSERVICIO INNER JOIN AREA_SERVICIO ON HIST_AS_id = AS_id INNER JOIN AREA_TRABAJO ON HIST_AS_TPS_id = AT_id INNER JOIN EQUIPO on AS_EQUIP_id = EQUIP_id WHERE HIST_id in (SELECT MAX(HIST_id) FROM HISTORIAL_AS_TIPOSERVICIO GROUP BY HIST_AS_id) AND (HIST_AS_TPS_id = 7) GROUP BY HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo,EQUIP_marca ORDER BY HIST_id ",
  getHistorialTotalEntregados: "SELECT HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo FROM HISTORIAL_AS_TIPOSERVICIO INNER JOIN AREA_SERVICIO ON HIST_AS_id = AS_id INNER JOIN AREA_TRABAJO ON HIST_AS_TPS_id = AT_id INNER JOIN EQUIPO on AS_EQUIP_id = EQUIP_id WHERE HIST_id in (SELECT MAX(HIST_id) FROM HISTORIAL_AS_TIPOSERVICIO GROUP BY HIST_AS_id) AND (HIST_AS_TPS_id = 10) GROUP BY HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo,EQUIP_marca ORDER BY HIST_id ",
  //Querys Tabla Area Servicio
  getTopSevenModelos: "SELECT TOP 7 COUNT(AS_id) AS CONTEO,EQUIP_modelo  FROM AREA_SERVICIO INNER JOIN EQUIPO ON AS_EQUIP_id = EQUIP_id WHERE (AS_OT_id>0) AND (AS_CLI_id = @id or AS_CLI_id = @id2) GROUP BY EQUIP_modelo ORDER BY CONTEO DESC",
  getTotalModelos: "SELECT TOP 7 COUNT(AS_id) AS CONTEO,EQUIP_modelo  FROM AREA_SERVICIO INNER JOIN EQUIPO ON AS_EQUIP_id = EQUIP_id WHERE (AS_OT_id>0) GROUP BY EQUIP_modelo ORDER BY CONTEO DESC",
  //Querys Tabla Logos
  getAllLogos: "SELECT LOGO_id,LOGO_nombre FROM LOGO ORDER BY LOGO_nombre",
  getLogoById: "SELECT LOGO_id,LOGO_nombre FROM LOGO Where LOGO_id = @Id",
  //Querys Tabla Ubicacion
  getAllCiudad: "SELECT UBIC_id, UBIC_ciudad, UBIC_provincia FROM UBICACION ORDER BY UBIC_ciudad",
  //Querys Tabla PersonaReporta
  getAllPersonaReporta: "SELECT PR_id,PR_nombre,PR_CLI_id FROM PERSONA_REPORTA ORDER BY PR_nombre",
  getPersonaReportaByIdCliente: "SELECT * FROM PERSONA_REPORTA Where PR_CLI_id = @Id",
  //Query de obtencion de usuarios con cargo de tecnico
  getAllUsuariosByCargo: "SELECT USU_id,USU_usuario FROM USUARIOS WHERE USU_cargo like 'TECNICO' ORDER BY USU_usuario",
  //Query que actualiza la ct con el id del tecnico 
  updateActivoByTecnico: "UPDATE AREA_SERVICIO SET AS_USU_id = @AS_USU_id,AS_USU_ing = @AS_USU_ing WHERE AS_id = @id  ",
  //Query que obtiene todas las cotizaciones pedientes de los tecnicos
  getAreaByTecnico: "SELECT AS_id, AS_secuencial,AS_SS_id,AS_USU_id,AS_fecha,AS_CLI_id,AS_AT_id,AS_OT_id,AS_OT_codigo,AS_TPS_id,AS_EC_id,AS_UBIC_id,AS_serie,AS_placa,AS_EQUIP_id,AS_LOGO_id,AS_observacionTecnica,AS_FECHA_ing,AS_USU_ing,AS_Subtotal,AS_impuesto,AS_iva,AS_total,AS_descCliente,AS_descuento,AS_descuentoR,AS_descuentoS,AS_descuentoP,AS_fechaIngreso,AS_EstadoFactura,AS_Reporte,AS_SC_id,AS_ES_id,AS_IE_id,AS_SEDE_id,CONVERT(varchar,AS_fechaReq,3)AS AS_fechaReq,AS_semana,AS_numReq,AS_PR_id,AS_UBIC_id2,AS_TPSP_id,AS_VEND_id,AS_serie2,AS_placa2,AS_EQUIP_id2,AS_LOGO_id2,AS_observacion2,AS_EM_id,AS_CT_idOrigen,UBIC_ciudad,UBIC_provincia,SC_direccion,SS_nombre,CLI_nombre FROM AREA_SERVICIO INNER JOIN UBICACION ON AS_UBIC_id2 = UBIC_id INNER JOIN  SUBCLIENTE ON AS_SC_id = SC_id INNER JOIN SERVICIOS_SEIMALSA ON AS_SS_id = SS_id INNER JOIN CLIENTE ON AS_CLI_id = CLI_id WHERE (AS_SS_id = 2 or AS_SS_id = 4) and (AS_USU_id = @id) and (AS_fecha > '04-29-2023')",
  //Query TipoServicio Pers
  getAllTipoServicioPers: "SELECT TPSP_id AS TPS_id, TPSP_nombre AS TPS_nombre FROM TIPO_SERVICIO_PERS ORDER BY TPSP_nombre",
  //Querys Tabla SubCliente
  getAllSubClientes: "SELECT SC_id,UPPER(REPLACE(REPLACE(SC_nombre,'\n',''),'\r','')) AS SC_nombre, UPPER(REPLACE(REPLACE(SC_codUniversal,'\n',''),'\r','')) AS SC_codUniversal, UPPER(REPLACE(REPLACE(SC_establecimiento,'\n',''),'\r','')) AS SC_establecimiento, UPPER(REPLACE(REPLACE(SC_direccion,'\n',''),'\r','')) AS SC_direccion,SC_telefono,SC_identificacion,SC_referencia,SC_tipoNegocio FROM SUBCLIENTE WHERE SC_nombre != '' ORDER BY SC_nombre",
  getSubClienteById: "SELECT SC_id,SC_nombre,SC_codUniversal,SC_establecimiento,SC_direccion,SC_telefono,SC_identificacion,SC_referencia,SC_tipoNegocio FROM SUBCLIENTE WHERE SC_id = @Id",
  addNewSubCliente: "INSERT INTO SUBCLIENTE (SC_nombre, SC_codUniversal,SC_establecimiento,SC_direccion,SC_telefono,SC_USU_ing,SC_fecha_ing,SC_identificacion,SC_referencia,SC_tipoNegocio) OUTPUT Inserted.SC_id VALUES (@SC_nombre, @SC_codUniversal, @SC_establecimiento,@SC_direccion, @SC_telefono,@SC_USU_ing, GETDATE(), @SC_identificacion, @SC_referencia, @SC_tipoNegocio)",
  updateSubClienteById: "UPDATE SUBCLIENTE SET SC_codUniversal = @SC_codUniversal, SC_direccion=@SC_direccion, SC_establecimiento =@SC_establecimiento, SC_telefono = @SC_telefono, SC_USU_ing = @SC_USU_ing, SC_identificacion = @SC_identificacion, SC_referencia = @SC_referencia, SC_tipoNegocio = @SC_tipoNegocio WHERE SC_id = @id",
  //Query tabla Area de Servicio////////

  addNewAreaServicio: "INSERT INTO AREA_SERVICIO (AS_secuencial,AS_SS_id,AS_USU_id,AS_fecha,AS_CLI_id,AS_AT_id,AS_OT_id,AS_OT_codigo,AS_TPS_id,AS_EC_id,AS_UBIC_id,AS_serie,AS_placa,AS_EQUIP_id,AS_LOGO_id,AS_observacionTecnica ,AS_FECHA_ing,AS_USU_ing,AS_Subtotal,AS_impuesto,AS_iva,AS_total,AS_descCliente,AS_descuento,AS_descuentoR,AS_descuentoS,AS_descuentoP,AS_fechaIngreso,AS_EstadoFactura,AS_Reporte,AS_SC_id,AS_IE_id,AS_SEDE_id,AS_fechaReq,AS_semana,AS_numReq,AS_PR_id,AS_UBIC_id2,AS_TPSP_id,AS_VEND_id,AS_serie2,AS_placa2,AS_EQUIP_id2,AS_LOGO_id2,AS_observacion2,AS_CT_idOrigen,AS_serieCompresor,AS_ES_id,AS_EM_id) VALUES (@AS_secuencial,@AS_SS_id,@AS_USU_id,@AS_fecha,@AS_CLI_id,@AS_AT_id,@AS_OT_id,@AS_OT_codigo,@AS_TPS_id,@AS_EC_id,@AS_UBIC_id,@AS_serie,@AS_placa,@AS_EQUIP_id,@AS_LOGO_id,@AS_observacionTecnica ,GETDATE(),@AS_USU_ing,@AS_Subtotal,@AS_impuesto,@AS_iva,@AS_total,@AS_descCliente,@AS_descuento,@AS_descuentoR,@AS_descuentoS,@AS_descuentoP,GETDATE(),@AS_EstadoFactura,@AS_Reporte,@AS_SC_id,@AS_IE_id,@AS_SEDE_id,@AS_fechaReq,@AS_semana,@AS_numReq,@AS_PR_id,@AS_UBIC_id2,@AS_TPSP_id,@AS_VEND_id,@AS_serie2,@AS_placa2,@AS_EQUIP_id2,@AS_LOGO_id2,@AS_observacion2,@AS_CT_idOrigen,@AS_serieCompresor,@AS_ES_id,@AS_EM_id)",
  updateAreaById: "UPDATE AREA_SERVICIO",
  //Query Busqueda por Serie y Placa
  getAreaByPlaca: "SELECT AS_serie,AS_placa,AS_EQUIP_id,AS_CLI_id,AS_LOGO_id,AS_SC_id,AS_UBIC_id,ISNULL(SC_codUniversal,'') AS SC_codUniversal,ISNULL(SC_direccion,'') AS SC_direccion,ISNULL(SC_establecimiento,'') AS SC_establecimiento,ISNULL(SC_nombre,'') AS SC_nombre,EQUIP_descripcion,LOGO_nombre,EQUIP_modelo,EQUIP_marca,UBIC_ciudad FROM AREA_SERVICIO INNER JOIN EQUIPO ON AS_EQUIP_id = EQUIP_id LEFT JOIN SUBCLIENTE ON AS_SC_id = SC_id INNER JOIN LOGO ON AS_LOGO_id = LOGO_id INNER JOIN UBICACION ON AS_UBIC_id = UBIC_id  WHERE (AS_CLI_id = @idCliente1 or AS_CLI_id = @idCliente2) and  AS_placa like @placa and AS_id in (SELECT MAX(AS_id) FROM AREA_SERVICIO GROUP BY AS_serie) ORDER BY AS_placa",
  getAreaBySerie: "SELECT AS_serie,AS_placa,AS_EQUIP_id,AS_CLI_id,AS_LOGO_id,AS_SC_id,AS_UBIC_id,ISNULL(SC_codUniversal,'') AS SC_codUniversal,ISNULL(SC_direccion,'') AS SC_direccion,ISNULL(SC_establecimiento,'') AS SC_establecimiento,ISNULL(SC_nombre,'') AS SC_nombre,EQUIP_descripcion, LOGO_nombre,EQUIP_modelo,EQUIP_marca,UBIC_ciudad FROM AREA_SERVICIO INNER JOIN EQUIPO ON AS_EQUIP_id = EQUIP_id LEFT JOIN SUBCLIENTE ON AS_SC_id = SC_id INNER JOIN LOGO ON AS_LOGO_id = LOGO_id INNER JOIN UBICACION ON AS_UBIC_id = UBIC_id WHERE (AS_CLI_id = @idCliente1 or AS_CLI_id = @idCliente2) and  AS_serie like @serie and AS_id in (SELECT MAX(AS_id) FROM AREA_SERVICIO GROUP BY AS_serie) ORDER BY AS_serie",
  //Query por Cotizacion sin asignar tecnico

  //Query que elije las cts con area de Servicio por Movimiento y sin que el tecnico las haya terminado
  getAreaByMovimiento: "SELECT AS_id, AS_secuencial,AS_SS_id,AS_USU_id,AS_fecha,AS_CLI_id,AS_AT_id,AS_OT_id,AS_OT_codigo,AS_TPS_id,AS_EC_id,AS_UBIC_id,AS_serie,AS_placa,AS_EQUIP_id,AS_LOGO_id,AS_observacionTecnica,AS_FECHA_ing,AS_USU_ing,AS_Subtotal,AS_impuesto,AS_iva,AS_total,AS_descCliente,AS_descuento,AS_descuentoR,AS_descuentoS,AS_descuentoP,AS_fechaIngreso,AS_EstadoFactura,AS_Reporte,AS_SC_id,AS_ES_id,AS_IE_id,AS_SEDE_id,CONVERT(varchar,AS_fechaReq,3)AS AS_fechaReq,AS_semana,AS_numReq,AS_PR_id,AS_UBIC_id2,AS_TPSP_id,AS_VEND_id,AS_serie2,AS_placa2,AS_EQUIP_id2,AS_LOGO_id2,AS_observacion2,AS_EM_id,AS_CT_idOrigen,UBIC_ciudad,UBIC_provincia,SC_direccion,SS_nombre,CLI_nombre FROM AREA_SERVICIO INNER JOIN UBICACION ON AS_UBIC_id2 = UBIC_id INNER JOIN  SUBCLIENTE ON AS_SC_id = SC_id INNER JOIN SERVICIOS_SEIMALSA ON AS_SS_id = SS_id INNER JOIN CLIENTE ON AS_CLI_id = CLI_id WHERE (AS_SS_id = 4) and (AS_USU_id = 29) and (AS_fecha > '06-25-2023') and (AS_guardado = 0)",
  //Query que elije las cts con area de Servicio por Mantenimiento y sin que el tecnico las haya terminado
  getAreaByMantenimiento: "SELECT AS_id, AS_secuencial,AS_SS_id,AS_USU_id,AS_fecha,AS_CLI_id,AS_AT_id,AS_OT_id,AS_OT_codigo,AS_TPS_id,AS_EC_id,AS_UBIC_id,AS_serie,AS_placa,AS_EQUIP_id,AS_LOGO_id,AS_observacionTecnica,AS_FECHA_ing,AS_USU_ing,AS_Subtotal,AS_impuesto,AS_iva,AS_total,AS_descCliente,AS_descuento,AS_descuentoR,AS_descuentoS,AS_descuentoP,AS_fechaIngreso,AS_EstadoFactura,AS_Reporte,AS_SC_id,AS_ES_id,AS_IE_id,AS_SEDE_id,CONVERT(varchar,AS_fechaReq,3)AS AS_fechaReq,AS_semana,AS_numReq,AS_PR_id,AS_UBIC_id2,AS_TPSP_id,AS_VEND_id,AS_serie2,AS_placa2,AS_EQUIP_id2,AS_LOGO_id2,AS_observacion2,AS_EM_id,AS_CT_idOrigen,UBIC_ciudad,UBIC_provincia,SC_direccion,SS_nombre,CLI_nombre FROM AREA_SERVICIO INNER JOIN UBICACION ON AS_UBIC_id2 = UBIC_id INNER JOIN  SUBCLIENTE ON AS_SC_id = SC_id INNER JOIN SERVICIOS_SEIMALSA ON AS_SS_id = SS_id INNER JOIN CLIENTE ON AS_CLI_id = CLI_id WHERE (AS_SS_id = 2) and (AS_USU_id = 29) and (AS_fecha > '06-25-2023') and (AS_guardado = 0)",
  //Abril 2024
  getReporteGeneralSabana: "SELECT AS_secuencial,AS_fecha,AS_OT_codigo,AS_serie,AS_placa,AS_observacionTecnica,AS_total,AS_fechaIngreso,AS_Reporte,AS_fechaReq,AS_semana,AS_numReq,AS_serie2,AS_placa2,AS_observacion2,AS_serieCompresor,SS_nombre,USU_usuario,CLI_nombre,AT_nombre,TPS_nombre,ISNULL(EC_descripcion,'') AS EC_descripcion,ISNULL(U.UBIC_ciudad,'') AS UBIC_ciudad,ISNULL(U.UBIC_provincia,'') AS UBIC_provincia,ISNULL(E.EQUIP_modelo,'') AS EQUIP_modelo,ISNULL(E.EQUIP_marca,'') AS EQUIP_marca,ISNULL(L.LOGO_nombre,'') AS LOGO_nombre,ISNULL(SC_nombre,'') AS SC_nombre,ISNULL(SC_codUniversal,'') AS SC_codUniversal,ISNULL(SC_establecimiento,'') AS SC_establecimiento,ISNULL(ES_descripcion,'') AS  ES_descripcion,ISNULL(IE_codigo, '') AS IE_codigo,ISNULL(SEDE_descripcion,'') AS SEDE_descripcion,ISNULL(U2.UBIC_ciudad,'') AS UBIC_ciudadReq,ISNULL(U2.UBIC_provincia,'') AS UBIC_provinciaReq,ISNULL(TPSP_nombre,'') AS TPSP_nombre,ISNULL(E2.EQUIP_modelo,'') AS EQUIP_modelo2,ISNULL(E2.EQUIP_marca,'') AS EQUIP_marca2,ISNULL(L2.LOGO_nombre,'') AS LOGO_nombre2,ISNULL(EM_descripcion,'') AS EM_descripcion,ISNULL(PROY_descripcion,'') AS PROY_descripcion,ISNULL(PF_descripcion,'') AS PF_descripcion,ISNULL(PF_numFactura,'') AS PF_numFactura,ISNULL(PF_fecha, '') AS PF_fecha,ISNULL(CM1.CM_codigo,'') AS CM_codigo,ISNULL(CM2.CM_codigo,'') AS CM_descripcion,ISNULL(CM3.CM_codigo,'') AS CM_codigoB,ISNULL(CM4.CM_codigo,'') AS CM_codigoP,ISNULL(OTT.OT_fecha, '') AS FECHAOTTALLER,ISNULL(OTMM.OT_fecha, '') AS FECHAOTPVP,ISNULL(OTB.OT_fecha, '') AS FECHAOTBOD, ISNULL(OTP.OT_fecha, '') AS FECHAOTPROD, ISNULL(PR_nombre,'') AS PR_nombre FROM AREA_SERVICIO INNER JOIN SERVICIOS_SEIMALSA ON AS_SS_id = SS_id INNER JOIN USUARIOS ON AS_USU_id = USU_id INNER JOIN CLIENTE ON AS_CLI_id =CLI_id INNER JOIN AREA_TRABAJO ON AS_AT_id = AT_id INNER JOIN TIPO_SERVICIO ON AS_TPS_id = TPS_id INNER JOIN ESTADO_COTIZACION ON AS_EC_id = EC_id INNER JOIN UBICACION AS U ON AS_UBIC_id = UBIC_id INNER JOIN EQUIPO AS E ON AS_EQUIP_id = EQUIP_id INNER JOIN LOGO AS L ON AS_LOGO_id = LOGO_id LEFT JOIN  SUBCLIENTE ON AS_SC_id = SC_id LEFT JOIN ESTADO_SEIMALSA ON AS_ES_id = ES_id LEFT JOIN INGRESO_EQUIPO ON AS_IE_id = IE_id LEFT JOIN SEDE_SEIMALSA ON AS_SEDE_id = SEDE_id LEFT JOIN UBICACION AS U2 ON AS_UBIC_id2 = U2.UBIC_id LEFT JOIN TIPO_SERVICIO_PERS ON AS_TPSP_id = TPSP_id LEFT JOIN EQUIPO AS E2 ON AS_EQUIP_id2 = E2.EQUIP_id LEFT JOIN LOGO AS L2 ON AS_LOGO_id2 = L2.LOGO_id LEFT JOIN ESTADO_MOVIMIENTO ON AS_EM_id = EM_id LEFT JOIN PROYECTO ON AS_PROY_id = PROY_id LEFT JOIN PREFACTURA_DETALLE ON AS_id = PF_DET_AS_id LEFT JOIN PREFACTURA ON PF_DET_PF_id = PF_id LEFT JOIN COTIZACION_MASTERDETALLE AS CMD1 ON AS_id = CMD1.CMD_AS_id LEFT JOIN COTIZACION_MASTER CM1 ON CMD1.CMD_CM_id = CM1.CM_id LEFT JOIN COTIZACION_MASTERDETALLE2 AS CMD2 ON AS_id = CMD2.CMD_AS_id LEFT JOIN COTIZACION_MASTER CM2 ON CMD2.CMD_CM_id = CM2.CM_id LEFT JOIN COTIZACION_MASTERDETALLE_BOD AS CMD3 ON AS_id = CMD3.CMD_AS_id LEFT JOIN COTIZACION_MASTER_BOD CM3 ON CMD3.CMD_CM_id = CM3.CM_id LEFT JOIN COTIZACION_MASTERDETALLE_PROD AS CMD4 ON AS_id = CMD4.CMD_AS_id  LEFT JOIN COTIZACION_MASTER_PROD CM4 ON CMD4.CMD_CM_id = CM4.CM_id LEFT JOIN ORDEN_TRABAJO AS OTT ON AS_OT_id = OTT.OT_id LEFT JOIN ORDEN_TRABAJO2 AS OTMM ON AS_OT_id = OTMM.OT_id LEFT JOIN ORDEN_TRABAJO_BOD AS OTB ON AS_OT_id = OTB.OT_id LEFT JOIN ORDEN_TRABAJO_PROD AS OTP ON AS_OT_id = OTP.OT_id LEFT JOIN PERSONA_REPORTA ON AS_PR_id = PR_id WHERE AS_fecha > '01-01-2024'",
  getTotalFacturaPorCliente: "SELECT CLI_nombre,PF_fecha,SUM(PF_servicios) AS PF_servicios,SUM(PF_respuestos) AS PF_respuestos,SUM(PF_produccion) AS PF_produccion, SUM(PF_subtotal) AS PF_subtotal FROM PREFACTURA INNER JOIN CLIENTE ON PF_CLI_id = CLI_id WHERE PF_fecha > '01-01-2023' GROUP BY CLI_nombre, PF_FECHA ORDER BY CLI_nombre",
  getResumenTaller: "SELECT COUNT(A.HIST_AS_TPS_id) AS CONTEO,A.HIST_AS_TPS_id AS AT_id,A.AT_nombre,A.AS_CLI_id,A.CLI_nombre FROM (SELECT HIST_id,HIST_FECHA_ing,max(HIST_AS_id) as HIST_AS_id,HIST_AS_TPS_id,AT_nombre,AS_CLI_id,CLI_nombre FROM HISTORIAL_AS_TIPOSERVICIO inner join AREA_SERVICIO ON HIST_AS_id = AS_id inner join AREA_TRABAJO ON HIST_AS_TPS_id = AT_id inner join CLIENTE ON AS_CLI_id = CLI_id WHERE HIST_id in (SELECT MAX(HIST_id) FROM HISTORIAL_AS_TIPOSERVICIO GROUP BY HIST_AS_id) and HIST_AS_fecha >= '01-01-2023' AND AS_IE_id > 0 AND AS_SS_id = 3 AND (AS_CLI_id = 1 or AS_CLI_id = 2 or AS_CLI_id = 3 or AS_CLI_id = 4 or AS_CLI_id = 5 OR AS_CLI_id = 6 OR AS_CLI_id = 7 OR AS_CLI_id = 8 OR AS_CLI_id = 9 OR AS_CLI_id = 10 OR AS_CLI_id = 11 OR AS_CLI_id = 12 OR AS_CLI_id = 13 OR AS_CLI_id = 14 OR AS_CLI_id = 15 OR AS_CLI_id = 16 OR AS_CLI_id = 17 OR AS_CLI_id = 18 OR AS_CLI_id = 19 OR AS_CLI_id = 20 OR AS_CLI_id = 21 OR AS_CLI_id = 22 OR AS_CLI_id = 23 OR AS_CLI_id = 24 OR AS_CLI_id = 25 OR AS_CLI_id = 26 OR AS_CLI_id = 27 OR AS_CLI_id = 28 OR AS_CLI_id = 29 OR AS_CLI_id = 30 OR AS_CLI_id = 31 OR AS_CLI_id = 32 OR AS_CLI_id = 33 OR AS_CLI_id = 34 OR AS_CLI_id = 35 OR AS_CLI_id = 36 OR AS_CLI_id = 37 OR AS_CLI_id = 38 OR AS_CLI_id = 39) GROUP BY hist_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_CLI_id,CLI_nombre) A GROUP BY A.HIST_AS_TPS_id,A.AT_nombre,A.AS_CLI_id,A.CLI_nombre",
  //Mayo 2024
  //getClienteKardex: "SELECT T.IE_fecha,COUNT((CASE T.IE_Disponible WHEN 2 THEN 1 END)) as TotalEntrega,COUNT((CASE T.IE_Disponible WHEN 1 THEN 1 END )) as TotalIngreso, IE_CLI_id  FROM (SELECT IE_id,CONVERT(DATE,IE_fecha) AS IE_fecha,1 AS IE_Disponible,IE_CLI_id FROM INGRESO_EQUIPO WHERE (IE_CLI_id = 2 or IE_CLI_id = 3) AND IE_PROY_id > 0 AND IE_estado = 0 UNION SELECT IE_id,CONVERT(DATE,IE_fecha) AS IE_fecha,2 AS IE_Disponible, IE_CLI_id FROM INGRESO_EQUIPO WHERE (IE_CLI_id = 2 or IE_CLI_id = 3) AND IE_PROY_id > 0 AND IE_Disponible = 2 UNION SELECT AS_id AS IE_id,CONVERT(DATE,AS_fecha) AS IE_fecha,1 AS IE_Disponible, AS_CLI_id AS IE_CLI_id FROM AREA_SERVICIO WHERE AS_PROY_id > 0 AND (AS_CLI_id = 2 OR  AS_CLI_id = 3) AND AS_SS_id = 3 UNION SELECT AS_id,CONVERT(DATE,AS_fecha) AS IE_fecha,2 AS IE_Disponible, AS_CLI_id AS IE_CLI_id FROM AREA_SERVICIO WHERE AS_IE_id >0 AND AS_PROY_id > 0 AND (AS_CLI_id = 2 OR AS_CLI_id = 3) AND AS_SS_id = 3 AND AS_AT_id = 10) T GROUP BY T.IE_fecha, T.IE_CLI_id ORDER BY T.IE_fecha",
  getClienteKardex: "SELECT T.IE_fecha,COUNT((CASE T.IE_Disponible WHEN 2 THEN 1 END)) as TotalEntrega,COUNT((CASE T.IE_Disponible WHEN 1 THEN 1 END )) as TotalIngreso, IE_CLI_id  FROM (SELECT IE_id,CONVERT(DATE,IE_fecha) AS IE_fecha,1 AS IE_Disponible,IE_CLI_id FROM INGRESO_EQUIPO WHERE (IE_CLI_id = 2 or IE_CLI_id = 3) AND IE_PROY_id > 0 AND IE_estado = 0 UNION SELECT HIST_id AS IE_id,CONVERT(DATE,HIST_ING_fecha) AS IE_fecha,2 AS IE_Disponible, IE_CLI_id FROM HISTORIAL_INGRESO INNER JOIN INGRESO_EQUIPO ON HIST_ING_id = IE_id WHERE (IE_CLI_id = 2 or IE_CLI_id = 3) AND IE_PROY_id > 0 AND IE_Disponible = 2 AND HIST_id in (SELECT MAX(HIST_id) AS HIST_id FROM HISTORIAL_INGRESO GROUP BY HIST_ING_id) UNION SELECT AS_id AS IE_id,CONVERT(DATE,AS_fecha) AS IE_fecha,1 AS IE_Disponible, AS_CLI_id AS IE_CLI_id FROM AREA_SERVICIO WHERE AS_PROY_id > 0 AND (AS_CLI_id = 2 OR  AS_CLI_id = 3) AND AS_SS_id = 3 UNION SELECT HIST_id AS IE_id,CONVERT(DATE,HIST_AS_fecha) AS IE_fecha,2 AS IE_Disponible, AS_CLI_id AS IE_CLI_id FROM HISTORIAL_AS_TIPOSERVICIO INNER JOIN AREA_SERVICIO ON HIST_AS_id = AS_id WHERE AS_PROY_id > 0 AND (AS_CLI_id = 2 OR AS_CLI_id = 3) AND AS_SS_id = 3 AND AS_AT_id = 10 AND HIST_id in (SELECT MAX(HIST_id) AS HIST_id FROM HISTORIAL_AS_TIPOSERVICIO GROUP BY HIST_AS_id)) T GROUP BY T.IE_fecha, T.IE_CLI_id ORDER BY T.IE_fecha",
  getInventoryById: "SELECT CINV_id, CINV_descripcion, CINV_CLI_id, CINV_fechaInicio,CINV_fechaCierre, CINV_Totalingreso, CINV_Totalentrega, CINV_saldoAnterior, CINV_FECHA_ing, CINV_USU_ing FROM CORTE_INVENTARIO WHERE CINV_id = @id",
  addNewInventario: "INSERT INTO CORTE_INVENTARIO ([CINV_descripcion],[CINV_CLI_id],[CINV_fechaInicio],[CINV_fechaCierre],[CINV_Totalingreso],[CINV_Totalentrega],[CINV_saldoAnterior],[CINV_FECHA_ing],[CINV_USU_ing]) OUTPUT Inserted.CINV_id VALUES (@CINV_descripcion,@CINV_CLI_id,@CINV_fechaInicio,@CINV_fechaCierre,@CINV_Totalingreso,@CINV_Totalentrega,@CINV_saldoAnterior, GETDATE(),@CINV_USU_ing)",
  getInventoryCorte: "SELECT CINV_id,CINV_descripcion,CINV_CLI_id,CONVERT(DATE,CINV_fechaInicio) AS CINV_fechaInicio,CONVERT(DATE,CINV_fechaCierre) AS CINV_fechaCierre,CINV_Totalingreso,CINV_Totalentrega,CINV_saldoAnterior,CINV_FECHA_ing,CINV_USU_ing FROM CORTE_INVENTARIO",
  //GLOBAL REFRIGERACION
  getDataEquiposMapa: "SELECT T.UBIC_provincia AS EQC_MAP_provincia, COUNT(T.AS_UBIC_id) AS CONTEO FROM (SELECT UBIC_provincia,AS_UBIC_id FROM AREA_SERVICIO INNER JOIN UBICACION ON AS_UBIC_id = UBIC_id WHERE AS_SS_id = 2 AND AS_ES_id =1 ) T GROUP BY T.UBIC_provincia ORDER BY T.UBIC_provincia",
  getUsuarioById: "SELECT * FROM USUARIOS Where USU_id = @Id",
  getTopFiveTecnicos: "SELECT TOP 5 T2.DESCRIPCION AS DESCRIPCION ,T2.CANTIDAD AS CANTIDAD FROM (SELECT T.USU_nombre AS DESCRIPCION, COUNT(T.AS_USU_id) AS CANTIDAD FROM (SELECT  USU_nombre,AS_USU_id FROM AREA_SERVICIO INNER JOIN USUARIOS ON AS_USU_id = USU_id WHERE AS_SS_id = 2 AND AS_ES_id =1) T GROUP BY T.USU_nombre) T2 ORDER BY T2.CANTIDAD DESC",
  getAllTipoServicio: "SELECT TPS_id, TPS_nombre FROM TIPO_SERVICIO ORDER BY TPS_nombre",
  getAllRequerimientos: "SELECT REQ_id,REQ_codigo,REQ_personaReporta,REQ_fecha,REQ_fechaVisita,REQ_fechaAprobacion,REQ_TPS_id,REQ_serie,REQ_placa,REQ_EQUIP_id,EQUIP_modelo,EQUIP_marca,REQ_CLI_id,CLI_nombre,REQ_contacto,REQ_establecimiento,REQ_telefono,REQ_direccion,REQ_UBIC_id,UBIC_ciudad,UBIC_provincia,REQ_observacion,REQ_observacionTecnica,REQ_ubicacionMaps,REQ_SS_id,SS_nombre,REQ_estado,REQ_revisado,REQ_USU_id,USU_nombre,TPS_nombre,REQ_SubTotal,REQ_IVA,REQ_total FROM REQUERIMIENTOS INNER JOIN EQUIPO ON REQ_EQUIP_id = EQUIP_id INNER JOIN CLIENTE ON REQ_CLI_id = CLI_id INNER JOIN UBICACION ON REQ_UBIC_id = UBIC_id INNER JOIN SERVICIOS_SEIMALSA ON REQ_SS_id = SS_id INNER JOIN USUARIOS ON REQ_USU_id = USU_id INNER JOIN TIPO_SERVICIO ON REQ_TPS_id = TPS_id",
  getRequerimientosActivos: "SELECT REQ_id,REQ_codigo,REQ_personaReporta,REQ_fecha,REQ_fechaVisita,REQ_fechaAprobacion,REQ_TPS_id,REQ_serie,REQ_placa,REQ_EQUIP_id,EQUIP_modelo,EQUIP_marca,REQ_CLI_id,CLI_nombre,REQ_contacto,REQ_establecimiento,REQ_telefono,REQ_direccion,REQ_UBIC_id,UBIC_ciudad,UBIC_provincia,REQ_observacion,REQ_observacionTecnica,REQ_ubicacionMaps,REQ_SS_id,SS_nombre,REQ_estado,REQ_revisado,REQ_USU_id,REQ_SubTotal,REQ_IVA,REQ_total,USU_nombre,TPS_nombre FROM REQUERIMIENTOS INNER JOIN EQUIPO ON REQ_EQUIP_id = EQUIP_id INNER JOIN CLIENTE ON REQ_CLI_id = CLI_id INNER JOIN UBICACION ON REQ_UBIC_id = UBIC_id INNER JOIN SERVICIOS_SEIMALSA ON REQ_SS_id = SS_id INNER JOIN USUARIOS ON REQ_USU_id = USU_id INNER JOIN TIPO_SERVICIO ON REQ_TPS_id = TPS_id WHERE REQ_estado = 1 ORDER BY REQ_id DESC",
  addRequerimiento: "INSERT INTO REQUERIMIENTOS(REQ_codigo,REQ_personaReporta,REQ_fecha,REQ_fechaVisita,REQ_fechaAprobacion,REQ_TPS_id,REQ_serie,REQ_placa,REQ_EQUIP_id,REQ_CLI_id,REQ_contacto,REQ_establecimiento,REQ_telefono,REQ_direccion,REQ_UBIC_id,REQ_observacion,REQ_observacionTecnica,REQ_ubicacionMaps,REQ_SS_id,REQ_estado,REQ_revisado,REQ_USU_id,REQ_SubTotal,REQ_IVA,REQ_total,REQ_USU_ing,REQ_fecha_ing,REQ_USU_edit,REQ_fecha_edit) VALUES(@REQ_codigo,@REQ_personaReporta,@REQ_fecha,GETDATE(),GETDATE(),@REQ_TPS_id,@REQ_serie,@REQ_placa,@REQ_EQUIP_id,@REQ_CLI_id,@REQ_contacto,@REQ_establecimiento,@REQ_telefono,@REQ_direccion,@REQ_UBIC_id,@REQ_observacion,'',@REQ_ubicacionMaps,@REQ_SS_id,1,0,@REQ_USU_id,@REQ_SubTotal,@REQ_IVA,@REQ_total,@REQ_USU_ing,GETDATE(),@REQ_USU_ing,GETDATE()); SELECT SCOPE_IDENTITY() AS REQ_id;",
  addNewRequerimientoDetalle: "INSERT INTO REQUERIMIENTOS_DETALLE(REQDET_REQ_id,REQDET_PROD_id,REQDET_cantidad,REQDET_pvp,REQDET_total,REQDET_Estado) VALUES (@REQDET_REQ_id,@REQDET_PROD_id,@REQDET_cantidad,@REQDET_pvp,@REQDET_total,1)",
  editRequerimiento: "UPDATE REQUERIMIENTOS SET REQ_personaReporta = @REQ_personaReporta,REQ_fecha = @REQ_fecha, REQ_TPS_id = @REQ_TPS_id, REQ_serie =@REQ_serie,REQ_placa = @REQ_placa,REQ_EQUIP_id = @REQ_EQUIP_id, REQ_CLI_id = @REQ_CLI_id,REQ_contacto = @REQ_contacto,REQ_establecimiento = @REQ_establecimiento,REQ_telefono = @REQ_telefono, REQ_direccion = @REQ_direccion, REQ_UBIC_id = @REQ_UBIC_id, REQ_observacion = @REQ_observacion,REQ_ubicacionMaps = @REQ_ubicacionMaps,REQ_SS_id = @REQ_SS_id,REQ_USU_id = @REQ_USU_id, REQ_SubTotal= @REQ_SubTotal,REQ_IVA = @REQ_IVA,REQ_total = @REQ_total,REQ_USU_edit = @REQ_USU_edit,REQ_fecha_edit = GETDATE() WHERE REQ_id = @id",
  editRequerimientoVisitaTecnica: "UPDATE REQUERIMIENTOS SET REQ_fechaVisita = GETDATE(), REQ_TPS_id = @REQ_TPS_id, REQ_serie =@REQ_serie,REQ_placa = @REQ_placa,REQ_EQUIP_id = @REQ_EQUIP_id, REQ_contacto = @REQ_contacto,REQ_establecimiento = @REQ_establecimiento,REQ_telefono = @REQ_telefono, REQ_direccion = @REQ_direccion, REQ_observacionTecnica = @REQ_observacionTecnica, REQ_SubTotal= @REQ_SubTotal,REQ_IVA = @REQ_IVA,REQ_total = @REQ_total,REQ_USU_edit = @REQ_USU_edit,REQ_fecha_edit = GETDATE(),REQ_revisado = 1 WHERE REQ_id = @id",
  editRequerimientoAprobacion: "UPDATE REQUERIMIENTOS SET REQ_fechaAprobacion = GETDATE(),REQ_USU_edit = @REQ_USU_edit,REQ_fecha_edit = GETDATE(),REQ_estado = @REQ_estado WHERE REQ_id = @id",
  cambiarEstadoRequerimientoDetalle: "UPDATE REQUERIMIENTOS_DETALLE SET REQDET_Estado = 0 WHERE REQDET_REQ_id = @REQDET_REQ_id",
  getDetalleByIdReq: "SELECT REQDET_id,REQDET_REQ_id,REQDET_PROD_id,REQDET_cantidad,REQDET_pvp,REQDET_total,PROD_nombre, PROD_item FROM REQUERIMIENTOS_DETALLE INNER JOIN PRODUCTO ON REQDET_PROD_id = PROD_id WHERE (REQDET_REQ_id = @REQDET_REQ_id AND REQDET_Estado = 1)",
  getLastIdRequerimiento: "BEGIN TRY BEGIN TRANSACTION SELECT ISNULL(max(REQ_id) + 1,0) AS REQ_id FROM REQUERIMIENTOS COMMIT END TRY BEGIN CATCH SELECT ERROR_MESSAGE() IF @@TRANCOUNT>0 ROLLBACK END CATCH",
  getLastIdAreaServivio: "BEGIN TRY BEGIN TRANSACTION SELECT ISNULL(max(AS_id) + 1,0) AS AS_id FROM AREA_SERVICIO COMMIT END TRY BEGIN CATCH SELECT ERROR_MESSAGE() IF @@TRANCOUNT>0 ROLLBACK END CATCH",
  addNewAreaServicioByReq: "INSERT INTO AREA_SERVICIO (AS_secuencial,AS_SS_id,AS_USU_id,AS_fecha,AS_CLI_id,AS_AT_id,AS_OT_id,AS_OT_codigo,AS_TPS_id,AS_EC_id,AS_UBIC_id,AS_serie,AS_placa,AS_EQUIP_id,AS_LOGO_id,AS_observacionTecnica,AS_FECHA_ing,AS_USU_ing,AS_Subtotal,AS_impuesto,AS_iva,AS_total,AS_descCliente,AS_descuento,AS_descuentoR,AS_descuentoS,AS_descuentoP,AS_fechaIngreso,AS_EstadoFactura,AS_Reporte,AS_SC_id,AS_ES_id,AS_IE_id,AS_SEDE_id,AS_fechaReq,AS_semana,AS_numReq,AS_PR_id,AS_UBIC_id2,AS_TPSP_id,AS_VEND_id,AS_serie2,AS_placa2,AS_EQUIP_id2,AS_LOGO_id2,AS_observacion2,AS_EM_id,AS_CT_idOrigen,AS_serieCompresor,AS_guardado,AS_PROY_id,AS_USU_edit,AS_fecha_edit,AS_REQ_id) VALUES (@AS_secuencial,@AS_SS_id,@AS_USU_id,GETDATE(),@AS_CLI_id,11,0,'',@AS_TPS_id,1,@AS_UBIC_id,@AS_serie,@AS_placa,@AS_EQUIP_id,0,@AS_observacionTecnica,GETDATE(),@AS_USU_ing,@AS_Subtotal,0,@AS_iva,@AS_total,0,0,0,0,0,@AS_fechaIngreso,0,@AS_Reporte,0,@AS_ES_id,0,1,@AS_fechaReq,'','',0,0,0,0,'','',0,0,'',@AS_EM_id,0,'',0,1,@AS_USU_edit,GETDATE(), @AS_REQ_id) ; SELECT SCOPE_IDENTITY() AS AS_id; UPDATE REQUERIMIENTOS SET REQ_estado = 1 WhERE REQ_id = @AS_REQ_id",
  addNewAreaServicioDetalle: "INSERT INTO dbo.AREA_SERVICIODETALLE (AS_DET_AS_id,AS_DET_PROD_id,AS_DET_PROD_codigo,AS_DET_PROD_descripcion,AS_DET_cantidad,AS_DET_costoU,AS_DET_pvp,AS_DET_pminimo,AS_DET_Pdescuento,AS_DET_descuento,AS_DET_FECHA_ing,AS_DET_USU_ing,AS_DET_pvp2,AS_DET_total,AS_DET_Estado,AS_DET_cantidadIngreso) VALUES (@AS_DET_AS_id,@AS_DET_PROD_id,@AS_DET_PROD_codigo,@AS_DET_PROD_descripcion,@AS_DET_cantidad,@AS_DET_costoU, @AS_DET_pvp, @AS_DET_pminimo, 0,0,GETDATE(),@AS_DET_USU_ing,@AS_DET_pvp2,@AS_DET_total, 1,@AS_DET_cantidadIngreso)",
  getRequerimientosActivosXtec: "SELECT REQ_id,REQ_codigo,REQ_personaReporta,REQ_fecha,REQ_fechaVisita,REQ_fechaAprobacion,REQ_TPS_id,REQ_serie,REQ_placa,REQ_EQUIP_id,EQUIP_modelo,EQUIP_marca,REQ_CLI_id,CLI_nombre,REQ_contacto,REQ_establecimiento,REQ_telefono,REQ_direccion,REQ_UBIC_id,UBIC_ciudad,UBIC_provincia,REQ_observacion,REQ_observacionTecnica,REQ_ubicacionMaps,REQ_SS_id,SS_nombre,REQ_estado,REQ_revisado,REQ_USU_id,REQ_SubTotal,REQ_IVA,REQ_total,USU_nombre,TPS_nombre FROM REQUERIMIENTOS INNER JOIN EQUIPO ON REQ_EQUIP_id = EQUIP_id INNER JOIN CLIENTE ON REQ_CLI_id = CLI_id INNER JOIN UBICACION ON REQ_UBIC_id = UBIC_id INNER JOIN SERVICIOS_SEIMALSA ON REQ_SS_id = SS_id INNER JOIN USUARIOS ON REQ_USU_id = USU_id INNER JOIN TIPO_SERVICIO ON REQ_TPS_id = TPS_id WHERE REQ_estado = 1 AND REQ_USU_id = @id ORDER BY REQ_id DESC",
  getCotizaciones: "SELECT AS_id, AS_secuencial,AS_SS_id,AS_USU_id,AS_fecha,AS_CLI_id,AS_AT_id,AS_OT_id,AS_OT_codigo,AS_TPS_id,AS_EC_id,AS_UBIC_id,AS_serie,AS_placa,AS_EQUIP_id,AS_LOGO_id,AS_observacionTecnica,AS_FECHA_ing,AS_USU_ing,AS_Subtotal,AS_impuesto,AS_iva,AS_total,AS_descCliente,AS_descuento,AS_descuentoR,AS_descuentoS,AS_descuentoP,AS_fechaIngreso,AS_EstadoFactura,AS_Reporte,AS_SC_id,AS_ES_id,AS_IE_id,AS_SEDE_id,CONVERT(varchar,AS_fechaReq,3)AS AS_fechaReq,AS_semana,AS_numReq,AS_PR_id,AS_UBIC_id2,AS_TPSP_id,AS_VEND_id,AS_serie2,AS_placa2,AS_EQUIP_id2,AS_LOGO_id2,AS_observacion2,AS_EM_id,AS_CT_idOrigen,UBIC_ciudad,UBIC_provincia,SS_nombre,CLI_nombre, REQ_contacto, REQ_establecimiento, AS_USU_id, USU_nombre, USU_usuario FROM AREA_SERVICIO INNER JOIN UBICACION ON AS_UBIC_id = UBIC_id INNER JOIN SERVICIOS_SEIMALSA ON AS_SS_id = SS_id INNER JOIN CLIENTE ON AS_CLI_id = CLI_id  LEFT JOIN REQuERIMIENTOS ON AS_REQ_id = REQ_id INNER JOIN USUARIOS ON AS_USU_id = USU_id WHERE (AS_SS_id = 2 or AS_SS_id = 4)",
  getCotizacionByTecnico: "SELECT AS_id, AS_secuencial,AS_SS_id,AS_USU_id,AS_fecha,AS_CLI_id,AS_AT_id,AS_OT_id,AS_OT_codigo,AS_TPS_id,AS_EC_id,AS_UBIC_id,AS_serie,AS_placa,AS_EQUIP_id,AS_LOGO_id,AS_observacionTecnica,AS_FECHA_ing,AS_USU_ing,AS_Subtotal,AS_impuesto,AS_iva,AS_total,AS_descCliente,AS_descuento,AS_descuentoR,AS_descuentoS,AS_descuentoP,AS_fechaIngreso,AS_EstadoFactura,AS_Reporte,AS_SC_id,AS_ES_id,AS_IE_id,AS_SEDE_id,CONVERT(varchar,AS_fechaReq,3)AS AS_fechaReq,AS_semana,AS_numReq,AS_PR_id,AS_UBIC_id2,AS_TPSP_id,AS_VEND_id,AS_serie2,AS_placa2,AS_EQUIP_id2,AS_LOGO_id2,AS_observacion2,AS_EM_id,AS_CT_idOrigen,UBIC_ciudad,UBIC_provincia,SS_nombre,CLI_nombre, REQ_contacto, REQ_establecimiento, AS_USU_id, USU_nombre, USU_usuario FROM AREA_SERVICIO INNER JOIN UBICACION ON AS_UBIC_id = UBIC_id INNER JOIN SERVICIOS_SEIMALSA ON AS_SS_id = SS_id INNER JOIN CLIENTE ON AS_CLI_id = CLI_id  LEFT JOIN REQuERIMIENTOS ON AS_REQ_id = REQ_id INNER JOIN USUARIOS ON AS_USU_id = USU_id  WHERE (AS_SS_id = 2 or AS_SS_id = 4) AND (AS_USU_id = @id)"
};
exports.querys = querys;
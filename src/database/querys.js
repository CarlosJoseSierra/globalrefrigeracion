export const querys = {
  getAllProducts: "SELECT TOP(500) * FROM PRODUCTO",
  getProductById: "SELECT * FROM PRODUCTO Where PROD_id = @Id",
  addNewProduct:
    "INSERT INTO PRODUCTO (PROD_codigo, PROD_nombre, PROD_medida) VALUES (@name,@description,@quantity);",
  deleteProduct: "DELETE FROM PRODUCTO WHERE PROD_id= @Id",
  getTotalProducts: "SELECT COUNT(*) FROM PRODUCTO",
  updateProductById:
    "UPDATE [PRODUCTO SET PROD_codigo = @name, PROD_nombre = @description, PROD_medida = @quantity WHERE PROD_id = @Id",
  //Querys Tabla Equipo_Completo
  getAllActivos: "SELECT EQC_id,EQC_serie,EQC_placa,EQC_EQUIP_id,EQC_CLI_id,EQC_codTag,EQUIP_modelo,EQUIP_marca,EQUIP_descripcion,CLI_nombre,EQC_LOGO_id,LOGO_nombre FROM EQUIPO_COMPLETO AS E inner join EQUIPO ON EQC_EQUIP_id = EQUIP_id inner join CLIENTE ON EQC_CLI_id = CLI_id inner join LOGO ON EQC_LOGO_id = LOGO_id",
  getActivoByCliente: "SELECT EQC_id,EQC_serie,EQC_placa,EQC_EQUIP_id,EQC_CLI_id,EQC_codTag,EQUIP_modelo,EQUIP_marca,EQUIP_descripcion,CLI_nombre FROM EQUIPO_COMPLETO AS E inner join EQUIPO ON EQC_EQUIP_id = EQUIP_id inner join CLIENTE ON EQC_CLI_id = CLI_id WHERE (EQC_CLI_id = @idCliente  or EQC_CLI_id = @idCliente2) and EQC_id in (SELECT max(EQC_id) from EQUIPO_COMPLETO GROUP BY EQC_serie) order by EQC_serie",  
  getActivoById: "SELECT * FROM EQUIPO_COMPLETO Where EQC_id = @Id",
  getActivoByTag: "SELECT EQC_id,EQC_serie,EQC_placa,EQC_EQUIP_id,EQC_CLI_id,EQC_codTag,EQUIP_modelo,EQUIP_marca,EQUIP_descripcion,CLI_nombre FROM EQUIPO_COMPLETO AS E inner join EQUIPO ON EQC_EQUIP_id = EQUIP_id inner join CLIENTE ON EQC_CLI_id = CLI_id Where EQC_codTag = @EQC_codTag",
  addNewActivo:
    "INSERT INTO EQUIPO_COMPLETO (EQC_serie, EQC_placa, EQC_EQUIP_id,EQC_CLI_id,EQC_USU_ing,EQC_fecha_ing,EQC_codTag,EQC_LOGO_id) VALUES (@EQC_serie,@EQC_placa,@EQC_EQUIP_id,@EQC_CLI_id,@EQC_USU_ing,GETDATE(),@EQC_codTag,@EQC_LOGO_id);",
  deleteActivo: "DELETE FROM EQUIPO_COMPLETO WHERE EQC_id= @Id",
  getTotalActivos: "SELECT COUNT(*) FROM EQUIPO_COMPLETO",
  updateActivoById:
    "UPDATE EQUIPO_COMPLETO SET EQC_serie = @EQC_serie, EQC_placa = @EQC_placa, EQC_EQUIP_id = @EQC_EQUIP_id,EQC_CLI_id = @EQC_CLI_id,EQC_USU_ing = @EQC_USU_ing, EQC_fecha_ing = GETDATE(), EQC_codTag = @EQC_codTag, EQC_LOGO_id = @EQC_LOGO_id WHERE EQC_id = @Id",
  //Querys Tabla Cliente
  getAllClientes: "SELECT CLI_id,CLI_nombre FROM CLIENTE ORDER BY CLI_nombre", 
  getClienteById: "SELECT * FROM CLIENTE Where CLI_id = @Id",
   //Querys Tabla Modelos de Equipos
  getAllEquipos: "SELECT * FROM EQUIPO ORDER BY EQUIP_modelo", 
  getEquipoById: "SELECT * FROM EQUIPO Where EQ_id = @Id",
  //Querys Tabla Modelos de Usuarios
  getAllUsuarios: "SELECT * FROM USUARIOS ORDER BY USU_nombre", 
  getUsuarioById: "SELECT * FROM USUARIOS Where USU_id = @Id",
  getUserPass: "SELECT * FROM USUARIOS Where USU_usuario like @USU_usuario",
  //Querys Tabla Historial Equipos
  getDataReparados:  "SELECT T.MES,COUNT(DISTINCT(T.HIST_AS_id))AS CONTEO FROM(SELECT DATENAME(MONTH, HIST_AS_fecha ) AS MES, HIST_AS_id,AS_CLI_id FROM HISTORIAL_AS_TIPOSERVICIO INNER JOIN AREA_SERVICIO ON HIST_AS_id = AS_id WHERE  HIST_AS_TPS_id = 2 or HIST_AS_TPS_id = 3 or HIST_AS_TPS_id = 4 or HIST_AS_TPS_id = 5 or HIST_AS_TPS_id = 6 or HIST_AS_TPS_id = 8 GROUP BY HIST_AS_fecha,HIST_AS_id,AS_CLI_id) T WHERE T.AS_CLI_id = @id OR T.AS_CLI_id = @id2 GROUP BY T.MES, T.AS_CLI_id ORDER BY (CASE WHEN T.MES='Enero' THEN 1 WHEN T.MES='Febrero' THEN 2 WHEN T.MES='Marzo' THEN 3 WHEN T.MES='Abril' THEN 4 WHEN T.MES='Mayo' THEN 5 WHEN T.MES='Junio' THEN 6 WHEN T.MES='Julio' THEN 7 WHEN T.MES='Agosto' THEN 8 WHEN T.MES='Septiembre' THEN 9 WHEN T.MES='Octubre' THEN 10 WHEN T.MES='Noviembre' THEN 11 WHEN T.MES='Deciembre' THEN 12 ELSE 0 END)",
  getDataDisponibles:"SELECT T.MES,COUNT(DISTINCT(T.HIST_AS_id))AS CONTEO FROM(SELECT DATENAME(MONTH, HIST_AS_fecha ) AS MES, HIST_AS_id,AS_CLI_id FROM HISTORIAL_AS_TIPOSERVICIO INNER JOIN AREA_SERVICIO ON HIST_AS_id = AS_id WHERE  HIST_AS_TPS_id = 7 GROUP BY HIST_AS_fecha,HIST_AS_id,AS_CLI_id) T WHERE T.AS_CLI_id = @id OR T.AS_CLI_id = @id2 GROUP BY T.MES ORDER BY (CASE WHEN T.MES='Enero' THEN 1 WHEN T.MES='Febrero' THEN 2 WHEN T.MES='Marzo' THEN 3 WHEN T.MES='Abril' THEN 4 WHEN T.MES='Mayo' THEN 5 WHEN T.MES='Junio' THEN 6 WHEN T.MES='Julio' THEN 7 WHEN T.MES='Agosto' THEN 8 WHEN T.MES='Septiembre' THEN 9 WHEN T.MES='Octubre' THEN 10 WHEN T.MES='Noviembre' THEN 11 WHEN T.MES='Deciembre' THEN 12 ELSE 0 END)",
  getDataEntregados: "SELECT T.MES,COUNT(DISTINCT(T.HIST_AS_id))AS CONTEO FROM(SELECT DATENAME(MONTH, HIST_AS_fecha ) AS MES, HIST_AS_id,AS_CLI_id FROM HISTORIAL_AS_TIPOSERVICIO INNER JOIN AREA_SERVICIO ON HIST_AS_id = AS_id WHERE  HIST_AS_TPS_id = 10 GROUP BY HIST_AS_fecha,HIST_AS_id,AS_CLI_id) T WHERE T.AS_CLI_id = @id OR T.AS_CLI_id = @id2 GROUP BY T.MES ORDER BY (CASE WHEN T.MES='Enero' THEN 1 WHEN T.MES='Febrero' THEN 2 WHEN T.MES='Marzo' THEN 3 WHEN T.MES='Abril' THEN 4 WHEN T.MES='Mayo' THEN 5 WHEN T.MES='Junio' THEN 6 WHEN T.MES='Julio' THEN 7 WHEN T.MES='Agosto' THEN 8 WHEN T.MES='Septiembre' THEN 9 WHEN T.MES='Octubre' THEN 10 WHEN T.MES='Noviembre' THEN 11 WHEN T.MES='Deciembre' THEN 12 ELSE 0 END)",
  getTopFiveItems: "SELECT TOP 5 count(AS_DET_cantidad) AS CANTIDAD, AS_DET_PROD_descripcion AS DESCRIPCION FROM AREA_SERVICIODETALLE INNER JOIN AREA_SERVICIO ON AS_DET_AS_id = AS_id WHERE (AS_DET_Estado = 1 ) AND (AS_CLI_id = @id OR AS_CLI_id = @id2) and (AS_OT_id>1)  AND AS_DET_PROD_codigo like 'SERVICIO' GROUP BY AS_DET_PROD_descripcion ORDER BY CANTIDAD DESC",
  geoTotalItemsServicios: "SELECT TOP 5 count(AS_DET_cantidad) AS CANTIDAD, AS_DET_PROD_descripcion AS DESCRIPCION FROM AREA_SERVICIODETALLE INNER JOIN AREA_SERVICIO ON AS_DET_AS_id = AS_id WHERE (AS_DET_Estado = 1 ) AND (AS_OT_id>1)  AND AS_DET_PROD_codigo like 'SERVICIO' GROUP BY AS_DET_PROD_descripcion ORDER BY CANTIDAD DESC",
  getHistorialReparacion: "SELECT HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo FROM HISTORIAL_AS_TIPOSERVICIO INNER JOIN AREA_SERVICIO ON HIST_AS_id = AS_id INNER JOIN AREA_TRABAJO ON HIST_AS_TPS_id = AT_id INNER JOIN EQUIPO on AS_EQUIP_id = EQUIP_id WHERE HIST_id in (SELECT MAX(HIST_id) FROM HISTORIAL_AS_TIPOSERVICIO GROUP BY HIST_AS_id) AND (AS_CLI_id = @id OR AS_CLI_id = @id2) AND (HIST_AS_TPS_id = 1 OR HIST_AS_TPS_id = 2 OR HIST_AS_TPS_id = 3 OR HIST_AS_TPS_id = 4 OR HIST_AS_TPS_id = 5 OR HIST_AS_TPS_id = 6 OR HIST_AS_TPS_id = 8) GROUP BY HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo,EQUIP_marca ORDER BY HIST_id",
  getHistorialDisponible: "SELECT HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo FROM HISTORIAL_AS_TIPOSERVICIO INNER JOIN AREA_SERVICIO ON HIST_AS_id = AS_id INNER JOIN AREA_TRABAJO ON HIST_AS_TPS_id = AT_id INNER JOIN EQUIPO on AS_EQUIP_id = EQUIP_id WHERE HIST_id in (SELECT MAX(HIST_id) FROM HISTORIAL_AS_TIPOSERVICIO GROUP BY HIST_AS_id) AND (AS_CLI_id = @id OR AS_CLI_id = @id2) AND (HIST_AS_TPS_id = 7) GROUP BY HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo,EQUIP_marca ORDER BY HIST_id ",
  getHistorialEntregados: "SELECT HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo FROM HISTORIAL_AS_TIPOSERVICIO INNER JOIN AREA_SERVICIO ON HIST_AS_id = AS_id INNER JOIN AREA_TRABAJO ON HIST_AS_TPS_id = AT_id INNER JOIN EQUIPO on AS_EQUIP_id = EQUIP_id WHERE HIST_id in (SELECT MAX(HIST_id) FROM HISTORIAL_AS_TIPOSERVICIO GROUP BY HIST_AS_id) AND (AS_CLI_id = @id OR AS_CLI_id = @id2) AND (HIST_AS_TPS_id = 10) GROUP BY HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo,EQUIP_marca ORDER BY HIST_id ",

  //Totales
  getDataReparadosTotal:  "SELECT T.MES,COUNT(DISTINCT(T.HIST_AS_id))AS CONTEO FROM(SELECT DATENAME(MONTH, HIST_AS_fecha ) AS MES, HIST_AS_id FROM HISTORIAL_AS_TIPOSERVICIO INNER JOIN AREA_SERVICIO ON HIST_AS_id = AS_id WHERE  HIST_AS_TPS_id = 2 or HIST_AS_TPS_id = 3 or HIST_AS_TPS_id = 4 or HIST_AS_TPS_id = 5 or HIST_AS_TPS_id = 6 or HIST_AS_TPS_id = 8 GROUP BY HIST_AS_fecha,HIST_AS_id) T GROUP BY T.MES ORDER BY (CASE WHEN T.MES='Enero' THEN 1 WHEN T.MES='Febrero' THEN 2 WHEN T.MES='Marzo' THEN 3 WHEN T.MES='Abril' THEN 4 WHEN T.MES='Mayo' THEN 5 WHEN T.MES='Junio' THEN 6 WHEN T.MES='Julio' THEN 7 WHEN T.MES='Agosto' THEN 8 WHEN T.MES='Septiembre' THEN 9 WHEN T.MES='Octubre' THEN 10 WHEN T.MES='Noviembre' THEN 11 WHEN T.MES='Deciembre' THEN 12 ELSE 0 END)",
  getDataDisponiblesTotal:"SELECT T.MES,COUNT(DISTINCT(T.HIST_AS_id))AS CONTEO FROM(SELECT DATENAME(MONTH, HIST_AS_fecha ) AS MES, HIST_AS_id FROM HISTORIAL_AS_TIPOSERVICIO INNER JOIN AREA_SERVICIO ON HIST_AS_id = AS_id WHERE  HIST_AS_TPS_id = 7 GROUP BY HIST_AS_fecha,HIST_AS_id) T  GROUP BY T.MES ORDER BY (CASE WHEN T.MES='Enero' THEN 1 WHEN T.MES='Febrero' THEN 2 WHEN T.MES='Marzo' THEN 3 WHEN T.MES='Abril' THEN 4 WHEN T.MES='Mayo' THEN 5 WHEN T.MES='Junio' THEN 6 WHEN T.MES='Julio' THEN 7 WHEN T.MES='Agosto' THEN 8 WHEN T.MES='Septiembre' THEN 9 WHEN T.MES='Octubre' THEN 10 WHEN T.MES='Noviembre' THEN 11 WHEN T.MES='Deciembre' THEN 12 ELSE 0 END)",
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

  //Query Busqueda por Serie y Placa
  getAreaByPlaca:"SELECT AS_serie,AS_placa,AS_EQUIP_id,AS_CLI_id,AS_LOGO_id,AS_SC_id,AS_UBIC_id,ISNULL(SC_codUniversal,'') AS SC_codUniversal,ISNULL(SC_direccion,'') AS SC_direccion,ISNULL(SC_establecimiento,'') AS SC_establecimiento,ISNULL(SC_nombre,'') AS SC_nombre,EQUIP_descripcion,LOGO_nombre,EQUIP_modelo,EQUIP_marca,UBIC_ciudad FROM AREA_SERVICIO INNER JOIN EQUIPO ON AS_EQUIP_id = EQUIP_id LEFT JOIN SUBCLIENTE ON AS_SC_id = SC_id INNER JOIN LOGO ON AS_LOGO_id = LOGO_id INNER JOIN UBICACION ON AS_UBIC_id = UBIC_id  WHERE (AS_CLI_id = @idCliente1 or AS_CLI_id = @idCliente2) and  AS_placa like @placa and AS_id in (SELECT MAX(AS_id) FROM AREA_SERVICIO GROUP BY AS_serie) ORDER BY AS_placa",
  getAreaBySerie:"SELECT AS_serie,AS_placa,AS_EQUIP_id,AS_CLI_id,AS_LOGO_id,AS_SC_id,AS_UBIC_id,ISNULL(SC_codUniversal,'') AS SC_codUniversal,ISNULL(SC_direccion,'') AS SC_direccion,ISNULL(SC_establecimiento,'') AS SC_establecimiento,ISNULL(SC_nombre,'') AS SC_nombre,EQUIP_descripcion, LOGO_nombre,EQUIP_modelo,EQUIP_marca,UBIC_ciudad FROM AREA_SERVICIO INNER JOIN EQUIPO ON AS_EQUIP_id = EQUIP_id LEFT JOIN SUBCLIENTE ON AS_SC_id = SC_id INNER JOIN LOGO ON AS_LOGO_id = LOGO_id INNER JOIN UBICACION ON AS_UBIC_id = UBIC_id WHERE (AS_CLI_id = @idCliente1 or AS_CLI_id = @idCliente2) and  AS_serie like @serie and AS_id in (SELECT MAX(AS_id) FROM AREA_SERVICIO GROUP BY AS_serie) ORDER BY AS_serie",

  //Query TipoServicio
  getAllTipoServicio:"SELECT TPS_id, TPS_nombre FROM TIPO_SERVICIO ORDER BY TPS_nombre",

  //Querys Tabla PersonaReporta
  getAllPersonaReporta: "SELECT PR_id,PR_nombre,PR_CLI_id FROM PERSONA_REPORTA ORDER BY PR_nombre", 
  getPersonaReportaByIdCliente: "SELECT * FROM PERSONA_REPORTA Where PR_CLI_id = @Id",

  //Query por Cotizacion sin asignar tecnico
  getAreaSinTecnico: "SELECT AS_id, AS_secuencial,AS_SS_id,AS_USU_id,AS_fecha,AS_CLI_id,AS_AT_id,AS_OT_id,AS_OT_codigo,AS_TPS_id,AS_EC_id,AS_UBIC_id,AS_serie,AS_placa,AS_EQUIP_id,AS_LOGO_id,AS_observacionTecnica,AS_FECHA_ing,AS_USU_ing,AS_Subtotal,AS_impuesto,AS_iva,AS_total,AS_descCliente,AS_descuento,AS_descuentoR,AS_descuentoS,AS_descuentoP,AS_fechaIngreso,AS_EstadoFactura,AS_Reporte,AS_SC_id,AS_ES_id,AS_IE_id,AS_SEDE_id,AS_fechaReq,AS_semana,AS_numReq,AS_PR_id,AS_UBIC_id2,AS_TPSP_id,AS_VEND_id,AS_serie2,AS_placa2,AS_EQUIP_id2,AS_LOGO_id2,AS_observacion2,AS_EM_id,AS_CT_idOrigen,UBIC_ciudad,UBIC_provincia,SC_direccion,SS_nombre,CLI_nombre FROM AREA_SERVICIO INNER JOIN UBICACION ON AS_UBIC_id2 = UBIC_id INNER JOIN  SUBCLIENTE ON AS_SC_id = SC_id INNER JOIN SERVICIOS_SEIMALSA ON AS_SS_id = SS_id INNER JOIN CLIENTE ON AS_CLI_id = CLI_id WHERE (AS_SS_id = 2 or AS_SS_id = 4) and (AS_USU_id = 29) and (AS_fecha > '04-29-2023')",

  //Query de obtencion de usuarios con cargo de tecnico
  getAllUsuariosByCargo:"SELECT USU_id,USU_usuario FROM USUARIOS WHERE USU_cargo like 'TECNICO' ORDER BY USU_usuario",

  //Query que actualiza la ct con el id del tecnico 
  updateActivoByTecnico:"UPDATE AREA_SERVICIO SET AS_USU_id = @AS_USU_id,AS_USU_ing = @AS_USU_ing WHERE AS_id = @id  ",

  //Query que obtiene todas las cotizaciones pedientes de los tecnicos
  getAreaByTecnico:"SELECT AS_id, AS_secuencial,AS_SS_id,AS_USU_id,AS_fecha,AS_CLI_id,AS_AT_id,AS_OT_id,AS_OT_codigo,AS_TPS_id,AS_EC_id,AS_UBIC_id,AS_serie,AS_placa,AS_EQUIP_id,AS_LOGO_id,AS_observacionTecnica,AS_FECHA_ing,AS_USU_ing,AS_Subtotal,AS_impuesto,AS_iva,AS_total,AS_descCliente,AS_descuento,AS_descuentoR,AS_descuentoS,AS_descuentoP,AS_fechaIngreso,AS_EstadoFactura,AS_Reporte,AS_SC_id,AS_ES_id,AS_IE_id,AS_SEDE_id,AS_fechaReq,AS_semana,AS_numReq,AS_PR_id,AS_UBIC_id2,AS_TPSP_id,AS_VEND_id,AS_serie2,AS_placa2,AS_EQUIP_id2,AS_LOGO_id2,AS_observacion2,AS_EM_id,AS_CT_idOrigen,UBIC_ciudad,UBIC_provincia,SC_direccion,SS_nombre,CLI_nombre FROM AREA_SERVICIO INNER JOIN UBICACION ON AS_UBIC_id2 = UBIC_id INNER JOIN  SUBCLIENTE ON AS_SC_id = SC_id INNER JOIN SERVICIOS_SEIMALSA ON AS_SS_id = SS_id INNER JOIN CLIENTE ON AS_CLI_id = CLI_id WHERE (AS_SS_id = 2 or AS_SS_id = 4) and (AS_USU_id = @id) and (AS_fecha > '04-29-2023')",
};

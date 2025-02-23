import { Date, DateTime } from "mssql";
import { getConnection, querys, sql } from "../database";

  //GLOBAL REFRIGERACION
  export const getTotalEquiposMapa = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(querys.getDataEquiposMapa);//DataTotalRep
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const getTopFiveTecnicos = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(querys.getTopFiveTecnicos);
        res.json(result.recordset);
      } catch (error) {
        res.status(500);
        res.send(error.message);
      }
  };

  

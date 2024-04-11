import { getConnection, querys, sql } from "../database";

  export const getResumenTaller = async(req, res) =>{
    try {
      const pool = await getConnection();
      const result = await pool
      
        .request()
        .query(querys.getResumenTaller);
        return res.json(result.recordset);
    } catch (error) {
      res.status(500);
    }
  };
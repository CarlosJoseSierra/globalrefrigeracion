import { getConnection, querys, sql } from "../database";
const jwt = require('jsonwebtoken');

export const getVentasDetalle = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
          .request()
          .input("VENTDET_VENT_id", req.params.id)
          .query(querys.getDetalleByIdVenta);
        return res.json(result.recordset);
      } catch (error) {
        res.status(500);
        res.send(error.message);
      }
};

import { getConnection, querys, sql } from "../database";
const jwt = require('jsonwebtoken');

export const getRequerimientosDetalle = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
          .request()
          .input("REQDET_REQ_id", req.params.id)
          .query(querys.getDetalleByIdReq);
        return res.json(result.recordset[0]);
      } catch (error) {
        res.status(500);
        res.send(error.message);
      }
};


import { getConnection, querys, sql } from "../database";

export const getFacturaPorCliente = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getTotalFacturaPorCliente);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

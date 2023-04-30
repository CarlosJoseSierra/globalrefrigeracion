import { getConnection, querys, sql } from "../database";

export const getPersonaReporta = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllPersonaReporta);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getPersonaReportaByIdCliente = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
    .request()
    .input("id", req.params.id)
    .query(querys.getPersonaReportaByIdCliente);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
  };

  
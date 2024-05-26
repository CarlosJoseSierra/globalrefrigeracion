import { getConnection, querys, sql } from "../database";
const jwt = require('jsonwebtoken');

export const getAllRequerimientos = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getRequerimientos);
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
import { getConnection, querys, sql } from "../database";

export const getChatBot = async (req, res) => {
    try {
        const texto = req.params.serie; 
        const palabraBuscada = "obtener";
        const palabraBuscada1 = "req";
        const contiene = texto.includes(palabraBuscada);

      const pool = await getConnection();
      const result = await pool
      .request()
      .input("serie", req.params.serie)
      .query(querys.getHistorialPorSerie); 
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };
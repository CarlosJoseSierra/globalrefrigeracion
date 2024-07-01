import { Router } from "express";
const express = require('express');
const multer = require('multer');
const path = require('path');
import { getConnection, querys, sql } from "../database";

const app = express();
const router = Router();

// Configuración de Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    }
  });
  
  const upload = multer({ storage });
  
  // Ruta para subir imágenes
  app.post('/upload', upload.single('image'), async (req, res) => {
    if (!req.file) {
      return res.status(400).send('No se ha subido ningún archivo.');
    }
  
    try {

        const pool = await getConnection();
        
        res.json(result.recordset);
      // Conectar a SQL Server
      //await sql.connect(sqlConfig);
  
      // Insertar referencia en la base de datos
      const result =  await pool.request().query`INSERT INTO Images (filename, path, uploadedAt) VALUES (${req.file.filename}, ${req.file.path}, GETDATE()); SELECT SCOPE_IDENTITY() AS id;`;
  
      const imageId = result.recordset[0].id;
      res.send(`Archivo subido exitosamente: ${req.file.filename}, ID: ${imageId}`);
    } catch (err) {
      res.status(500).send('Error al guardar la imagen en la base de datos.');
    }
  });
  
export default router;

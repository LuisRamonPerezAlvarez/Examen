require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const NASA_API_KEY = process.env.NASA_API_KEY || "DEMO_KEY"; // Reemplaza con tu clave real

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// ✅ Endpoint NASA (Depurado)
app.get("/apod", async (req, res) => {
  try {
    const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
    res.json(response.data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Error al obtener datos de la NASA" });
  }
});

// ✅ Servir el HTML correctamente
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index2.html"));
});

// ✅ Iniciar Servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor en http://localhost:${PORT}`);
});

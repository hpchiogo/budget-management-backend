
// Créer un fichier server.js  Ce sera votre point d'entrée pour démarrer le serveur Express.

require('dotenv').config();       // Charge les variables d'environnement

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
      

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Pour traiter les corps de requêtes en JSON

// Connecter à MongoDB
mongoose.connect(process.env.MONGO_URI, {
     useNewUrlParser: true, 
     useUnifiedTopology: true
     })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

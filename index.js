
// Créer un fichier server.js  Ce sera votre point d'entrée pour démarrer le serveur Express.

import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config(); // Charger les variables d'environnement

const app = express();
const PORT = process.env.PORT || 5000;
const MONGOURI = process.env.MONGO_URI;

// Middleware
app.use(cors());
app.use(express.json()); // Pour traiter les corps de requêtes en JSON

// Connecter à MongoDB
mongoose
  .connect(MONGOURI)
  .then(() => {
    console.log("Database is connected successfully!");
    // Démarrer le serveur
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.log('MongoDB connection error:', error));


  const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,                             //Ajoutez des validations pour les champs name et age dans le schéma userSchema afin d'éviter les données incohérentes
      minlength: 3
    },
    age: {
      type: Number,
      required: true,
      min: 0
    }
  });
  
  const userModel = mongoose.model('user', userSchema);
  
  //Créer l’endpoint /addUser pour ajouter des documents à la collection user
  app.post("/addUser", async (req, res) => {
    try {
      const newUser = new userModel(req.body);
      await newUser.save();
      res.status(201).json({ message: "Utilisateur ajouté avec succès !" });
    } catch (error) {
      console.error("Erreur lors de l'ajout d'un utilisateur :", error);
      res.status(500).json({ message: "Une erreur est survenue." });
    }
  });
  

// ajouter Un endpoint GET pour /users qui retourne tous les utilisateurs stockés dans la base de données.

app.get('/getUsers', async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const users = await userModel.find()
      .skip((page - 1) * limit)
      .limit(Number(limit));
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Une erreur est survenue." });
  }
});

  

  //Un endpoint PUT pour /updateUser/:id permettant de modifier les informations d'un utilisateur existant.
// PUT : Mise à jour d'un utilisateur
app.put('/updateUser/:id', async (req, res) => {
  try {
    const updatedUser = await userModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Retourner le document mis à jour
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "Utilisateur non trouvé." });
    }
    res.json({ message: "Utilisateur mis à jour avec succès !", updatedUser });
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'utilisateur :", error);
    res.status(500).json({ message: "Une erreur est survenue.", error });
  }
});


  
  //Un endpoint DELETE pour /deleteUser/:id permettant de supprimer un utilisateur.

// DELETE : Suppression d'un utilisateur
app.delete('/deleteUser/:id', async (req, res) => {
  try {
    const deletedUser = await userModel.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "Utilisateur non trouvé." });
    }
    res.json({ message: "Utilisateur supprimé avec succès !" });
  } catch (error) {
    console.error("Erreur lors de la suppression de l'utilisateur :", error);
    res.status(500).json({ message: "Une erreur est survenue.", error });
  }
});


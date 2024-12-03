Titre du projet:

# Budget Management Backend

Description

Ce projet est une API backend permettant de gérer un budget. Il offre des fonctionnalités pour ajouter, afficher, modifier et supprimer des utilisateurs avec MongoDB comme base de données.


Installation

## Installation

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/votre-utilisateur/budget-management-backend.git

2.  Accédez au répertoire du projet :
    cd budget-management-backend

3.  Installez les dépendances :
    npm install

4.  Configurez les variables d'environnement dans un fichier .env :
    MONGO_URI=mongodb://localhost:27017/BudgetDB
    PORT=5000

5. Lancez le projet :
    npm start


#### **Fonctionnalités**
Expliquez les principales fonctionnalités de votre projet :

```markdown
## Fonctionnalités

- Ajouter un utilisateur (`POST /addUser`)
- Afficher tous les utilisateurs (`GET /getUsers`)
- Mettre à jour un utilisateur (`PUT /updateUser/:id`)
- Supprimer un utilisateur (`DELETE /deleteUser/:id`)


## Endpoints
Documentez les endpoints de votre API avec leurs méthodes, paramètres et exemples:
## Endpoints

### Ajouter un utilisateur
- **URL** : `/addUser`
- **Méthode** : POST
- **Corps** :
  ```json
  {
    "name": "Alice",
    "age": 30
  }
## Réponse:
{
  "message": "Utilisateur ajouté avec succès !",
  "newUser": {
    "_id": "1234567890",
    "name": "Alice",
    "age": 30
  }
}


## Afficher tous les utilisateurs
URL : /getUsers
Méthode : GET
Réponse :
json
Copier le code

[
  {
    "_id": "1234567890",
    "name": "Alice",
    "age": 30
  }
]


## 
#### **Technologies utilisées**
Listez les principales technologies ou outils utilisés :

```markdown
## Technologies utilisées

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- cors


## Contributeurs
Ajoutez votre nom et encouragez d'autres contributeurs

 ## Contributeurs

- [DONGMO CHIOGO HIPPOLYTE](https://github.com/votre-utilisateur)


## Licence
Indiquez si votre projet est open-source et ajoutez une licence si nécessaire 

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus d'informations.


## Ajoutez des captures d'écran ou GIFs
Vous pouvez ajouter des visuels pour rendre votre README plus attractif. Placez les captures dans un dossier assets et utilisez la syntaxe suivante 
![Aperçu de l'API](./assets/preview.png)


## Mettez à jour et validez
Une fois le fichier README.md créé, ajoutez-le au contrôle de version et faites un commit 

git add README.md
git commit -m "Ajout du fichier README.md"
git push

   


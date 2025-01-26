# Description #

Ce projet est une API REST simple pour la gestion des spécialistes. Elle permet d’afficher, d’ajouter, de mettre à jour et de supprimer des spécialistes à l’aide des méthodes HTTP (GET, POST, PUT, DELETE). Idéal pour explorer les bases des APIs REST et la manipulation des données JSON.

# Données #

URI: localhost:XXXX/
Endpoint: .../(Le reste du chemin)

Exemple:
localhost:4208/tests/1
Endpoint = /tests/1

# Routes #

Afficher la liste de spécialistes ->
GET
localhost:3000/specialiste

Afficher les informations d'un spécialiste ->
GET
localhost:3000/specialiste/{id}

Ajouter un spécialiste ->
POST
localhost:3000/specialistes

Syntaxe pour ajouter un spécialiste:
{"id": 1, "nom": "Pablo", "experience": (insérez un chiffre)}

Mise à jour d'un spécialiste ->
PUT
localhost:3000/specialiste/{id}

Syntaxe pour ajouter un spécialiste:
{"id": 1, "nom": "Pablo", "experience": (insérez un chiffre)}

Suppression d'un spécialiste ->
DELETE
localhost:3000/specialiste/{id}

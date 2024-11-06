# _Connaissance générale_ #

URI: localhost:XXXX/
Endpoint: .../(Le reste du chemin)

Exemple:
localhost:4208/tests/1
Endpoint = /tests/1

---

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

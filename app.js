const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

let rendezvous = [
  {
    id: 1,
    date: "28-04-24",
    specialiste: "George",
    service: "coloration",
  },
  {
    id: 2,
    date: "11-05-24",
    specialiste: "Luidgi",
    service: "épilation",
  },
  {
    id: 3,
    date: "11-05-24",
    specialiste: "pablo",
    service: "coupe de cheveux",
  },
];
let clients = [
  { id: "1", nom: "pablo", email: "pablo@gmail.com" },
  { id: "2", nom: "Laurent", email: "laurent@gmail.com" },
  { id: "3", nom: "emile", email: "emile@gmail.com" },
];
let specialistes = [
  { id: "1", nom: "emile", experience: "10" },
  { id: "2", nom: "benny", experience: "1" },
  { id: "3", nom: "lauvens", experience: "2" },
];

//Routes pour les Rendez-vous /////////////////////////////////////////////////////////////////////
app.get("/rdvs", (req, res) => {
  const rdvReferences = rendezvous.map((rdv) => `/rdv/${rdv.id}`);
  res.json(rdvReferences);
});

app.get("/rdv/:id", (req, res) => {
  const rdvId = parseInt(req.params.id);
  const rdv = rendezvous.find((rdv) => rdv.id === rdvId);
  if (rdv) {
    res.json(rdv);
  } else {
    res.status(404).json({ error: "Rendez-vous non trouvée" });
  }
});

app.post("/rdvs", (req, res) => {
  const newRdv = {
    id: rendezvous.length + 1,
    date: req.body.date,
    specialiste: req.body.specialiste,
    service: req.body.service,
  };
  rendezvous.push(newRdv);
  res
    .status(201)
    .json({ message: "Rendez-vous ajoutée avec succès", rdv: newRdv });
});

app.put("/rdv/:id", (req, res) => {
  const rdvId = parseInt(req.params.id);
  const rdv = rendezvous.find((rdv) => rdv.id === rdvId);
  if (rdv) {
    rdv.date = req.body.date;
    rdv.specialiste = req.body.specialiste;
    rdv.service = req.body.service;

    res.json({ message: "Rendez-vous mise à jour avec succès", rdv });
  } else {
    res.status(404).json({ error: "Rendez-vous non trouvée" });
  }
});

app.delete("/rdv/:id", (req, res) => {
  const rdvId = parseInt(req.params.id);
  rendezvous = rendezvous.filter((rdv) => rdv.id !== rdvId);
  res.json({ message: "Rendez-vous supprimée avec succès" });
});

//Routes pour les clients /////////////////////////////////////////////////////////////////////
app.get("/clients", (req, res) => {
  const clientReferences = clients.map((client) => `/client/${client.id}`);
  res.json(clientReferences);
});

app.get("/client/:id", (req, res) => {
  const clientId = parseInt(req.params.id);
  const client = clients.find((client) => client.id === clientId);
  if (client) {
    res.json(client);
  } else {
    res.status(404).json({ error: "client non trouvée" });
  }
});

app.post("/clients", (req, res) => {
  const newClient = {
    id: clients.length + 1,
    nom: req.body.nom,
    email: req.body.email,
  };
  clients.push(newClient);
  res
    .status(201)
    .json({ message: "client ajoutée avec succès", client: newClient });
});

app.put("/client/:id", (req, res) => {
  const clientId = parseInt(req.params.id);
  const client = clients.find((client) => client.id === clientId);
  if (client) {
    client.nom = req.body.nom;
    client.email = req.body.email;
    res.json({ message: "Client mise à jour avec succès", client });
  } else {
    res.status(404).json({ error: "Client non trouvée" });
  }
});

app.delete("/client/:id", (req, res) => {
  const clientId = parseInt(req.params.id);
  clients = clients.filter((client) => client.id !== clientId);
  res.json({ message: "Client supprimée avec succès" });
});

//Routes pour les specialistes /////////////////////////////////////////////////////////////////////
app.get("/specialistes", (req, res) => {
  const specialisteReferences = specialistes.map(
    (specialiste) => `/specialiste/${specialiste.id}`
  );
  res.json(specialisteReferences);
});

app.get("/specialiste/:id", (req, res) => {
  const specialisteId = parseInt(req.params.id);
  const specialiste = specialistes.find(
    (specialiste) => specialiste.id === specialisteId
  );
  if (specialiste) {
    res.json(specialiste);
  } else {
    res.status(404).json({ error: "specialiste non trouvée" });
  }
});

app.post("/specialistes", (req, res) => {
  const newSpecialiste = {
    id: specialistes.length + 1,
    nom: req.body.nom,
    experience: req.body.experience,
  };
  specialistes.push(newSpecialiste);
  res.status(201).json({
    message: "specialiste ajoutée avec succès",
    specialiste: newSpecialiste,
  });
});

app.put("/specialiste/:id", (req, res) => {
  const specialisteId = parseInt(req.params.id);
  const specialiste = specialistes.find(
    (specialiste) => specialiste.id === specialisteId
  );
  if (specialiste) {
    specialiste.nom = req.body.nom;
    specialiste.experience = req.body.experience;
    res.json({ message: "specialiste mise à jour avec succès", specialiste });
  } else {
    res.status(404).json({ error: "specialiste non trouvée" });
  }
});

app.delete("/specialiste/:id", (req, res) => {
  const specialisteId = parseInt(req.params.id);
  specialistes = specialistes.filter(
    (specialiste) => specialiste.id !== specialisteId
  );
  res.json({ message: "specialiste supprimée avec succès" });
});

app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Bienvenidos a su app de acesoria favorita.");
});
app.get("/usuarios", (req, res) => {
  let usuarios = [
    { idobject: "025", nombre: "luca", cedula: "132456789", edad: 30, telefono: "7895245", correoelectronico: "lucam@gmail.com", idpreferencias: "001", }
  ];
  res.send(usuarios);
});
app.get("/preferencias", (req, res) => {
  let preferencias = [
    { idobject: "001", porpantalla: "6.99p", bateria: "4000mAh", poralmacenamiento: "", porcamara: "", porprocesador: "", }
  ];
  res.send(preferencias);
});
app.get("/app", (req, res) => {
  let app = [
    { idobject: "002", nombre: "", caracteristicas: "", desarrollador: "", idusuarios: "025", idgamas: "003" }
  ];
  res.send(app);
});
app.get("/gamas", (req, res) => {
  let gamas = [
    { idobject: "003", tipodepantalla: "", tipodeprocesador: "", velprocesador: "", idcelulares: "005", idpc: "004" }
  ];
  res.send(gamas);
});
app.get("/PCs", (req, res) => {
  let PCs = [
    { idobject: "004", nombre: "Pavilon", precio: "1200000", marca: "HP", pantalla: "19p", procesador: "i3", ram: "4gb", almacenamiento: "1TB", bateria: "22000", distribuidor: "Compulago", }
  ];
  res.send(PCs);
});
app.get("/celulares", (req, res) => {
  let celulares = [
    { idobject: "005", nombre: "RedmiNote7", precio: "700000", marca: "Xiaomi", pantalla: "5.99p", tamaño: "30mm", peso: "150gr", procesador: "Snapdragon", ram: "4gb", almacenamiento: "64gb", bateria: "4000mAh", camara: "20mp", distribuidor: "Xiaomilatam", flash: "Doble amarillo", }
  ];
  res.send(celulares);
});
app.listen(3000, () => {
  console.log("Server on port http://localhost:3000");
});

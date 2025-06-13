const personasModelo = [
  { id: 1, nombre: "Francisco", apellido: "Pérez", edad: 30, email: "juanp@gmail.com" },
  { id: 2, nombre: "Ignacio", apellido: "Gómez", edad: 25, email: "luciag@gmail.com" },
  { id: 3, nombre: "Matias", apellido: "López", edad: 40, email: "mariano.lopez@gmail.com" },
  { id: 4, nombre: "Nicolas", apellido: "Martínez", edad: 35, email: "ana.martinez@gmail.com" },
  { id: 5, nombre: "Lautaro", apellido: "Díaz", edad: 28, email: "carlos.diaz@gmail.com" }
];
function getPersonas() {
  return personasModelo;
}
module.exports = {getPersonas};
const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD en sipo.cl", () => {
    it("GET /tienda devuelve el código 200 y array de objetos", async () => {
        const res = await request(server).get("/tienda");
        expect(res.status).toBe(200);
        expect(res.body).toBeInstanceOf(Array);
        expect(res.body.length).toBeGreaterThan(0)
    })

    it("Status code 404 al eliminar producto con id inexistente", async () => {
        const idCafeAEliminar = 150;
        const res = await request(server)
          .delete(`/users/1/ventas/${idCafeAEliminar}`)
          .send()
        expect(res.status).toBe(404);
      });

      it("Status code 201 al agregar un usuario", async () => {
        const usuario = {nombre: "Federico", apellidos: "Garcia", email: "fgarcia@mail.com", password: "12345" };
        const res = await request(server).post("/users").send(usuario);
        expect(res.status).toBe(201);
      });

      it("Status code 400 al actualizar datos de un usuario donde id parametro sea distinto a id payload", async () => {
        const idUsuarioaModificar = 6;
        const usuario = { id: idUsuarioaModificar, nombre: "Joan", apellidos: "Jones", pass: "12345", image: "https://picsum.photos/id/113/300/200"};
        const res = await request(server)
          .patch(`/update/${idUsuarioaModificar + 1}`)
          .send(usuario);
        expect(res.status).toBe(400);
      });
})

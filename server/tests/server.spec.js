const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD en sipo.cl", () => {
    it("GET /tienda devuelve el código 200 y array de objetos", async () => {
        const response = await request(server).get("/tienda")
        const status = response.statusCode
        expect(status).toBe(200)
        expect(response.body).toBeInstanceOf(Array)
        // expect(response.body.length).toBeGreaterThanOrEqual(1)
    })
})

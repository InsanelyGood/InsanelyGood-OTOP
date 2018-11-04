const request = require("supertest");
const server = require("../app");

describe("GET products", () => {
  it("Should return object of products.", done => {
    const res = request(server)
      .get("/products")
      .set("Accept-Language", "en")
      .expect("Content-Type", "application/json")
      .expect(200);
    done();
  });
});

const request = require("supertest");
const server = require("../app");

describe("GET orders", () => {
  it("Should return object of orders.", done => {
    const res = request(server)
      .get("/orders")
      .set("Accept-Language", "en")
      .expect("Content-Type", "application/json")
      .expect(200);
    done();
  });
});

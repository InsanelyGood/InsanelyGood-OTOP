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

// POST create new order
describe('POST orders/:username/create', function () {
  it('Should return text "Created order success"', function (done) {
    const res = request(server)
      .post('/orders/admin/create')
      .set('Content-Type', 'application/json')
      .send({
        "purchasedList": [
          {
            "product": {
              "_id": "5ba1bf2f6a9a8ce04c828304",
              "id": "132397724140732",
              "name": "Shoe",
              "image": "http://static.asiawebdirect.com/m/bangkok/portals/bangkok-com/homepage/shopping-good-buys/thai-products/pagePropertiesImage/otop-shopping.jpg",
              "price": 50,
              "description": "This is shoe",
              "category": "Shoe",
              "region": "central",
              "__v": 0
            },
            "quantity": 5
          }
        ],
        "dateTime": "2018-11-04T15:15:18+07:00",
        "totalPrice": 250,
        "status": "orderCreated",
        "shippingAddress": "aaa aaa aaa aaaa",
        "userId": "5bbc509c564e190ab8b688c6"
      })
      .expect(200)
      .end((err, res) => {
        if (err) {
          done.fail(err)
        } else {
          done()
        }
      })
  })
})
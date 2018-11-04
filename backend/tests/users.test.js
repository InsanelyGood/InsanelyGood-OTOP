const request = require('supertest')
const server = require('../app')

// GET User Info test
describe('GET users/:username/information', function () {
    it('Should return object of user.', function (done) {
        const res = request(server)
            .get('/users/newUserAom/information')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            .expect(function (res) {
                expect(res.body.username).toBe('newUserAom')
            })
            .end((err, res) => {
                if (err) {
                    done.fail(err)
                } else {
                    done()
                }
            })
    })
})

// POST User Info save
describe('POST users/:username/information/save', function () {
    it('Should return update data success', function (done) {
        const res = request(server)
            .post('/users/testUpdate/information/save')
            .set('Content-Type', 'application/json')
            .send({
                "username": "testUpdate",
                "password": "testUpdate",
                "firstname": "testFirstname",
                "lastname": "testLastname",
                "email": "test@insanely.com",
                "address": "aaa aaa aaa aaaa",
                "telephoneNumber": "0987654320"
            })
            .expect(200)
            .expect(function (res) {
                expect(res.text).toBe('Update user data success')
            })
            .end((err, res) => {
                if (err) {
                    done.fail(err)
                } else {
                    done()
                }
            })
    })
})

// GET User checkout Info
describe('GET users/:username/checkout', function () {
    it('Should return user address and list of product.', function (done) {
        const res = request(server)
            .get('/users/newUserAom/checkout')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            .expect(function (res) {
                if(!('address' in res.body))   throw new Error("Missing address key")
                if(!('products' in res.body))  throw new Error("Missing products key")
                if(!('quantity' in res.body.products[0]))  throw new Error("Missing quantity key")
            })
            .end((err, res) => {
                if (err) {
                    done.fail(err)
                } else {
                    done()
                }
            })
    })
})
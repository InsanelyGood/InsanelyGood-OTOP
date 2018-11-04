const request = require('supertest')
const server = require('../app')

// GET User Info test
describe('GET users/:username/information', function () {
    it('Should return object of user.', function (done) {
        const res = request(server)
            .get('/users/aom/information')
            .expect('Content-Type', 'application/json')
            .expect(200)
            .expect(function (res) {
                expect(res.body.username).toBe('aom')
            })
        done()
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
                console.log("res>>>>>",res)
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

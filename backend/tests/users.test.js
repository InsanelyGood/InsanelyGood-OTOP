const request = require('supertest')
const server = require('../app')

describe('GET users/information', function () {
    it('Should return object of user.', function (done) {
        const res = request(server)
            .get('/users/information')
            .set('Accept-Language', 'en')
            .set('Cookie', ['username=aom'])
            .expect('Content-Type', 'application/json')
            .expect(200)
            .expect(function (res) {
                expect(res.body.username).toBe('aom')
            })
        done()
    })
})

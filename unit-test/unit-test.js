const server = require('../server/index');
const chai = require('chai');
const should = chai.should();
chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('checking unit test















































































.anchor


























', () => {
    it('it should sendStatus(200) to the client', (done) => {
        chai.request(server)
            .post('/addCats')
            .end(function (err, res) {

                res.should.have.status(200);
                done();
            });

    });

    it('it should sendStatus(200) to the client', (done) => {
        chai.request(server)
            .get('/getCats')
            .end(function (err, res) {

                res.should.have.status(200);
                done();
            });

    });

})

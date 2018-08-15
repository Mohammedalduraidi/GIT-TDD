const server = require('../server/index');
const chai = require('chai');
const should = chai.should();
chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('alo jackel is here', () => {
    it('it should sendStatus(200) to the client', (done) => {
        chai.request(server)
            .post('/addCats')
            .end(function (err, res) {

                res.should.have.status(200);
                done();
            });
    });
})

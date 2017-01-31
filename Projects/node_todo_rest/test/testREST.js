var assert = require('assert');
var request = require('request');
/*
     The REST backend needs to run, like ...
     $ nodemon

*/
describe('REST test', function() {
    describe('#REST API', function() {
        it('get all ', function() {
            request.get('http://localhost:3000/list', function(err, res, body) {
                //expect(res.statusCode).to.equal(400);
                //expect(res.body).to.equal('wrong header');
                //console.log("sdadsad");
                done();
            });
            //console.log("sdadsad");
        });
        it('get an id ', function() {
            request.get('http://localhost:3000/list/1', function(err, res, body) {
                //console.log(res.body);
                done();
            });
        });
    });
});

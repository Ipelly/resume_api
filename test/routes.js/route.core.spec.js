'use strict'


let chai = require('chai');
let chaiHttp = require('chai-http');
let chaiAsPromised = require('chai-as-promised');
let supertest = require('supertest');
let server=require("../../src/app/app");

global.app = server;
global.expect = chai.expect;
global.request = supertest(app);



describe("Route : API Endpoint Inegration test", ()=> {

    describe("Get the answer of the question of resume submission", ()=>{
        it('should return OK', (done)=> {
            request.get('/app')
                .expect(200)
                .end(function(err, res) {
                    expect(res.text).to.be.an('String');
                    expect(res.text).to.equal('OK');
                    done(err);
            });
        });
        
        it('should return OK when there is query parameter', (done)=> {
            request.get('/questionnaires')
                .expect(200)
                .end((err, res)=> {
                    expect(res.text).to.be.an('String');
                    expect(res.text).to.equal('OK');
                    done(err);
            });
        });
    });

})

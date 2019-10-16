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

    describe("GET All users registered and registered with membership projects", ()=>{

  
        it('should return a list of users', (done)=> {
            request.get('/users')
                .expect(200)
                .end(function(err, res) {
                    expect(res.body.userWithProject).to.be.an('Array');
                    done(err);
            });
        });
        
        it('should return 2 projects under firstName 1 lastname 1', (done)=> {
            request.get('/users')
                .expect(200)
                .end((err, res)=> {
                    expect(res.body.userWithProject[0].projects).to.have.lengthOf(2);
                    done(err);
            });
        });

        it('should return no projects under firstName 2 lastname 2', (done)=> {
            request.get('/users')
                .expect(200)
                .end((err, res)=> {
                    expect(res.body.userWithProject[1].projects).to.have.lengthOf(0);
                    done(err);
            });
        });
    });

})

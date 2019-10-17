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
        
        it('should return OK when there is no query parameter', (done)=> {
            request.get('/questionnaires')
                .expect(200)
                .end((err, res)=> {
                    expect(res.text).to.be.an('String');
                    expect(res.text).to.equal('OK');
                    done(err);
            });
        });

        it('should return Name of the applicant when query parameter is', (done)=> {
            request.get('/questionnaires?q=Name')
                .expect(200)
                .end((err, res)=> {
                    expect(res.text).to.be.an('String');
                    expect(res.text).to.equal('Iqbal M Ipel');
                    done(err);
            });
        });

        it('should return Email Address of the applicant when query parameter is', (done)=> {
            request.get('/questionnaires?q=Email Address')
                .expect(200)
                .end((err, res)=> {
                    expect(res.text).to.be.an('String');
                    expect(res.text).to.equal('iqbalipel@gmail.com');
                    done(err);
            });
        });

        it('should return Phone of the applicant when query parameter is', (done)=> {
            request.get('/questionnaires?q=Phone')
                .expect(200)
                .end((err, res)=> {
                    expect(res.text).to.be.an('String');
                    expect(res.text).to.equal('6468661775');
                    done(err);
            });
        });

        it('should return Position of the applicant when query parameter is', (done)=> {
            request.get('/questionnaires?q=Position')
                .expect(200)
                .end((err, res)=> {
                    expect(res.text).to.be.an('String');
                    expect(res.text).to.equal('Software Engineer');
                    done(err);
            });
        });

        it('should return Years of the applicant when query parameter is', (done)=> {
            request.get('/questionnaires?q=Years')
                .expect(200)
                .end((err, res)=> {
                    expect(res.text).to.be.an('String');
                    expect(res.text).to.equal('10 Years');
                    done(err);
            });
        });

        it('should return Phone of the applicant when query parameter is', (done)=> {
            request.get('/questionnaires?q=Phone')
                .expect(200)
                .end((err, res)=> {
                    expect(res.text).to.be.an('String');
                    expect(res.text).to.equal('6468661775');
                    done(err);
            });
        });

        it('should return Referrer of the applicant when query parameter is', (done)=> {
            request.get('/questionnaires?q=Referrer')
                .expect(200)
                .end((err, res)=> {
                    expect(res.text).to.be.an('String');
                    expect(res.text).to.equal('Linkedin');
                    done(err);
            });
        });

        it('should return Degree of the applicant when query parameter is', (done)=> {
            request.get('/questionnaires?q=Degree')
                .expect(200)
                .end((err, res)=> {
                    expect(res.text).to.be.an('String');
                    done(err);
            });
        });

        it('should return Resume of the applicant when query parameter is', (done)=> {
            request.get('/questionnaires?q=Resume')
                .expect(200)
                .end((err, res)=> {
                    expect(res.text).to.be.an('String');
                    expect(res.text).to.equal('https://drive.google.com/file/d/1JK7MNTamjitUq0f-BgxP2j028HiO14mq/view?usp=sharing');
                    done(err);
            });
        });

        it('should return Source of the applicant when query parameter is', (done)=> {
            request.get('/questionnaires?q=Source')
                .expect(200)
                .end((err, res)=> {
                    expect(res.text).to.be.an('String');
                    expect(res.text).to.equal('https://github.com/Ipelly/resume_api.git');
                    done(err);
            });
        });

        it('should return Status of the applicant when query parameter is', (done)=> {
            request.get('/questionnaires?q=Status')
                .expect(200)
                .end((err, res)=> {
                    expect(res.text).to.be.an('String');
                    expect(res.text).to.equal('GC EAD');
                    done(err);
            });
        });
    });

})

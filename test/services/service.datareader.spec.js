'use strict'



var expect = require('chai').expect;
let chai = require('chai');
let chaiHttp = require('chai-http');
let server=require("../../src/app/app");
let dataReaderService = require('../../src/app/services/service.data.reader');

let should = chai.should();
chai.use(chaiHttp);



describe("Service : Data Reader ", ()=> {
  describe("Fetch answers : fetchAllAnswers", ()=>{
      let answers = null;
      beforeEach(async ()=>{
        answers = await dataReaderService.fetchAllAnswers();
      });

      it("should return a list of answers", ()=>{
          expect(answers).to.be.an('Array');
      });

      it("should return 12 answers", ()=>{
          expect(answers.length).equal(12);
      });
  });

})




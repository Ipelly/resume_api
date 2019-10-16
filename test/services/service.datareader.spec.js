'use strict'



var expect = require('chai').expect;
let chai = require('chai');
let chaiHttp = require('chai-http');
let server=require("../../src/app/app");

let config = require('../../src/config/config');
let dataReaderService = require('../../src/app/services/service.data.reader');

let should = chai.should();
chai.use(chaiHttp);



describe("Service : Data Reader ", ()=> {
  describe("Fetch registered users : fetchRegisteredUsers", ()=>{
      let registeredUsers = null;
      beforeEach(async ()=>{
          registeredUsers = await dataReaderService.fetchRegisteredUsers(config.api_endpoints.registeredusers);
      });

      it("should return a list of registered users", ()=>{
          expect(registeredUsers).to.be.an('Array');
      });

      it("should return 20 registered users", ()=>{
          expect(registeredUsers.length).equal(20);
      });
  });

  describe("Fetch unregistered users : fetchUnregisteredUsers", ()=> {
      let unregisteredUsers = null;
      beforeEach(async ()=>{
          unregisteredUsers = await dataReaderService.fetchUnregisteredUsers(config.api_endpoints.un_registeredusers);
      });

      it("should return a list of unregistered users", ()=>{
        expect(unregisteredUsers).to.be.an('Array');
      });

      it("should return 15 unregistered users", ()=>{
        expect(unregisteredUsers.length).equal(15);
      });

  });

  describe("Fetch all project : fetchProjects", ()=> {
      let projects = null;
      beforeEach(async ()=>{
          projects = await dataReaderService.fetchProjects(config.api_endpoints.project_memberships);
      });

      it("shoul return a list of projects", ()=>{
        expect(projects).to.be.an('Array');
      });

      it("shoul return 37 registered users", ()=>{
          expect(projects.length).equal(37);
      });
  });
})




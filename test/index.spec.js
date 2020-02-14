const mocha = require("mocha");
const expect = require("chai").expect;
const { app } = require("../index");

describe("Test Todo", () => {
    it("Should export app", () => {
        expect(app).to.exist;
    });
});
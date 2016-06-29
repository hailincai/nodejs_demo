var expect = require('chai').expect;
var request = require('request');

describe("Color Code Converter api", function(){
  describe("RGB to HEX conversion", function(){
    var url = "http://localhost:3000/rgbToHex?red=255&green=255&blue=255";

    it("returns status 200", function(){
      request(url, function(error, response, body){
        expect(response.statusCode).to.equal(200);
      });
    });
    it("returns the colr in hex", function(){
      request(url, function(error, response, body){
        expect(body).to.equal("ffffff");
      });
    });
  });

  describe("HEX to RGB conversion", function(){
    var url = "http://localhost:3000/hexToRgb?hex=00ff00";

    it("returns status 200", function(){
      request(url, function(error, response, body){
        expect(response.statusCode).to.equal(200);
      });
    });
    it("returns the colr in RGB", function(){
      request(url, function(error, response, body){
        expect(body).to.equal("[0,255,0]");
      });
    });
  });
});

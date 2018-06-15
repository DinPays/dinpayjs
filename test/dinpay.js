var Buffer = require("buffer/").Buffer;
var should = require("should");
var DinPay = require("../index.js");

describe("DinPayJS", function () {

	it("should be ok", function () {
		(DinPay).should.be.ok;
	});

	it("should be object", function () {
		(DinPay).should.be.type("object");
	});

	it("should have properties", function () {
		var properties = ["transaction", "signature", "vote", "delegate", "crypto"];

		properties.forEach(function (property) {
			(DinPay).should.have.property(property);
		});
	});

});

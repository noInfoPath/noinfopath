describe("NoInfoPath Globals", function() {

	it("Noid makes noid", function() {
		console.log(noInfoPath.createNoid());
	});

	it("isNoid can detect if noid or not", function() {
		console.log(noInfoPath.isNoid(noInfoPath.createNoid()));
	});

});

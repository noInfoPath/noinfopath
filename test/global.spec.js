describe("NoInfoPath Globals", function() {

	it("Noid makes noid", function() {
		console.log(noInfoPath.createNoid());
	});

	it("isNoid can detect if noid or not", function() {
		console.log(noInfoPath.isNoid(noInfoPath.createNoid()));
	});


	describe("sanitize", function() {
		it("sanitize gets rid of leading digits", function() {
			expect(noInfoPath.sanitize("123123asdfasdf")).toBe("asdfasdf");
		});

		it("sanitize gets rid of any spaces", function() {
			expect(noInfoPath.sanitize("12 3123a  sd f a s   df")).toBe("asdfasdf");
		});
		it("doesnt error out on numbers", function() {
			expect(noInfoPath.sanitize(1)).toBe("");
		});
		it("strips puncuation", function() {
			expect(noInfoPath.sanitize(";23749hello;")).toBe("hello");			
		});
	});


});

var expect = require("chai").expect;

before("root setup code", function () {
  console.log("Root Setup code");
});

after("root teardown code", function () {
  console.log("Root Teardown code");
});
beforeEach("root setup for each test", function () {
  console.log("Root Setup code for each test");
});

afterEach("root teardown for each test", function () {
  console.log("Root Teardown code for each test");
});

describe("test_suite2.b", function () {
  it("test3", function () {
    console.log("test3");
    expect(true).to.equal(true);
  });
});

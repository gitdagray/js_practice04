const assert = chai.assert;

describe("Practice Assignment 4", function () {
  describe("Question 1", function () {
    it("The variable myNumber should hold the expected value after the loop completes.", function () {
      let result = question1(0);
      assert.equal(result, 100);
    });
    it("The variable myNumber should hold the expected value if the loop does not execute.", function () {
      result = question1(105);
      assert.equal(result, 105);
    });
  });
  describe("Question 2", function () {
    it("The variable myNumber should hold the expected value if the loop reaches the value of 10.", function () {
      let result = question2(20);
      assert.equal(result, 10);
    });
    it("The variable myNumber should hold the expected value if the loop completes.", function () {
      let result = question2(9);
      assert.equal(result, 0);
    });
    it("The variable myNumber should hold the expected value if the loop does not execute.", function () {
      let result = question2(-2);
      assert.equal(result, -2);
    });
  });
  describe("Question 3", function () {
    it("The variable i should hold the required value if the variable myString does not contain the letter s.", function () {
      let result = question3("football");
      assert.equal(result, 7);
    });
    it("The variable i should hold the required value if the variable myString contains a lower case letter s.", function () {
      let result = question3("cars");
      assert.equal(result, 3);
      result = question3("avengers");
      assert.equal(result, 7);
    });
    it("The variable i should hold the required value if the variable myString contains an upper case letter s.", function () {
      let result = question3("Simpsons");
      assert.equal(result, 0);
      result = question3("fugitiveS");
      assert.equal(result, 8);
    });
  });
  describe("Question 4", function () {
    it("The variable myNumber should hold the required value if myNumber starts with a value of -1.", function () {
      let result = question4(-1);
      assert.equal(result, 7);
    });
    it("The variable myNumber should hold the required value if myNumber starts with a value of 0.", function () {
      let result = question4(0);
      assert.equal(result, 6);
    });
    it("The variable myNumber should hold the required value if myNumber starts with a value of 1.", function () {
      let result = question4(1);
      assert.equal(result, 7);
    });
    it("The variable myNumber should hold the required value if myNumber starts with a value of 2.", function () {
      let result = question4(2);
      assert.equal(result, 6);
    });
  });
  describe("Question 5", function () {
    it("The variable myValue should hold the reversed value of myString.", function () {
      let result = question5("football");
      assert.match(result, /^llabtoof$/);
    });
    it("The variable myValue should remove not contain any white spaces.", function () {
      let result = question5(
        "                      Indiana Jones                    "
      );
      assert.match(result, /^senojanaidni$/);
    });
    it("The variable myValue should contain all lower case letters.", function () {
      let result = question5("Taco Cat");
      assert.match(result, /^tacocat$/);
    });
  });
});

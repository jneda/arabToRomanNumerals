const app = require("../app.js");

describe("convertToRoman", () => {
  it("should return the string 'II'", () => {
    expect(app.convertToRoman(2)).toEqual("II");
  });
  it("should return the string 'III'", () => {
    expect(app.convertToRoman(3)).toEqual("III");
  });
  it("should return the string 'IV'", () => {
    expect(app.convertToRoman(4)).toEqual("IV");
  });
});
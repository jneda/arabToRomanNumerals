const app = require("../app.js");

describe("arabToRomanDigit", () => {
  it("should return [0, 'M']", () => {
    expect(app.arabToRomanDigit(1000, 1000, "")).toEqual([0, "M"]);
  });
  it("should return [1, 'C']", () => {
    expect(app.arabToRomanDigit(100, 101, "")).toEqual([1, "C"]);
  });
});

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
  it("should return the string 'MM'", () => {
    expect(app.convertToRoman(2000)).toEqual("MM");
  });
  it("should return the string 'CM'", () => {
    expect(app.convertToRoman(900)).toEqual("CM");
  });
  it("should return the string 'D'", () => {
    expect(app.convertToRoman(500)).toEqual("D");
  });
  it("should return the string 'CD'", () => {
    expect(app.convertToRoman(400)).toEqual("CD");
  });
  it("should return the string 'DCC'", () => {
    expect(app.convertToRoman(700)).toEqual("DCC");
  });
  it("should return the string 'D'", () => {
    expect(app.convertToRoman(500)).toEqual("D");
  });
  it("should return the string 'CD'", () => {
    expect(app.convertToRoman(400)).toEqual("CD");
  });
  it("should return the string 'CCC'", () => {
    expect(app.convertToRoman(300)).toEqual("CCC");
  });
  it("should return the string 'XII'", () => {
    expect(app.convertToRoman(12)).toEqual("XII");
  });
  it("should return the string 'XVI'", () => {
    expect(app.convertToRoman(16)).toEqual("XVI");
  });
});
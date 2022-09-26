const app = require("../app.js");

describe("test de jest", () => {
  it("devrait retourner une phrase", () => {
    expect(app.sentence.length).toBeGreaterThan(0);
  });
  it("devrait avoir une longueur de 11 caractères", () => {
    expect(app.sentence.length).toEqual(11);
  });
});
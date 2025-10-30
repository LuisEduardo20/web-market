describe("Home page", () => {
  it("shows title", () => {
    cy.visit("/");
    cy.contains("Home");
  });
});

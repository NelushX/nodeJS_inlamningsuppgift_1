const localhost = "http://localhost:8000";

describe("UI testing for Todo app", () => {
    
    it("Is server up?", () => {
        cy.visit(localhost);
    });

    it("Visit page1", () => {
        cy.contains("1").click();
        cy.url().should("include", "/?page=1");
    });

    it("Visit page2", () => {
        cy.contains("2").click();
        cy.url().should("include", "/?page=2");
    });
    
    it("Add Oscar", () => {
        cy.get("input").type("Oscar is tha best! {enter}");
    });

    it("Delete all", () => {
        cy.get(".delete").each(() => {
            cy.get(".delete").first().click();
        });
    })
});
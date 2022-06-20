/// <reference types="cypress" />


let FrameStatic

let MassaGerada;

describe("Gerar iframe Ecommerce", () => {
    beforeEach(() => {
        cy.task("MassaDeTeste").then((DADOS) => {
            MassaGerada = DADOS;
        });
    });

    it('Gerar Iframe ', () => {
        let tokenGerado = localStorage.getItem('auth')
        let LinkFrame
        cy.log(tokenGerado),
            cy.request({
                method: "POST",
                url: Cypress.env("baseUrl") + "/v2/Link",
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${tokenGerado}`
                },
                failOnStatusCode: false,
                body: MassaGerada
            }).then((response) => {
                LinkFrame = response.body.frameLink
            }).as('LinkFrame');


        cy.get('@LinkFrame').then(response => {
            cy.log(LinkFrame)
            window.sessionStorage.setItem('', LinkFrame);

            //gerar frame direto

            cy.request({
                method: "GET",
                url: LinkFrame,
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${tokenGerado}`
                },
                failOnStatusCode: false
            }).then((response) => {
                FrameStatic = response.body.url
            }).as('FrameStatic');
            cy.get('@FrameStatic').then(response => {
                cy.visit(FrameStatic)
                cy.get('.cardForm > :nth-child(1) > input').type("Maria de Fatima")
                cy.get('#cardNumber').type("4905242960832711")
                cy.get('#cardExpiration').type("0822")
                cy.get('#cardSecurityCode').type("676")


                cy.get('select option').eq(2)
                    .its('length', { log: false }).then(n => {

                        cy.get('select').select(Cypress._.random(n + 1))
                    })


            })
        })
    })
})
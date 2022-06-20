Cypress.Commands.add("TokenGeradoNaAPI", () => {
    cy.request({
        method: "POST",
        url: Cypress.env("baseUrl") + "/login/",
        headers: {
            accept: "application/json"
        },
        failOnStatusCode: false,
        body: {
            "servico": Cypress.env("servico"),
            "senha": Cypress.env("senha")
        }
    }).then((response) => {
        const acess_token = response.body.tokenSessao;
        window.localStorage.setItem('auth', acess_token)
    })
})
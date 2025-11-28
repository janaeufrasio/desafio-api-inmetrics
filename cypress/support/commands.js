Cypress.Commands.add('login', () => {
  return cy.request({
    method: 'POST',
    url: '/login',
    body: {
      email: "fulano@qa.com",
      password: "1234"
    }
  }).then((res) => {
    expect(res.status).to.eq(200)
    Cypress.env('token', res.body.authorization)
  })
})

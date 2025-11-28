class UsersService {

  // POST /usuarios
  createUser(body) {
    return cy.request({
      method: 'POST',
      url: '/usuarios',
      body: body,
      failOnStatusCode: false 
    })
  } 

  // GET /usuarios
  getUsers() {
    return cy.request({
      method: 'GET',
      url: '/usuarios'
    })
  }

  // GET /usuarios/:id
  getUserById(id) {
    return cy.request({
      method: 'GET',
      url: `/usuarios/${id}`,
      failOnStatusCode: false   // permite testar ID inválido
    })
  }

  // PUT /usuarios/:id
  updateUser(id, body) {
    return cy.request({
      method: 'PUT',
      url: `/usuarios/${id}`,
      body: body,
      failOnStatusCode: false   // permite testar ID inexistente
    })
  }

  // DELETE /usuarios/:id
  deleteUser(id) {
    return cy.request({
      method: 'DELETE',
      url: `/usuarios/${id}`,
      failOnStatusCode: false   // permite testar ID inexistente
    })
  }

}

export default new UsersService();

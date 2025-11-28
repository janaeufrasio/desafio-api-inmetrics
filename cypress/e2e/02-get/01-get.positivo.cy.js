import usersService from "../../support/services/usersService"

describe('GET /users', () => {

    it('Listar usuários cadastrados', () => {
        usersService.getUsers().then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.usuarios).to.be.an('array')
        })

    })

       



})
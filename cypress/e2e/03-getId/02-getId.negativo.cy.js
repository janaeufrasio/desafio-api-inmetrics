import usersService from "../../support/services/usersService"


describe('GET ID - Fluxo negativo /usuarios/:id', () => {

    it('Retornar erro ao buscar ID de usuário inexistente', () => {

        const IdInvalido = "ID_INEXISTENTE"

        usersService.getUserById(IdInvalido).then((res) => {

        expect(res.status).to.eq(400)
        expect(res.body).to.have.property('id')

        })

    })



})
import usersService from "../../support/services/usersService"
import { createRandomUser } from "../../support/helpers/userFactory"

describe('POST - Fluxo positivo /usuarios', () => {
    
    let novoUsuario

    before(() => {
        novoUsuario = createRandomUser()

    })

    it('Cadastrar um novo usuário com sucesso', () => {

        usersService.createUser(novoUsuario).then((res) => {

        expect(res.status).to.eq(201)
        expect(res.body.message).to.contains('Cadastro realizado com sucesso')
        expect(res.body).to.have.property('_id')
    })

})
    
        

})



import usersService from "../../support/services/usersService"
import { createRandomUser } from "../../support/helpers/userFactory"

describe('PUT - Fluxo positivo /usuarios/:id', () => {

    let userId

    before(() => {
        const novoUsuario = createRandomUser()
        
        return usersService.createUser(novoUsuario).then((res) => {
            expect(res.status).to.eq(201)
            userId = res.body._id 
            })                
        
    })

    it('Atualizar o usuário existente', () => {

        const atualizarInfo = createRandomUser({
            nome: "Usuário Atualizado",
            password: "abcd"
            })

        usersService.updateUser(userId, atualizarInfo).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.message).to.eq('Registro alterado com sucesso')
        })

  })

        



})
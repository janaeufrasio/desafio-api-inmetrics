import { createRandomUser } from "../../support/helpers/userFactory"
import usersService from "../../support/services/usersService"

describe('DELETE - Fluxo positivo  /usuarios/:id', () => {

    let userId

    before(() => {

        const novoUsuario = createRandomUser()
        
            return usersService.createUser(novoUsuario).then((res) => {
            expect(res.status).to.eq(201)
            userId = res.body._id; 
        })

   })

    it('Deletar o usuário existente', () => {

        usersService.deleteUser(userId).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.message).to.eq('Registro excluído com sucesso')

        })
        
        
    })

  

})
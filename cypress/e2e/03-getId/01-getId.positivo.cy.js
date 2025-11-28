import usersService from "../../support/services/usersService"
import { createRandomUser } from "../../support/helpers/userFactory"


describe('GET ID - Fluxo positivo /usuarios/:id', () => {

    let userId           
    
    before(() => {
        const novoUsuario = createRandomUser()

            return  usersService.createUser(novoUsuario).then((res) => {
            expect(res.status).to.eq(201);
            userId = res.body._id 
        })
    
       })
    

    it('Listar o usuário por ID existente', () => {

        usersService.getUserById(userId).then((res) => {

            expect(res.status).to.eq(200)
            expect(res.body).to.have.property('_id', userId)
        })

    })

})
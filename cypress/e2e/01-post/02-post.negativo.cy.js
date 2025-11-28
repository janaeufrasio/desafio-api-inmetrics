import usersService from '../../support/services/usersService'
import { createInvalidUser, 
         createRandomUser, 
         createUserWithInvalidEmail 
        } from '../../support/helpers/userFactory'


describe('POST - Fluxo negativo /usuarios', () => {


    it('Cadastrar usuário com email já utilizado', () => {

            const usuarioDuplicado = createRandomUser()

            return usersService.createUser(usuarioDuplicado).then((res1) => {
            expect(res1.status).to.eq(201)

         
            return usersService.createUser(usuarioDuplicado).then((res2) => {
                expect(res2.status).to.eq(400)
                expect(res2.body.message).to.contains('Este email já está sendo usado')
            })
        })
    })

    it('Cadastrar usuário sem preencher os campos obrigatórios', () => {

        const payloadInvalido = createInvalidUser

        return usersService.createUser(payloadInvalido).then((res) => {
            expect(res.status).to.eq(400)
            expect(res.body).to.have.property('nome')
            expect(res.body).to.have.property('email')
            expect(res.body).to.have.property('password')
        })
    })


    it('Cadastrar usuário com email inválido', () => {

            const emailInvalido = createUserWithInvalidEmail()

        return usersService.createUser(emailInvalido).then((res) => {
            expect(res.status).to.eq(400)
            expect(res.body.email).to.contains('email deve ser um email válido')
            
           
        })
    })

})
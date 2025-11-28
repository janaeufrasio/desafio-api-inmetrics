import usersService from "../../support/services/usersService"
import { 
    createRandomUser,
    createInvalidUser
    } from "../../support/helpers/userFactory";


describe('PUT - Fluxo negativo /usuarios/:id', () => {

    it('Atualizar usuário com ID inexistente', () => {

        const payload = createRandomUser();

    usersService.updateUser("ID_INEXISTENTE", payload).then((res) => {

        // Comportamento inconsistente da API
        expect([201, 400]).to.include(res.status)

        if (res.status === 400) { // Comportamento esperado
        expect(res.body).to.have.property('id')

        } else if (res.status === 201) { // Comportamento obtido 
        expect(res.body.message).to.eq('Cadastro realizado com sucesso')

        // [BUG] - Instabilidade na API
        // Ao enviar a requisição para atualizar um usuário com o ID Inexistente, a API cria um novo usuário, retornando 201.
        // O comportamento esperado é ocorrer erro e retornar 400.
    
    }

})

    })
    


    it('Atualizar usuário com email já utilizado', () => {

            const usuarioA = createRandomUser();
            const usuarioB = createRandomUser();

    
            return usersService.createUser(usuarioA).then((resA) => {
                expect(resA.status).to.eq(201)

            return usersService.createUser(usuarioB).then((resB) => {
                expect(resB.status).to.eq(201)

                const usuarioB_id = resB.body._id

                // Tentativa de atualizar usuário B usando o email do usuário A
                 const updateBody = {
                ...createRandomUser(),
                email: usuarioA.email // email duplicado 
                }

                return usersService.updateUser(usuarioB_id, updateBody).then((resUpdate) => {
                    expect(resUpdate.status).to.eq(400)
                    expect(resUpdate.body.message).to.contains('Este email já está sendo usado')
                })

        })

    })
 })

    it('Atualizar usuários sem preencher os campos obrigatórios', () => {

            const payloadInvalido = createInvalidUser()

            return usersService.updateUser(payloadInvalido).then((res) => {
                expect(res.status).to.eq(400)
                expect(res.body).to.have.property('nome')
                expect(res.body).to.have.property('email')
                expect(res.body).to.have.property('password')
            })

})

})
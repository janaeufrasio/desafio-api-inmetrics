import usersService from "../../support/services/usersService"
import { createRandomUser } from "../../support/helpers/userFactory";


describe('DELETE - Fluxo negativo  /usuarios/:id', () => {

    it('Retornar erro ao tentar deletar ID inexistente', () => {

        const payload = createRandomUser();


        usersService.deleteUser("ID_INEXISTENTE", payload).then((res) => {            
        expect(res.status).to.eq(200)
        expect(res.body.message).to.eq('Nenhum registro excluído')

        // *Ponto de atenção*
        // Comportamento real da API:
        // Ao enviar a requisição DELETE para usuário com o ID inexistente, a API retorna 200, informando que "Nenhum registro excluído" 
        // [estranho essa trataiva, mas é o real comportamento].
        
        })

    
        
    }) 

})
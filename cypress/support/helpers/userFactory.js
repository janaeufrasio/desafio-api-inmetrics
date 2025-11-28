// Usuário válido
export function createRandomUser(overrides = {}) {

    const base = {
        nome: "Usuario Teste",
        email: `${Date.now()}-${Math.floor(Math.random() * 10000)}@teste.com`,
        password: "1234",
        administrador: "true"
    } 
    return { ...base, ...overrides }
}

    // Campos obrigatórios vazios
    export function createInvalidUser() {
    return {
        nome: "",
        email: "",
        password: "",
        administrador: ""
    }
}

    // Usuário com email inválido
    export function createUserWithInvalidEmail(overrides = {}) {
    const base = {
        nome: "Usuário com email inválido",
        email: "invalido@@email",
        password: "1234",
        administrador: "true"
    }
    return { ...base, ...overrides }
}


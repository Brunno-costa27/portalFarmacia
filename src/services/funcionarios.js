import { http } from './config'

export default {

    user: null,
    listar:() => {
        return http.get('funcionario')
    },
    listar1:() => {
        return http.get('requisicoes')
    },
    salvar:(funcionario) => {
        return http.post('funcionario', funcionario)
    }
}
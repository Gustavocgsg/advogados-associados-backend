'use strict'

// constante para uso do Model
const User = use('App/Models/User')

class AuthController {
    
    async login({auth, request, response}) {
        const { email, password } = request.all()
        
        //Faz uma tentativa de validação
        const token = auth.attempt(email, password)
        return token
    } 
}

module.exports = AuthController

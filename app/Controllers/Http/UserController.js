'use strict'

//faz comunicação com o Banco de dados, atenção na lentra em maiusculo
const User = use('App/Models/User')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class UserController {

  async index ({ request, response, view }) {
    const users = await User.all()
    return users
  }

  async create ({ request, response, view }) {
  }

  async store ({ request, response }) {
    //rotina que pega insformações lá no frontend
    const data = request.only(['username','email','password','admin'])
    const user = await User.create(data)
    return user
  }

  async show ({ params, request, response, view }) {
    const user = await User.findOrFail(params.id)
    return user
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
    const data = request.only(['username','email','password','admin'])
    const user = await User.findOrFail(params.id)
    user.merge(data)
    await user.save()
    return user
    
  }

  async destroy ({ params, request, response }) {
    const user = await User.findOrFail(params.id)
    await user.delete()
    return{
      message:'Usuário deletado com sucesso.'
    }
  }
}

module.exports = UserController

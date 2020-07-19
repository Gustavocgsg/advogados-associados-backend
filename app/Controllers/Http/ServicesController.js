'use strict'
//caminho do arquivo model destiando ao banco de dados
const Services = use('App/Models/Services')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class ServicesController {
 
  async index ({ request, response, view }) {
    const list = await Services.all()
    return list
  }

  async create ({ request, response, view }) {
  }

  async store ({ request, response }) {
    const data = request.only(['category','maintitle','subtitle','description','showingoff'])
    const services = await Services.create(data)
    return services
  }

  async show ({ params, request, response, view }) {
    const services = await Services.findOrFail(params.id)
    return services
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
    // const { showingoff } = request.only('showingoff')
    const services = await Services.findOrFail(params.id)
    const data = request.only(['category','maintitle','subtitle','description','showingoff'])
    // services.showingoff = showingoff
    services.merge(data)
    await services.save()
    return services
  }

  async destroy ({ params, request, response }) {
    const services = await Services.findOrFail(params.id)
    await services.delete()
    return {
      message:'Serviço deletado com Sucesso !'
    }
  }
}

module.exports = ServicesController

'use strict'

const About = use('App/Models/About')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class AboutController {

  async index ({ request, response, view }) {
    const list = await About.all()
    return list
  }

  async create ({ request, response, view }) {
  }

  async store ({ request, response }) {
    const data = request.only(['category','maintitle','subtitle','description','showingoff'])
    const about = await About.create(data)
    return about
  }

  async show ({ params, request, response, view }) {
    const about = await About.findOrFail(params.id)
    return about
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
    // const { showingoff } = request.only('showingoff')
    const about = await About.findOrFail(params.id)
    const data = request.only(['category','maintitle','subtitle','description','showingoff'])
    // about.showingoff = showingoff
    about.merge(data)
    await about.save()
    return about
  }

  async destroy ({ params, request, response }) {
    const about = await About.findOrFail(params.id)
    await about.delete()
    return {
      message:'Sobre deletado com Sucesso !'
    }
  }
}

module.exports = AboutController

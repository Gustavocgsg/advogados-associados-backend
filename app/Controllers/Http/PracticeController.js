'use strict'

//caminho do arquivo model destiando ao banco de dados
const Practice = use('App/Models/Practice')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with practices
 */
class PracticeController {
  /**
   * Show a list of all practices.
   * GET practices
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const list = await Practice.all()
    return list
  }

  /**
   * Render a form to be used for creating a new practice.
   * GET practices/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new practice.
   * POST practices
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(['category','maintitle','subtitle','description','showingoff'])
    const practice = await Practice.create(data)
    return practice
  }

  /**
   * Display a single practice.
   * GET practices/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const practice = await Practice.findOrFail(params.id)
    return practice
  }

  /**
   * Render a form to update an existing practice.
   * GET practices/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update practice details.
   * PUT or PATCH practices/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    // const { showingoff } = request.only('showingoff')
    const practice = await Practice.findOrFail(params.id)
    const data = request.only(['category','maintitle','subtitle','description','showingoff'])
    // practice.showingoff = showingoff
    practice.merge(data)
    await practice.save()
    return practice
  }

  /**
   * Delete a practice with id.
   * DELETE practices/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const practice = await Practice.findOrFail(params.id)
    await practice.delete()
    return {
      message:'Prática deletada com Sucesso !'
    }
  }
}

module.exports = PracticeController

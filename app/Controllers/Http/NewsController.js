'use strict'

//caminho do arquivo model destiando ao banco de dados
const News = use('App/Models/News')
const Helpers = use('Helpers')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class NewsController {

  async index ({ request, response, view }) {
    const list = await News.all()
    return list
  }

  async create ({ request, response, view }) {
  }

  async store ({ request, response }) {
    const data = request.only(['category','fileimg','maintitle','subtitle','new','author','source','showingoff'])
    const news = await News.create(data)
    return news
  }

  async show ({ params, request, response, view }) {
    const news = await News.findOrFail(params.id)
    return news
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
    const news = await News.findOrFail(params.id)
    const data = request.only(['category','fileimg','maintitle','subtitle','new','author','source','showingoff'])
    news.merge(data)
    await news.save()
    return news
  }

  async destroy ({ params, request, response }) {
    const news = await News.findOrFail(params.id)
    await news.delete()
    return{
      message:'Notícia removida com Sucesso !'
    }
  }

  async upload ({request, response, params}) {
    const images = request.file('fileimg', {
      types: ['image'],
      size: '10mb'
    })
  
    await images.move(Helpers.tmpPath('uploads'),{
        overwrite: true
    })
  
    if (!images.moved()) {
      return images.errors()
    }
    
    const news = await News.findOrFail(params.id)
    news.fileimg = images.fileName
    await news.save()

    return{
      fileName: images.fileName
    }
  }

  async showImg ({params, request, response}) {
    return response.download(Helpers.tmpPath('uploads/' + params.filename))
  }
}

module.exports = NewsController

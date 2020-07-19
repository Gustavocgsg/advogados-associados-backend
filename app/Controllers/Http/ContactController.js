'use strict'

// constante para uso do Model  do Contact.js
const Contact = use('App/Models/Contact')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class ContactController {

  async index ({ request, response, view }) {
    const list = await Contact.all()
    return list
  }

  async create ({ request, response, view }) {
  }

  async store ({ request, response }) {
    const data = request.only(['name','email','phone','message'])
    const contact = await Contact.create(data)
    return contact
  }

  async show ({ params, request, response, view }) {
    const contact = await Contact.findOrFail(params.id)
    return contact
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
    const { checked } = request.only('checked')
    const contact = await Contact.findOrFail(params.id)
    contact.checked = checked
    await contact.save()
    return contact
  }

  async destroy ({ params, request, response }) {
    const contact = await Contact.findOrFail(params.id)
    await contact.delete()
    return{
      message:'Contato deletado com Sucesso !'
    }
  }
}

module.exports = ContactController

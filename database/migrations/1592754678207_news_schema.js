'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NewsSchema extends Schema {
  up () {
    this.create('news', (table) => {
      table.increments()
      table.string('category', 100)
      table.string('fileimg', 255)
      table.string('maintitle', 200)
      table.string('subtitle', 200)
      table.text('new')
      table.string('author', 100)
      table.string('source', 100)
      table.integer('showingoff').defaultTo(0) //se será ou não visível no site, 0 por padrão é visível
      table.timestamps()
    })
  }

  down () {
    this.drop('news')
  }
}

module.exports = NewsSchema

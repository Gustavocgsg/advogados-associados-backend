'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ServicesSchema extends Schema {
  up () {
    this.create('services', (table) => {
      table.increments()
      table.string('category', 100)
      table.string('maintitle', 100)
      table.string('subtitle', 100)
      table.text('description')
      table.integer('showingoff').defaultTo(0) //se será ou não visível no site, 0 por padrão é visível
      table.timestamps()
    })
  }

  down () {
    this.drop('services')
  }
}

module.exports = ServicesSchema

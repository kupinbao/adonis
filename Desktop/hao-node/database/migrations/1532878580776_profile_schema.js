'use strict'

const Schema = use('Schema')

class PorfileSchema extends Schema {
  up () {
    this.create('porfiles', (table) => {
      table.increments()
      table.string('weixin')
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('users.id')
    })
  }

  down () {
    this.drop('porfiles')
  }
}

module.exports = PorfileSchema

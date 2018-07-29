'use strict'

const Schema = use('Schema')

class PorfileSchema extends Schema {
  up () {
    this.create('porfiles', (table) => {
      table.increments()
      table.string('weixin')
      table.integer('user_id').unsigend()
      table.foreign('user_id').references('user.id')
      table.timestamps()
    })
  }

  down () {
    this.drop('porfiles')
  }
}

module.exports = PorfileSchema

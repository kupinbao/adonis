'use strict'

const Schema = use('Schema')

class PorfileSchema extends Schema {
  up () {
    this.create('porfiles', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('porfiles')
  }
}

module.exports = PorfileSchema

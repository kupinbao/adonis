'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const User = use('App/Models/User')

class UserSeeder {
  async run () {
    const users=[
      {username:'名扬',email:'999@ming.net',password:'111111'},
      {username:'牧原',email:'888@ming.net',password:'111111'},
      {username:'楚天',email:'777@ming.net',password:'111111'},
      {username:'闫冰',email:'666@ming.net',password:'111111'}
    ]
    User.createMany(users)
  }
}

module.exports = UserSeeder

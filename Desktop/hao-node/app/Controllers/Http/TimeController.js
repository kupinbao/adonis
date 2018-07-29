'use strict'
const User =use('App/Models/User')
/**
 * Resourceful controller for interacting with times
 */
class TimeController {
  /**
   * Show a list of all times.
   * GET times
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new time.
   * GET times/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new time.
   * POST times
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single time.
   * GET times/:id
   */
  async show ({ params, request, response, view }) {
    const user = await User.find(params.id)
    const profile =user
      .profile()
      .fetch()

    return profile
  }

  /**
   * Render a form to update an existing time.
   * GET times/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update time details.
   * PUT or PATCH times/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a time with id.
   * DELETE times/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = TimeController

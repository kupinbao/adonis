'use strict'

const Database = use ('Database')
/**
 * Resourceful controller for interacting with posts
 */
class PostController {
  /**
   * Show a list of all posts.
   * GET posts
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new post.
   * GET posts/create
   */
  async create ({ request, response, view }) {
    return view.render('post.create')//渲染页面
  }

  /**
   * Create/save a new post.
   * POST posts
   */
  async store ({ request, response }) {
    const newPost = request.only(['title','content'])//请求得到数据
    const postID = await Database.insert(newPost).into('posts')
    //Database.insert插入const 定义的数据  into（'数据表'）需要插入的数据表
    return response.redirect(`/posts/${postID[0]}`)//重定向渲染视图

  }

  /**
   * Display a single post.
   * GET posts/:id
   * 显示数据库内容
   */
  async show ({ params, request, response, view }) {
      const post = await Database //定义一个常量 ,等待数据库处理
        .from ('posts')//查询 数据库里面的posts表
        .where('id',params.id)//查询 的条件是根据数据表里面的ID查询
        .first()//获取查询到的内容

      return view.render('post.show',{post})
      //返回一个 渲染视图，选软视图所带有的值是使用post的show方法。
  }

  /**
   * Render a form to update an existing post.
   * GET posts/:id/edit
   */
  async edit ({ params, request, response, view }) {
    const post = await Database //定义一个常量 ,等待数据库处理
      .from ('posts')//查询 数据库里面的posts表
      .where('id',params.id)//查询 的条件是根据数据表里面的ID查询
      .first()//获取查询到的内容

    return view.render('post.edit',{post})
    //返回一个 渲染视图，选软视图所带有的值是使用post的edit方法。
  }

  /**
   * Update post details.
   * PUT or PATCH posts/:id
   */
  async update ({ params, request, response }) {
    const updatedPost = request.only(['title','content'])
    await Database
      .table('posts')
      .where('id',params.id)
      .update(updatedPost)

    return view.render('post.show',{post})
  }

  /**
   * Delete a post with id.
   * DELETE posts/:i
   * 删除数据库内容需要用的
   */
  async destroy ({ params, request, response }) {
    await Database
      .table('posts')
      .where('id',params.id)
      .delete()

    return 'success'
  }
}

module.exports = PostController

'use strict'

const Factory =use ('Factory')
const Profile = use ('App/Models/Profile')

class ProfileSeeder{
  async run(){
    const profiles=[
      {weixin:'muyuan',user_id:15},
      {weixin:'chutian',user_id:16},
      {weixin:'yanbing',user_id:17},
      {weixin:'mingyangcds',user_id:18}
    ]
    await Profile.createMany(profiles)
  }
}

module.exports=ProfileSeeder

import theDataBase from '../config/db'

const userSchema = theDataBase.import('../schema/user')

//自动创建表，force：ture会先删掉在创建
userSchema.sync({ force: false })

class UserModel {

	static async createUser(data){
		return await userSchema.create(data)
	}
  
	static async getUserByName(name){
		const userInfo = await userSchema.findOne({
			where: {
				name: name
			}
		})
		return userInfo
	}
}

export default UserModel
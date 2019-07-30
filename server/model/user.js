import Schema from '../schema'

const userSchema = Schema.User

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
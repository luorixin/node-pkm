import auth from '../../common/jwtauth'
import UserModel from '../model/user'
import ErrorCode from '../../common/errorCode'

class UserController {
	static async register(ctx) {
		const data = ctx.request.body
		if(!data.name || !data.password){
			return ctx.sendError(ErrorCode.PARAMS_EPMTY)
		}
		try {
			const result = await UserModel.createUser(data)

			return result !== null ? ctx.send(null, '注册成功') : ctx.sendError(ErrorCode.REGISTER_ERROR)
		} catch (error) {
			return ctx.sendError('000000', error)
		}
	}

	static async login(ctx) {
		const data = ctx.request.body
		if(!data.name || !data.password){
			return ctx.sendError(ErrorCode.PARAMS_EPMTY)
		}
		const result = null
		if(result !== null){
			const token = auth.setToken(result.id)
			return ctx.send(token, '登录成功')
		}else{
			return ctx.sendError(ErrorCode.USER_ERROR)
		}
	}
  
	static async info(ctx){
		const data = ctx.state.user
		if(!data.id){
			return ctx.sendError(ErrorCode.PARAMS_EPMTY)
		}
		const user = null

		if(user !== null){
			const result = {
				_id: user._id,
				name: user.name,
				email: user.email
			}
			return ctx.send(result)
		}else{
			return ctx.sendError(ErrorCode.USER_EMPTY)
		}
	}
}

export default UserController
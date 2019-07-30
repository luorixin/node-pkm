import auth from '../../common/jwtauth'
import UserModel from '../model/user'
import ErrorCode from '../../common/errorCode'
import crypto from 'crypto'

class UserController {
	static async register(ctx) {
		const data = ctx.request.body
		if(!data.name || !data.password){
			return ctx.sendError(ErrorCode.PARAMS_EPMTY)
		}
		try {
			const checkUser = await UserModel.getUserByName(data.name)
			if(checkUser!==null){
				return ctx.sendError(ErrorCode.USER_EXIT)
			}
			const newUser = {
				name: data.name,
				password: auth.setMd5(data.password)
			}
			const result = await UserModel.createUser(newUser)

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
		try {
			const result = await UserModel.getUserByName(data.name)
			if(result !== null){
				const password = auth.setMd5(data.password)
				if(result.password===password){
					const token = auth.setToken({id: result.id, name: result.name})
					return ctx.send(token, '登录成功')
				}else{
					return ctx.sendError(ErrorCode.USER_PASSWORD_ERROR)
				}
			}else{
				return ctx.sendError(ErrorCode.USER_ERROR)
			}
		} catch (error) {
			return ctx.sendError('000000', error)
		}
	}
  
	static async loginOut(ctx){
		//https://blog.csdn.net/chszs/article/details/47081065
		if(ctx.state.user){
			delete ctx.state.user
			return ctx.send(null, '登出成功')
		}else{
			return ctx.sendError('000000', '登出失败')
		}
	}
}

export default UserController
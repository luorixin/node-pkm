import ErrorCode from '../../common/errorCode'

const errorHandle = (ctx, next) => {
	return next().catch(err => {
		if(err.status === 401){
			ctx.status = 401
			return ctx.sendError(ErrorCode.NO_AUTH)
		}else{
			throw err
		}
	})
}

export default errorHandle
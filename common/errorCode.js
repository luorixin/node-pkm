const ErrorCode = {
	PARAMS_EPMTY: {code: '000002', msg: '参数不合法'},
	USER_ERROR: {code: '000003', msg: '用户名或密码错误'},
	NO_AUTH: {code: '000004', msg: '未授权，访问被拒绝'},
	USER_EMPTY: {code: '000005', msg: '用户不存在'},
	REGISTER_ERROR: {code: '000006', msg: '注册失败'},
	API_ERROR: {code: '000006', msg: '接口错误'}
}

export default ErrorCode
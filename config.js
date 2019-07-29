const CONFIG = {
	port: 3000,
	mysql: {
		development: {
			connectionString: 'mysql://root:123456@127.0.0.1:3306/pkm'
		},
		production: {
			connectionString: 'mysql://root:123456@127.0.0.1:3306/pkm'
		}
	},
	redis: {
		development: {
			connectionString: 'redis://127.0.0.1:6379',
			password:'123456'
		},
		production: {
			connectionString: 'redis://47.52.231.46:6379',
			password:'123456'
		}
	},
	upload: {
		tmp : 'public/tmp/',
		path: 'public/uploads/'
	},
	secret: '123456abcdefg'
}

export default CONFIG
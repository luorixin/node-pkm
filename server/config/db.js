import Sequelize from 'sequelize'
import config from '../../config'

// 使用 url 形式连接数据库
const mysqlLink = config['mysql'][process.env.NODE_ENV || 'development']['connectionString']
const theDb = new Sequelize(mysqlLink, {
	define: {
		timestamps: true // Sequelzie自动给数据表添加的 createdAt 和 updatedAt 两个时间戳字段
	},
	pool: {
		max: 5,
		min: 0,
		acqurie: 30000,
		idle: 10000
	}
})

export default theDb
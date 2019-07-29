const userSchema = (sequelize, DataTypes) => {
	return sequelize.define('user', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.CHAR(50),
			allowNull: false
		},
		password: {
			type: DataTypes.CHAR(128),
			allowNull: false
		},
		real_name: {
			type: DataTypes.CHAR(50),
			allowNull: true
		},
		role: {
			type: DataTypes.CHAR(50),
			allowNull: true
		}
	}, {
		tableName: 'user'
	})
}

export default userSchema
const documentSchema = (sequelize, DataTypes) => {
	return sequelize.define('document', {
		id: {
			type: DataTypes.BIGINT(),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.CHAR(50),
			allowNull: false
		},
		type: {
			type: DataTypes.CHAR(128),
			allowNull: false
		},
		userId: {
			type: DataTypes.BIGINT(),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		desc: {
			type: DataTypes.STRING(),
			allowNull: true
		},
		position: {
			type: DataTypes.STRING(),
			allowNull: false
		}
	}, {
		tableName: 'document'
	})
}

export default documentSchema
import theDataBase from '../config/db'

const User = theDataBase.import('./user')
const Document = theDataBase.import('./document')


User.hasMany(Document, {foreignKey: 'userId', sourceKey: 'id'})

Document.belongsTo(User, {foreignKey: 'userId', targetKey: 'id'})

//自动创建表，force：ture会先删掉在创建
// theDataBase.sync({ force: false })

export default {
	User,
	Document
}

import Schema from '../schema'

const documentSchema = Schema.Document

class DocumentModel {

	static async createDocument(data){
		return await documentSchema.create(data)
	}
  
	static async getDocumentByUser(data){
		data.limit = data.pageSize || 10
		const pageNo = data.pageNo || 1
		data.offset = data.limit * (pageNo - 1)
		data.order = [
			['id', 'DESC']
		]
		data.where = {}
		if(typeof data.status !== 'undefined' && data.status!== null){
			data.where.status = data.status
		}
		if(typeof data.type !== 'undefined' && data.type!== null){
			data.where.type = data.type
		}
		if(typeof data.userId !== 'undefined' && data.userId!== null){
			data.where.userId = data.userId
		}
		if(typeof data.position !== 'undefined' && data.position!== null){
			data.where.position = {
				'$like': `%${data.position}%`,
			}
		}
		if(typeof data.name !== 'undefined' && data.name!== null){
			data.where.name = {
				'$like': `%${data.name}%`,
			}
		}
		const documents = await documentSchema.findAndCountAll(data)
		return documents
	}
}

export default DocumentModel
import Schema from '../schema'
import { isNotEmpty } from '../../util'

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
		if(isNotEmpty(data.status)){
			data.where.status = data.status
		}
		if(isNotEmpty(data.type)){
			data.where.type = data.type
		}
		try {
			if(isNotEmpty(data.userId)){
				data.where.userId = data.userId
			}
			if(isNotEmpty(data.position)){
				data.where.position = {
					'$like': '%'+data.position+'%',
				}
			}
			if(isNotEmpty(data.name)){
				data.where.name = {
					'$like': '%'+data.name+'%',
				}
			}
			const documents = await documentSchema.findAndCountAll(data)
			return documents
		} catch (error) {
			console.log(error)
		}
		
	}
}

export default DocumentModel
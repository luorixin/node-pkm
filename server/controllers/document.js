import DocumentModel from '../model/document'
import ErrorCode from '../../common/errorCode'
import { isNotEmpty } from '../../util'

class DocumentController {
	static async optDocument(ctx) {
		const data = ctx.request.body
		data.userId = ctx.state.user.id
		try {
			let result = null
			if(isNotEmpty(data.id)){
				result = await DocumentModel.updateDocument(data)
			}else{
				result = await DocumentModel.createDocument(data)
			}

			return result !== null ? ctx.send(null, '操作成功') : ctx.sendError(ErrorCode.REGISTER_ERROR)
		} catch (error) {
			return ctx.sendError('000000', error)
		}
	}

	static async getDocumentByUser(ctx) {
		const data = ctx.request.body
		data.userId = ctx.state.user.id
		try {
			const result = await DocumentModel.getDocumentByUser(data)
			return ctx.send(result, '查询成功')
		} catch (error) {
			return ctx.sendError('000000', error)
		}
		
	}
}

export default DocumentController
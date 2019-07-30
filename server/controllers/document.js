import DocumentModel from '../model/document'
import ErrorCode from '../../common/errorCode'

class DocumentController {
	static async createDocument(ctx) {
		const data = ctx.request.body
		data.userId = ctx.state.user.id
		try {
			const result = await DocumentModel.createDocument(data)

			return result !== null ? ctx.send(null, '注册成功') : ctx.sendError(ErrorCode.REGISTER_ERROR)
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
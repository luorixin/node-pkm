import path from 'path'
import uploadFile from '../../common/file'

class UploadController{

	static async upload(ctx){
		const serverFilePath = path.join( __dirname, '../../public' )
		try {
			const result = await uploadFile(ctx, {
				dir: 'uploads',
				path: serverFilePath
			})
			return ctx.send(result, '上传成功')
		} catch (error) {
			return ctx.sendError('000000', error)
		}
	}
}

export default UploadController
import router from 'koa-router'
import Document from '../controllers/document'

const Router = new router()

Router.post('/optDocument', Document.optDocument)
Router.post('/documentList', Document.getDocumentByUser)

export default Router
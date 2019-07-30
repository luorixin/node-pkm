import router from 'koa-router'
import Document from '../controllers/document'

const Router = new router()

Router.post('/documentCreate', Document.createDocument)
Router.post('/documentList', Document.getDocumentByUser)

export default Router
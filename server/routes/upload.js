import router from 'koa-router'
import Upload from '../controllers/upload'

const Router = new router()

Router.post('/upload', Upload.upload)

export default Router
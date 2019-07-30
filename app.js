import Koa from 'koa'
import path from 'path'
import koajwt from 'koa-jwt'
import convert from 'koa-convert'
import serve from 'koa-static'
import json from 'koa-json'
import router from 'koa-router'
import cors from 'koa-cors'
import bodyparser from 'koa-bodyparser'
import config from './config'
import errorHandle from './server/middlewares/errorHandle'
import sendHandle from './server/middlewares/sendHandle'
import user from './server/routes/user.js'
import documents from './server/routes/document.js'
import upload from './server/routes/upload.js'

const Router = new router()
const app = new Koa()
const staticPath = './static'

app.use(convert(serve(
	path.join( __dirname,  staticPath)
)))
app.use(cors())
app.use(json())
app.use(bodyparser())
app.use(sendHandle())
app.use(errorHandle)
app.use(koajwt({
	secret: config.secret
}).unless({
	path: [/\/api\/register/, /\/api\/login/]
}))
Router.use('/api', user.routes())
Router.use('/api', documents.routes())
Router.use('/api', upload.routes())
app.use(Router.routes())

export default app
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
app.use(cors({
	origin: 'http://localhost:8082', //webpack打包后会生成index.html和static目录，我直接放在本地启动的nginx静态目录html下用来运行webpack打包文件，所以Origin地址为http://127.0.0.1 
	allowedHeaders: 'Origin, x-requested-with, Content-Type, PKM-Token', //PKM-Token为自定义的头字段
	credentials: true //设置成true 请求中才会带上cookie信息，否则请求失败
}))
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
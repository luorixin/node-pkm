import router from 'koa-router'
import User from '../controllers/user'

const Router = new router()

Router.post('/register', User.register)
Router.post('/login', User.login)
Router.get('/logoff', User.loginOut)

export default Router
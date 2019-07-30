import router from 'koa-router'
import User from '../controllers/user'

const Router = new router()

Router.post('/register', User.register)
Router.post('/login', User.login)
Router.post('/logOut', User.loginOut)

export default Router
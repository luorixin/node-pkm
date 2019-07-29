import router from 'koa-router'
import User from '../controllers/user'

const Router = new router()

Router.post('/register', User.register)
Router.post('/login', User.login)
Router.get('/info', User.info)

export default Router
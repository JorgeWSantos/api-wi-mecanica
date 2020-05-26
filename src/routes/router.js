const loginRoute = require('./LoginRoute')
const userRoute = require('./UsersRoute')

const createRoute = (app) => {
    app.use('/api/login', loginRoute);
    app.use('/api/users', userRoute);
}

module.exports = {createRoute}

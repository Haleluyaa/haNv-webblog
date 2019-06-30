const UserController = require('./controllers/UserControllers')
const UserAuthenController = require('./controllers/UserAuthenController')
const isAuthencontroller = require('./controllers/isAuthenController')
module.exports  = (app) => {
    /*RESFUL Api for users management */

    //create user
    app.post('/user', UserController.create)
    //Edit user
    app.put('/user/:userId', UserController.put)
    //delete user
    app.delete('/user/:userId', UserController.remove)
    //get user by id
    app.get('/user/:userId', UserController.show)
    //get All user
    app.get('/users', isAuthencontroller, UserController.index)
    //login
    app.post('/login', UserAuthenController.login)
    // get all user
    

}
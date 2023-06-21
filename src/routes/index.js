const userRouter = require('./user');
const storeRouter = require('./store')
function route(app) {
    app.use('/user', userRouter);
    app.use('/stores', storeRouter);
    app.use('/', function (req, res)  {
        res.send("Intern Backend Test");
    });
}
module.exports = route;

var employees = require('./models/employees');

module.exports = {
    configure: function (app) {
        // Add headers
        app.use(function (req, res, next) {

            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

            // Request methods you wish to allow
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

            // Request headers you wish to allow
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

            // Set to true if you need the website to include cookies in the requests sent
            // to the API (e.g. in case you use sessions)
            res.setHeader('Access-Control-Allow-Credentials', true);

            // Pass to next layer of middleware
            next();
        });

        app.get('/employees/', function (req, res) {
            employees.get(res);
        });

        app.get('/employees/:id/', function (req, res) {
            employees.read(req.params.id, res);
        });

        app.post('/employees/', function (req, res) {
            employees.create(req.body, res);
        });

        app.put('/employees/:id', function (req, res) {
            req.body.id = req.params.id;
            employees.update(req.body, res);
        });

        app.delete('/employees/:id/', function (req, res) {
            employees.delete(req.params.id, res);
        });
    }
};
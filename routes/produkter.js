var modules = require('../modules/random')
var produkter = require('../public/data/produkter.json');


module.exports = function (app) {


    // index page 
    app.get('/produkter', function (req, res) {
        var testarray = []
        modules.random((err, result) => {
            testarray = result;
        });
        res.render('pages/produkter', {
            produkter: produkter,
            test: testarray,
        });
    });
    app.get('/produkt/:id', function (req, res, next) {
        var testarray = []
        modules.random((err, result) => {
            testarray = result;
        });
        app.param(['id'], function (req, res, next, value) {
            res.render('pages/produkt', {
                produkter: produkter[value - 1],
                test: testarray,
            });
        });
    });

}

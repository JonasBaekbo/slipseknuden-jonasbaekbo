var modules = require('../modules/random')
var nyheder = require('../public/data/nyheder.json')


module.exports = function (app) {


    // index page 
    app.get('/nyheder', function (req, res) {
        var testarray = []
        modules.random((err, result) => {
            testarray = result;
        });


        res.render('pages/nyheder', {
            test: testarray,
            nyheder: nyheder
        });
    });
}

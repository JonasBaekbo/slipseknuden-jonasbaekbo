var modules = require('../modules/random')


module.exports = function (app) {


    // index page 
    app.get('/kontakt', function (req, res) {
        var testarray = []
        modules.random((err, result) => {
            testarray = result;
        });
        res.render('pages/kontakt', {
            test: testarray
        });
    })
}

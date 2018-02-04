var modules = require('../modules/random')


module.exports = function (app) {


    // index page 
    app.get('/om', function (req, res) {
        var testarray = []
        modules.random((err, result) => {
            testarray = result;
        });
        var medarbejdere = require('../public/data/medarbejdere.json')


        res.render('pages/om', {
            test: testarray,
            medarbejdere: medarbejdere
        });
    });
}

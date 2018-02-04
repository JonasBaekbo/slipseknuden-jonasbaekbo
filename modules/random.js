
module.exports = {

    'random': (next) => {
        var fisk = require('../public/data/produkter.json')
        var tmpfisk = fisk.slice(0, fisk.length)
        if (tmpfisk.length >= 2) {
            var random = Math.floor(Math.random() * tmpfisk.length);
            var testarray = [];
            testarray.push(tmpfisk[random]);
            tmpfisk.splice(random, 1)
            random = Math.floor(Math.random() * tmpfisk.length);
            testarray.push(tmpfisk[random]);
        } else if (tmpfisk.length == 2) {
            console.log(tmpfisk);
            testarray.push(tmpfisk[0]);
            testarray.push(tmpfisk[1]);
        }


        //console.log(testarray);
        next(null, testarray)
    }
}

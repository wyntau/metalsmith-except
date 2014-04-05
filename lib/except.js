var is = require('jistype');
module.exports = function(keys){
    if(is.isString(keys)){
        keys = keys.split(/ +/);
    }
    if(!is.isArray(keys)){
        throw new Error('attr array error');
        process.exit(1);
    }
    return function(files, metalsmith, done){
        Object.keys(files).forEach(function(key){
            var file = files[key];
            keys.forEach(function(key){
                if(file.hasOwnProperty(key)){
                    delete file[key];
                }
            });
        });
        done();
    };
};
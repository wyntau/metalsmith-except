var except = require('..');
var metalSmith = require('metalsmith');

describe('metalsmith-except', function(){
    it('should filter attr string', function(done){
        var metalsmith = metalSmith(__dirname);

        metalsmith.use(except('content'));

        var files = {
            'a.md': {
                name: 'a.name',
                title: 'a.title',
                content: 'a.content'
            }
        };

        metalsmith.run(files, function(err, files){
            should.not.exist(err);
            files['a.md'].should.deep.equal({
                name: 'a.name',
                title: 'a.title'
            });
            done();
        });
    });

    it('should filter attr array', function(done){
        var metalsmith = metalSmith(__dirname);

        metalsmith.use(except(['content']));

        var files = {
            'a.md': {
                name: 'a.name',
                title: 'a.title',
                content: 'a.content'
            }
        };

        metalsmith.run(files, function(err, files){
            should.not.exist(err);
            files['a.md'].should.deep.equal({
                name: 'a.name',
                title: 'a.title'
            });
            done();
        });
    });
});
var Asker = require('./index');

var asker = new Asker(function (result) {
	console.log('result:',result);
});

asker.ask('name','pass');
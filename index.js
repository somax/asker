var readline = require('readline');

function Asker(callback) {
	var rl = readline.createInterface(process.stdin, process.stdout);
	var self = this;
	self.returnObj = {};

	rl.on('close',function () {
		callback(self.returnObj);
	});

	this.ask = function(val) {
		if (arguments.length === 0) {
			return;
		}

		var keys = [].slice.call(arguments);
		var key = keys.shift();

		rl.question('input '+key+': ', function(_val) {
			self.returnObj[key] = _val;
			if(keys.length){
				self.ask(keys);
			}else{
				rl.close();
			}
		});
	};


}

module.exports = Asker;
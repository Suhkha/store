var mongoose = require('mongoose');
var Schema	 = mongoose.Schema;

var StoreSchema = new Schema({
	name: String,
	price: Number,
	category: String,
	description: String,
	active: Boolean
});


var Store = mongoose.model('Store', StoreSchema);
module.exports = Store;
var mongoose= require('mongoose');

// householditems schema
var householditemSchema = mongoose.Schema({
     title:{
     	type: String,
     	required: true
     },
     create_date:{
     	type: Date,
     	default: Date.now
     }
});

var Householditem = module.exports = mongoose.model('householditem',householditemSchema);

//get householditems

module.exports.getHouseholditems = function(callback,limit){
	Householditem.find(callback).limit(limit);
}

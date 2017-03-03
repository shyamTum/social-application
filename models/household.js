var mongoose=require('mongoose');

//household schema

var householdSchema= mongoose.Schema({
    title:{
    	type: String,
    	required:true
    },
    description:{
        type:String,
        required:true
    },
    material:{
    	type:String,
    	required:true
    },
    cost:{
        type:String,
        required:true
    },
    create_date:{
    	type: Date,
    	default: Date.now
    }
});

var Household = module.exports = mongoose.model('Household',householdSchema);

//get household collection items
module.exports.getHousehold = function(callback,limit){
	Household.find(callback).limit(limit);
}
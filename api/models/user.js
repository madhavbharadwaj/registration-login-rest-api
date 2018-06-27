const mongoose = require('mongoose');
var minuteFromNow = function(){
   var n = new Date() ;
    var  v = n.toLocaleString()
	return v;
};

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { 
        type: String, 
        required: true, 
        unique: true,
        //email regex (email validation)
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: { type: String, required: true },
    fname: { type: String, required: false },
    mname: { type: String, required: false },
    lname: { type: String, required: false },
    weight: { type: Number, required: false },
    height: { type: Number, required: false },
    phone: { type: Number, required: false },
    medical_con: { type: String, required: false },
    pain_areas: { type: String, required: false },
    medications: { type: String, required: false },
    experience: { type: String, required: false },
    time : { type : String, default: minuteFromNow }

});

module.exports = mongoose.model('User', userSchema);


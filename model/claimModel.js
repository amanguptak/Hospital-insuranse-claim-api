const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const claimSchema = new Schema({

    _id:{
        type:String,
        required:true
    },
    claim_id:{
        type:String,
        required:true

    },
   hospital_id:{
    type:String,
    required:true
   },
   policy_id:{
    type:String,
    required:true
   },
   claim_date:{
    type:String,
    required:true

   }
})

module.exports =mongoose.model("Claim",claimSchema)
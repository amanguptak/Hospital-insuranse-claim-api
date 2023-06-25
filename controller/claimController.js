const claimModel = require('../model/claimModel');
const { v4: uuidv4 } = require('uuid');


// function Getclaims(req, res) {
//     claimModel.find({}, (err, data) => {
//         if (!err) {
//             res.status(200).send(data);
//         }
//     })
// }

function GetClaim(req, res) {
    claimModel.findOne({ claim_id: req.params.claim_id}, (err, data) => {
        if (data !== null) {
            res.status(200).send(data);
        }
        else if (data == null) {
            res.status(404).send({ status: 404, message: `claim with specified id: ${req.params.id} does not exists` });
        } else {
            throw err;
        }
    })
}
function GetClaims(req,res){
 claimModel.find({policy_id:req.params.id}, (err, data)=>{
    if(data!==null){
        res.status(200).send(data);
    }
    else if (data == null) {
        res.status(404).send({ status: 404, message: `claim with specified id: ${req.params.id} does not exists` });
    } else {
        throw err;
    }
 })


}

function AddClaim(req, res) {
    let claim = new claimModel({
        _id: uuidv4(),
        claim_id:req.body.claim_id,
        hospital_id: req.body.hospital_id,
        policy_id: req.body.policy_id,
        claim_date: req.body.claim_date,
        
    });
    claim.save((err) => {
        if (!err) {
            res.status(201).send({ message: "claim added successfully" });
        } else {
            throw err;
        }
    });
}




function GetHospital(req,res){
//  res.send(req.query)

claimModel.find({hospital_id:req.query.hospital,claim_date:req.query.date},(err,data)=>{
    if(data!==null){
        res.status(200).send(data);
    }
    else if (data == null) {
        res.status(404).send({ status: 404, message: `claim with specified id: ${req.params.id} does not exists` });
    } else {
        throw err;
    }
})
}

function DelteClaim(req, res) {
    claimModel.deleteOne({ _id: req.params.id }, (err, data) => {
        console.log(data);
        if (err) {
            throw err;
        } else {
            res.status(200).send({ message: "claim deleted successfully" });
        }
    });
}

function UpdateClaim(req, res) {


    claimModel.findOneAndUpdate({_id:req.params.id},req.body,{new:true},(err,data)=>{
        if(data!==null){
            res.status(200).send({message: "Claim updated succesfully"});
        }
        else if(data==null){
            res.status(404).send({ status: 404, message: `Claim with specified id: ${req.params.id} does not exists` });
        }
        else{
            throw err;
        }

    })
    
}

module.exports = { GetClaim, AddClaim, DelteClaim, UpdateClaim ,GetClaims,GetHospital}

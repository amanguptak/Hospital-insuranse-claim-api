const express= require('express');
const {GetClaim, GetClaims,AddClaim,DelteClaim,UpdateClaim,GetHospital}=require('../controller/claimController')
const router = express.Router();

router.get('/getclaim/:id',GetClaim);
router.post("/addclaim",AddClaim);
router.get('/getclaims/policy/:id',GetClaims);
router.get('/claims',GetHospital);
router.put('/updateclaim/:id',UpdateClaim);
router.delete("/deleteclaim/:id",DelteClaim);
module.exports =router;


// GetPolicy,GetHospital,
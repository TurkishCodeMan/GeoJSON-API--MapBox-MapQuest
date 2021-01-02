const express=require("express");
const router=express.Router();




router.get("/",require("../controllers/geoController").getIndex)

router.post("/stores",require("../controllers/geoController").postLocation)




module.exports=router;
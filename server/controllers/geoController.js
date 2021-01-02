const Location =require("../models/Location")

const getIndex=async (req,res,next)=>{
try {
    const stores=await Location.find();
    return res.status(200).json({
        success:true,
        count:stores.length,
        data:stores
    })
} catch (error) {
    res.status(500).json({msg:"Error Find Server"})
}
}

const postLocation=async (req,res,next)=>{
    try {
        console.log(req.body)
        const location=await Location.create(req.body);
        return res.status(200).json({
            success:true,
            data:location,
        })
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports={
    getIndex,
    postLocation
}
const {DoctorModel}=require("../Models/doctor.model");
require('dotenv').config()
const { Router } = require('express');
const doctorRouter = Router();
const {auth}=require("../Middlwares/auth.middleware")

// http://localhost:4000/doctor/appointments


// add
doctorRouter.post("/appointments", auth,async (req,res) => {
try {
    const post = new DoctorModel(req.body);
    await post.save();
    res.status(201).json({ message: 'Onboarding Successfully Posted', post });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Server error' });
  }
});


// all
doctorRouter.get("/", auth,async (req,res) => {
   try {
     const {specialization, sortByDate, search} = req.query
      let filter = {}

        if(specialization){
            filter.specialization = specialization
        }
        if(search){
            filter.name = { $regex : search, $options : "i"}
        }

        let sortOption = {}

        if(sortByDate=="desc"){
            sortOption.date = -1
        }
        else if(sortByDate=="asc"){
            sortOption.date = 1
        }

        const post = await DoctorModel.find(filter).sort(sortOption)
        res.json({posts:post})
        
    } catch (error) {
        res.json({error:error.message})
    }

});


// update
doctorRouter.patch("/appointments/:id", auth,async (req,res) => {
    try {
        await DoctorModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ message: 'Doctor Details updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});



// delete
doctorRouter.delete("/appointments/:id", auth,async (req,res) => {
    try {
        await DoctorModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Doctor Details successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})


module.exports={doctorRouter};
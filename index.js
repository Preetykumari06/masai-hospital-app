const express=require("express");
const CORS=require('cors');
const {connection}=require("./Config/db");
const {userRouter} = require("./Routes/user.route");
const {doctorRouter}=require("./Routes/doctor.route");
// const { auth } = require("./Middlwares/auth.middleware");
require('dotenv').config()

const PORT=process.env.port || 3300;

const app=express();

app.use(express.json());
app.use(CORS());


app.use("/", userRouter);
app.use("/doctor", doctorRouter);

// app.use(auth)

app.get('/', (req,res) => {
    res.send('Welcome To Masai Hospital App.')

});



app.listen(PORT, async() => {
    try{
        await connection;
        console.log('Connected to the DB.')
    } catch(error){
       console.log(error);
       console.log('Somthing went to wrong while connected to the DB.')
    }
    console.log(`Server is running on ${process.env.PORT}`)
   
})
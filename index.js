const express=require("express");
const CORS=require('cors');
const {connection}=require("./Config/db");
const { userRouter } = require("./Routes/user.route");

const app=express();

app.use(express.json());
app.use(CORS());


app.use("/", userRouter)

app.get('/', (req,res) => {
    res.send('Welcome To Masai Hospital App.')

});



app.listen(4000, async() => {
    try{
        await connection;
        console.log('Connected to the DB.')
    } catch(error){
       console.log(error);
       console.log('Somthing went to wrong while connected to the DB.')
    }
    console.log('Server is running on 4000')
   
})
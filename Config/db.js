const mongoose=require("mongoose");

const connection=mongoose.connect("mongodb+srv://preetysingh46231:preetysingh@cluster0.muxtagj.mongodb.net/Masai-Hospital-AppMock6?retryWrites=true&w=majority");


module.exports={
    connection
}
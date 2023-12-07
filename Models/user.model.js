const mongoose=require('mongoose')

const UserSchema=mongoose.Schema({
    Email: {type:String,required:true},
    Password: {type:String,required:true}
});

const UserModel=mongoose.model('user', UserSchema);

module.exports={
    UserModel
}


// {
//     "Email":"anu14@gmail.com",
//     "Password":"anu1234"
    
//   }
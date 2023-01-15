import mongoose from 'mongoose';

const userSchema=new mongoose.Schema(
    {
        email:{type:String, required:true}, // email:unique has to be true but we are taking care by our own utils function
        password:{type:String, required:true}
    },
    {
        timestamps:true
    }

);

const User = mongoose.model('User', userSchema);

export default User;
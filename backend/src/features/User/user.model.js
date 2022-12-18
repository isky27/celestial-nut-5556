const {Schema,model}=require("mongoose")

const userSchema=Schema({
    first_name : {
        type : String,
        required : true,
    },
    last_name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    }
},{
    versionKey:false
}
)

const UserModel=model("user",userSchema)
module.exports=UserModel;
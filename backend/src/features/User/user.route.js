const UserModel=require("./user.model")
const express=require("express")
const Router=express.Router();
const argon=require("argon2")
const jwt=require("jsonwebtoken")
require('dotenv').config()

const SECRET_KEY=process.env.SECRET_KEY
const REFRESH_KEY=process.env.REFRESH_KEY
Router.post("/signup",async(req,res)=>{
    try {
        const {first_name,last_name,email,password}=req.body;
        if(email && password && first_name && last_name){
          const user=await UserModel.findOne({email})
            if(user){
                return res.status(401).send({message:"user already exists"});
            }
            else{
                const hash=await argon.hash(password)
                const User=new UserModel({first_name,last_name,email,password:hash})
                await User.save()
                return res.status(201).send({message:"User created successfully"})
            }
        }
        else{
            return res.status(404).send({message:"Fill all the details"})
        }
    } catch (error) {
        return res.status(401).send({message:error.message})
    }

})

Router.post("/login",async(req,res)=>{
    const {email,password}=req.body;

    try {
        if(!email ||!password){
            return res.status(404).send({message:"Please fill all the details"})
        }
        const user=await UserModel.findOne({email})
        if(user){
            if(await argon.verify(user.password,password)){
                const token= jwt.sign({id:user._id,name:user.first_name,email:user.email},SECRET_KEY,
                  {
                      expiresIn:"7 days"
                  })
                  const refreshToken= jwt.sign({id:user._id,name:user.first_name,},REFRESH_KEY,
                      {
                          expiresIn:"28 days"
                  })
                  return res.status(200).send({message:"User logged in",token,refreshToken})
              }
              else{
                  res.status(401).send({message:"Invalid credentials"})
              }
        }
        else{
            return res.status(404).send({message:"User not found, Please signup first"})
        }
       
    } catch (error) {
        return res.status(401).send({message:error.message})
    }
})
let blacklist=[]
Router.post("/logout",(req,res)=>
{
    const token=req.headers.authorization;
    blacklist.push(token)
    return res.status(200).send({message:"user logged out successfully"})
})


Router.patch("/edit/:id",async(req,res)=>{
    const token=req.headers.authorization;
    let id = req.params.id;
    
    if(!token){
        return res.status(403).send({message:"Unauthorized"})
    }
    if(blacklist.includes(token)){
        return res.status(401).send("token already expired")
    }
    try{
        const verification=await jwt.verify(token,SECRET_KEY)
        if(verification){
            //all good
             const decode=jwt.decode(token)
             if(decode.email=="admin@gmail.com"){
                const user=await UserModel.findByIdAndUpdate(id, { ...req.body }, { new: true })
                return res.status(200).send({message:"user updated successfully",user});
             }
        }
    }
    catch(e){
        return res.status(401).send({message:error.message});
    }
})

module.exports=Router;
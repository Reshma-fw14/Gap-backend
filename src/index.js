const express=require("express");
const app=express();
const ejs=require("ejs")

require("dotenv").config()

const connect=require("./configs/db");

const homeController=require("./controllers/home.controller");
const paymentController=require("./controllers/payment.controller")

const port = process.env.PORT || 2020

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static("public"));


app.use("/home",homeController)

// const connect =require("./src/configs/db");

const userController = require("./controllers/user.controller")
// const {register,login} =require("./controllers/auth.controller")
const checkoutController=require("./controllers/checkout.controller");

app.use("/users",userController)
// app.use("/register",register)
// app.use("/login",login)

app.use("",checkoutController)

app.listen(port,async()=>{
    try{
        await connect();
        console.log("Listening on port 2020...")
    }catch(err){
        console.log("err:",err)
    }
});
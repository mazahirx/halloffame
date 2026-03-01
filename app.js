const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const app = express();
const userModal = require("./modals/user");
const { parseArgs } = require('util');

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.get("/",(req,res)=>{
    res.render('index');
})
app.get("/read",async (req,res)=>{
    let users = await userModal.find();
    res.render("read",{users})
})
app.get("/delete/:id",async (req,res)=>{
    let users = await userModal.findOneAndDelete({_id: req.params.id});
    res.redirect("/read");
})
app.get("/edit/:id",async (req,res)=>{
    let users = await userModal.findById(req.params.id);
    res.render("edit", {users});
})

app.post("/create",async (req,res)=>{
    let {name,email,imgurl} = req.body;
    let newUser = await userModal.create({
        name,
        email,
        imgurl
    });

    res.redirect("/read");
})
app.post("/edit/:id",async (req,res)=>{
    let {name,email,imgurl} = req.body;
    await userModal.findByIdAndUpdate(
        req.params.id,
        { name, email, imgurl },
        { new: true }
    );
    res.redirect("/read");
})

app.listen(3000);
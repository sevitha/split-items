const {Router} = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const router = Router()

router.post('/register', async (req,res)=> {
    // res.send("created user")
    let email = req.body.email
    let name = req.body.name
    let password = req.body.password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)
    const user = new User({
        name:name,
        email:email,
        password:hashedPassword
    })
    const result = await user.save() // Save the details in the database
    res.json({
        user: result
    })
})
router.post("/login",async (req,res)=>{
    res.send("login user")
})
router.get('/user', (req,res)=>{
    res.send("user authenticated")
})

module.exports = router
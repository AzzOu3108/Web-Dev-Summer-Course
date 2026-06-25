const users = require('../model/User')

//GET ALL USERS
const getAllUsers = (req, res) =>{
    res.status(200).json(users)
}

//POST (Create User)
const createUser = (req, res)=> {
    const {name} = req.body

    const newUser = {
        id: users.length +1 ,
        name
    }

    users.push(newUser)

    res.status(201).json({
        message: "User created",
        users: newUser
    })
}

module.exports = {
    getAllUsers,
    createUser
}
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


const updateUser = (req, res)=>{
    const id= Number(req.params.id)
    const {name} = req.body

    const index = users.findIndex(user =>user.id ===id) 

    if(index === -1) {
        return res.status(404).json({message: "User not found"})
    }

    users[index].name = name

    res.status(200).json({
        message: "User updated",
        user : users[index]
    }
        
    )
}


const deleteUser = (req, res)=> {
    const id= Number(req.params.id)

    const index = users.findIndex(user => user.id === id)

    if(index === -1){
        return res.status(404).json({message: "User not found"})
    }

    users.splice(index, 1)

    res.status(200).json({ message:"User deleted"})
}

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}
//Promises:

const myPromise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("operation successful")
    } else {
        reject("something went wrong")
    }
})

myPromise 
    .then((result) =>{
        console.log(result)
    })

    .catch((error)=>{
        console.log(error)
    })




// async await:

function getMessages() {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve("hello from promise")
        }, 2000)
    })
}

async function displayMessages() {
    const message = await getMessages()

    console.log(message)
}

displayMessages()


//Error handling:

function divide (a, b) {
    return new Promise((resolve, reject)=>{
        if(b===0){
            reject("cannot divide by zero")
        } else {
            resolve(a/b)
        }
    })
}

async function calculation() {
    try {
        const result = await divide(10, 0)
    } catch (error) {
        console.log("Error:", error )
    }
}

calculation()


//Fetch API (application programming interface)

// https://jsonplaceholder.typicode.com/users

const fs = require('fs')

async function getUsers (){
    try {
        const response = fs.readFileSync("./users.json")

        const users = JSON.parse(response)
        
        users.forEach((user)=>{
            console.log(user.name)
        })
    } catch (error) {
        console.log("Error:", error )
    }
}

getUsers()
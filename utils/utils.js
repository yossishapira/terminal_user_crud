
import { DB } from "../db/db.js";
import { v4 as uuidv4 } from 'uuid';

export function ListAllUsers(){
    console.table(DB.users)
}


export function creatUser(username, role) {
    const user = {
        id: uuidv4(),
        username,
        role,
    }
    DB.users.push(user)
}

export function ReadUserByID(id) {
    const userid = DB.users.find(user => (user.id === id))
    if(userid){
        console.log(userid)
    }
    else{
            console.log("not found")
        }
}

export function UpdateUserByID(id, key, value) {
    DB.users.forEach(user => {
        if (user.id === id) {
            user[key] = value
        }
    })

}

export function DeleteUserByID(id) {
    DB.users.forEach((user, i) => {
        if (user.id === id)
            DB.users.splice(i, 1)
    })

}

export function SearchByUsername(name) {
    let ifinuser = DB.users.filter((user) => user.username.includes(name))
    if(ifinuser.length>0){
        console.log(ifinuser)
    }
    else{
        console.log("Not found")
    }
    }

export function isIdExists(id){
    const usersFind =  DB.users.find((user) => user.id === id )
    if(usersFind){
        return true
    }
    else{
        return false
    }

}
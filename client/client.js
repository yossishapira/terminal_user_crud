import { question } from "readline-sync";
import { creatUser, ReadUserByID, UpdateUserByID, DeleteUserByID, SearchByUsername, isIdExists } from "../utils/utils.js";
import { DB } from "../db/db.js";

export function Menu() {
    const menu = question(`
To see all users press 1 
Create a new user press 2 
Edit user by ID press 3 
Delete user by ID press 4
Search for a user by ID Press 5 
Search for a user by name Press 6 
To exit press 7 
`)
    return menu
}

export function AddUser() {
    const username = question("Enter username ")
    const role = question("Enter a role ")
    creatUser(username, role)
    DB.lastUpdate = new Date()
}

export function UpdateUser() {
    const id = question("Press ID ")
    const is_id = isIdExists(id)
    if (is_id === true) {
        const name = question("Enter new username ")
        if (name !== "") {
            UpdateUserByID(id, "username", name)
            DB.lastUpdate = new Date()
        }
        const role = question("Enter new role ")
        if (role !== "") {
            UpdateUserByID(id, "role", role)
            DB.lastUpdate = new Date()
        }
    else {
        console.log("The ID was not found ")
    }
}
}

export function DeleteUser(){
    const id = question("Press ID ")
    const is_id = isIdExists(id)
    if (is_id === true){
        let Yes;
        while(Yes!=="n"){
        const delet = question("Confirm deletion (Y/N) ")
        if(delet === "y"){
        DeleteUserByID(id)
        DB.lastUpdate = new Date()
        }
        else if(delet === "n"){
            Yes ="n"
        }}}
    else {
        console.log("The ID was not found ")
    }

}


export function ReadUser() {
    const id = question("Press ID ")
    const is_id = isIdExists(id)
    if (is_id === true) {
        ReadUserByID(id)
        DB.lastUpdate = new Date()
    }
    else {
        console.log("The ID was not found ")
    }

}

export function SearchUsername(){
    const name = question("Press name ")
    SearchByUsername(name)
    DB.lastUpdate = new Date()
}
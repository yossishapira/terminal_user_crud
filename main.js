import { Menu,AddUser,UpdateUser,DeleteUser,ReadUser,SearchUsername} from "./client/client.js"; 
import { ListAllUsers } from "./utils/utils.js";
console.log(`

Welcome
`)
let menu;
while(menu!=="7"){
    menu = Menu()
    switch (menu) {
        case "1":
            ListAllUsers()
            continue
        case "2":
            AddUser()
            continue
        case "3":
            UpdateUser()
            continue
        case "4":
            DeleteUser()
            continue
        case "5":
            ReadUser()
            continue
        case "6":
            SearchUsername()
    }
}


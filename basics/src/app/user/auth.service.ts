import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthService {

    currentUser!: IUser;
    loginUser (userName: String, password : string){
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'kanth',
            lastName: 'jvk'

        }
    }

    isAuthenticated(){
        return !!this.currentUser;
    }

    updateCurrentuser(firstName:string, lastName:string){
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }
}
import { User } from "../types/common";

export function GetCurrentUser(): User | null{
    const user = localStorage.getItem("user");
    if(user){
        return JSON.parse(user);
    }
    return null;
}
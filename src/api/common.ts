import { API_BASE_URL } from "../config";
import { User } from "../types/common";

export async function LoginUser(user: User): Promise<boolean> {
    // const response = await fetch("http://localhost:8000/login", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(user)
    // })

    console.log(user)
    return true
} 

export async function Register(
    login: string,
    password: string,
    email: string
    ): Promise<boolean> {
        // const response = await fetch(`${API_BASE_URL}/registration`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         login,
        //         password,
        //         email
        //     })
        // })
        // response.status
        
    return true
}
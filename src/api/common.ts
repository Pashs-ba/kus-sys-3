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
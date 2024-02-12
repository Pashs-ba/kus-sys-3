import { API_BASE_URL } from "../config";
import { Optional, User } from "../types/common";

export async function LoginUser(login: string, password: string): Promise<Optional<User>>   {
    // const response = await fetch("http://localhost:8000/login", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(user)
    // })

    console.log(login, password)
    return {
        isGood: true,
        value: {
            username: "some",
            role: "tester",
            token: "Aboba"
        }
    }
}

export async function Register(
    login: string,
    password: string,
    email: string
): Promise<Optional<boolean>> {
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

    return {
        isGood: true,
        value: true
    }
}
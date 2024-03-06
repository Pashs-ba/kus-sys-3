import { API_BASE_URL } from "../config";
import { Optional, User } from "../types/common";

export async function LoginUser(login: string, password: string): Promise<Optional<User>> {
    const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            login,
            password
        })
    })

    if (!response.ok) {
        return {
            isGood: false,
            reason: "Invalid login or password",
            value: {} as User
        }
    }
    return {
        isGood: true,
        value: (await response.json()).user
    }
}

export async function Register(
    login: string,
    password: string,
    email: string,
    key: string
): Promise<Optional<boolean>> {
    const response = await fetch(`${API_BASE_URL}/registration`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            login,
            password,
            email,
            key
        })
    })

    return {
        isGood: response.ok,
        value: response.ok
    }
}
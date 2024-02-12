export type User = {
    username: string,
    role: string,
    token: string
}

export type Optional<T> = {
    isGood: boolean,
    reason?: string,
    value: T
}
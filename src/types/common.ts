export type User = {
    token: string,
    key: string,
    status: number,
    school_id: 1,
    name: string,
    role: string[],
    email: string,
    login: string,
    surname: string,
    id: number,
}

export type Optional<T> = {
    isGood: boolean,
    reason?: string,
    value: T
}
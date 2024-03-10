export type Competition = {
    id: number,
    name: string,
    start_time: string,
    end_time: string,
}

export type ShortQuestion = {
    name: string,
    question_id: number,
}

export type Question = {
    id: number,
    name: string,
    type: string,
    legend: string,
    answer?: string,
}
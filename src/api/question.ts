import {API_BASE_URL} from "../config";
import {Question, ShortQuestion} from "../types/TestingSystem";

export async function GetAllQuestionForCompetition(competitionId: number): Promise<ShortQuestion[]> {
    const response = await fetch(`${API_BASE_URL}/get/if/competition_question/competition_id=${competitionId}`)
    return (await response.json()).competition_questions
}

export async function GetQuestionByUserAndId(user_id: number, question_id: number): Promise<Question> {
    const response = await fetch(`${API_BASE_URL}/get_question/${question_id}/${user_id}`)
    const body = await response.json()
    console.log(body)
    return body.question
}

export async function SendAnswer(user_id: number, question_id: number, answer: string): Promise<void> {
    console.log(user_id, question_id, answer)
    const res = await fetch(`${API_BASE_URL}/post/answer`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: user_id,
            question_id: question_id,
            value: answer
        })
    })
    console.log(await res.json())
}
import { API_BASE_URL } from "../config";
import { ShortQuestion } from "../types/TestingSystem";

export async function GetAllQuestionForCompetition(competitionId: number): Promise<ShortQuestion[]> {
    const response = await fetch(`${API_BASE_URL}/get/if/competition_question/competition_id=${competitionId}`)
    return (await response.json()).competition_questions
}

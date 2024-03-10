import {API_BASE_URL} from "../config";
import {Competition} from "../types/TestingSystem";

export async function GetAllCompetitions(user_id: number): Promise<Competition[]> {
    const response = await fetch(`${API_BASE_URL}/get/if/competition_user[competition_id[]]/user_id=${user_id}`)
    return (await response.json()).competition_users.map((el: { competition: Competition }) => {
        return el.competition
    })
}

export async function GetCompetitionById(id: number): Promise<Competition | null> {
    const response = await fetch(`${API_BASE_URL}/get/if/competition/id=${id}`)
    const result = (await response.json()).competitions
    if (result.length > 0) {
        return result[0]
    }
    return null
}

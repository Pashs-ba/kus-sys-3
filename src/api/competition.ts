import { API_BASE_URL } from "../config";
import { Competition } from "../types/TestingSystem";

export async function GetAllCompetitions(): Promise<Competition[]> {
    const response = await fetch(`${API_BASE_URL}/get/all/competition`)
    return (await response.json()).competitions
}

export async function GetCompetitionById(id: number): Promise<Competition | null> {
    const response = await fetch(`${API_BASE_URL}/get/if/competition/id=${id}`)
    const result = (await response.json()).competitions
    if (result.length > 0) {
        return result[0]
    }
    return null
}

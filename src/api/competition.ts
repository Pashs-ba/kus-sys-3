import { API_BASE_URL } from "../config";
import { Competition } from "../types/TestingSystem";

export async function GetAllCompetitions(): Promise<Competition[]> {
    const response = await fetch(`${API_BASE_URL}/get/all/competition`)
    return (await response.json()).competitions
}
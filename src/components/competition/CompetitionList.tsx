import { useEffect, useState } from "react"
import { Competition } from "../../types/TestingSystem"
import { GetAllCompetitions } from "../../api/competition"
import CompetitionCard from "./CompetitionCard"

export type CompetitionListProps = {}

export default function CompetitionList() {
    const [competitions, setCompetitions] = useState([] as Competition[])
    useEffect(() => {
        GetAllCompetitions().then((res) => {
            setCompetitions(res)
        })
    }, [])
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center full-height">
                {
                    competitions.map(el => {
                        return (
                            <CompetitionCard competition={el} key={el.id} />
                        )
                    })
                }
            </div>
        </div>
    )
}
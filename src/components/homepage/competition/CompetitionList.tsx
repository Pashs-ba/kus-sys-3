import {useEffect, useState} from "react"
import {Competition} from "../../../types/TestingSystem"
import {GetAllCompetitions} from "../../../api/competition"
import CompetitionCard from "./CompetitionCard"
import {GetCurrentUser} from "../../../utils/users.ts";
import {User} from "../../../types/common.ts";

export type CompetitionListProps = {}

export default function CompetitionList() {
    const [competitions, setCompetitions] = useState([] as Competition[])
    const user = GetCurrentUser() ?? {} as User;
    useEffect(() => {
        GetAllCompetitions(user.id ?? -1).then((res) => {
            setCompetitions(res)
        })
    }, [user.id])
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center full-height">
                {
                    competitions.map(el => {
                        return (
                            <CompetitionCard competition={el} key={el.id}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
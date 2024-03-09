import { useParams } from "react-router-dom"
import { Competition, ShortQuestion } from "../../types/TestingSystem"
import { useEffect, useState } from "react"
import { GetAllQuestionForCompetition } from "../../api/question"
import { GetCompetitionById } from "../../api/competition"

export default function CompetitionPage() {
    const params = useParams<{ id: string }>()
    const [shortQuestions, setShortQuestions] = useState([] as ShortQuestion[])
    const [competition, setCompetition] = useState({} as Competition)
    useEffect(() => {
        GetAllQuestionForCompetition(parseInt(params.id ?? "-1")).then((res) => {
            setShortQuestions(res)
        })
        GetCompetitionById(parseInt(params.id ?? "-1")).then((res) => {
            setCompetition(res ?? {} as Competition)
        })
    }, [])
    return (
        <div>
            <h1>{competition.name}</h1>
            <div>
                {
                    shortQuestions.map(el => {
                        return (
                            <div key={el.question_id}>
                                <p>{el.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
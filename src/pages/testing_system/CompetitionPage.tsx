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
        <div className="container-fluid">
            <div className="row p-4 full-height">
                <div className="col-2 pe-4 border-end">
                    <div className="fs-3 pb-4 border-bottom ">{competition.name}</div>
                    <div className="pt-4"
                    style={{
                        maxHeight: "50vh",
                        overflowY: "scroll"
                    }}>
                        <ul className="list-group">
                            {
                                shortQuestions.map(el => {
                                    return (
                                        <li className="list-group-item" key={el.question_id}>{el.name}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="col-10">another data</div>
            </div>
        </div>

    )
}
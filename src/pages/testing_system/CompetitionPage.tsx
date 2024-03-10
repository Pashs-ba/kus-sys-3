import {useParams} from "react-router-dom"
import {Competition, ShortQuestion} from "../../types/TestingSystem"
import {useEffect, useState} from "react"
import {GetAllQuestionForCompetition} from "../../api/question"
import {GetCompetitionById} from "../../api/competition"
import {QuestionsList} from "../../components/testing_system/QuestionsList.tsx";


export default function CompetitionPage() {
    const params = useParams<{ id: string }>()
    const [shortQuestions, setShortQuestions] = useState([] as ShortQuestion[])
    const [competition, setCompetition] = useState({} as Competition)
    const [activeQuestionId, setActiveQuestionId] = useState(-1)
    useEffect(() => {
        GetAllQuestionForCompetition(parseInt(params.id ?? "-1")).then((res) => {
            setShortQuestions(res)
            if (res.length > 0) setActiveQuestionId(1)
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
                    <QuestionsList shortQuestions={shortQuestions}
                                   activeQuestionId={activeQuestionId}
                                   onQuestionClick={(id) => setActiveQuestionId(id)}
                    />
                </div>
                <div className="col-10">another data</div>
            </div>
        </div>

    )
}
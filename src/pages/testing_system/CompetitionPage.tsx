import {useParams} from "react-router-dom"
import {Competition, Question, ShortQuestion} from "../../types/TestingSystem"
import {useEffect, useState} from "react"
import {GetAllQuestionForCompetition, GetQuestionByUserAndId, SendAnswer} from "../../api/question"
import {GetCompetitionById} from "../../api/competition"
import {QuestionsList} from "../../components/testing_system/QuestionsList.tsx";
import QuestionComponent from "../../components/testing_system/QuestionComponent.tsx";
import {GetCurrentUser} from "../../utils/users.ts";
import {User} from "../../types/common.ts";


export default function CompetitionPage() {
    const params = useParams<{ id: string }>()
    const user = GetCurrentUser() ?? {} as User
    const [shortQuestions, setShortQuestions] = useState([] as ShortQuestion[])
    const [competition, setCompetition] = useState({} as Competition)
    const [activeQuestionId, setActiveQuestionId] = useState(-1)
    const [activeQuestion, setActiveQuestion] = useState({} as Question)
    useEffect(() => {
        GetAllQuestionForCompetition(parseInt(params.id ?? "-1")).then((res) => {
            setShortQuestions(res)
            if (res.length > 0) setActiveQuestionId(-1)
        })
        GetCompetitionById(parseInt(params.id ?? "-1")).then((res) => {
            setCompetition(res ?? {} as Competition)
        })
    }, [])
    useEffect(() => {
        if (activeQuestionId != -1) {
            GetQuestionByUserAndId(user.id, activeQuestionId).then((res) => {
                setActiveQuestion(res)
            })
        }else{
            setActiveQuestion({id: -1} as Question)
        }
    }, [activeQuestionId])
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
                <div className="col-10">
                    <QuestionComponent question={activeQuestion}
                                       key={activeQuestionId}
                                       onAnswer={(answer) => {
                                           setActiveQuestion({...activeQuestion, answer: "..."})
                                           SendAnswer(user.id, activeQuestionId, answer).then(() => {
                                               setActiveQuestion({...activeQuestion, answer: answer})
                                           })
                                       }}/>
                </div>
            </div>
        </div>

    )
}
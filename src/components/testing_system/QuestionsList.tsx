import {ShortQuestion} from "../../types/TestingSystem.tsx";

export function QuestionsList(props: {
    shortQuestions: ShortQuestion[],
    activeQuestionId: number,
    onQuestionClick?: (id: number) => void
}) {
    return <div className="mt-4"
                style={{
                    maxHeight: "50vh",
                    overflowY: "scroll"
                }}>
        <ul className="list-group">
            {
                props.shortQuestions.map(el =>
                    <a className={`list-group-item list-group-item-action ${el.question_id == props.activeQuestionId ? "active" : ""}`}
                       role={"button"}
                       key={el.question_id}
                       onClick={() => props.onQuestionClick?.(el.question_id)}
                    >{el.name}</a>
                )
            }

        </ul>
    </div>;
}
import {Question} from "../../types/TestingSystem.tsx";
import {Form} from "pashs-form-generator";

export default function QuestionComponent(props: { question: Question, onAnswer?: (answer: string) => void }) {
    return (
        <>
            {props.question.id != -1 ?
                <div className={"d-flex flex-column h-100 justify-content-between"}>
                    <div className="fs-3 pb-4 border-bottom ">{props.question.name}</div>
                    <div style={{
                        maxHeight: "50vh",
                        overflowY: "scroll"
                    }}>
                        <div className="fs-5" dangerouslySetInnerHTML={{__html: props.question.legend}}></div>
                    </div>
                    <div className="fs-5 pt-1 border-top">
                        {props.question.answer ?
                            <div className={"text-secondary fs-6"}>Ответ "{props.question.answer}"
                                сохранен</div> : null}
                        <Form
                            elements={[{
                                type: "input",
                                name: "answer",
                                label: "",
                                required: true,
                                defaultValue: props.question.answer ?? "",
                                properties: {}
                            }]}
                            buttonText={"Отправить"}
                            defaultInvalidText={"Поле обязательно для заполнения"}
                            onButtonClick={el => {
                                props.onAnswer?.(el.answer)
                            }}/>
                    </div>
                </div>
                : <div className={"d-flex flex-column h-100 justify-content-center align-items-center"}>
                    <h1>Выберите вопрос из списка слева</h1>
                </div>
            }

        </>
    )
}
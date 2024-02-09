import { ElementType, Form } from "pashs-form-generator"
import "../styles/Login.css"
import { LoginUser } from "../api/common"
export type LoginProps = {}

export default function Login() {
    return (
        <div className="full-height d-flex justify-content-center align-items-center">
            <div className="col-5">
                <div className="card ">
                    <div className="card-body">
                        <Form
                            title="Вход"
                            buttonText={"Войти"}
                            defaultInvalidText="Это поле обязательно для заполнения"
                            elements={[
                                {
                                    label: "Логин",
                                    name: "login",
                                    type: ElementType.TEXT_INPUT,
                                    required: true,
                                    properties: {}
                                },
                                {
                                    label: "Пароль",
                                    name: "password",
                                    type: ElementType.TEXT_INPUT,
                                    required: true,
                                    properties: {
                                        type: "password"
                                    }
                                },
                            ]}
                            onButtonClick={(data) => {
                                LoginUser(data).then((result) => {
                                    if (result){
                                        localStorage.setItem("user", JSON.stringify(data))
                                    }
                                })
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
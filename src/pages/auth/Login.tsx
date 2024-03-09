import { Form } from "pashs-form-generator"
import "../../styles/main.css"
import { LoginUser } from "../../api/common"
import CardBody from "../../components/common/CardBody"
import Alert from "../../components/common/Alert"
import { useState } from "react"
export type LoginProps = {}
export default function Login() {
    const [badLogin, setBadLogin] = useState(false)
    return (
        <div className="full-height d-flex justify-content-center align-items-center">
            <CardBody>
                {
                    badLogin ? <Alert type="danger" text="Неправильный логин или пароль" /> : null
                }

                <Form
                    title="Вход"
                    buttonText={"Войти"}
                    defaultInvalidText="Это поле обязательно для заполнения"
                    elements={[
                        {
                            label: "Логин",
                            name: "login",
                            type: 'input',
                            required: true,
                            properties: {}
                        },
                        {
                            label: "Пароль",
                            name: "password",
                            type: 'input',
                            required: true,
                            properties: {
                                type: "password"
                            }
                        },
                    ]}
                    onButtonClick={(data) => {
                        LoginUser(data.login, data.password).then((result) => {
                            if (result.isGood) {
                                localStorage.setItem("user", JSON.stringify(result.value))
                                window.location.href = "/"
                            }else{
                                setBadLogin(true)
                            }
                        })
                        
                    }}
                />
                <p className="text-secondary mt-3">
                    Нет аккаунта? <a className="link-secondary" href="/registration">Зарегистрироваться</a>
                </p>
            </CardBody>
        </div>
    )
}
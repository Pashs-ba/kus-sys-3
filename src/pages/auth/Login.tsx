import { Form } from "pashs-form-generator"
import "../../styles/Login.css"
import { LoginUser } from "../../api/common"
import CardBody from "../../components/CardBody"
export type LoginProps = {}

export default function Login() {
    return (
        <div className="full-height d-flex justify-content-center align-items-center">
            <CardBody>
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
                                localStorage.setItem("user", JSON.stringify(result))
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
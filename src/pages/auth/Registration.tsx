import { Form } from "pashs-form-generator"
import CardBody from "../../components/CardBody"
import { useState } from "react"
import Alert from "../../components/Alert"
import { Register } from "../../api/common"
import { useNavigate } from "react-router-dom"

export type RegistrationProps = {}

export default function Registration() {
    const [showBadPassword, setShowBadPassword] = useState(false)
    const [apiError, setApiError] = useState("")
    const navigate = useNavigate()
    return (
        <div className="full-height d-flex justify-content-center align-items-center">
            <CardBody>
                {
                    showBadPassword ? (
                        <div className="mb-3">
                            <Alert
                                text={"Пароли должны совпадать"}
                                type={"danger"} />
                        </div>
                    ) : null
                }
                {
                    apiError ? (
                        <div className="mb-3">
                            <Alert
                                text={apiError}
                                type={"danger"} />
                        </div>
                    ) : null
                }
                <Form
                    elements={[
                        {
                            label: "Email",
                            name: "email",
                            type: 'input',
                            required: true,
                            invalidText: "Пожалуйста введите корректный email",
                            properties: {
                                type: "email"
                            }
                        },
                        {
                            label: "Имя",
                            name: "name",
                            type: 'input',
                            required: true,
                            properties: {}
                        },
                        {
                            label: "Фамилия",
                            name: "surname",
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
                        {
                            label: "Подтверждение пароля",
                            name: "passwordConfirm",
                            type: 'input',
                            required: true,
                            properties: {
                                type: "password"
                            }
                        },
                        {
                            label: "Я согласен на обработку персональных данных",
                            name: "agree",
                            type: 'checkbox',
                            required: true,
                            invalidText: "Вы должны согласиться на обработку персональных данных",
                            properties: {}
                        }
                    ]}
                    title="Регистрация"
                    defaultInvalidText="Это поле обязательно для заполнения"
                    buttonText="Зарегестрироваться"
                    onButtonClick={(data) => {
                        if (data.password !== data.passwordConfirm) {
                            setShowBadPassword(true)
                            return;
                        }
                        setShowBadPassword(false)
                        Register(data.login, data.password, data.email).then(res => {
                            if (res.isGood) {
                                return navigate('/reg-success')
                            } else {
                                setApiError(res.reason ?? "Some error") //TODO ERROR
                            }
                        })
                    }} />

            </CardBody>
        </div>
    )
}
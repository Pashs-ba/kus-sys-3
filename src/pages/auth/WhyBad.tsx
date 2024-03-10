import CardBody from "../../components/common/CardBody"

export type WhyBadProps = {}

export default function WhyBad({}: WhyBadProps) {
    return (
        <div className="full-height d-flex justify-content-center align-items-center">
            <CardBody>
                <b>Если вы регестрируетесь на программирование</b>
                <div className={"ps-4"}>
                    <p>Такой логин уже занят</p>
                </div>
                <b>Если вы регестрируетесь на информатику</b>
                <div className={"ps-4"}>
                    <p>Логин по информатике необходимо вводить следующим образом:</p>
                    <p><b>{"<Выданый шаблон><Две цифры вашего дня рождения>"}</b></p>
                    Например:
                    <p>Шаблон:
                        <b>
                            <pre>7ABCD0000__</pre>
                        </b>
                    </p>
                    <p>День рождения:
                        <b>
                            <pre>01</pre>
                        </b>
                    </p>
                    <p>Итоговый логин:
                        <b>
                            <pre>7ABCD000001</pre>
                        </b>
                    </p>
                </div>
                <b>Если вы уверены что ошибка не в этом</b>
                <div className="ps-4">
                    <p>Напишите <a href="https://t.me/rcomrad">@rcomrad</a> в техподдержку</p>
                </div>
            </CardBody>
        </div>
    )
}
import CardBody from "../../components/CardBody"

export type WhyBadProps = {}

export default function WhyBad({ }: WhyBadProps) {
    return (
        <div className="full-height d-flex justify-content-center align-items-center">
            <CardBody>
                <b>Если вы регестрируетесь на информатику</b>
                <p>Проверьте что ваш логин совпадает с тем который вам выдали, другие логины не подойдут</p>
                <b>Если вы регестрируетесь на программирование</b>
                <p>Такой логин уже занят</p>
                <b>Если вы уверены что ошибка не в этом</b>
                <p>Напишите <a href="https://t.me/rcomrad">@rcomrad</a> в техподдержку</p>
            </CardBody>
        </div>
    )
}
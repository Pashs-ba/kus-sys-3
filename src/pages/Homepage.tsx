import CardBody from "../components/CardBody"

export type HomepageProps = {}

export default function Homepage() {
    return (
        <div className="full-height d-flex justify-content-center align-items-center">
            <CardBody>
                <h4>Вы успешно вошли в систему!</h4>
                <p>Скоро тут будет олимпиада</p>
            </CardBody>
        </div>
    )
}
import { Link } from "react-router-dom";
import CardBody from "../../components/common/CardBody";

export default function NotFoundPage(){
    return (
        <div className="full-height d-flex justify-content-center align-items-center text-center">
            <CardBody>
                <div className="fs-1">404</div>
                <div className="fs-1 mb-3">Страница не найдена</div>
                <div>Вы можете <Link to="/">вернуться на главную</Link> или написать в <a href="https://t.me/rcomrad">техподдержку</a></div>
            </CardBody>
        </div>
)}
import {Suspense, lazy} from "react";
import {GetCurrentUser} from "../utils/users"
import Loading from "../components/common/Loading";
import {DEBUG} from "../config.ts";
import CardBody from "../components/common/CardBody.tsx";

export default function Homepage() {
    const user = GetCurrentUser();
    const CompetitionList = lazy(() => import("../components/homepage/competition/CompetitionList"))
    return (
        <div>
            {DEBUG ? <Suspense fallback={<Loading/>}>
                    {
                        user && user.role.includes("submitor") ?
                            (
                                <CompetitionList/>
                            )
                            : null
                    }
                </Suspense> :
                <div className={"full-height d-flex justify-content-center align-items-center"}>
                    <CardBody>
                        <b>Вы успешно вошли!</b>
                        <p>Скоро здесь будет олимпиада!</p>
                    </CardBody>
                </div>}
        </div>
    )
}
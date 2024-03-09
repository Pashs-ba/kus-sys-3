import { Suspense, lazy } from "react";
import { GetCurrentUser } from "../utils/users"
import Loading from "../components/common/Loading";

export type HomepageProps = {}

export default function Homepage() {
    const user = GetCurrentUser();
    const CompetitionList = lazy(() => import("../components/homepage/competition/CompetitionList"))
    return (
        <div>
            <Suspense fallback={<Loading/>}>
                {
                    user && user.role.includes("submitor") ?
                        (
                            <CompetitionList />
                        )
                        : null
                }
            </Suspense>
        </div>
    )
}
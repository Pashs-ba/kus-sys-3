import { Link } from "react-router-dom"
import { Competition } from "../../../types/TestingSystem"
import CardBody from "../../common/CardBody"

export type CompetitionCardProps = {
    competition: Competition
}

export default function CompetitionCard({ competition }: CompetitionCardProps) {
    return (
        <CardBody colSize={4}>
            <div className="d-flex justify-content-center flex-column">
                <div className="text-center fs-3">{competition.name}</div>
                <div className="text-center mb-5 text-secondary fs-6">{`С ${competition.start_time} до ${competition.end_time}`}</div>
                <Link className="btn btn-primary" to={`/competition/${competition.id}`}>Участвовать</Link>
            </div>
        </CardBody>
    )
}
import Alert from "../../components/common/Alert"

export type RegistartionSuccessProps = {}

export default function RegistartionSuccess() {
    return (
        <div className="full-height d-flex justify-content-center align-items-center">
            <Alert
                text="Мы послали письмо с инструкциями для завершения регистрации"
                type="success"
            />
        </div>
    )
}
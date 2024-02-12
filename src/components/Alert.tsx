export type AlertProps = {
    type?: "success" | "danger" | "warning" | "info" | "primary" | "secondary",
    text: string
}

export default function Alert({ type = "primary", text }: Readonly<AlertProps>) {
    return (
        <div className={`alert alert-${type}`} role="alert">
            {text}
        </div>
    )
}
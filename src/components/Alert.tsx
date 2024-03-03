export type AlertProps = {
    type?: "success" | "danger" | "warning" | "info" | "primary" | "secondary",
    text: string,
    children?: React.ReactNode
}

export default function Alert({ type = "primary", text, children }: Readonly<AlertProps>) {
    return (
        <div className={`alert alert-${type}`} role="alert">
            {text}
            {children}
        </div>
    )
}
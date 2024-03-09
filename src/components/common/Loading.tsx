export type LoadingProps = {}

export default function Loading() {
    return (
        <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}
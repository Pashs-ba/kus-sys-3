import ChangeThemeButton from "./ChangeThemeButton"
import LogoutButton from "./LogoutButton"

export type HeaderProps = {}

export default function Header() {
    return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/#">KusSys</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <LogoutButton/>
                        <ChangeThemeButton/>
                    </div>
                </div>
            </nav>
    )
}
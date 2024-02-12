import { useEffect, useState } from "react"

export type ChangeThemeButtonProps = {}

export default function ChangeThemeButton() {
    const [isDark, setIsDark] = useState(false)
    useEffect(() => {
        let theme = localStorage.getItem("theme")
        if (theme) {
            setIsDark(theme == "dark")
            document.getElementsByTagName("html")[0].setAttribute("data-bs-theme", theme ? "dark" : "light")
        }
    }, [])
    return (
        <div>
            <button
                className="btn btn-link text-body"
                onClick={() => {
                    setIsDark(!isDark)
                    document.getElementsByTagName("html")[0].setAttribute("data-bs-theme", !isDark ? "dark" : "light")
                    localStorage.setItem("theme", !isDark ? "dark" : "light")
                }}>
                <i className={`bi bi-${isDark ? "brightness-high" : "moon"}`} />
            </button>
        </div>
    )
}
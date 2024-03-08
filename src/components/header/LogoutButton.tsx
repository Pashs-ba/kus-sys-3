import { useState } from "react"

export default function LogoutButton() {
    const [show, setShow] = useState(localStorage.getItem("user") !== null)
    return (
        <>
            {
                show ?
                    (
                        <button className="btn btn-outline-primary"
                            onClick={() => {
                                localStorage.removeItem("user")
                                window.location.href = "/"
                            }}
                        > Выйти</button>
                    ) : null

            }
        </>

    )
}
import Header from "./components/header/Header"
import { Outlet } from "react-router-dom"
import "./styles/main.css"

function App() {


  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App

import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./LoginPage"
import HomePage from "./HomePage"
import AboutPage from "./AboutPage"
import Navbar from "./Navbar"


const MainApp = () => {
    return (
        <>
            <h1>MainApp</h1>
            <BrowserRouter>
                <Navbar />
                <hr />
                <Routes>
                    <Route path="/*" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>

            </BrowserRouter>
        </>
    )
}

export default MainApp

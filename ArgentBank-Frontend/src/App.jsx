import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout/Layout.jsx"
import Profile from "./pages/Profile.jsx"
import Sign from "./pages/Sign.jsx"
import Home from "./pages/Home.jsx"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/sign" element={<Sign />} />
                    <Route path="/profile" element={<Profile />} />
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default App

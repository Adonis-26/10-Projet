import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout/Layout.jsx"
import Profile from "./pages/Profile.jsx"
import Sign from "./pages/Sign.jsx"
import Home from "./pages/Home.jsx"
import AuthGuard from "./helpers/AuthGuard.jsx"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/sign" element={<Sign />} />
                    <Route path="/profile" element={
                        <AuthGuard>
                            <Profile />
                        </AuthGuard>
                     }/>
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default App

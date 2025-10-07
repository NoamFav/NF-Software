import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";

function App() {
    return (
        <Router>
            <main>
                <Routes>
                    <Route path="/" element={<Hero />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;

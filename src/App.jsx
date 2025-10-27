// ============================================================================
// FILE: src/App.jsx - UPDATED
// ============================================================================
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Products from "./pages/Products";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Products />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Product";
import Testimonials from "./components/Testimonial";

function App() {
    return (
        <Router>
            <main>
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;

import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/about/About';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {
    return (
        <main>
            <Router>
                <Sidebar />
                <div className="main-content">
                    <Nav />
                    <Routes>
                        <Route path="/" exact element={<About />} />
                        <Route path="/resume" exact element={<Resume />} />
                        <Route path="/portfolio" exact element={<Portfolio />} />
                        <Route path="/blog" exact element={<Blog />} />
                        <Route path="/contact" exact element={<Contact />} />
                    </Routes>
                </div>
            </Router>
        </main>
    );
};

export default App;

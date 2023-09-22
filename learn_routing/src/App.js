
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Route_1/Home";
import About from "./components/Route_1/About";
import Navbar from './components/Route_1/Navbar';
import ErrorPage from './components/Route_1/ErrorPage';
import RedirectPage from './components/Route_1/RedirectPage';
import Params from './components/Route_1/Params';
import SearchParams from './components/Route_1/SearchParams';
import ProgramaticRoute from './components/Route_1/ProgramaticRoute';
// Nested Routing

import Course from './components/nested_routing/Course';
import Java from './components/nested_routing/Java';
import Python from './components/nested_routing/Python';
import Javascript from './components/nested_routing/Javascript';
function App() {
  return (
    <>
      <h1>React Router 6</h1>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/params/:productID" element={<Params />} />
          <Route exact path="/search_params" element={<SearchParams />} />
          <Route exact path="/redirect" element={<RedirectPage />} />
          <Route exact path="/programatic_route" element={<ProgramaticRoute />} />

          {/* Nested Routing  */}
          <Route exact path="/course" element={<Course />}>
            <Route exact path="java" element={<Java />} />
            <Route exact path="python" element={<Python />} />
            <Route exact path="javascript" element={<Javascript />} />
          </Route>
          <Route exact path="/*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import './App.css'
import Cards from './components/cards'
import Front from './components/front'
// import Spline from '@splinetool/react-spline';
import Services from './components/services'
import Navbar from './components/nav'
import IconGrid from './components/techstack'
import Topdown from './components/topdown'

import AdMarquee from './components/adMarquee'
import { Outlet } from 'react-router-dom'
import Foot from './components/foot'
import Home from './pages/Home'
import TermsAndConditions from './pages/TnC'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
    <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tnc" element={<TermsAndConditions />} />
                {/* Other routes */}
            </Routes>
        </Router>
   
    </>
  )
}

export default App
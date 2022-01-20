import React from 'react'
import "./output.css" ;//impoting the output.css of tailwindcss
import Home from './components/Home';
import Header from './components/Header';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className='m-0'>

      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/search" element={<SearchPage/>}/>
        </Routes>
        <Footer/>
      </Router>

    </div>
  )
}

export default App

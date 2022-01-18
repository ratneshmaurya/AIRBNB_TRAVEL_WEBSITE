import React from 'react'
import "./output.css" ;//impoting the output.css of tailwindcss
import Home from './components/Home';
import Header from './components/Header';

const App = () => {
  return (
    <div className='m-0'>

      {/* header componenet */}
      <Header/>

        {/* home page */}
        <Home/>

      {/* Search Page */}
    </div>
  )
}

export default App

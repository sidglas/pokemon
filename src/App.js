import React from 'react'

import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './elements/Header'
import Home from './pages/Home'


function App() {


return (
  <Router>
    <div>
      <Header />
      <Route path='/' exact component={Home} />
    </div>
  </Router>
)
}

export default App;


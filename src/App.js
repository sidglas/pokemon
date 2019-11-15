import React from 'react'

import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './elements/Header'
import Home from './pages/Home'
import Pokeinfo from './pages/Pokeinfo'


function App() {


return (
  <Router>
    <div>
      <Header />
      <Route path='/' exact component={Home} />
      <Route path='/pokeinfo' exact component={Pokeinfo} />
      <Route path='/pokeinfo/:data' component={Pokeinfo} />
    </div>
  </Router>
)
}

export default App;

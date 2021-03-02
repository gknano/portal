import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import MainPage from './Components/Pages/MainPage'
import TablePage from './Components/Pages/TablePage'
import NoMatchPage from './Components/Pages/NoMatchPage'

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/tablepage" component={TablePage} />
        <Route component={NoMatchPage} />
      </Switch>
    </div>
  )
}

export default App

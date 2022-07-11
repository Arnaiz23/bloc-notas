import './App.css'
import Home from './pages/Home'
import {Route} from "wouter"
import Login from './pages/Login'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Route path="/" component={Login} />
        <Route path="/home" component={Home} />
      </header>
    </div>
  )
}

export default App

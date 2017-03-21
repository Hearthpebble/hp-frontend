import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Card from './components/Card'
import Minion from './components/Minion'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card 
          title="title" 
          cost={4}
          health={4}
          attack={4}
          desc="desc"
          type="type"
        />
        <Card visible={false}></Card>
        <Minion
          title="minion"
          health={4}
          attack={4}
        />
      </div>
    )
  }
}

export default App

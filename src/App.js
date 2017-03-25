import React, { Component } from 'react'
import './App.css'
import MinionShelf from './components/MinionShelf'
import Hand from './components/Hand'
import { cards, minions } from './data'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hand
          hand={[{id: '1'}, {id: '2'}, {id: '3'}]}
        />
        <MinionShelf
          minions={minions}
        />
        <MinionShelf
          minions={minions}
        />
        <Hand
          hand={cards}
        />
      </div>
    )
  }
}

export default App

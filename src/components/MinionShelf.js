import React, { PropTypes } from 'react'
import Minion from './Minion'
import './MinionShelf.css'

const MinionShelf = ({ minions }) => (
  <div className="Minion-Shelf">
    {minions.map(minion =>
      <Minion
        key={ minion.id }
        title={ minion.title }
        attack={ minion.attack }
        health={ minion.health }
      />
    )}
  </div>
)

MinionShelf.propTypes = {
  minions: PropTypes.array.isRequired
}

export default MinionShelf
import React, { PropTypes } from 'react';
import './Minion.css'

const Minion = ({title, health, attack}) => (
  <div className="Minion">
    <div className="Minion-Title">{ title }</div>
    <div className="Minion-Health token">{ health }</div>
    <div className="Minion-Attack token">{ attack }</div>
  </div>
)

Minion.propTypes = {
  title: PropTypes.string.isRequired,
  health: PropTypes.number.isRequired,
  attack: PropTypes.number.isRequired,
}

export default Minion
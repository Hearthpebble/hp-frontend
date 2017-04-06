import React, { PropTypes } from 'react';
import './Minion.css'

const Minion = ({title, health, attack, exhausted, divineShield, frozen}) => (
  <div className={`
      Minion
      ${exhausted ? '' : 'playable'}
      Minion
      ${divineShield ? '' : 'playable'},
      Minion
      ${frozen ? '' : 'playable'},
  `}>
    <div className="Minion-Title">{ title }</div>
    <div className="Minion-Health token">{ health }</div>
    <div className="Minion-Attack token">{ attack }</div>
  </div>
)

Minion.propTypes = {
  title: PropTypes.string.isRequired,
  health: PropTypes.number.isRequired,
  attack: PropTypes.number.isRequired,
  exhausted: PropTypes.bool,
  divineShield: PropTypes.bool,
  frozen: PropTypes.bool,
}

Minion.defaultProps = {
  exhausted: true,
  divineShield: true,
  frozen: true,
}

export default Minion

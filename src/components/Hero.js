import React, { PropTypes } from 'react';
import './Hero.css'

const Hero = ({title, health, attack, exhausted, frozen}) => (
  <div className={`
      Hero
      ${exhausted ? '' : 'playable'}
      Hero
      ${frozen ? '' : 'playable'}
  `}>
    <div className="Hero-Title">{ title }</div>
    <div className="Hero-Health token">{ health }</div>
    <div className="Hero-Attack token">{ attack }</div>
  </div>
)

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  health: PropTypes.number.isRequired,
  attack: PropTypes.number.isRequired,
  exhausted: PropTypes.bool,
  frozen: PropTypes.bool,
}

Hero.defaultProps = {
  exhausted: true,
  frozen: true,
}

export default Hero

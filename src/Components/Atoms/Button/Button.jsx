//Import-React:
import React from 'react';
import PropTypes from 'prop-types';

//Import-Style:
import './style.css';

//Main-Component:
export default function Button({title, icon, block, isLoading}) {
  if(isLoading){
      return <button
      id={block ? 'btn-block-disabled' : 'btn-disabled'} className="btn-default" disabled>
      <i className={icon} /> {title}
      </button>
  }
  return <button
            id={block ? 'btn-block' : 'btn'} className="btn-default" >
            <i className={icon} /> {title}
        </button>
}

//Default-Props:
Button.defaultProps = {
  title: 'Button',
  isLoading: false,
  block: false
}

//Props-Type:
Button.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  block: PropTypes.bool,
  isLoading: PropTypes.bool
};
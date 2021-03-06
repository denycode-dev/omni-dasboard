//Import-React:
import React from 'react';
import PropType from 'prop-types';
//Import-Style:
import './style.css';

//Main-Components:
export default function RadioCheckButton({title, checked}) {
  return (
    <label id="radio-check-button">
      <span>{title}</span>
      <input type="radio" checked={checked} name="radio" />
      <span class="checkmark"></span>
    </label>
  )
}

//Default-Props:
RadioCheckButton.defaultProps = {
  title: 'radio',
  checked: ''
}
//Props-Type:
RadioCheckButton.PropType = {
  title: PropType.string,
  checked: PropType.string
}

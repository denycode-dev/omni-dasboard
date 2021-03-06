//Import-React:
import React from 'react';
//Import-Style:
import './style.css';
//Import-Components:
import RadioCheckButton from '../../Atoms/RadioCheckButton/RadioCheckButton';
import SelectForm from '../../Atoms/SelectForm/SelectForm';

//Main-Components:
export default function SelectFormGroup() {
  return (
    <div id="select-form-group">
      <RadioCheckButton title="Once Day" checked="checked"/>
      <div>
        <SelectForm leftText="At" rightText="WIB" title="2AM" />
      </div>
      <RadioCheckButton title="At Interval" />
      <div id="select-form-two">
        <SelectForm leftText="Every" title="6" disabled="disabled"/>
        <SelectForm rightText="From" title="hours" disabled="disabled"/>
        <SelectForm rightText="WIB" title="2AM" disabled="disabled"/>
      </div>
    </div>
  )
}

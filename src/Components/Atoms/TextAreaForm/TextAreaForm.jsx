//Import-React:
import React from 'react'

//Main-Components:
export default function TextAreaForm() {
  return (
    <div>
      <label id="textarea-message">Message</label>
      <textarea type="text" placeholder="Select your phonebook" id="broadcast-message"/>
      <div id="text-area-count">
        <small>Character 0/1024</small>
      </div>
    </div>
  )
}
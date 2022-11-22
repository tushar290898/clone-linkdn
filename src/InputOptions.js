import React from 'react'
import './InputOptions.css'
function InputOptions({ Icon, color, title}) {
  return (
    <div className='optionsfeed'>
        <Icon style={{color : color}}/>
        <h4>{title}</h4>
    </div>
  )
}

export default InputOptions
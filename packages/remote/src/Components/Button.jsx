// ONLY FOR EXAMPLE

import React, { useState } from 'react';
import './Button.css';

export const Button = () => {
  return (
    <div>
        <button
        id='click-btn'
        className='shared-btn'
        onClick={()=> useState((s)=>s+1)}
        >
            hello world: {state}
        </button>
    </div>
  )
}

export default Button;
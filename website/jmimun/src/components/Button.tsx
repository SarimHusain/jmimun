import React, { ReactElement, CSSProperties } from 'react'

import './static/styles/Button.css'

interface ButtonProps {
  id?: string,
  children?: string | ReactElement<HTMLElement>,
  style?: CSSProperties,
  onClick: Function,
  color?: 'primary' | 'secondary' | 'default',
  variant?: 'solid' | 'outlined',
  size?: 'small' | 'medium' | 'large',
  margins?: 'small' | 'medium' | 'large'
}

const buttonStyles = {
  primary: {
    backgroundColor: '#fff',
    border: 'none',
    color: '#000'
  },
  secondary: {
    backgroundColor: '#00b6f1',
    border: 'none',
    color: '#000'
  },
  default: {
    backgroundColor: '#000',
    border: '2px solid #00b6f1',
    color: '#00b6f1'
  },

  solid: {},
  outlined: {},

  small: {
    width: '8em',
    fontSize: '0.75em',
    margin: '1rem auto',
    padding: '1rem'
  },
  medium: {
    width: '15em',
    margin: '1.5rem auto',
    padding: '1.25rem'
  },
  large: {
    width: '100%',
    margin: '2rem auto',
    padding: '1.5rem'
  }
}

function createStyle(props:ButtonProps) {
  let button = { }
  let { color, variant, size } = props

  if(color!==undefined) 
    button = { ...button, ...buttonStyles[color] }

  if(variant!==undefined) 
    button = { ...button, ...buttonStyles[variant] }

  if(size!==undefined) 
    button = { ...button, ...buttonStyles[size] }

  button = { ...button, ...props.style }
  return button
}

export function Button(props:ButtonProps) {
  return (
    <button id={props.id} className="button"
      style={createStyle(props)}
      onClick={()=>{
        props.onClick()
      }}
    >
      <div className="button-label">
        {
          props.children
        }
      </div>
    </button>
  )
}

export default Button

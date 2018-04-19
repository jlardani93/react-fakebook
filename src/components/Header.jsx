import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){

  let headerStyle = {
    // position: 'fixed',
    // top: '0px',
    // right: '0px',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 1fr)',
    backgroundColor: 'blue',
    boxShadow: '0 0 10px black',
    justifyItems: 'center'
  }

  let linkStyle = {
    color: 'white'
  }

  return(
    <div style={headerStyle}>
      <div>
        <Link to='/'>
          <div style={linkStyle}>Home</div>
        </Link>
      </div>
    </div>
  )
}

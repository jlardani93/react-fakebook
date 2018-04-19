import React from 'react'

export default function Footer() {

  let footerStyle = {
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
    boxShadow: '0 0 10px black',
    color: 'white',
    backgroundColor: 'blue',
    textAlign: 'center'
  }

  return (
    <div style={footerStyle}>
      <p>Epicodus (c) Justin Lardani | {new Date().toLocaleDateString()}</p>
    </div>
  )
}

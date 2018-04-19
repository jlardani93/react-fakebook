import React from 'react'
import PropTypes from 'prop-types'

export default function UserDisplay(props){
  console.log("User Display received the following props:");
  console.log(props);
  return(
    <div>
      <h1>{props.user.name}</h1>
      <h2>{props.user.employer}</h2>
      <h2>{props.user.city}</h2>
      <img src={props.user.imgUrl}></img>
    </div>
  )
}

UserDisplay.propTypes = {
  user: PropTypes.object
}

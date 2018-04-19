import React from 'react';

export default function UserCreate(props){
  let _name = null;
  let _employer = null;
  let _city = null;
  let _imgUrl = null;

  function handleFormSubmission(){
    let myNewUser = {
      name: _name.value,
      employer: _employer.value,
      city: _city.value,
      imgUrl: _imgUrl.value
    }

    props.onCreateNewUser(myNewUser);
    window.location.replace("localhost:8080/"); 
  }

  return(
    <div>
      <form onSubmit={handleFormSubmission}>
        <div class="form-group">
          <label>Name:</label>
          <input
            type="text"
            ref={(input) => {_name = input}}
            required>
          </input>
        </div>
        <div class="form-group">
          <label>Employer:</label>
          <input
            type="text"
            ref={(input) => {_employer = input}}
            required>
          </input>
        </div>
        <div class="form-group">
          <label>City:</label>
          <input
            type="text"
            ref={(input) => {_city = input}}
            required>
          </input>
        </div>
        <div class="form-group">
          <label>imgUrl:</label>
          <input
            type="text"
            ref={(input) => {_imgUrl = input}}
            required>
          </input>
        </div>
        <button type="submit">Create New User</button>
      </form>
    </div>
  )
}

import React from 'react'

let name;
let address;

export function handleSubmit(event) {
  event.preventDefault(); // Prevents the page from reloading
  name = document.getElementById('name').value;
  address = document.getElementById('address').value;
}

export function getFormData() {
  const event = null; // or provide an actual event object here
  handleSubmit(event);
  return { name, address };
}

function Popup() {
  return (
    <div>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Edit Profile
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" align="center">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel" textAlign="left" margin="20px">Edit Your Profile</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" className="form-control" id="name" />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Address:</label>
                  <input type="text" className="form-control" id="address" />
                </div>

                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup
export { name, address }; // export the name and address variables
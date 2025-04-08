import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">OctoFit Tracker</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Pricing</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-4">
          <h1 className="display-4">Welcome to OctoFit Tracker</h1>
          <p className="lead">Track your fitness activities and compete with others!</p>

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Activity Log</h5>
              <p className="card-text">Keep track of your daily fitness activities.</p>
              <button className="btn btn-primary">View Activities</button>
            </div>
          </div>

          <table className="table mt-4">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Activity</th>
                <th scope="col">Duration</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Running</td>
                <td>30 mins</td>
                <td><button className="btn btn-danger">Delete</button></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Swimming</td>
                <td>1 hour</td>
                <td><button className="btn btn-danger">Delete</button></td>
              </tr>
            </tbody>
          </table>

          <form className="mt-4">
            <div className="mb-3">
              <label htmlFor="activityName" className="form-label">Activity Name</label>
              <input type="text" className="form-control" id="activityName" placeholder="Enter activity name" />
            </div>
            <div className="mb-3">
              <label htmlFor="duration" className="form-label">Duration</label>
              <input type="text" className="form-control" id="duration" placeholder="Enter duration" />
            </div>
            <button type="submit" className="btn btn-success">Add Activity</button>
          </form>

          <button type="button" className="btn btn-info mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Open Modal
          </button>

          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  This is a Bootstrap modal example.
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

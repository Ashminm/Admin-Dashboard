import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Allproduct from './Allproduct';
import Dashboard from './Dashboard';

function Landing() {
  return (
    <div className="container-fluid" style={{ padding: '20px' }}>
      <div className="row">
        
        <div className="col-lg-2 d-flex flex-column align-items-center ">
          <div className="text-center mb-3">
            img
          </div>
          <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <button 
              className="nav-link active" 
              id="v-pills-home-tab" 
              data-bs-toggle="pill" 
              data-bs-target="#v-pills-home" 
              type="button" 
              role="tab" 
              aria-controls="v-pills-home" 
              aria-selected="true"
            >
              Dashboard
            </button>
            <button 
              className="nav-link" 
              id="v-pills-profile-tab" 
              data-bs-toggle="pill" 
              data-bs-target="#v-pills-profile" 
              type="button" 
              role="tab" 
              aria-controls="v-pills-profile" 
              aria-selected="false"
            >
              Products
            </button>
            <button 
              className="nav-link" 
              id="v-pills-messages-tab" 
              data-bs-toggle="pill" 
              data-bs-target="#v-pills-messages" 
              type="button" 
              role="tab" 
              aria-controls="v-pills-messages" 
              aria-selected="false"
            >
              Category
            </button>
          </div>
          <div className="text-center mt-3">
            name
          </div>
        </div>

        <div className="col-lg-10">
          <div className="tab-content" id="v-pills-tabContent">
            <div 
              className="tab-pane fade show active" 
              id="v-pills-home" 
              role="tabpanel" 
              aria-labelledby="v-pills-home-tab"
            >
              <Dashboard/>
            </div>
            <div 
              className="tab-pane fade" 
              id="v-pills-profile" 
              role="tabpanel" 
              aria-labelledby="v-pills-profile-tab"
            >
              <Allproduct/>
            </div>
            <div 
              className="tab-pane fade" 
              id="v-pills-messages" 
              role="tabpanel" 
              aria-labelledby="v-pills-messages-tab"
            >
              ddd
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;

import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          {/* Place your background image here */}
          <img src="/path-to-bg-image.png" alt="People Running" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5>RECOVER, HEAL & EXCEL</h5>
              <p>Dr. Frank McCormick is a leading joint preservation surgeon...</p>
              {/* Add more content as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

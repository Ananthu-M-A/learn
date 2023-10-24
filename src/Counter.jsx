import React from 'react';

function Counter(props) {
  return (
    <div className="container-fluid text-center p-3">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <h2>{props.count}</h2>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default Counter;
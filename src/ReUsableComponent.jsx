import React from 'react';

function ReUsableComponent(props) {
  return (
<div className="container-fluid mt-2 text-center text-tertiary">
    <div className="row">
        <div className="col-md-4"></div>
        <div style={{backgroundColor: props.color}} className="col-md-4 p-3 rounded-3">
            <h1>{props.name}</h1>
            <p>{props.email}</p>
        </div>
        <div className="col-md-4"></div>
    </div>
</div>

  )
}

export default ReUsableComponent;
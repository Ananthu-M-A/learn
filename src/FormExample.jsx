import React, { useState, useRef } from 'react';

function FormExample() {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Input value submitted:', inputValue);
  };

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className='container-fluid mt-3 text-center'>
    <div className='row'>
    <div className='col-md-4'></div>
      <div className='col-md-4'>
      <form onSubmit={handleSubmit}>
        <label>
          <h4>Enter your sweet name : </h4>
          <input className='text-center'
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            ref={inputRef}
          />
        </label>
        <div className="div">
        <button className='mt-3 btn btn-success' type="submit" onClick={handleFocus}>
          SEND TO CONSOLE
        </button>
        </div>
      </form>
      </div>
      <div className='col-md-4'></div>
    </div>
    </div>
  );
}

export default FormExample;

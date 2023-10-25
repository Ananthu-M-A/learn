import React, { useState, useEffect } from "react";
import axios from "axios";

function CounterWithUserInfo() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserInformation = async (count) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${count}`);
      setUser(response.data);
      setLoading(false);
    } catch (err) {
      setError("Error... Try counting 1 to 10...");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserInformation(count);
  }, [count]);

  return (
    <div className="container-fluid text-center mt-3">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <h1 className="bg-primary text-light">Counter: {count}</h1>
          {loading ? (
            <h2>Loading...</h2>
          ) : error ? (
            <p className="text-dark bg-danger">{error}</p>
          ) : user ? (
            <div className="bg-success p-3 text-light">
              <h2>User Information:</h2>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
            </div>
          ) : null}

        </div>
        <div className="col-md-4"></div>
      </div>
      <div className="row mt-3">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <button className="btn btn-primary mx-2" onClick={() => setCount(count - 1)}>PREV</button>
          <button className="btn btn-primary mx-2" onClick={() => setCount(count + 1)}>NEXT</button>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>

  );
}

export default CounterWithUserInfo;

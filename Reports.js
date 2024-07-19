import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Kama unatumia Axios, ongeza import hii
import '../App.css';

const Reports = () => {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    // Kutumia Axios
    axios.get('http://localhost:8089/Registration/view')
      .then(response => {
        setRegistrations(response.data);  // Assumption: response.data is an array of registration objects
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    // Kutumia fetch
    // fetch('http://localhost:8080/api/reports')
    //   .then(response => response.json())
    //   .then(data => setRegistrations(data))
    //   .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="reports-container">
      <h2>Registration Reports</h2>
      <table className="reports-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>ZanID</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((registration, index) => (
            <tr key={index}>
              <td>{registration.username}</td>  {/* Adjust property names based on your server response */}
              <td>{registration.email}</td>
              <td>{registration.zanid}</td>
              <td>{registration.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;
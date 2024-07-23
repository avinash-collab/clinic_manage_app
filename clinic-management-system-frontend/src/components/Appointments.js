// Appointments.js
import React from 'react';

const Appointments = () => (
  <div className="section" id="appointments">
    <h2>Upcoming Appointments</h2>
    <table>
      <tr>
        <th>Date</th>
        <th>Time</th>
        <th>Doctor</th>
        <th>Specialization</th>
      </tr>
      <tr>
        <td>2024-07-25</td>
        <td>10:00 AM</td>
        <td>Dr. John Doe</td>
        <td>Cardiology</td>
      </tr>
      <tr>
        <td>2024-08-01</td>
        <td>2:00 PM</td>
        <td>Dr. Jane Smith</td>
        <td>Dermatology</td>
      </tr>
    </table>
  </div>
);

export default Appointments;

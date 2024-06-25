import React from 'react';
import { connect } from 'react-redux';
import './User.css';

const User = ({ name, status }) => (
  <div className="user-container">
    <h1>User Information</h1>
    <p>Name: {name}</p>
    <p>Status: {status}</p>
  </div>
);

const mapStateToProps = (state) => ({
  name: state.user.name,
  status: state.user.status
});

export default connect(mapStateToProps)(User);
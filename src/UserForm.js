import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setUserInfo } from './redux/actions';
import './UserForm.css';

const UserForm = ({ setUserInfo }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || status.trim() === '') {
      alert('Please fill out both fields');
      return;
    }

//       const handleSubmit = (e) => {
//       e.preventDefault();
//       setUserInfo({ name, status });
//   };

    setUserInfo({ name, status });
  };

  return (
    <div className="user-form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Status:</label>
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <button type="submit">Update User Info</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  setUserInfo
};

export default connect(null, mapDispatchToProps)(UserForm);
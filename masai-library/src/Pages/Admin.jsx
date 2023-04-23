import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../Redux/AdminRedux/action';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginRequest());
    if (email === 'admin@gmail.com' && password === 'masai') {
      alert("Admin Login SuccessFully")
      navigate("/admin/dashboard")
    } else {
      alert("Invaild Details.")
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export {Admin};

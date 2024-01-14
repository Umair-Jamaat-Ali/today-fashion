'use client'

import React, { useState } from 'react';
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";

const PasswordInput = ({ label, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label>
        {label}
        <input
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </label>
      <button type="button" onClick={togglePasswordVisibility}>
        {showPassword ? <BiHide/> : <BiShow/> }
      </button>
    </div>
  );
};

export default PasswordInput;

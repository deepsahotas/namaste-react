import React, { useState } from 'react';

const FormValidation = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    age: '',
    gender: '',
    interests: [],
    dateofbirth: '',
  });
  const [errors, setErrors] = useState();
  const isEmailValid = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };
  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) {
      newErrors.firstName = 'FirstName is Required';
    }
    if (!formData.lastName) {
      newErrors.lastName = 'LastName is Required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is Required';
    } else if (!isEmailValid(formData.email)) {
      newErrors.email = 'Email is Not Valid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is Required';
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log('Form Submitted', formData);
    } else {
      console.log('Form validation is failed');
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    let updatedInterest = [...formData.interests];
    if (checked) {
      updatedInterest.push(name);
    } else {
      updatedInterest = updatedInterest.filter((interest) => {
        interest !== name;
      });
    }
    setFormData({
      ...formData,
      interests: updatedInterest,
    });
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter yor first name"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors && (
            <p style={{ color: 'red', fontSize: '12px' }}>{errors.firstName}</p>
          )}
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter yor last name"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors && (
            <p style={{ color: 'red', fontSize: '12px' }}>{errors.lastName}</p>
          )}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter yor email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors && (
            <p style={{ color: 'red', fontSize: '12px' }}>{errors.email}</p>
          )}
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="number"
            name="phone"
            placeholder="Enter yor Phone number"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors && (
            <p style={{ color: 'red', fontSize: '12px' }}>{errors.phone}</p>
          )}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter yor password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors && (
            <p style={{ color: 'red', fontSize: '12px' }}>{errors.password}</p>
          )}
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Enter yor confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
          />
        </div>
        <div>
          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option>Male</option>
            <option>Female</option>
            <option>Transgender</option>
          </select>
        </div>
        <div>
          <label>Interests</label>
          <div>
            <input
              type="checkbox"
              name="coding"
              id="coding"
              value={formData.interests.includes('coding')}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="coding">Coding</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="sports"
              id="sports"
              value={formData.interests.includes('sports')}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="sports">Sports</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="reading"
              id="reading"
              value={formData.interests.includes('reading')}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="reading">Reading</label>
          </div>
        </div>
        <div>
          <label>Date of Birth</label>
          <input
            type="date"
            name="dateofbirth"
            value={formData.dateofbirth}
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default FormValidation;

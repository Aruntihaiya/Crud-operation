import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Import your CSS file

export const Register = () => {
    const navigate = useNavigate();
  const [fields, setFields] = useState(() => {
    const storedFields = localStorage.getItem('formFields');
    return storedFields ? JSON.parse(storedFields) : [{ firstName: '', lastName: '', email: '', phone: '' }];
  });

  useEffect(() => {
    localStorage.setItem('formFields', JSON.stringify(fields));
  }, [fields]);

  const addField = () => {
    setFields([...fields, { firstName: '', lastName: '', email: '', phone: '' }]);
  };

  const removeField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newFields = [...fields];
    newFields[index][name] = value;
    setFields(newFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(fields);
    navigate(`/manage`)
  };

  return (
    <div className="register-container">
        <h3 style={{textAlign:"center"}}>Form</h3>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div className="form-field" key={index}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={field.firstName}
              onChange={(e) => handleChange(index, e)}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={field.lastName}
              onChange={(e) => handleChange(index, e)}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={field.email}
              onChange={(e) => handleChange(index, e)}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={field.phone}
              onChange={(e) => handleChange(index, e)}
            />
            {index > 0 && (
              <button  className='button-1' type="button" onClick={() => removeField(index)}>
                Remove
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={addField}>
          Add More
        </button>
        <button className='button-1' type="submit">Submit</button>
      </form>
    </div>
  );
}

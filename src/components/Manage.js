import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Manage = () => {
  const navigate = useNavigate();

  // Get data from local storage.
  const [arr, setArr] = useState(() => {
    const lcData = localStorage.getItem('formFields');
    if (lcData) {
        console.log(lcData,'xyz')
      return JSON.parse(lcData);
    } else {
      return [];
    }
  });

  // Delete.
  const deleteDetail = (delId) => {
    const newArr = arr.filter((item, index) => {
      return index !== delId;
    });
    localStorage.setItem('formFields', JSON.stringify(newArr));
    window.location = 'manage';
  };

  // Edit.
  const editDetail = (editId) => {
    navigate(`/edit/${editId}`);
  };

  return (
    <>
      <div className="container mt-3">
        <h2 className="text-center">Data Table</h2>
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>
                    <button onClick={() => deleteDetail(index)} className="btn btn-danger">
                      Delete
                    </button>
                    &nbsp;
                    <button onClick={() => editDetail(index)} className="btn btn-success">
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

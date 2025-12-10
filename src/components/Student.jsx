import React, { useState } from 'react';

const Student = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [students, setStudents] = useState([]);

  const saveStudent = (e) => {
    e.preventDefault();
    const student = { id, name, email, phoneNumber };
    setStudents([...students, student]);
    setId('');
    setName('');
    setEmail('');
    setPhoneNumber('');
  };

  const deleteStudentById = (studentId) => () => {
    setStudents(students.filter(student => student.id !== studentId));
  };

  const editStudent = (studentId) => () => {
    const studentToEdit = students.find(student => student.id === studentId);
    if (studentToEdit) {
      setId(studentToEdit.id);
      setName(studentToEdit.name);
      setEmail(studentToEdit.email);
      setPhoneNumber(studentToEdit.phoneNumber);
      setStudents(students.filter(student => student.id !== studentId));
    }
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', color: 'green', border: '2px solid black', padding: '10px' }}>
        React Js Array CRUD Operations
      </h1>

      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h2>Create Student</h2>
            </div>
            <div className="card-body">
              <form onSubmit={saveStudent}>
                <input className="form-control mb-2" placeholder="Enter Id" value={id} onChange={e => setId(e.target.value)} />
                <input className="form-control mb-2" placeholder="Enter Name" value={name} onChange={e => setName(e.target.value)} />
                <input className="form-control mb-2" placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input className="form-control mb-2" placeholder="Phone Number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                <button className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.phoneNumber}</td>
                  <td>
                    <button className="btn btn-info btn-sm me-2" onClick={editStudent(student.id)}>Edit</button>
                    <button className="btn btn-danger btn-sm" onClick={deleteStudentById(student.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <br />
      <button className="btn btn-secondary" onClick={() => window.open('login.html')}>
        Login-page
      </button>
    </div>
  );
};

export default Student;

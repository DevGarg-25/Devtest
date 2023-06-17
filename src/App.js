import React, { useState } from "react";
import ReactDOM from "react-dom";
import './App.css';
export default function App() {
  // ...


const AdmissionForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phone, address);
  };

  return (
    <div>
      <h1>Admission Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={name} placeholder="Enter your Name" onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={email} placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" name="phone" value={phone} placeholder="Enter your Contact Number" onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={address} placeholder="Enter your Address" onChange={(e) => setAddress(e.target.value)} />
          Click to Submit
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

ReactDOM.render(<AdmissionForm />, document.getElementById("root"));
}
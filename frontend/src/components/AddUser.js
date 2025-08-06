import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  // State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  // Navigate
  const navigate = useNavigate();

  // Save User
  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        email,
        gender,
      });
      setName("");
      setEmail("");
      setGender("Male");
      // Redirect
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          {/* Name */}
          <div className="field">
            <label htmlFor="" className="label">
              Name
            </label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          {/* Email */}
          <div className="field">
            <label htmlFor="" className="label">
              Email
            </label>
            <div className="control">
              <input
                type="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          {/* Gender */}
          <div className="field">
            <label htmlFor="" className="label">
              Gender
            </label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  name=""
                  id=""
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
          {/* Button */}
          <div className="field">
            <div className="control">
              <button className="button is-success">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;

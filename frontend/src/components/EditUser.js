import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  // State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male"); // default lowercase untuk konsistensi
  const navigate = useNavigate();
  const { id } = useParams();
  // ambil id
  useEffect(() => {
    getUsersById(id);
  }, [id]);

  // Ambil data user berdasarkan ID
  const getUsersById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/users/${id}`);
      setName(response.data.name);
      setEmail(response.data.email);
      setGender(response.data.gender.toLowerCase());
    } catch (error) {
      console.error("Failed to fetch user:", error);
    }
  };

  // Update user
  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name,
        email,
        gender,
      });
      navigate("/");
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateUser}>
          {/* Name */}
          <div className="field">
            <label htmlFor="name" className="label">
              Name
            </label>
            <div className="control">
              <input
                id="name"
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
            <label htmlFor="email" className="label">
              Email
            </label>
            <div className="control">
              <input
                id="email"
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
            <label htmlFor="gender" className="label">
              Gender
            </label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
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
              <button className="button is-success" type="submit">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;

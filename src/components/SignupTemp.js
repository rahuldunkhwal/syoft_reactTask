import { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/form.css";

const SignUp = () => {
  const initialFormData = {
    user_firstname:"",
    user_email:"",
    user_phone:"",
    user_password:"",
  };
  const [formData, setFormData] = useState(initialFormData);

  const [status,setStatus] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      user_lastname: "Doe",
      user_city: "Hyderabad",
      user_zipcode: "500072",
    };

    console.log(data);
    try {
      const response = await fetch(
        "https://syoft.dev/Api/user_registeration/api/user_registeration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      if (result.status === false) {
        setStatus(result.msg);
      } else {
        setStatus(result.msg);
        resetForm();
      }
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  return (
    <div className="main">
      <img
        src="https://res.cloudinary.com/dvtfgka8i/image/upload/v1721111182/h0auucqlrzpknumhmbau.jpg"
        className="image"
        alt="form"
      />
      <form className="form-card" onSubmit={handleSubmit}>
        <img
          src="https://res.cloudinary.com/dvtfgka8i/image/upload/v1721111698/iwteb6jmauqqyd7xblwx.png"
          className="logo-img"
          alt="logo"
        />
        <h1>Sign Up</h1>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <input
          type="text"
          name="user_firstname"
          placeholder="First Name"
          value={formData.user_firstname}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          value={formData.user_email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="user_phone"
          placeholder="Phone Number"
          value={formData.user_phone}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="user_password"
          placeholder="Password"
          value={formData.user_password}
          onChange={handleChange}
          required
        />
        <button className="btn" type="submit">
          Sign Up
        </button>
        <p>{status}</p>
      </form>
    </div>
  );
};

export default SignUp;

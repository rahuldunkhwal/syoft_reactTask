import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/form.css";

const Login = () => {
  const [formData, setFormData] = useState({
    user_email: "",
    user_password: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('https://syoft.dev/Api/userlogin/api/userlogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const result = await response.json();
        console.log(result)
        if (result.status === true) {
            localStorage.setItem('user', JSON.stringify(result.user_data));

            navigate('/dashboard');
        } else {
            alert('Login failed!');
        }
    } catch (error) {
        console.error('Error:', error);
    }
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
        <h1>login</h1>
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          value={formData.user_email}
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
          login
        </button>
      </form>
    </div>
  );
};

export default Login
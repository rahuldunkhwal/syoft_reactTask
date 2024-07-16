import { useNavigate } from "react-router-dom";

import "../styles/Dashboard.css";

const Dashboard = () => {
  const nevigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  const handleLogout = () => {
    localStorage.removeItem("user");

    nevigate("/login");
  };

  if (!user) {
    return <div>Please log in to view your dashboard.</div>;
  }
  return (
    <>
      <nav className="nav-header">
        <div className="nav-content">
          <img
            className="website-logo"
            src="https://res.cloudinary.com/dvtfgka8i/image/upload/v1721111698/iwteb6jmauqqyd7xblwx.png"
            alt="website logo"
          />
          <ul className="nav-menu">
            <li className="nav-link">Home</li>
            <li className="nav-link">Products</li>
            <li className="nav-link">Cart</li>
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button type="button" className="logout-mobile-btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="logout icon"
              className="logout-icon"
              onClick={handleLogout}
            />
          </button>
        </div>
      </nav>
      <div className="body">
        <div className="user-card">
            <h1>{`${user[0].user_firstname} ${user[0].user_lastname}`}</h1>
            <p>{`${user[0].user_email}`}</p>
            <p>{`${user[0].user_phone}`}</p>
            <p>{`${user[0].user_city}`}</p>
            <p>{`${user[0].user_zipcode}`}</p>
        </div>
      </div>
    </>
  );
};
export default Dashboard;

import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useVerifyUser from "../../hooks/useVerifyUser";
import Navbar from "../../Pages/SharedPage/Navbar/Navbar";

const DashBoard = () => {
  const { user } = useContext(AuthContext);
  const [role] = useVerifyUser(user?.email);
  return (
    <>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {role === "buyer" && (
              <li>
                <Link to="/dashboard"> Dashboard</Link>
              </li>
            )}

            {role === "admin" && (
              <>
                <li>
                  <Link to="/dashboard/products"> All Products</Link>
                </li>
                <li>
                  <Link to="/dashboard/add-product"> Add Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/users"> All Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/category"> All Category</Link>
                </li>
                <li>
                  <Link to="/dashboard/add-category"> Add Category</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashBoard;

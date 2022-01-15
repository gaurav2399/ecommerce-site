import React, { useState } from "react";

function Footer() {
  
  const [location, setLocation] = useState("Saharanpur");

  function addLocation(loc){
    setLocation(loc);
  }

  return (
    <div className="footer">
      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th>About</th>
              <th>Helpful Stuff</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="#blank">Home</a>
              </td>
              <td>
                <a href="#top-categories">Top Categories</a>
              </td>
              <td
                className={location === "Saharanpur" ? "td-selected" : ""}
                onClick={() => addLocation("Saharanpur")}
              >
                <span>Saharanpur</span>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#blank">About Us</a>
              </td>
              <td>
                <a href="#top-shops">Top Shops</a>
              </td>
              <td
                className={location === "Dehradun" ? "td-selected" : ""}
                onClick={() => addLocation("Dehradun")}
              >
                <span>Dehradun</span>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#blank">Privacy Policy</a>
              </td>
              <td></td>
              <td
                className={location === "Roorkee" ? "td-selected" : ""}
                onClick={() => addLocation("Roorkee")}
              >
                <span>Roorkee</span>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#blank">Contact Us</a>
              </td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="gaurav">©2022 Made with 💙 By gaurav2399</p>
    </div>
  );
}

export default Footer;

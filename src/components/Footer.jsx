import React, { useState } from "react";

function Footer(props) {
  const [localLocation, setLocalLocation] = useState("Saharanpur");

  function setClick(loc){
    setLocalLocation(loc);
    props.handleClick(loc);
  }

  return (
    <div className="footer">
      <div className="table-section">
        <table className="main-table">
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
                className={localLocation === "Saharanpur" ? "td-selected" : ""}
                onClick={() => setClick("Saharanpur")}
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
                className={localLocation === "Dehradun" ? "td-selected" : ""}
                onClick={() => setClick("Dehradun")}
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
                className={localLocation === "Roorkee" ? "td-selected" : ""}
                onClick={() => setClick("Roorkee")}
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
      <p className="gaurav">©2022 Made with 💙 By <a href="https://www.linkedin.com/in/gaurav-sharma-43b6a4183/">gaurav2399</a></p>
    </div>
  );
}

export default Footer;
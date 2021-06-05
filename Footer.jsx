import React from "react";
function Footer() {
  var curyr = new Date().getFullYear();

  return (
    <footer>
      <p> Copyright @ {curyr} </p>
      <p> - by Md Adnan Hussain</p>
    </footer>
  );
}
export default Footer;

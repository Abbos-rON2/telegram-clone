import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_header_menu">O</div>
        <div className="sidebar_header_search">
          <input type="text" placeholder="Search"/>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";

const Topbar = ({ topbarRef, topbarTop }) => {
  return (
    <div className="topbar" ref={topbarRef} style={{top: `${topbarTop}px`}}>
      <a href="/" className="logo-text">
        <span className="logo-text-highlight">
          n<span className="logo-hide">ame</span>
        </span>
        <span className="logo-hide">scraper</span>
        <span className="asterisk">*</span>
      </a>

      <div className="signup-button">Sign up</div>
    </div>
  );
};

export default Topbar;

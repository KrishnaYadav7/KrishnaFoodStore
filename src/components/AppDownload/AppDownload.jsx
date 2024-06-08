import React from "react";
import "./AppDownload.css";
import { assets1 } from "../../assets/frontend_assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experiences Download
        <br /> Krishna Food
      </p>
      <div className="app-download-platform">
        <img src={assets1.play_store} alt="" />
        <img src={assets1.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;

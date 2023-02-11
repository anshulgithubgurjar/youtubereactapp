import React, { useState } from "react";
import "./NavBar.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import SideBar from "./SideBar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
export default function NavBar({ Demo }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function ans() {
    var element = document.body;
    element.classList.toggle("img");
  }
  function ans() {
    var element = document.body;
    element.classList.toggle("img");
  }
  let [Data, SetData] = useState("");
  return (
    <div id="NavBar">
      <div id="First">
        <MenuIcon id="MenuIcon" onClick={handleShow} />

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton id="closeButton">
            <Offcanvas.Title>
              <SideBar />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body></Offcanvas.Body>
        </Offcanvas>
        <Link to={""}>
         
          <img id="YtLogo" src="ytlLogo.svg" alt="" />
        </Link>
      </div>

      <div id="Second">
        {/* <input type="text" placeholder="Search....."   />
        <SearchIcon id="Searchicon" /> */}
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            SetData(e.target.value);
          }}
        />
        <div>
          <SearchIcon
            id="Searchicon"
            onClick={() => {
              Demo(Data);
            }}
          />
          <KeyboardVoiceIcon id="KeyboardVoiceIcon" />
        </div>
      </div>

      <div id="Third">
        <VideoCallIcon className="NavBarIcon" />
        <NotificationsIcon className="NavBarIcon" />
        <Avatar className="NavBarIcon">
          <img
            id="img123"
            src="7c545bb11996e2b650211011c57c08b5.jpg"
            onClick={() => {
              ans();
            }}
            alt="sc hsb"
          />
        </Avatar>
      </div>
    </div>
  );
}

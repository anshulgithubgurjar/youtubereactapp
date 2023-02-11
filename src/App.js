import React,{useState} from "react";
import "./App.css";
import Content from "./Components/Content";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import ContentSidebar from "./Components/ContentSidebar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoPlayer from "./Components/VideoPlayer";
import Subscripations from "./Components/Subscripations/Subscripations";
export default function App() {
  let [Search,SetSearch] = useState("India");
  let [VideoData,SetVideoData] = useState("");

  function Demo(D) {
          console.log(D);
          SetSearch(D)
  }

  function VData(dta){
    SetVideoData(dta)
  }
  return (
    <div>
      <BrowserRouter>
        <NavBar Demo = {Demo} />

        <Routes>
          <Route
            path=""
            element={
              <div className="AppData">
                <ContentSidebar/>
                {/* <SideBar /> */}
                <Content SearchData= {Search} VData={VData}/>
              </div>
            }
          />
          <Route path="VideoPlayer" element={<VideoPlayer VideoData={VideoData}/>} />
           <Route path="SubScripations" element={<Subscripations/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

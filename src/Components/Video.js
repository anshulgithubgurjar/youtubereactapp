import React,{useState,useEffect} from "react";
import "./Video.css";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
export default function Video({ e,VData }) {
let [ChannelAvatar,SetChannelAvatar] = useState("")
  useEffect(()=>{
    fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=Snippet&id=${e.snippet.channelId}&key=AIzaSyDDE2thMx3nbsAmxnr1fueEHEj7QNjOM_s`
    )
    .then((res)=>
    {
return res.json()
      })  .then((Data)=>
      {
 console.log(Data)
SetChannelAvatar(Data.items[0].snippet.thumbnails.high.url)
        })
    
   },[])


  return (
    <Link to={"VideoPlayer"}>
    <div id="VideoCard" onClick={()=>{
      console.log(e)
      VData(e)
    }
    }>
      <img src={e.snippet.thumbnails.high.url} alt="" id="Thumbnail" />

      <div id="VideoInfo">
        <Avatar src={ChannelAvatar}/>

        <div id="VideoText">
          <h2>{e.snippet.title}</h2>
          <p>{e.snippet.channelTitle}</p>
          <p>{"2 Million Views . 2 days"}</p>
        </div>
      </div>

    </div>
    </Link>
  );
}

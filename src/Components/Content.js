// // import React, { useState, useEffect } from "react";
// // import "./Content.css";
// // export default function Content() {
// //   let [Data, setData] = useState([]);
// //   function Fun() {
// //     fetch(
// //       `https://www.googleapis.com/youtube/v3/search?&part=snippet&maxResults=50&key=AIzaSyDHM9NhBsTWOyz-x41GNQ8jmcSiRVNAPYg&type=videoj`

// //     )
// //       .then((Response) => {
// //         return Response.json();
// //       })
// //       .then((Data) => {
// //         console.log(Data.items[0].snippet)
// //         setData(Data.items);
// //       });
// //   }
// //   useEffect(() => {
// //     Fun();
// //   }, []);
// //   return (
// //     <div id="Content">
// //       <center>
// //         {Data.map((e) => (
// //           <div id="Video">
// //             <h4 id="Title">{e.snippet.title}</h4>
// //             <img id="Thumbnails" src={e.snippet.thumbnails.high.url} />
// //             <p id="Channel"></p>
// //           </div>
// //         ))}

// //         <hr />
// //       </center>
// //     </div>
// //   );
// // }

// import React, { useState, useEffect } from "react";
// import "./Content.css";
// import Video from "./Video";

// export default function Content() {
//   let [Data, SetData] = useState([]);

//   function Fun() {
//     // fetch(
//     //   `https://www.googleapis.com/youtube/v3/search?&q=India&part=snippet&maxResults=70&key=AIzaSyDDE2thMx3nbsAmxnr1fueEHEj7QNjOM_s&type=video`
//     // )
//     fetch(
//       `https://www.googleapis.com/youtube/v3/search?&q=Punjabi+Song&part=snippet&maxResults=70&key=AIzaSyDDE2thMx3nbsAmxnr1fueEHEj7QNjOM_s&type=video`
//     )
//       .then((Response) => {
//         return Response.json();
//       })
//       .then((Data) => {
//         console.log(Data.items[0].snippet);
//         SetData(Data.items);
//       });
//   }

//   useEffect(() => {
//     Fun();
//   }, []);

//   return (
//     <div id="Content">
//       <center>
//         <div id="Video">
//           {Data.map((e) => (
//             <Video e={e} />
//           ))}
//         </div>

//         <hr />
//       </center>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import "./Content.css";

import Video from "./Video";
export default function Content({ SearchData, VData }) {
  let [Data, SetData] = useState([]);
  function Fun() {
    fetch(
             `https://www.googleapis.com/youtube/v3/search?&q=${SearchData}&part=snippet&maxResults=70&key=AIzaSyDDE2thMx3nbsAmxnr1fueEHEj7QNjOM_s&type=video`
           )

    // fetch(
    //   `https://www.googleapis.com/youtube/v3/search?&q=${SearchData}&part=snippet&maxResults=50&key=AIzaSyBE24lPSvzaJ-HYyDXqvn-To_FEjrsv590&type=video`
    // )
      .then((Response) => {
        return Response.json();
      })
      .then((Data) => {
        console.log(Data.items[0].snippet);
        SetData(Data.items);
      });
  }

  useEffect(() => {
    Fun();
  }, [SearchData]);

  return (
    <div id="Content">
      <center>
        <div id="Video">
          {Data.map((e) => (
            <Video e={e} VData={VData} />
          ))}
        </div>

        <hr />
      </center>
    </div>
  );
}

import { createRef, useEffect, useState } from 'react';
import './App.css';
import styled from 'styled-components';


// let canvasRef: any = createRef();
// var arrrr = [[856,108,857,108],[857,108,860,108],[860,108,862,108],[862,108,866,109],[866,109,872,111],[872,111,878,113],[878,113,885,115],[885,115,893,118],[893,118,901,121],[901,121,910,124],[910,124,917,128],[917,128,921,129],[921,129,924,131],[924,131,925,132],[925,132,925,133],[925,133,925,134],[925,134,925,135],[925,135,925,137],[925,137,925,139],[925,139,925,141],[925,141,925,145],[925,145,923,151],[923,151,923,157],[923,157,921,164],[921,164,921,172],[921,172,920,178],[920,178,917,185],[917,185,916,188],[916,188,914,192],[914,192,913,196],[913,196,911,199],[911,199,908,202],[908,202,907,204],[907,204,905,207],[905,207,903,209],[903,209,900,210],[900,210,898,212],[898,212,897,215]]



function App() {




  
  return (
    <div className="App">
      <div id="slide" style={{ width: "1200px", height: "1200px", border: "1px solid black" }}>
        <div style={{ width: "auto", height: "100%" }}>
        <svg>
  <g className="isolate">
    <circle cx="40" cy="40" r="40" fill="red"/>
    <circle cx="80" cy="40" r="40" fill="lightgreen"/>
    <circle cx="60" cy="80" r="40" fill="blue"/>
  </g>
</svg>
          </div>

      </div>
    </div>
  );
}

export default App;
import { createRef, useEffect, useState } from 'react';
import './App.css';
// import {ReactComponent as Img1 } from "./2488093.svg"
// import {ColorPicker} from "react-colors"
let canvasRef: any = createRef();
let arr: number[] = []
let result: any = []
let result2: any = []
var pencil: boolean = false
var erase: boolean = false
var arr2:any=[]
var arr3:any=[]
var arr4:any=[]
var r: number = 255
var g: number = 0
var b: number = 0
var wid: string = "3"
var cmyk: boolean = false
// var arrrr = [[856,108,857,108],[857,108,860,108],[860,108,862,108],[862,108,866,109],[866,109,872,111],[872,111,878,113],[878,113,885,115],[885,115,893,118],[893,118,901,121],[901,121,910,124],[910,124,917,128],[917,128,921,129],[921,129,924,131],[924,131,925,132],[925,132,925,133],[925,133,925,134],[925,134,925,135],[925,135,925,137],[925,137,925,139],[925,139,925,141],[925,141,925,145],[925,145,923,151],[923,151,923,157],[923,157,921,164],[921,164,921,172],[921,172,920,178],[920,178,917,185],[917,185,916,188],[916,188,914,192],[914,192,913,196],[913,196,911,199],[911,199,908,202],[908,202,907,204],[907,204,905,207],[905,207,903,209],[903,209,900,210],[900,210,898,212],[898,212,897,215]]

interface post {
  drawable: boolean,
  x: number,
  y: number
}


function App() {
  var penres : any
  var cmykres : any
  const [pat, setPat] = useState("0,0,0,0")
  const [pat2, setPat2] = useState("0,0,0,0")
  const [widt, setWidt] = useState("3")
  const [inkresult, setInkresult] = useState([])
  const [inkresult2, setInkresult2] = useState([])
  const [patarr, setPatarr] = useState([])
  let slide: any
  useEffect(() => {
    slide = document.getElementById("slide");
    if (slide) {
      // slide.innerText = `${pencil}`
      slide.addEventListener("mousedown", initDraw);

      slide.addEventListener("mousemove", draw);

      slide.addEventListener("mouseup", finishDraw);

      slide.addEventListener("mouseout", outDraw);
    }
    penres = localStorage.getItem("PEN")
    cmykres = localStorage.getItem("CMYK")
    if (penres)
    {
      setInkresult(JSON.parse(penres))
    }
    if (cmykres){
      setInkresult2(JSON.parse(cmykres))
    }
    
  }, [])


  var flag = false
  let pos: post = {
    drawable: false,
    x: -1,
    y: -1
  }
  function initDraw(event: any) {
    arr = []
    arr2 = []
    arr3 = []
    arr4 = []
    // console.log("init")
    setPatarr([])
    if (pencil) {
      flag = true
    }
    else if (cmyk) {
      flag = true
    }



  }
  function draw(event: any) {
    slide = document.getElementById("slide");
    pos = { ...pos, ...getPosition(event) };
    if (pencil && flag) {

      arr.push(pos.x, pos.y)
      const str1 = arr.join()
      setPat(str1)

    }
    else if (cmyk && flag) {
      if (arr){
        if(pos.x === arr[arr.length-2]){
          wid = "10"
        }
        else{
          wid = "20"
        }
      }
      if(arr4.length){
        arr4.push([arr[arr.length-2], arr[arr.length-1], pos.x, pos.y, wid])
      }
      else{
        arr4.push([pos.x, pos.y, pos.x, pos.y, wid])
        
      }
      arr3.push(pos.x, pos.y, wid)
      arr.push(pos.x, pos.y)
      console.log(arr4)
      setPatarr(arr4)
      const str1 = arr.join()
      
      // console.log(patarr)
      setPat2(str1)
      setWidt(wid)
    }
    setPatarr(arr4)
  }
  function colorChange() {
    wid = "10"
    pencil = false
    cmyk = true
    erase = false
    // const game = new Engine()
    // game.start()
  }
  function changeTool() {
    pencil = false
    erase = true
    cmyk = false
  }
  function finishDraw() {
    console.log("finish")

    if (pencil && flag) {
      flag = false
      result.push(arr)
      localStorage.setItem("PEN",JSON.stringify(result))
      setInkresult(result)
      pos = { drawable: false, x: -1, y: -1 };

    }
    else if (cmyk && flag) {
      flag = false
      for(let i=0; i<arr3.length-4; i+=3){
        arr2.push([arr3[i], arr3[i+1], arr3[i+3], arr3[i+4], arr3[i+2]])
      }
      result2.push(arr2)
      // console.log(result2)
      localStorage.setItem("CMYK",JSON.stringify(result2))
      setInkresult2(result2)
      pos = { drawable: false, x: -1, y: -1 };
    }
    
    setPat("0,0,0,0")
    setPat2("0,0,0,0")
    // console.log(inkresult)

  }
  function outDraw() {

  }
  const clickHandle = () => {
    wid = "3"
    pencil = true
    erase = false
    cmyk = false
  }
  const arrowClick = (props: any, e: any) => {
    e.preventDefault()
    console.log(props)
    JSON.parse(penres)
    JSON.parse(cmykres)
    if (erase) {
      result.splice(props, 1)
      setInkresult(result)
      console.log(inkresult)
    }


  }
  function getPosition(event: any) {

    return {
      x: event.offsetX

      , y: event.offsetY
    };

  }
  
  return (
    <div className="App">
      <button onClick={colorChange}>CMYK</button>
      <button onClick={clickHandle}>pencil</button>
      <button onClick={changeTool}>erase</button>
      <div ref={canvasRef} id="slide" style={{ width: "1200px", height: "1200px", border: "1px solid black" }}>
        <div style={{ width: "auto", height: "100%" }}>
          <svg width="100%" height="100%">
            {cmyk?(patarr.length?((<g>{patarr.map((item) => {return <path stroke="rgb(0,0,0)" fill="transparent"  strokeLinecap="round" strokeWidth={item[4]} d={`M ${item[0]} ${item[1]} ${item[2]} ${item[3]}`}></path>})}</g>)):(null)):(<path onClick={() => setPat("0,0,0,0")} fill="transparent" stroke="rgb(0,0,0)" strokeLinecap="round" strokeWidth="1" d={`M ${pat}`}></path>)}
            {inkresult.length ? (inkresult.map((item: any, index: Number) => { return <path onClick={(e) => { arrowClick(index, e) }} strokeLinecap="round" fill="transparent" stroke="rgb(0,0,0)" strokeWidth={"1"} d={`M ${item.join()}`}></path> })) : (null)}
            {inkresult2.map((items:any, index:any) => {return <g>{items.map((item:any) => {return <path onClick={(e) => {console.log("hello")}} strokeLinecap="round" fill="transparent" stroke="rgb(0,0,0)" strokeWidth={item[4]} d={`M ${item[0]} ${item[1]} ${item[2]} ${item[3]}`}></path>})}</g>})}
            {/* {arrrr.map((item:any) => {return <path  stroke="rgb(0,0,0)" fill="rgb(0,0,0)" strokeLinecap="square" strokeWidth="30" d = {`M ${item.join()}`}></path>})} */}
          </svg></div>

      </div>
    </div>
  );
}

export default App;
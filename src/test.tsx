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
var r: number = 0
var g: number = 255
var b: number = 0
var wid: string = "3"
var cmyk: boolean = false
var arrrr = [[856,108,857,108],[857,108,860,108],[860,108,862,108],[862,108,866,109],[866,109,872,111],[872,111,878,113],[878,113,885,115],[885,115,893,118],[893,118,901,121],[901,121,910,124],[910,124,917,128],[917,128,921,129],[921,129,924,131],[924,131,925,132],[925,132,925,133],[925,133,925,134],[925,134,925,135],[925,135,925,137],[925,137,925,139],[925,139,925,141],[925,141,925,145],[925,145,923,151],[923,151,923,157],[923,157,921,164],[921,164,921,172],[921,172,920,178],[920,178,917,185],[917,185,916,188],[916,188,914,192],[914,192,913,196],[913,196,911,199],[911,199,908,202],[908,202,907,204],[907,204,905,207],[905,207,903,209],[903,209,900,210],[900,210,898,212],[898,212,897,215]]
// var x1 = "M 322,186,322,186,323,186,324,186,326,186,328,186,330,185,333,185,335,185,337,184,339,184,342,184,344,183,346,183,349,183,350,183,352,182,353,182,355,182,356,182,358,181,360,181,362,181,365,181,368,180,371,180,374,179,377,179,380,179,384,178,387,178,391,178,394,177,397,177,401,177,404,177,408,177,411,177,416,177,419,176,423,176,426,176,429,176,432,176,435,176,438,175,440,175,444,175,447,175,449,174,453,174,458,173,462,173,465,173,470,173,473,172,477,172,479,171,481,171,484,171,485,171,486,170,488,170,489,170,491,170,493,169,495,169,497,169,500,168,501,168,503,168,505,168,507,168,508,168,510,167,512,167,514,167,517,167,520,166,524,166,529,166,535,166,539,166,544,166,550,166,554,166,559,166,565,166,569,165,574,165,578,164,582,164,586,162,592,161,595,161,599,161,604,160,608,159,613,159,617,158,620,158,625,157,631,157,637,156,645,154,650,154,657,153,666,152,676,150,687,149,699,147,711,147,723,145,735,144,745,142,758,141,769,139,780,138,789,135,801,133,813,133,821,133,831,133,840,133,850,133,861,133,874,131,885,128,900,128,914,127,930,127,943,125,959,125,969,123,975,122,982,122,986,122,989,122,992,122,994,122,995,122,996,122,996,121,997,121 Z"
// var x2 = "M 385,342,385,342,436,329,436,329,449,327,449,327,465,325,465,325,481,324,481,324,505,322,505,322,529,318,529,318,557,314,557,314,585,310,585,310,613,308,613,308,643,304,643,304,675,300,675,300,701,296,701,296,727,292,727,292 Z"
// var x3 = "M 353,680,354,680,356,680,359,680,365,680,371,679,377,678,387,677,400,675,409,673,421,672,435,670,450,668,464,667,480,665,496,663,512,661,531,661,548,656,567,654,587,652,601,650,617,648,631,647,644,645,655,643,668,642,679,642,692,642,703,640,718,638,732,637,745,635,757,633,769,632,783,632,796,630,812,628,826,627,837,622,848,620,857,620,869,619,880,619,891,619,899,619,908,619,916,619,926,619,935,619,945,619,956,619,965,619,973,619,981,619,988,619,994,619,1000,619,1005,619,1008,619,1011,619,1013,617,1015,617,1016,617,1016,616,1017,616,1018,616,1019,616 Z"
// var x4 = "M 343,809,343,809,343,809,343,809,344,809,344,809,344,809,344,809,344,809,344,809,344,809,344,809,345,809,345,809,345,809,345,809,346,809,346,809,346,809,346,809,348,809,348,809,348,809,348,809,351,809,351,809,351,809,351,809,356,809,356,809,356,809,356,809,361,809,361,809,361,809,361,809,371,809,371,809,371,809,371,809,384,809,384,809,384,809,384,809,402,809,402,809,402,809,402,809,421,809,421,809,421,809,421,809,441,809,441,809,441,809,441,809,457,809,457,809,457,809,457,809,473,809,473,809,473,809,473,809,490,809,490,809,490,809,490,809,503,809,503,809,503,809,503,809,517,809,517,809,517,809,517,809,528,809,528,809,528,809,528,809,541,809,541,809,541,809,541,809,556,809,556,809,556,809,556,809,572,809,572,809,572,809,572,809,589,809,589,809,589,809,589,809 Z"
// var x5 = "M 484,489,484,489,485,489,486,488,488,487,490,486,493,484,495,481,499,479,502,475,504,471,508,467,511,464,515,459,518,454,522,449,526,443,530,437,534,432,538,427,541,422,544,416,546,411,550,406,554,401,559,395,562,386,566,381,571,375,575,369,581,363,584,358,589,354,596,349,600,345,603,344,606,341,609,339,612,337,614,335,616,334,618,332,620,331,622,329,624,328,626,327,628,326,630,325,632,325,634,324,635,323,636,323,637,323,637,322,637,323,637,323,638,323,638,325,639,327,640,330,641,335,642,341,644,347,647,354,648,360,651,368,654,377,658,385,661,396,666,403,670,414,675,425,681,434,684,442,688,450,694,457,695,462,699,468,700,473,704,478,706,482,708,485,710,488,713,491,714,493,715,496,716,498,717,500,719,502,719,503,720,504,721,504"

interface post {
  drawable: boolean,
  x: number,
  y: number
}


function App() {
  var convert = require("color-convert")
  var penres : any
  var cmykres : any
  const [pat, setPat] = useState("0,0,0,0")
  const [pat2, setPat2] = useState("0,0,0,0")
  const [widt, setWidt] = useState("3")
  const [inkresult, setInkresult] = useState([])
  const [inkresult2, setInkresult2] = useState([])
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
    // console.log("init")

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
        if(pos.x-5 <= arr[arr.length-2] && arr[arr.length-2] <= pos.x + 5){
          wid = "3"
        }
        else{
          wid = "20"
        }
      }
      arr3.push(pos.x, pos.y, wid)
      arr.push(pos.x, pos.y)
      const str1 = arr.join()
      setPat2(str1)
      setWidt(wid)
    }

  }
  function colorChange() {
    wid = "10"
    pencil = false
    cmyk = true
    erase = false
    // const game = new Engine()
    // game.start()
  }
  function changeColor() {
    wid = "10"
    pencil = false
    cmyk = true
    erase = false
    r = 255
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
      console.log(result2)
      setInkresult2(result2)
      pos = { drawable: false, x: -1, y: -1 };
    }
    localStorage.setItem("CMYK",JSON.stringify(result2))
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
      <button onClick={changeColor}>color</button>
      <div ref={canvasRef} id="slide" style={{ width: "1200px", height: "1200px", border: "1px solid black" }}>
        <div style={{ width: "auto", height: "100%" }}>
          <svg width="100%" height="100%">
          <path onClick={(e) => {console.log("hello")}} strokeLinecap="round" fill="transparent" stroke={`rgb(255,0,0)`} strokeWidth={"30"} d={`M 0 0 1200 1200`}></path>
          <path onClick={(e) => {console.log("hello")}} strokeLinecap="round" fill="transparent" stroke={`rgb(0,255,0)`} strokeWidth={"30"} d={`M 0 1200 1200 0`}></path>
          <path onClick={(e) => {console.log("hello")}} strokeLinecap="round" fill="transparent" stroke={`rgb(0,0,255)`} strokeWidth={"30"} d={`M 600 0 600 1200`}></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;
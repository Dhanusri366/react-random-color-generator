import { use, useEffect, useState } from "react"

function RandomColor(){
    const [typeofColor,setTypeOfColor] = useState("hex")
    const [RanColor,setRanColor] = useState("#ffffff")
    function generateRandom(len){
     return Math.floor((Math.random())*len)
    }
    function handleHex(){
    let hex = ['1','2','3','4','5','6','A','B','C','D','F']
    let hexColor = "#"
    for(let i=0;i<6;i++){
        hexColor+= hex[generateRandom(hex.length)]
       
    }
     setRanColor(hexColor)
    }
    function handlergb(){
    const r= generateRandom(256)
     const g= generateRandom(256)
      const b= generateRandom(256)
      setRanColor(`rgb(${r},${g},${b})`)
      console.log(RanColor)
    }
    useEffect(()=> {
        if(typeofColor === 'hex')
            handleHex()
        else
        handlergb()
    },[typeofColor])
    return(<>
    <div style={{
        background:RanColor,
        width:"100wh",
        height:"100vh"


    }} >
        <button onClick={()=>setTypeOfColor("hex")}>hex color</button>
        <button onClick={()=>setTypeOfColor("rgb")}>rgb color</button>
        <button onClick={typeofColor === "hex"? handleHex:handlergb}>generate color</button>
        <div>
            <h1 style={{color:"white",
                textAlign:"center"
            }}>{RanColor}</h1>
        </div>
    </div>
    </>)
}
export default RandomColor
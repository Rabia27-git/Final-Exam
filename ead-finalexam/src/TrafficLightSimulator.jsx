import React, { useEffect, useState } from 'react'

function TrafficLightSimulator() {

    // CSS
    const boxStyles={
        marginTop:"50px",
        marginLeft:"500px",
        height:"220px",
        width:"90px",
        backgroundColor:"rgb(59, 55, 55)",
        borderRadius:"20px",
        paddingTop:"5px"
    }

    const circleStyles={
        width:"50px",
        height:"50px",
        borderRadius:"50%",
        marginTop:"15px",
        marginLeft:"20px",
        backgroundColor:"rgb(117, 106, 106)"
    }

    const redColorStyles={
        width:"50px",
        height:"50px",
        borderRadius:"50%",
        marginTop:"15px",
        marginLeft:"20px",
        backgroundColor:"red"
    }

    const yellowColorStyles={
        width:"50px",
        height:"50px",
        borderRadius:"50%",
        marginTop:"15px",
        marginLeft:"20px",
        backgroundColor:"yellow"
    }

    const greenColorStyles={
        width:"50px",
        height:"50px",
        borderRadius:"50%",
        marginTop:"15px",
        marginLeft:"20px",
        backgroundColor:"green"
    }


    // Logic
    const [light,setLight]=useState("red")
    const [classColor,setClassColor]=useState("redColorStyles")

    useEffect(()=>{
        const intervalId=setInterval(()=>{

            if(light==="red"){
                setLight("yellow")
            }
            else if(light==="yellow"){
                setLight("green")
            }
            else if(light==="green"){
                setLight("red")
            }
            
        },3000)

        return ()=>clearInterval(intervalId)

    },[light,classColor])

    useEffect(()=>{

        if(light==="red"){
            setClassColor("redColorStyles")
        }
        else if(light==="yellow"){
            setClassColor("yellowColorStyles")
        }
        else if(light==="green"){
            setClassColor("greenColorStyles")
        }

    },[light])

  return (
    <>
        <h1 style={{textAlign:"center"}}>Traffic Light Simulator</h1>
        <div style={boxStyles}>
            {light==="red" ? <div style={redColorStyles}></div> : <div style={circleStyles}></div>}
            {light==="yellow" ? <div style={yellowColorStyles}></div> : <div style={circleStyles}></div>}
            {light==="green" ? <div style={greenColorStyles}></div> : <div style={circleStyles}></div>}
        </div>
    </>
  )
}

export default TrafficLightSimulator
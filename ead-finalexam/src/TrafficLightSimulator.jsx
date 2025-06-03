import React from 'react'

function TrafficLightSimulator() {

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

  return (
    <>
        <h1 style={{textAlign:"center"}}>Traffic Light Simulator</h1>
        <div style={boxStyles}>
            <div style={circleStyles}></div>
            <div style={circleStyles}></div>
            <div style={circleStyles}></div>
        </div>
    </>
  )
}

export default TrafficLightSimulator
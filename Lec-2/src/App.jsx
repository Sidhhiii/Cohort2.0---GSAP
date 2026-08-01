import React, { useEffect, useRef } from 'react'
import {gsap} from 'gsap'
import "./App.css"

const App = () => {

  const circleRef = useRef(null);

  // gsap.set(circleRef.current,{})

  useEffect(()=>{
    gsap.fromTo(circleRef.current, {
      borderRadius: 0,
      backgroundColor: "red",
      x: 600,
      y: 100
    },{
      borderRadius: "50%",
      backgroundColor: "blue",
      x: 800,
      y: 300,
      rotation: 360,
      duration: 2.5,
      ease: "elastic.out(1,0.3)",
      delay: 1
    })
  }, [])

  return (
    <div className="main">
      <div ref={circleRef} className="circle">
      </div>
    </div>
  )
}

export default App
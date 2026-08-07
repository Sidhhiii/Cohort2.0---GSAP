import { useRef } from 'react'
import './App.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function App() {

  const page2Ref = useRef(null)
  const boxRef = useRef(null)

  useGSAP(()=>{
    gsap.to(boxRef.current,{
      opacity:1,
      scale:0.7,
      rotate:360 ,
      x: 900,
      y:500,
      backgroundColor:"blue",
      scrollTrigger:{
        trigger: page2Ref.current,
        start: "top top",
        end: "bottom center",
        markers: true,
        scrub: true
      }
    })
  }, { scope: page2Ref })

  return (
    <>
      <main>
        <div className="page1"></div>
        <div ref={page2Ref} className="page2">
          <div ref={boxRef} className="box"></div>
        </div>
        <div className="page3"></div>
      </main>
    </>
  )
}

export default App

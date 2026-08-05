import './App.css'
import React, { useEffect } from 'react'
import gsap  from 'gsap'
import SplitText from 'gsap/SplitText'

const App = () => {

  gsap.registerPlugin(SplitText);

  useEffect(() => {

    let split = new SplitText(".title",{
       type: "lines, words, chars",
       onSplit: (self) => {
          gsap.from(self.chars, {
            duration: 0.8,
            opacity: 0,
            rotateX: 180,
            y: 100,
            stagger: {
              each: 0.1,
              from: "start",
              ease: "power1.in",
            }
          })
          }
       })
      },[]);

  return (
    <div className='App'>
      <div className="mask">
        <h1 className='title'>hello world</h1>
      </div>
    </div>
  )
}

export default App

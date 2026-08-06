import './App.css'
import React, { useEffect } from 'react'
import gsap  from 'gsap'
import SplitText from 'gsap/SplitText'
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin'

const App = () => {

  gsap.registerPlugin(SplitText, ScrambleTextPlugin);


  useEffect(() => {

    const split = SplitText.create(".title",{
      type:"chars",
      onSplit: function(self){

        const tl = gsap.timeline();
        tl.from(self.chars,{
          duration: 0.5,
          opacity: 0,
          y: 80,
          stagger: 0.05,
          ease: "back.out(1.7)"
        }).to(".scramble",{
          duration: 1,
          scrambleText: {
            text: "SIDDHI GAVHANE", 
            chars: "upperCaseandLowerCase0123456789", 
            newClass: "scrambled",
            revealDelay: 0.5, 
            speed: 0.6, 
            ease: "none"
          }
        })

        let typedSplit = SplitText.create(".typed",{
          type: "chars",
          onSplit: function(self){
            console.log(self.chars);
            
            tl.from(self.chars,{
              duration: 0.4,
              opacity: 0,
              // y:20,
              stagger: 0.05
            })
          }
        })
      }
    })
  },[]);

  return (
    <div className='App'>
      <div className="mask">
        <h1 className='title'>Hello world, I am <span className='scramble'>Someone</span></h1>
        <p className="typed">Full-stack dev. Semicolon enthusiast. Occasional wizard.</p>
      </div>
    </div>
  )
}

export default App

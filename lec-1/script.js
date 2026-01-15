gsap.to("#box",{
    x:900,
    duration: 3,
    delay: 2,
    repeat: -1,
    yoyo: true,
    backgroundColor: "green",
    borderRadius: 100,
    rotate: 90,
    scale: 2
})

let tl = gsap.timeline()

tl.from("h2",{
    y:-50,
    opacity:0.5,
    duration: 1,
    delay:2
})

tl.from("h4",{
    y:-40,
    opacity:0.5,
    duration: 1,
    stagger: 1
})




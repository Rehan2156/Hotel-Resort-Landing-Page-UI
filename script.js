TweenMax.from(".logo,.content",1,{
    delay:0.5,
    opacity:0,
    y:20,
    ease: Expo.easeInOut    

})

TweenMax.staggerFrom(".btn",1,{
    delay:1,
    opacity:0,
    y:20,
    ease:Expo.easeInOut
},0.2)
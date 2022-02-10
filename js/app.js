lt = gsap.timeline({yoyo:true, repeat:1})
gsap.from(".contenedor-titulo",{
    delay:0.5,
    duration:2.3,
    y:-500,
    
    
})

gsap.from(".icons-header",{

    delay:0.8,
    duration:3.3,
    y:-500,
    
    
})
gsap.to(".welcome",{delay:0.8, duration:3.3,scale:0})


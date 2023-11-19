//locomotive js using for smooth scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
//gsap for animation
gsap.from(".anim1",{
    y:50,
    stagger:.3,
    opacity:0,
    ease:Power4,
    duration:1
})
Shery.imageEffect("#anim1 img",{
    style:4,
    debug:true
})

gsap.registerPlugin(ScrollTrigger);

gsap.to(".imgtwo", {
    scrollTrigger: {
        trigger: ".imgtwo",
        start: "top 50%",
        end: "bottom 70%",
        scrub: true,
        markers: true
    },
    opacity: 1,
    duration: 3
})
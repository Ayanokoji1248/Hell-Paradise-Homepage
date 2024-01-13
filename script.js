var tl=gsap.timeline();

gsap.to("#nav",{

    backgroundColor:"black",
    duration:0.4,
    opacity:0,
    // delay:1,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -12%",
        end:"top -12%",
        scrub:0.5,
    }
}) 


gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        scroller:"body",
        trigger:"#main",
        start:"top -30%",
        end:"top -70%",
        scrub:1,

    }
})

tl.from("#nav img, #basic-info h3, #login, #page1 h1, #page1 h3",{
    y:-100,
    delay:0.5,
    stagger:0.2,
    opacity:0,
})

tl.from("#page1 button",{
    opacity:0,
    delay:0.2,
})


gsap.from("#about h1, #about p",{
    x:-300,
    delay:0.5,
    stagger:0.5,
    duration:0.7,
    opacity:0,
    
    scrollTrigger:{
        scroller:"body",
        trigger:"#page2",
        // markers:true,
        start:"top 50%",
        end:"top 75%",
        scrub:2,
    }

})
gsap.from("#cover-img img",{
    // x:-300,
    scale:0.7,
    delay:0.5,
    stagger:0.3,
    opacity:0,
    
    scrollTrigger:{
        scroller:"body",
        trigger:"#page2",
        // markers:true,
        start:"top 50%",
        end:"top 75%",
        scrub:2,
    }

})

// gsap.from("#page3 h1",{
//     y:-100,
//     delay:0.4,
//     opacity:0, 

//     scrollTrigger:{
//         scroller:"body",
//         trigger:"#page3",
//         start:"top 30%",
//         end:"top 20%",
//         // markers:true,
//         scrub:1,
//     }
// })

// gsap.from(".box1",{
//     opacity:0,
//     y:-20,
//     duration:0.1,
//     stagger:0.4,
//     scrollTrigger:{
//         scroller:"body",
//         trigger:"#page3",
//         start:"top 30%",
//         end:"top 20%",
//         // markers:true,
//         scrub:1,
//     }
// })


// gsap.from("#page4 .gal",{
//     // delay:0.3/,
//     x:100,
//     scale:0.3,
//     opacity:0,
//     stagger:0.5,
//     scrollTrigger:{
//         scroller:"body",
//         trigger:"#page4",
//         start:"top 50%",
//         // end:"top 39%",
//         // markers:true,
//         // scrub:2,
//     }
// })


gsap.from("#quote-page .comma1",{
    delay:0.4,
    x:70,
    y:70,

    scrollTrigger:{
        scroller:"body",
        trigger:"#quote-page",
        // markers:true,
        start:"top 40%",
        end:"top 70%",
        scrub:4,
    }
})

gsap.from("#quote-page .comma2",{
    delay:0.4,
    x:-70,
    y:-70,
    scrollTrigger:{
        scroller:"body",
        trigger:"#quote-page",
        // markers:true,
        start:"top 40%",
        end:"top 70%",
        scrub:4,
    }
})

    // gsap.from("#page4 .gal", {
    //     x: 100,
    //     scale: 0.3,
    //     opacity: 0,
    //     stagger: 0.5,
    //     scrollTrigger: {
    //         trigger: "#page4",
    //         start: "top 50%",
    //         markers: true,  // Uncomment this line for debugging
    //     }
    // });

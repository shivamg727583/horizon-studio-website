function locomotiveScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotiveScroll();

function cursorAnimation(){
document.addEventListener("mousemove",function(dets){
  gsap.to(".cursor",{
    x:dets.x+"px",
    y:dets.y+"px",
  })

})
var navAll=document.querySelectorAll(".navbar h4,.logo img,.menu i");
navAll.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    gsap.to(".cursor",{
     scale:3
    })
  })
  elem.addEventListener("mouseleave",function(){
    gsap.to(".cursor",{
     scale:1
    })
})

})
}
cursorAnimation();

function page1Animation(){
  
var tl=gsap.timeline();
tl.from(".heading1 h1  ",{
    y:1000,
    stagger:.2,
    duration:1,
    rotate:10,
    delay:1
})
tl.from(".navbar ",{
    x:-300,
    duration:1,
    opacity:0,
    ease:"ease-in-out"

})
tl.from(".logo svg , .nav1 h4,.nav2 h4, .menu i",{
    y:100,
    duration:.5,
    stagger:.1,
    opacity:0,

},"s")
tl.from(".bg1",{
    transform:"translateX(100%)",
    duration:1,
    ease:"linear"
},"s")
}
page1Animation();

function page2Animation(){
 gsap.from(".page2-head1 h1",{
  y:300,
  stagger:.3,
  opacity:0,
  scrollTrigger:{
    trigger:".page2-head1",
    scroller:".main",
    // markers:true,
    start:"top 70%",
    end:"top 20%",
    // scrub:true
  }
 })
 gsap.from(".page2-head2",{
  x:-500,
  opacity:0,
  duration:2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  scrollTrigger:{
    trigger:".page2-head2",
    scroller:".main",
    start:"top 100%",
    end:"top 80%",
    // scrub:true
  }
 })
 gsap.from(".page2-head2 p,.page2-head2 h4",{
  x:-300,
  stagger:.3,
  opacity:0,
  ease:"linear",
  scrollTrigger:{
    trigger:".page2-head2",
    scroller:".main",
    // markers:true,
    start:"top 90%",
    end:"top 60%",
    // scrub:true
  }
 })
}
page2Animation();


function page3Animation(){
  gsap.from(".page3-up h1",{
    y:300,
    stagger:.3,
    opacity:0,
    scrollTrigger:{
      trigger:".page3-up",
      scroller:".main",
      // markers:true,
      start:"top 80%",
      end:"top 50%",
      scrub:2
    }
   })
   gsap.from(".page3 .cover-pic ",{
    y:-1000,
    ease:"linear",
    scrollTrigger:{
      trigger:".cover",
      scroller:".main",
      // markers:true,
      start:"top 80%",
      end:"top 50%",
      scrub:true
    }
   })
 gsap.from(".page3 .cover h2,.page3 .cover h4",{
    y:300,
    duration:1,
    opacity:0,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    scrollTrigger:{
      trigger:".cover-pic",
      scroller:".main",
      // markers:true,
      start:"top 50%",
      end:"top 30%",
      scrub:true
    }
   })
   gsap.from("#line3",{
    x:-1000,
    duration:1,
    ease:"linear",
    scrollTrigger:{
      trigger:".line3",
      scroller:".main",
      // markers:true,
      start:"top 80%",
      end:"top 50%",
      // scrub:true
    }
   })
   gsap.from("#line4",{
    x:-1000,
    duration:1,
    ease:"linear",
    scrollTrigger:{
      trigger:".line4",
      scroller:".main",
      // markers:true,
      start:"top 80%",
      end:"top 50%",
      // scrub:true
    }
   })

}
page3Animation();

function page4Animation(){


}
page4Animation();
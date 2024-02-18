function myFunction() {
  var x = document.querySelector(".nav-links");
  if (x.className === "nav-links") {
    x.className += " responsive";
  } else {
    x.className = "nav-links";
  }
}

function loco() {

  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });


}

// Get the navbar element
const navbar = document.getElementById('navbar2');

// Get the initial offset of the navbar
const offset = navbar.offsetTop;

// Function to handle the scroll event
function handleScroll() {
  if (window.pageYOffset >= offset) {
    // Add a class to make the navbar sticky
    navbar.classList.add('sticky');
  } else {
    // Remove the class if the user scrolls back up
    navbar.classList.remove('sticky');
  }
}


window.addEventListener('scroll', handleScroll);


// 
gsap.registerPlugin(ScrollTrigger);

// Select the video element
const video = document.querySelector("#page1 video");
const logo = document.querySelector("#page1 .page_logo");
const image = document.querySelector("#page1 .img_hero");
// Function to play the video
function playVideo() {
  video.play();

  // Add animation to fade out the logo
  gsap.to(logo, {
    opacity: 0,
    duration: 0.5, // Adjust the duration as needed
  });
  
}

// Function to stop the video
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  ease: "none",
});
tl.set(image,{autoAlpha: 0})
// var tl4 = gsap.timeline({
//   scrollTrigger: {
//     trigger: image,
//     start: "center center",
//     end: "150% center",
//     pin: true,
//     scrub: true,
//     // markers:true,
//   },
// });
tl.to(video, {
  scrollTrigger: {
    trigger: video,
    start: "-7% top",
    end: "bottom 100%", 
    onEnter: playVideo,
    onLeave: () => {
      console.log('yes')
      // tl.to(video,{autoAlpha:0})
      tl.to("#page1 .img_hero", { autoAlpha: 1})
    },
    markers: false,
  },
});

tl.fromTo(
  image,
  { autoAlpha: 1, scale: 1 },
  { autoAlpha: 1, scale: 0.8,}
);

// Scroll-triggered animation for the image
ScrollTrigger.create({
  trigger: image,
  start: "82% 100%",
  // end: "bottom 85%",
  markers: true,
  pin:true,
  animation: tl,
  scrub: true,
  pinSpacing: false,
});


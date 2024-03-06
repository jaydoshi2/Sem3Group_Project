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


const navbar = document.getElementById('navbar2');


const offset = navbar.offsetTop;

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



gsap.registerPlugin(ScrollTrigger);


const video = document.querySelector("#page1 video");
const logo = document.querySelector("#page1 .page_logo");
const image = document.querySelector("#page1 .img_hero");
const video1 = document.querySelector("#page1 .video1andh1 .head_vid1");
const video2 = document.querySelector("#page1 .video1andh2 .head_vid2");
const video3 = document.querySelector("#page1 .video1andh3 .head_vid3");
const video4 = document.querySelector("#page1 .video1andh4 .head_vid4");

let counter = 0;

function playVideo() {
  counter += 1;

  if (counter === 1) {
    video.play();
  }

  gsap.to(logo, {
    opacity: 0,
    duration: 0.5,
  });
}

function stopvid() {
  console.log("stopvid");
  gsap.set(video, {
    autoAlpha: 0,
    // duration:0.1,
    opacity: 0,
  });
  gsap.set(image, { autoAlpha: 1, scale: 1 })
}
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1",
    start: "6% top",
    end: "60% 40%",
    pin: true,
    scrub: true,
  },
});


tl.set(image, { autoAlpha: 0 });




tl.to(video, {
  scrollTrigger: {
    trigger: video,
    start: "-5% top",
    end: "bottom bottom",
    onEnter: playVideo,
    onLeave: stopvid,
    onLeaveBack: () => {
      gsap.set(video, { autoAlpha: 1 })
      gsap.set(image, { autoAlpha: 0 })
    },
    onEnterBack: () => {
      gsap.set(image, { autoAlpha: 1 })
    },
  },
});


tl.to(image, {
  scale: 0.75,
  scrollTrigger: {
    start: "20% center",
    end: "20% 15%",

    pin: true,
    scrub: true,
    pinSpacing: true,
  }
})

tl.fromTo(image,
  { autoAlpha: 1 },
  {
    scrollTrigger: {
      start: "25% 35%",
      end: "20% top ",
      // onEnterBack: () => {
      //   gsap.set(image, { autoAlpha: 1 })
      // },
      scrub: true,
    },
    autoAlpha: 0
  })

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1",
    start: "65% bottom",
    end: "70% 20%",
    // onEnter:()=>{video1.play()},
    pin: true,
    scrub: true,
  },
});


const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1",
    start: "75% bottom",
    end: "80% 30%",
    pin: true,
    scrub: true,
  },
});


const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1",
    start: "85% bottom",
    end: "90% 40%",
    // onEnter:()=>{video1.play()},
    pin: true,
    scrub: true,
  },
});


const tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1",
    start: "95% bottom",
    end: "bottom 50%",
    // onEnter:()=>{video1.play()},
    pin: true,
    scrub: true,
  },
});


tl2.set(".headline1", { autoAlpha: 0 })
tl2.set(video1, { autoAlpha: 0 })

tl2.to([".headline1", video1], { autoAlpha: 1 })
tl2.set([".headline1", video1], { autoAlpha: 1 })
tl2.to([".headline1", video1], { autoAlpha: 0 })
tl2.set([".headline1", video1], { autoAlpha: 0 })


tl3.set(".headline2", { autoAlpha: 0 })
tl3.set(video2, { autoAlpha: 0 })

tl3.to([".headline2", video2], { autoAlpha: 1, })
tl3.set([".headline2", video2], { autoAlpha: 1 })
tl3.to([".headline2", video2], { autoAlpha: 0 })
tl3.set([".headline2", video2], { autoAlpha: 0 })


tl4.set(".headline3", { autoAlpha: 0 })
tl4.set(video3, { autoAlpha: 0 })

tl4.to([".headline3", video3], { autoAlpha: 1, })
tl4.set([".headline3", video3], { autoAlpha: 1 })
tl4.to([".headline3", video3], { autoAlpha: 0 })
tl4.set([".headline3", video3], { autoAlpha: 0 })


tl5.set(".headline4", { autoAlpha: 0 })
tl5.set(video4, { autoAlpha: 0 })

tl5.to([".headline4", video4], { autoAlpha: 1, })
tl5.set([".headline4", video4], { autoAlpha: 1 })
tl5.to([".headline4", video4], { autoAlpha: 0 })
tl5.set([".headline4", video4], { autoAlpha: 0 })



// THIS SCRIPT IS FOR NEXT PAGE

const tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page3",
    start: "bottom bottom",
    end: "bottom top",
    pin: true,
    scrub: true,
    markers: true
  },
});


tl6.to(".page3 .center-page3", {
  y: "-100%",
})
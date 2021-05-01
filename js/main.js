var tl = new TimelineMax({onUpdate: updatePercentage});
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();
var tl4 = new TimelineMax();
var tl5 = new TimelineMax({onUpdate: updatePercentage});
const controller = new ScrollMagic.Controller();

tl2.from('.project-violet', .5, {x: -70, opacity: 0});
tl2.from('.project-green', .6, {x: 70, opacity: 0});
tl2.from('.project-red', .7, {x: -70, opacity: 0});
tl3.from('.technology', .5, {scale: 0, opacity: 0});
tl3.to('.technology', .1, {scale: 1.05, opacity: 100});
tl3.to('.technology', .4, {scale: 1, opacity: 100});
tl4.from('.event', .6, {y: 100, opacity: 0});
const scene = new ScrollMagic.Scene({
            triggerHook: "onLeave",
            offset: '70px',
            duration: "20%",
})
  .setPin(".sticky")
  .setTween(tl)
		.addTo(controller);

const scene2 = new ScrollMagic.Scene({
    triggerElement: ".projects-container"
}).setTween(tl2)
        .addTo(controller);

const scene3 = new ScrollMagic.Scene({
    triggerElement: ".technology-container"
}).setTween(tl3)
        .addTo(controller);

const scene4 = new ScrollMagic.Scene({
    triggerElement: ".events-container"
}).setTween(tl4)
        .addTo(controller);


function updatePercentage() {
  tl.progress();
}

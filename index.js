const outerFrameTop = document.querySelector('.outer-frame-top');
const outerFrameRight = document.querySelector('.outer-frame-right');
const outerFrameLeft = document.querySelector('.outer-frame-left');
const outerFrameBot = document.querySelector('.outer-frame-bot');
const logo = document.querySelector('.logo');
const redSlice = document.querySelector('.red-slice');
const splitBackground = document.querySelector('.home-background-split');
const mainText = document.querySelectorAll('.hide-text');
const mainTextWrapper = document.querySelector('.main-text-wrapper')
const sideMenuButton = document.querySelector('.menu-button');
const socials = document.querySelectorAll('.social-item');
const headingText = document.querySelectorAll('.hide-text-heading');
const headingTextInfo = document.querySelector('.hide-text-heading-info');

const starterTL = new TimelineMax();
const interactionTL = new TimelineMax();

const initFunction = () => {
    document.body.style['overflow'] = 'hidden';
    setTimeout(()=>{document.body.style['overflow-y']='scroll'}, 5000);
}

initFunction();


starterTL.fromTo(mainText[1], 0.6, {top:150}, {top:-50, ease: Power3.easeOut}, '+=1.5');
starterTL.fromTo(mainText[0], 0.6, {top:150}, {top:-40, ease: Power3.easeOut}, '-=0.3');
starterTL.fromTo(redSlice, 1, {width:'100vw'},{width:'45vw', ease: Power3.easeInOut}, "+=0");
starterTL.fromTo(mainText, 0.4, {transform:'scale(0.8)'}, {transform:'scale(1.0)'}, '-=0.4');
starterTL.fromTo(outerFrameTop, 0.6, {transform: 'scaleY(0)'}, {transform: 'scaleY(1)'}, '-=0.3');
starterTL.fromTo(outerFrameBot, 0.6, {transform: 'scaleY(0)'}, {transform: 'scaleY(1)'}, "-=0.6");
starterTL.fromTo(outerFrameRight, 0.6, {transform: 'scaleX(0)'}, {transform: 'scaleX(1)'}, "-=0.6");
starterTL.fromTo(outerFrameLeft, 0.6, {transform: 'scaleX(0)'}, {transform: 'scaleX(1)'}, "-=0.6");
starterTL.fromTo(logo, 0.6, {marginBottom:100}, {marginBottom:0} );
starterTL.from(sideMenuButton, 0.6, {x:-100}, '-=0.6');
starterTL.from(socials[0], 0.6, {x: 50}, '-=.6')
starterTL.from(socials[1], 0.6, {x: 50}, '-=.4')

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    duration:500,
    offset:0
})
    .addIndicators()
    .setPin(splitBackground)
    .addTo(controller);

var redSliceOpen = false;
window.onscroll = function(){
    if (window.scrollY > 20 && !redSliceOpen){
        interactionTL.to(redSlice, 1.4, {width:'100vw', ease: Power3.easeInOut});
        interactionTL.to(mainTextWrapper, 1.2, {left:'90%', ease: Power3.easeInOut}, '-=1.2');
        interactionTL.to(headingTextInfo, 0.3, {left:'0%'}, '-=0.2')
        interactionTL.to(headingText[2], 0.4, {top:'0%'}, '-=0.8');
        interactionTL.to(headingText[1], 0.4, {top:'0%'}, '-=0.6');
        interactionTL.to(headingText[0], 0.4, {top:'0%'}, '-=0.4');
        redSliceOpen = !redSliceOpen;
    } else if( window.scrollY <10 && redSliceOpen) {
        interactionTL.to(headingText[0], 0.3, {top:'100%'});
        interactionTL.to(headingText[1], 0.3, {top:'100%'}, '-=0.2');
        interactionTL.to(headingText[2], 0.3, {top:'100%'}, '-=0.2');
        interactionTL.to(headingTextInfo, 0.3, {left:'-100%'}, '-=0.2')
        interactionTL.to(redSlice, 1.4, {width:'45vw', ease: Power3.easeInOut}, '-=0.8');
        interactionTL.to(mainTextWrapper, 1.4, {left:'20%', ease: Power3.easeInOut}, '-=1.4');
        redSliceOpen = !redSliceOpen;
    }
}

const bluredSpacer = document.querySelector('.blured-spacer');



const transitionTL = new TimelineMax();
transitionTL.to(bluredSpacer, 1, {backgroundPosition: 'center', ease: Power3.easeIn});
transitionTL.to('.content-about-section', 1, {height:'30vh'}, '-=1')



const scene2 = new ScrollMagic.Scene({
    duration: innerHeight,
    offset:500
})
    .setTween(transitionTL)
    .addIndicators()
    .addTo(controller);

const progressbarIndicator = document.querySelector('.progressbar-indicator');
const aboutProgressTL = new TimelineMax();
aboutProgressTL.fromTo(progressbarIndicator, 1, {top:0,}, {top:'unset', bottom:0});

const aboutSceneScroller = new ScrollMagic.Scene({
    duration:'100%',
    triggerElement:'.about-section-trigger',
    triggerHook: 'onLeave',
})
    .setTween(aboutProgressTL)
    .addIndicators()
    .setPin('.about-section-progressbar')
    .addTo(controller)

const aboutSceneHelper = new ScrollMagic.Scene({
    duration:'100%',
    triggerElement:'.about-section-trigger',
    triggerHook:'onLeave'
})
    .setTween()
    .addIndicators()
    .setPin('.about-section-pin')
    .addTo(controller)



const revealTextCSS = document.querySelectorAll('.css-wordgame-wrapper span');
const wordgameCSS = document.querySelector('.css-wordgame-wrapper');
const cssLetter = document.querySelectorAll('.css-letters');

const aboutContentTL = new TimelineMax();

aboutContentTL.fromTo(revealTextCSS[0], 1,{ width:0 }, { width:200, ease: Power3.easeInOut }, '+=1');
aboutContentTL.to(cssLetter[0], 1, { color:'#ff584f', ease: Power3.easeInOut}, '-=1');
aboutContentTL.to(revealTextCSS[0], 1, { width:0, ease:Power3.easeInOut}, '+=1');
aboutContentTL.to(cssLetter[0], 1, { color:'#263145', ease: Power3.easeInOut}, '-=1');

aboutContentTL.to(cssLetter[1], 1, {marginLeft: 10, color:'#ff584f', ease: Power3.easeInOut}, '-=1');
aboutContentTL.fromTo(revealTextCSS[1], 1,{ width:0 }, { width:300, ease: Power3.easeInOut });
aboutContentTL.to(revealTextCSS[1], 1, { width:0, ease:Power3.easeInOut }, '+=1');
aboutContentTL.to(cssLetter[1], 1, {marginLeft:0, color:'#263145', ease: Power3.easeInOut}, '-=1');

aboutContentTL.to(cssLetter[2], 1, {marginLeft: 10, color:'#ff584f', ease: Power3.easeInOut}, '-=1');
aboutContentTL.fromTo(revealTextCSS[2], 1,{ width:0 }, { width:210, ease: Power3.easeInOut });
aboutContentTL.to(revealTextCSS[2], 1, { width:0, ease:Power3.easeInOut }, '+=1');
aboutContentTL.to(cssLetter[2], 1, {marginLeft:0, color:'#263145', ease: Power3.easeInOut}, '-=1');

const aboutSection = new ScrollMagic.Scene({
    duration:500,
    triggerElement:'.about-section-trigger',
    triggerHook:'onLeave',
})
    .setTween(aboutContentTL)
    .addIndicators()
    .setPin('.about-fixed-item')
    .addTo(controller)


const aboutSectionDesignShowcaseScrollTL = new TimelineMax();
const designsRowContainer = document.querySelector('.mockup-designs-showcase-row');
const designsHider = document.querySelector('image-scroll-hider');

aboutSectionDesignShowcaseScrollTL.fromTo(designsRowContainer, 1,{top: '60vh'}, {top: '90vh'});
aboutSectionDesignShowcaseScrollTL.fromTo('.designs-block-wrapper', 2, {left: '-40vw'}, {left: '20vw'},'-=1')

const aboutSectionDesignShowcaseScene = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement:'.about-section-trigger',
    triggerHook:'onLeave',
})
    .setTween(aboutSectionDesignShowcaseScrollTL)
    .addIndicators()
    // .setPin(designsRowContainer)
    .addTo(controller)







sideMenuButton.addEventListener("mouseover", ()=>{
    TweenMax.to(outerFrameLeft, 0.2, {width:110, ease: Power3.easeInOut})
}, false);

sideMenuButton.addEventListener("mouseout", ()=>{
    TweenMax.to(outerFrameLeft, 0.2, {width:50, ease: Power2.easeInOut})
}, false);





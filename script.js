
/* <=============================== Navabar ======================================= > */

gsap.to('nav',{
    y : '100px',
    duration : 1
})


/* <=============================== Herobox ======================================= > */

gsap.to('.top-bar',{
    top : '5%',
    opacity : 1,
    duration : 1
})

var HerosNames = document.querySelectorAll('.heros-names'); 

HerosNames.forEach(function(Names){
    var HeroNameText = Names.textContent.split('')
    var storage = ''
    HeroNameText.forEach(function(NameCharacter){
        storage += `<span>${NameCharacter}</span>`
    })
    Names.innerHTML = storage
})

gsap.to('.herobox-content-container .heros-names span',{
    x : '-80px',
    transform : 'rotateY(0deg)',
    duration : 1,
    opacity : 1,
    stagger : 0.04
})

gsap.to('.grid',{
    top : '8%',
    opacity : 1,
    duration : 1
})

var heroMainHeading = document.querySelector('.herobox-mainheading')
var heroMainHeadingText = heroMainHeading.textContent.split('')

var letterStorage = ''
heroMainHeadingText.forEach(function(letters){
    letterStorage += `<span>${letters}</span>`
})
heroMainHeading.innerHTML = letterStorage

gsap.to('.herobox h1.herobox-mainheading span',{
    x : '-150px',
    transform : 'rotateY(0deg)',
    duration : 1.5,
    opacity : 1,
    stagger : 0.04,
})

gsap.to('.red-circle',{
    scale : 1,
    opacity: 1,
    duration : 1
})

gsap.to('.character',{
    bottom : '0%',
    scale : 0.7,
    duration : 1
})

gsap.to('.herobox .hero-slider',{
    bottom : '30%',
    opacity : 1,
    duration : 1
})
gsap.to('.slider-container',{
    left : '-600px',
    duration : 10,
    repeat : -1,
    ease: 'none'
})

gsap.to('.hero-footer',{
    bottom : '0%',
    opacity : 1,
    duration : 1,
    scrollTrigger :{
        trigger : '.hero-footer',
        start : 'top 90%'
    }
})


/* <=============================== Section 1 ======================================= > */

gsap.to('.marvel-studio',{
    top : '8%',
    duration : 1,
    opacity : 1,
    scrollTrigger :{
        trigger : '.section-1',
        start : 'top 80%'
    }
})

gsap.to('.date-status',{
    top : '8%',
    duration : 1,
    opacity : 1,
    filter : 'blur(0px)',
        scrollTrigger :{
        trigger : '.section-1',
        start : 'top 80%'
    }
})

gsap.to('.section1-right-top-description',{
    top : '8%',
    duration : 1,
    opacity : 1,
    filter : 'blur(0px)',
        scrollTrigger :{
        trigger : '.section-1',
        start : 'top 80%'
    }
})

gsap.to('.card-container',{
    top : '50%',
    transform : 'translate(-50%, -50%)',
    duration : 1,
        scrollTrigger :{
        trigger : '.section-1',
        start : 'top 40%'
    }
})

gsap.to('.card-container .card:nth-child(1)',{
    transform : 'rotate(5deg)',
    duration : 1,
        scrollTrigger :{
        trigger : '.section-1',
        start : 'top 40%'
    }
})

gsap.to('.card-container .card:nth-child(2)',{
    transform : 'rotate(15deg)',
    duration : 1,
        scrollTrigger :{
        trigger : '.section-1',
        start : 'top 40%'
    }
})

gsap.to('.card-container .card:nth-child(3)',{
    transform : 'rotate(-15deg)',
    duration : 1,
        scrollTrigger :{
        trigger : '.section-1',
        start : 'top 40%'
    }
})

gsap.to('.rating',{
    left : '60px',
    opacity : 1,
    duration : 1,
        scrollTrigger :{
        trigger : '.section-1',
        start : 'top 40%'
    }
})

gsap.to('.socials',{
    right : '60px',
    opacity : 1,
    duration : 1,
        scrollTrigger :{
        trigger : '.section-1',
        start : 'top 40%'
    }
})
gsap.to('.slider-left-indicator',{
    left : '0px',
    opacity : 1,
    duration : 1,
        scrollTrigger :{
        trigger : '.section-1',
        start : 'top 40%'
    }
})

gsap.to('.slider-right-indicator',{
    right : '0px',
    opacity : 1,
    duration : 1,
        scrollTrigger :{
        trigger : '.section-1',
        start : 'top 40%'
    }
})

gsap.to('.left-section1-content',{
    top : '52%',
    opacity : 1,
    duration : 1,
        scrollTrigger :{
        trigger : '.section-1',
        start : 'top 20%'
    }
})

var sectionOneFooterHeadings = document.querySelectorAll('.section-1FooterHeading'); 

sectionOneFooterHeadings.forEach(function(sectionOneFooterElement){
    var sectionOneFooterElementText = sectionOneFooterElement.textContent.split('')
    var sectionOneFooterStorage = ''
    sectionOneFooterElementText.forEach(function(sectionOneFooterElementLetters){
        sectionOneFooterStorage += `<span>${sectionOneFooterElementLetters}</span>`
    })
    sectionOneFooterElement.innerHTML = sectionOneFooterStorage
})


gsap.to('.section-1 .section-1FooterHeading span',{
    left : '0px',
    transform : 'rotateY(0deg)',
    duration : 1,
    opacity : 1,
    scrollTrigger :{
        trigger : '.section-1',
        start : 'top 10%'
    },
    stagger : 0.04
})

gsap.to('.section-1 p.section-1footer-date',{
    left : '60px',
    opacity : 1,
    duration : 1,
        scrollTrigger :{
        trigger : '.section-1',
        start : 'top 10%'
    }
})


/* <=============================== Section 2 ======================================= > */

gsap.to('.section2-counting',{
    top : '5%',
    duration : 1,
    opacity : 1,
    scrollTrigger : {
        trigger : '.section-2',
        start : 'top 80%'
    }
})

gsap.to('.section-2 h1.section-2-mainHeading',{
    scale : 1,
    duration : 1,
    opacity : 1,
    scrollTrigger : {
        trigger : '.section-2',
        start : 'top 80%'
    }
})

gsap.to('.left-users',{
    left : '0px',
    duration : 1,
    opacity : 1,
    scrollTrigger : {
        trigger : '.section-2',
        start : 'top 80%'
    }
})

gsap.to('.mid-arrows',{
    scale : 1,
    duration : 1,
    opacity : 1,
    scrollTrigger : {
        trigger : '.section-2',
        start : 'top 70%'
    }
})


gsap.to('.right-cd',{
    right : '0px',
    duration : 1,
    opacity : 1,
    scrollTrigger : {
        trigger : '.section-2',
        start : 'top 80%'
    }
})
gsap.to('.left-section2-content',{
    scale : 1,
    filter : 'blur(0px)',
    duration : 1,
    opacity : 1,
    scrollTrigger : {
        trigger : '.section-2',
        start : 'top 40%'
    }
})

gsap.to('.card-img',{
    top : '80%',
    duration : 1,
    opacity : 1,
    scrollTrigger : {
        trigger : '.section-2',
        start : '20% 40%'
    }
})

gsap.to('.left-footer-image',{
    top : '0px',
    duration : 1,
    scrollTrigger : {
        trigger : '.section-2',
        start : 'top 40%'
    }
})

gsap.to('.right-footer-image',{
    top : '0px',
    duration : 1,
    scrollTrigger : {
        trigger : '.section-2',
        start : 'top 40%'
    }
})

gsap.to('.deadpool-character',{
    bottom : '0%',
    duration : 1,
    opacity : 1,
    scrollTrigger : {
        trigger : '.section-2',
        start : '20% 20%'
    }
})


gsap.to('.deadpool-character',{
    top : '160%',
    left:'60%',
    scale : 1.05,
    duration : 1,
    scrollTrigger : {
        trigger : '.footer',
        start : 'top 50%',
        end : 'bottom 100%',
        scrub : 1 
    },
})

gsap.to('.footer-content',{
    scale : 1,
    opacity : 1,
    filter : 'blur(0px)',
    duration : 1,
    scrollTrigger : {
        trigger : '.footer',
        start : 'top 50%',
        end : 'bottom 100%',
    },
})

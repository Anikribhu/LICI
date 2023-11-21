function footerAnim() {
    var footer = gsap.timeline();

    footer.from(".agency-about", {
        x: '-20',
        opacity: 0,
        duration: 2,
        ease: Power3.easeInOut
    })
        .from(".footer-links", {
            y: '10',
            opacity: 0,
            duration: 2,
            delay: -1.5,
            ease: Expo.easeInOut
        })
        .from(".contact", {
            x: '20',
            opacity: 0,
            delay: -1,
            duration: 2,
            ease: Power3.easeInOut
        })
}

function achieveAnim() {
    var image = gsap.timeline();

    image.from(".mdrt", {
        x: '-20',
        opacity: 0,
        duration: 2,
        ease: Power3.easeInOut
    })
    .from(".gcm", {
        x: '20',
        opacity: 0,
        duration: 2,
        ease: Power3.easeInOut
    })
    .from(".achievements", {
        y: '20',
        opacity: 0,
        delay: -1.5,
        duration: 2,
        ease: Power3.easeInOut
    })
        
}


function profileAnim() {
    var profile = gsap.timeline();

    profile.from(".profile-image", {
        x: '-20',
        opacity: 0,
        duration: 2,
        ease: Power3.easeInOut
    })
        .from(".desktop-view", {
            y: '10',
            opacity: 0,
            duration: 2,
            delay: -1.5,
            ease: Expo.easeInOut
        })
        .from(".profile-heading", {
            y: '-10',
            opacity: 0,
            duration: 2,
            delay: -1.5,
            ease: Expo.easeInOut
        })
        .from(".mobile-view", {
            x: '20',
            opacity: 0,
            delay: -1,
            duration: 2,
            ease: Power3.easeInOut
        })
}


footerAnim();
profileAnim(); 
achieveAnim();
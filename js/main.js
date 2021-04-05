function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        bottom: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        bottom: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    tl.set(".loading-screen", { bottom: "-100%" });
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animate-this", { duration: 2, y: 500, opacity: 0, stagger: 0.4, delay: 0.2 });
}

$(function () {
    barba.init({
        sync: true,

        transitions: [
            {
                async leave(data) {
                    const done = this.async();

                    pageTransition();
                    await delay(1000);
                    done();
                },

                async enter(data) {
                    contentAnimation();
                },

                async once(data) {
                    contentAnimation();
                },
            },
        ],
    });
});

$(document).ready(function()
{
    $(window).scroll(function(){
        if(this.scrollY>50)
        {
            $('.navbar').addClass('bg-dark');
        }
        else{
            $('.navbar').removeClass('bg-dark');
        }
    })
})



var cursor1=document.querySelector('.cursor');


document.addEventListener('mousemove',function(e){
    cursor1.style.cssText="left:"+e.clientX+"px;top:"+e.clientY+"px;"
})


$(document).ready(function()
{
    $(window).scroll(function(){
        if(this.scrollY>500)
        {
            $('.image').addClass('block-reveal');
        }
        if(this.scrollY>4300)
        {
            $('.ab-img').addClass('block-reveal');
        }
        if(this.scrollY>2200)
        {
           $('.achievements').addClass('block-reveal');
        }
    })
})

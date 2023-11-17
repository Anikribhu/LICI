// Auto Slide 
var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
   var slides = document.getElementsByClassName("mySlides");
   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
   }
   slideIndex++;
   if (slideIndex > slides.length) { slideIndex = 1 }
   slides[slideIndex - 1].style.display = "block";
   setTimeout(showSlides, 4000); // Change image every 2 seconds
}


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }


  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  function firstPageAnim(){
    var tl =gsap.timeline();

    tl.from(".desc1",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut
    })
    .from(".wel-btn",{
        y:'-10',
        opacity:0,
        duration:2,
        delay:-1.5,
        ease:Expo.easeInOut,
    })
    .from(".desc2",{
        y:'-10',
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut
    })
}  

function footerAnim(){
  var tl =gsap.timeline();

  tl.from(".agency-about",{
      x:'-20',
      opacity:0,
      duration:2,
      ease:Power3.easeInOut
  })
  .from(".footer-links",{
      y:'10',
      opacity:0,
      duration:2,
      delay:-1.5,
      ease:Expo.easeInOut
  })
  .from(".contact",{
      x:'20',
      opacity:0,
      delay:-1,
      duration:2,
      ease:Power3.easeInOut
  })
}

firstPageAnim();
footerAnim();
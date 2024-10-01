function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed"*/
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
locoScroll()

function mouseFollower(){

  var crsr=document.querySelector(".cursor")
  document.addEventListener("mousemove",function(dets){
    // crsr.style.left=dets.x+"px"
    // crsr.style.top=dets.y+"px"
    gsap.from(".cursor",{
      y:dets.y,
      x:dets.x,
    })
  })
}
mouseFollower()


function page1Text(){
  var allText=document.querySelectorAll(".page1 .page1-text h1")
  allText.forEach(function(elem){
      // var text =elem.textContent
      var splittedText=elem.textContent.split("")
      var clutter=""
      splittedText.forEach(function(e){
        clutter+=`<span>${e}</span>`
      })
    elem.innerHTML=clutter
  })
  gsap.from(".page1 .page1-text h1 span",{
    delay:0.5,
    y:600,
    duration:0.6,
    stagger:0.1,
  })
}
page1Text()

function page2Text(){
  gsap.from(".page2 .page2-texts h1",{
    y:600,
    duration:0.8,
    stagger:0.2,
    scrollTrigger:{
      scroller:".main",
      trigger:".page2",
      start:"top 80%",
    }
  })
  gsap.from(".page3 .page3-texts p",{
    y:600,
    duration:0.8,
    stagger:0.2,
    scrollTrigger:{
      scroller:".main",
      trigger:".page3-text",
      start:"top 70%",
      // markers:true,
    }
  })
}
page2Text()

function page2String(){
  var myPath=`M 10 120 Q 500 120 990 120`
  var finalPath=`M 10 120 Q 500 120 990 120`

  var string=document.querySelector(".page2 .string")
  string.addEventListener("mousemove",function(dets){
    myPath=`M 10 120 Q ${dets.x} ${dets.y - string.getBoundingClientRect().y} 990 120`
    gsap.to(".page2 svg path",{
      attr:{d:myPath}
    })
  })
  string.addEventListener("mouseleave",function(dets){
    gsap.to(".page2 svg path",{
      attr:{d:finalPath},
      ease:"elastic.out(1.2,0.2)",
      duration:1
    })
  })
}
page2String()

function cursorEffect(){
      var cursor=document.querySelector(".cursor")
      var allImages=document.querySelectorAll(".image-div")
      var text=""
      allImages.forEach(function(elem){
         elem.addEventListener("mouseenter",function(){
          text=elem.getAttribute("data-text")
          gsap.to(cursor,{
              width:"170px"
          })
          cursor.innerHTML=`<h5>${text}</h5> <h5>${text}</h5> <h5>${text}</h5> <h5>${text}</h5>`
         })
         elem.addEventListener("mouseleave",function(){
          text=elem.getAttribute("data-text")
          gsap.to(cursor,{
              width:"25px"
          })
          cursor.innerHTML=""
         })
      })
}
cursorEffect()

function page3Text(){
  gsap.from(".page3 .page3Text1 h1",{
    y:600,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
      scroller:".main",
      trigger:".page3",
      start:"top 80%",
      // markers:true
    }
  })
}
page3Text()

function page3String(){
  var myPath=`M 10 120 Q 500 120 990 120`
  var finalPath=`M 10 120 Q 500 120 990 120`

  var string=document.querySelector(".page3 .string")
  string.addEventListener("mousemove",function(dets){
    myPath=`M 10 120 Q ${dets.x} ${dets.y - string.getBoundingClientRect().y} 990 120`
    gsap.to(".page3 svg path",{
      attr:{d:myPath}
    })
  })
  string.addEventListener("mouseleave",function(dets){
    gsap.to(".page3 svg path",{
      attr:{d:finalPath},
      ease:"elastic.out(1.2,0.2)",
      duration:1
    })
  })
}
page3String()

function page4Image(){
  var elementContainer=document.querySelector(".page4 .element-container")
  elementContainer.addEventListener("mouseenter",function(){
    gsap.to(".moving-image",{
      opacity:1,
    })
  })
  elementContainer.addEventListener("mouseleave",function(){
    gsap.to(".moving-image",{
      opacity:0,
    })
  })


  var allElements=document.querySelectorAll(".page4 .element")
  var movingImage=document.querySelector(".page4 .moving-image")
  var moveImg=document.querySelector(".page4 .moving-image img")
  allElements.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
      let image=elem.getAttribute("data-image")
      moveImg.setAttribute("src",image)
    })

    elem.addEventListener("mousemove",function(dets){
      gsap.to(movingImage,{
        x:`${dets.x - elementContainer.getBoundingClientRect().x}`,
        top:`${dets.y - elementContainer.getBoundingClientRect().y}`,
        duration:3,
        ease:"power1.out"
      })
    })
  })

}
page4Image()

function page5Text(){
  var tl=gsap.timeline({
    scrollTrigger:{
      scroller:".main",
      trigger:".page5",
      start:"top 70%",
    }
  })
  tl.from(".page5 .page5-text h1",{
    y:700,
    duration:2,
  })
}
page5Text()

function page6Text(){

  var tl=gsap.timeline({
    scrollTrigger:{
      scroller:".main",
      trigger:".page6",
      start:"top 70%",
    }
  })
  tl.from(".page6 .text-con h1",{
    y:700,
    duration:2,
    // stagger:0.3,
  })
}
page6Text()

function page6Img(){
  var img1=document.querySelector(".page6 .container .cont1 img")
  var img2=document.querySelector(".page6 .container .cont2 img")
  var cont1 = document.querySelector(".page6 .container .cont1")
  var cont2= document.querySelector(".page6 .container .cont2")
  cont1.addEventListener("mouseenter",function(){
    gsap.to(img1,{
      opacity:1,
      // scale:1,
    })
    gsap.to(".page6 .container",{
      backgroundColor:"#FFD7E7"
    })
  })
  cont1.addEventListener("mouseleave",function(){
    gsap.to(img1,{
      opacity:0,
      // scale:0,
    })
    gsap.to(".page6 .container",{
      backgroundColor:"transparent"
    })
  })
  cont1.addEventListener("mousemove",function(dets){
    gsap.to(img1,{
      left:dets.x - cont1.getBoundingClientRect().x,
      top:dets.y - cont1.getBoundingClientRect().y
    })
  })
  cont2.addEventListener("mouseenter",function(){
    gsap.to(img2,{
      opacity:1,
    })
    gsap.to(".page6 .container",{
      backgroundColor:"#BAC4E2"
    })
  })
  cont2.addEventListener("mouseleave",function(){
    gsap.to(img2,{
      opacity:0,
    })
    gsap.to(".page6 .container",{
      backgroundColor:"transparent"
    })
  })
  cont2.addEventListener("mousemove",function(dets){
    gsap.to(img2,{
      left:dets.x - cont2.getBoundingClientRect().x,
      top:dets.y - cont2.getBoundingClientRect().y
    })
  })
}
page6Img()

function page7move(){
  window.addEventListener("wheel",function(dets){
    if(dets.deltaY > 0){
      gsap.to(".page7 .move .marque",{
        transform:"translateX(-200%)",
        ease:"none",
        repeat:-1,
        duration:5,
      })
      gsap.to(".page7 .move .marque img",{
        rotate:180,
      })
    }
    else{
      gsap.to(".page7 .move .marque",{
        transform:"translateX(0)",
        ease:"none",
        repeat:-1,
        duration:5,
      })
      gsap.to(".page7 .move .marque img",{
        rotate:0,
      })
    }
  })
}
page7move()

function loader(){
  var roti=0
  document.addEventListener("wheel",function(dets){
    if(dets.deltaY > 0){
      roti++
      gsap.to(".loader svg",{
        transform:`translate(-50%,-50%) rotate(${roti}deg)`
      })
    }else{
      roti--
      gsap.to(".loader svg",{
        transform:`translate(-50%,-50%) rotate(${roti}deg)`
      })
    }
  })
}
loader()

function fullLoad(){
  var roti=0
  document.addEventListener('wheel',function(dets){
    if(dets.deltaY > 0){
      roti++
      gsap.to(".loader .circle .load",{
        height:roti/10
      })
    }else{
      roti--
      gsap.to(".loader .circle .load",{
        height:roti/10
      })
    }
  })
}
fullLoad()
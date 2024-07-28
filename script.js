var elemC=document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
var overlay = document.querySelector("#fixed-imageoverlay")
elemC.addEventListener("mouseenter",function(){
   fixed.style.display = "block" 
})
elemC.addEventListener("mouseleave",function(){
    fixed.style.display = "none" 
})
fixed.addEventListener("mouseenter",function(){
    fixed.style.display = "block" 
})
 fixed.addEventListener("mouseleave",function(){
     fixed.style.display = "none" 
})
var elems=document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseover",function(){
        var image=e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })    
})
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

var designImg = document.querySelector("#projects-right")
var design = document.querySelector("#design")
design.addEventListener("click",function(){
    design.style.color = "#EFEAE3"
    design.style.borderLeft = "3px solid #FE330A"
    designImg.style.background = "url(https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project-p-1080.jpg)"
    project.style.color = "#433C37"
    project.style.borderLeft = "3px solid #433C37"
    execution.style.color = "#433C37"
    execution.style.borderLeft = "3px solid #433C37"
})
var project = document.querySelector("#project")
project.addEventListener("click",function(){
    project.style.color = "#EFEAE3"
    project.style.borderLeft = "3px solid #FE330A"
    designImg.style.background ="url(https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d0_Project.webp)"
    design.style.color = "#433C37"
    design.style.borderLeft = "3px solid #433C37"
    execution.style.color = "#433C37"
    execution.style.borderLeft = "3px solid #433C37"
})
var execution = document.querySelector("#execution")
execution.addEventListener("click",function(){
    execution.style.color = "#EFEAE3"
    execution.style.borderLeft = "3px solid #FE330A"
    designImg.style.backgroundImage = "url(https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15cd_Execution-p-1080.jpg)"
    project.style.color = "#433C37"
    project.style.borderLeft = "3px solid #433C37"
    design.style.color = "#433C37"
    design.style.borderLeft = "3px solid #433C37"
})




var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var page4 = document.querySelector("#page4")
page4.addEventListener("mouseover",function(){
    cursor.style.display = "block" 
    cursor.innerHTML="< >"
 })
page4.addEventListener("mouseleave",function(){
     cursor.style.display = "none" 
 })
page4.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1
    })
})
page4.addEventListener("mouseenter",function(){
    console.log("click")
})


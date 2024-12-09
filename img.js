let img =document.querySelector("#mainbox")

let box =document.querySelector(".box1")

box.addEventListener("mouseenter",function (){

img.src='img1.png'

}

)



let box2=document.querySelector(".box2");

box2.addEventListener("mouseenter",function () {
    img.src="img2.png"
})


let box3 =document.querySelector(".box3")

box3.addEventListener("click",function(){

    img.src="img3.png"


})
let run1 =()=>{


let per1=document.querySelector("#per1")

for( let i=1; i<=10; i++) {
    per1.innerHTML=i;
i++;
}
console.log(i)
}


 let run11 =()=> {

let img1=document.querySelector("#img1")

img1.src="img2.png"

}


let run12 =()=> {

    let img1=document.querySelector("#img1")
    
    img1.src="img3.png"
    
    }
    
    
    let big=document.querySelector("#bigimg")

    let box1=document.querySelector("#box1")

    let box2=document.querySelector("#box2")

    let box3=document.querySelector("#box3")


box1.addEventListener("click",function(){

    let box1=document.querySelector("#box1")

    bigimg.src="img2.png"


})



box2.addEventListener("click",function(){

    let box2=document.querySelector("#box2")

    bigimg.src=`img4.png`


})
let run1 = ()=>{

let age = prompt("enter your age");

result = age>=18 ? "you are eligible " : "you are not eligible"

alert(result)

}

//---------------------------------------------------------------

let run2= ()=> {


    let course1 = confirm("course completed");
    let course2 = confirm("certificate completed");

    if ( course1 && course2){

        alert("your are cetified")
    }

    else {
        alert("your are not certified")

    }

    

}




let run3= ()=> {

    let price = prompt("enter price of item");


    let dis= confirm("you want discount");

    if ( dis){

        dis= (price-(price*0.10))

        alert(dis)
    }

    else {
        alert("no discount")

    }

    

}


let run4= ()=> {

    let marks = prompt("enter your marks");



    if ( marks>=33){


        alert("pass")
    }

    else {
        alert("fail")

    }

    

}


let run5= ()=> {

  
alert ("are you sure to delete");

let yes =confirm("yes")


    if ( yes){


        alert("deleted")
    }

    else {
        alert("cancelled")

    }

    

}



let run6= ()=> {

  
    let num = prompt ("enter number");
    
    
    
        if ( num>0){
    
    
            alert("positive")
        }
    
        else {
            alert("negative")
    
        }
    
        
    
    }


    
let run7= ()=> {

  
    let num = prompt ("enter number");
    
    
    
        if ( num%2==0){
    
    
            alert("even")
        }
    
        else {
            alert("odd")
    
        }
    
        
    
    }



    let run8= ()=> {

  
        let day = parseInt(prompt ("enter number btween number 1 to 7"));
        
        
        
         switch  (day) {
            case 1 : alert ("monday")

            case 2 : alert ("tuseday")


            case 3 : alert ("wedday")


            case 4 : alert ("thusday")


            case 5 : alert ("firday")


            case 6 : alert ("satday")

            case 7 : alert ("sunday")

         }
        
            
        
        }
    
        //====================================================================================

        let run9 =()=>{


            let text1 = document.querySelector("#text1")

            text1.style.backgroundColor="green"

            
        }

        
        let run10 =()=>{


            let text2 = document.querySelector("#text2")


            if (text2.style.display=="none") {

           text2.style.display="block" 

            }
            else {
                text2.style.display="none"
            }
        }


        let run11 =()=>{


            let text3 = document.querySelector("#text3")


            text3.innerHTML="i m a bad boy"

        }

        
let temp=0;

let inc =()=>{

  let  ince =document.querySelector("#text4")
ince.innerHTML=temp;
    temp++;


}

let dec =()=>{

let dece=document.querySelector("#text4")

dece.innerHTML=temp;
temp--;

}

//===========================================================================================================


let run12 = (a)=>{

    let text5=document.querySelector("#text5")
    
    text5.innerHTML=(`the squaare is ${a*a}`);

    
    }
    

    let run13 =(a,b)=>{

let text6=document.querySelector("#text6");

text6.innerHTML=(`the addition is ${a+b}`)



    }

    let run14 =(a,b)=>{

        let text7=document.querySelector("#text7");
        
if (a>b){
    text7.innerHTML=`the a is greater`

}    

else
        {
            text7.innerHTML=`the b is greater`

        }
        
            }


//================================================================================================================



let text8 =document.querySelector("#text8");

text8.addEventListener("click" , function(){

    alert("the btn is cliked")
})

//---------------------------------------------------------------------------

let text9=document.querySelector("#text9")
text9.addEventListener("dblclick", function(){

text9.innerHTML="my name is ankit";

})


//---------------------------------------------------------------------------

let text20 =document.querySelector("#text20")

text20.addEventListener("keydown",function(e){

    console.log(e.key)


})



//---------------------------------------------------------------------------


let run16 =()=>{

let text10 =document.querySelector("#imgg")

text10.src="img2.png"

}

let run17 =()=>{

    let text10 =document.querySelector("#imgg")
    
    text10.src="img1.png"

}



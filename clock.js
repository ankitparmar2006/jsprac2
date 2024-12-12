
let run =()=>{

let day=["sunday","monday","tuesday","wednessday","thusday","friday","saturday"]


let cdate=new Date ();

let tdate=day[cdate.getDay()];


console.log(tdate)


}
run ();








//===========================================================================================================



let run2=()=>{


let show =document.querySelector("#show")
let input =document.querySelector("#inp").value;

let date=new Date ();

let cdate=date.getFullYear();
input=`ur age is ${cdate-input}`


show.innerHTML=input


}




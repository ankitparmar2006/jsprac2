let store='';

let cal=(value)=>{

let show =document.querySelector("#show");

store=store+value

show.innerHTML= store;


}


let equal=()=>{

    let show =document.querySelector("#show");

    show.innerHTML= eval(store);

}


let del=()=>{

    let show =document.querySelector("#show");

store=store.slice(0,-1);
show.innerHTML= store;

}


let ac=()=>{

    let store="";



    let show =document.querySelector("#show");

show.innerHTML= store;

}

// const letsgo =()=>{

// para =`"this "is" string"`;   
//  console.log(para)
// }
// letsgo ();

let me = `                  my name Is "ankit"       aman `
let bruh = `                  my bruhhh       name is            "ayush"`

// console.log(me.concat(bruh))
//console.log(me.concat(bruh).length)

//console.log(me.slice())

//console.log(me.length)
//console.log(me.substring(1,13))

console.log(me.replace(/is/ig, "hello"))

console.log(me.toLocaleUpperCase())
console.log(me.toLocaleLowerCase())


console.log(bruh.trim())


let run =()=>{


    let a=44;
    let b=6;

    let p= ` the adition of a ${a} and b ${b} is ${a+b}`

    console.log(p)

}
run();


let run1 =()=>{




    
}


let run4 =(a)=> {

let pera=document.querySelector("#text1")

pera.innerHTML=`square ${a*a}`
}